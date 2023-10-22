import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { UserButton } from '@clerk/nextjs';
import MobileSlidebar from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
const Navbar = () =>{
   // const apiLimitCount = await getApiLimitCount();
return (
<div className="flex items-center p-4">
{/* Toggle button */}
{/* <Button variant="ghost" size="icon"
className="md:hidden">
<Menu/>
</Button> */}
<MobileSlidebar apiLimitCount={5}/>
<div className="flex w-full justify-end">
<UserButton afterSignOutUrl='/'/>
</div>
</div>
);
}
export default Navbar;