"use client";
import { motion, useAnimation } from "framer-motion";
import LightMidle from "./LighMidle";
import LightBottom from "./LightBottom";
import Image from "next/image";
import { useEffect } from "react";
export default function DashboardComponent() {
    const controls = useAnimation();

    useEffect(() => {
        const playAnimation = () => {
            controls.set({ opacity: 0, y: 30 });
            controls.start({ opacity: 1, y: 0 });
        };

        playAnimation(); // Run on mount

        // Handle browser's Back/Forward cache (BFCache)
        window.addEventListener("pageshow", playAnimation);
        return () => window.removeEventListener("pageshow", playAnimation);
    }, [controls]);
    return (
        <div className="pointer-events-none">
            <div className="flex justify-center items-center absolute top-20 left-0 w-full h-[1000px] z-100">
                <LightMidle />
            </div>
            <motion.div
                animate={controls}
                transition={{ duration: 0.8 }}
                className="flex justify-center items-center absolute top-70 left-0 w-full h-[1000px] z-100">
                <Image src="/ui/dashboard.png" alt="Dashboard" width={1220} height={1080} className=" w-[70%] h-auto" draggable={false} />
            </motion.div>
            <div className="flex justify-center items-center absolute top-140 left-0 w-full h-[1000px] z-100">
                <LightBottom />
            </div>
        </div>
    )
}