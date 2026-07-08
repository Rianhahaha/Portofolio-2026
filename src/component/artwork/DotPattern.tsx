// src/components/ui/DotPattern.tsx
import { useId } from "react";

interface DotPatternProps {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    cx?: number;
    cy?: number;
    cr?: number;
    className?: string;
}

export default function DotPattern({
    width = 20,
    height = 20,
    x = 0,
    y = 0,
    cx = 1,
    cy = 1,
    cr = 1,
    className,
}: DotPatternProps) {
    const id = useId();

    return (
        <svg
            aria-hidden="true"
            className={`absolute inset-0 fill-white ${className}`} // Warna diatur via fill lewat Tailwind
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                    patternTransform="rotate(0)"
                >
                    {/* Cukup satu tag circle/rect ini saja, tidak perlu ratusan path */}
                    <circle cx={cx} cy={cy} r={cr} />
                </pattern>
            </defs>
            {/* Mengisi seluruh area menggunakan pattern di atas */}
            <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
    );
}