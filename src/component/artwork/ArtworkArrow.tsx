'use client';

import React from "react";

interface ArtworkArrowProps {
    direction: "left" | "right";
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export default function ArtworkArrow({
    direction,
    onClick,
    className = "",
    disabled = false
}: ArtworkArrowProps) {
    // Base style disesuaikan agar proporsional kotak (aspect-square) untuk icon
    const baseStyles = `
        outline-[.7svw] outline-black 
        w-[12svw] h-[12svw] md:w-[4svw] md:h-[4svw]
        flex justify-center items-center 
        z-[70] 
        transition-all duration-200 select-none
        group
        cursor-pointer
        card-button
        ${disabled ? "opacity-50 pointer-events-none grayscale" : "active:scale-[0.95]"}
    `;

    const combinedStyles = `${baseStyles} ${className}`.trim();

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={combinedStyles}
        >
            <div className="relative size-full overflow-hidden flex justify-center items-center">
                {/* SVG Arrow - Otomatis ke-flip kalau direction-nya 'left' */}
                <svg
                    width="50%"
                    height="50%"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`z-50 transition-transform duration-200 
                        ${direction === "left" ? "rotate-180" : ""}
                        group-hover:translate-x-[${direction === 'left' ? '-10%' : '10%'}]
                    `}
                >
                    <path
                        d="M21.2268 7.0752L35.378 21.2264M35.378 21.2264H7.07568M35.378 21.2264V49.5287M49.5292 35.3775L35.378 49.5287M35.378 49.5287H7.07568M35.378 49.5287V21.2264"
                        stroke="white"
                        strokeWidth="5"
                        strokeLinecap="round"
                    />
                </svg>

                {/* Dot Pattern Background */}
                <img
                    className={`absolute -z-10 bottom-0 size-full fill-white pointer-events-none transition-all duration-300 object-cover
                        ${direction === 'right' ? 'right-0 group-hover:right-[-2svh]' : 'left-0 group-hover:left-[-2svh]'}
                    `}
                    src="/artwork/dot-pattern-black.svg"
                    alt=""
                />
            </div>
        </button>
    );
}