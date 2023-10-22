"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect (() => {
        Crisp.configure("3fa1c241-2aa0-459c-85f3-2665446e0a07");
    },[]);

    return null;
}