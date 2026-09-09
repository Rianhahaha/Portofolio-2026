"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface AnimatedModalProps {
    isOpen: boolean;
    onClose?: () => void; // Opsional: kalau lu mau modal ketutup pas user klik area luar
    children: React.ReactNode;
}

export default function AnimatedModal({ isOpen, onClose, children }: AnimatedModalProps) {

    // Logic lock body scroll pindah ke sini. DRY principle!
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        // Cleanup saat komponen unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="bg-black/50 backdrop-blur-lg size-full fixed inset-0 z-[10000]"
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    transition={{ duration: 0.3 }}
                    data-lenis-prevent="true"
                >
                    <motion.div
                        className="size-full relative flex items-center justify-center p-5"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >

                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}