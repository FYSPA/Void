"use client";
import { motion, useAnimation } from "framer-motion";
import LightTop from "./LightTop";
import { useEffect } from "react";

export default function HeroComponent() {
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
        <div className="min-h-screen flex-col bg-void z-90 border border-white/30 ml-14 mr-14 rounded-xl flex relative overflow-hidden">
            <LightTop />
            <motion.div
                animate={controls}
                transition={{ duration: 0.8 }}
                className="justify-center items-center flex mt-10 flex-col text-center"
            >
                <div className="justify-center align-center flex mt-10 flex-col gap-0 text-center">
                    <h1
                        className="font-nico
                    leading-none
                    text-[200px] tracking-wider
                    bg-gradient-to-b from-white/90 via-white/20 to-transparent 
                    bg-clip-text text-transparent 
                    drop-shadow-[0_10px_20px_rgba(0,0,0,1)]
                    [text-shadow:0_0_1px_rgba(255,255,255,0.3)]
                    style-stroke
                ">
                        Void
                    </h1>
                    <span className="text-lg font-space text-white/50 text-center -mt-2 ">
                        Void, the new orchestrator for React Native,
                        <br />
                        the ultimate environment for modern developers.
                    </span>

                </div>
                <div className="justify-center items-center flex mt-10 flex-col text-center z-40">
                    <a
                        href="/login"
                        className="
                        w-52 h-11 flex justify-center items-center rounded-full
                        font-space text-white text-[14px] tracking-[0.2em] uppercase
                        bg-white/2 backdrop-blur-[0.03px]
                        border border-white/10
                        shadow-[inset_0_0_15px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.1)]
                        hover:bg-white/10 hover:border-white/2 transition-all duration-300
                        cursor-pointer
                    "
                    >
                        Get Started
                    </a>
                </div>
            </motion.div>
        </div >
    )
}