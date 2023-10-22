import { auth, authMiddleware } from "@clerk/nextjs";

import prismsdb from "@/lib/prismadb";
import { MAX_FREE_COUNTS } from "@/constants";
import prismadb from "@/lib/prismadb";

export const increeseApiLimit = async() =>{
    const {userId} = auth();
    if(!userId){
        return;
    }

    const userApiLimit = await prismsdb.userApiLimit.findUnique({
        where: {
            userId
        }
     } );

     if(userApiLimit){
        await prismsdb.userApiLimit.update({
            where:{userId:userId},
            data: {count: userApiLimit.count + 1},
        });
    }else{
        await prismsdb.userApiLimit.create({
            data:{userId:userId, count:1}
        });
     }
};

export const checkApiLimit = async() => {
    const { userId } =auth();
    
    if(!userId){
        return false;
    }

    const userApiLimit = await prismsdb.userApiLimit.findUnique({
        where:{
            userId: userId
        }
    });

    if(!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS){
        return true;
        
    }else{
        return false;
    }
}

export const getApiLimitCount = async() => {
    const { userId } = auth();

    if(!userId){
        return 0
    }

    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where: {
            userId
        }
    });

    if(!userApiLimit){
        return 0
    }

    return userApiLimit.count;

}
