"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface AnimatedModalProps {
    isOpen: boolean;
    isArtwork?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}

// Config diekstrak ke global scope file untuk efisiensi memori (Clean Code)
const defaultSpring = { type: "spring", damping: 25, stiffness: 300 } as any;
const artworkSpring = { type: "spring", stiffness: 400, damping: 15 } as any; // Agresi tinggi ala Persona

export default function AnimatedModal({
    isOpen,
    isArtwork = false, // Default false agar modal biasa tidak terlalu agresif
    onClose,
    children
}: AnimatedModalProps) {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
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
                    onClick={onClose} // Eksekusi onClose saat backdrop diklik
                >
                    <motion.div
                        className="size-full relative flex items-center justify-center p-5"
                        initial={isArtwork ? { scale: 0.9, y: 20, rotate: '-3deg' } : { scale: 0.9, y: 20 }}
                        animate={isArtwork ? { scale: 1, y: 0, rotate: '0deg' } : { scale: 1, y: 0 }}
                        exit={isArtwork ? { scale: 0.9, y: 20, rotate: '-3deg' } : { scale: 0.9, y: 20 }}
                        // Conditional rendering untuk transition
                        transition={isArtwork ? artworkSpring : defaultSpring}
                        onClick={(e) => e.stopPropagation()} // Mencegah event bubbling ke backdrop
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}