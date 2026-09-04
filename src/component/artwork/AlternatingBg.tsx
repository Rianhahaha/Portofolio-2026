import React from "react";

interface AlternatingBgProps {
    /** Jumlah section/halaman kebawah */
    count?: number;
    /** Palette warna Neo-Brutalism yang akan di-looping */
    colors?: string[];
}

const DEFAULT_COLORS = [
    "bg-[#7C00FF]", // Purple
    "bg-[#0096FA]", // Cyan
    "bg-[#FF007F]", // Magenta
    "bg-[#FFBB03]", // Yellow
];

export default function AlternatingBg({
    count = 4,
    colors = DEFAULT_COLORS,
}: AlternatingBgProps) {
    return (
        <div className="absolute inset-0 mt-[10svh] size-full overflow-hidden pointer-events-none z-0 ">
            {Array.from({ length: count }).map((_, index) => {
                const isRight = index % 2 === 0;
                const colorClass = colors[index % colors.length];

                return (
                    <div
                        key={index}
                        className={`w-full h-[100svh] flex ${isRight ? "justify-end" : "justify-start"
                            }`}
                    >
                        <div
                            className={`
                w-[80%] h-full ${colorClass} 
                ${isRight
                                    ? "[transform:perspective(100svw)_rotateY(-25deg)] origin-right"
                                    : "[transform:perspective(100svw)_rotateY(25deg)] origin-left"
                                }
                transition-transform duration-300
              `}
                        />
                    </div>
                );
            })}
        </div>
    );
}