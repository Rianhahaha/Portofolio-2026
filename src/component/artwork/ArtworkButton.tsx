import Link from "next/link";
import React from "react";

interface ArtworkButtonProps {
    type: "link" | "button";
    text?: string;
    href?: string;
    onClick?: () => void;
    noblank?: boolean;
    bgPosition?: "left" | "right";
    className?: string; // Untuk menampung koordinat absolute / layout positioning dari parent
    children?: React.ReactNode;

}

export default function ArtworkButton({
    type,
    text,
    href,
    onClick,
    noblank = false,
    className = "",
    bgPosition = "right",
    children

}: ArtworkButtonProps) {
    // Core design system tokens untuk Artwork Button
    const baseStyles = `
    outline-[.7svw] outline-black 
    w-fit h-fit 
     active:scale-[0.98]
    z-[70] 
    text-[8svw] md:text-[2.5svw]
    font-artwork font-bold text-white
    flex justify-center items-center 
    transition-all duration-200 select-none
    group
    tracking-[.2svw]
    pointer-events-default
    cursor-pointer
    card-button
  `;

    // Gabungkan base styles dengan extra positioning classes dari parent
    const combinedStyles = ` ${className} ${baseStyles}`.trim();

    const renderContent = () => (
        <div className="flex justify-center gap-5 text-shadow size-full  md:px-[3svw] md:py-[3svh] px-[8svw] py-[1svh]  relative overflow-hidden">
            {text && (

                <p className="z-50">{text}</p>
            )}
            {children && (
                <>
                    {children}
                </>
            )}

            <img className={`absolute -z-10  bottom-[0] size-full    fill-white pointer-events-none transition-all duration-300 object-cover
                    ${bgPosition === 'right' ? ' right-[0] group-hover:right-[-5svh] ' :
                    'left-[0] group-hover:left-[-5svh] '}
                
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