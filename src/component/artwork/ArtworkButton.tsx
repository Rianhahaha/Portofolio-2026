import Link from "next/link";
import React from "react";

interface ArtworkButtonProps {
    type: "link" | "button";
    text: string;
    href?: string;
    onClick?: () => void;
    noblank?: boolean;
    bgPosition?: "left" | "right";
    className?: string; // Untuk menampung koordinat absolute / layout positioning dari parent
}

export default function ArtworkButton({
    type,
    text,
    href,
    onClick,
    noblank = false,
    className = "",
    bgPosition = "right"
}: ArtworkButtonProps) {
    // Core design system tokens untuk Artwork Button
    const baseStyles = `
    
    border-[2svw] border-black 
    w-fit h-fit 
     active:scale-[0.98]
    z-[70] text-[10svw] font-artwork font-bold text-white
    flex justify-center items-center 
    transition-all duration-200 select-none
    group
    
  `;

    // Gabungkan base styles dengan extra positioning classes dari parent
    const combinedStyles = ` ${className} ${baseStyles}`.trim();

    const renderContent = () => (
        <div className="text-shadow size-full px-[6svw] py-[3svh]  relative overflow-hidden">
            <p className="z-50">{text}</p>

            <img className={`absolute -z-10  bottom-[-20svh] w-[50svh]    fill-white pointer-events-none transition-all duration-300
                    ${bgPosition === 'right' ? ' right-[-15svh] group-hover:right-[-20svh] rotate-[37deg]' :
                    'left-[-15svh] group-hover:left-[-20svh] rotate-[145deg]'}
                
                `}
                src="/artwork/dot-pattern-black.svg" alt="" />

        </div>
    );

    // Kondisional rendering berdasarkan tipe komponen yang diinginkan
    if (type === "link" && href) {
        return (
            <Link
                href={href}
                className={combinedStyles}
                target={noblank ? "_self" : "_blank"}
                rel={noblank ? undefined : "noopener noreferrer"}
            >
                {renderContent()}
            </Link>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={combinedStyles}
        >
            {renderContent()}
        </button>
    );
}