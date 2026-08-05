'use client'
import React, { useState } from 'react'
interface MenuItem {
    id: number;
    label: string;
    href: string;
    accentColor: string; // Custom color triggered on hover
}

export default function ArtworsMenu() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const menuItems: MenuItem[] = [
        { id: 1, label: "MY PIXIV", href: "#", accentColor: "#0096FA" },
        { id: 2, label: "GALLERY", href: "#recent-artwork", accentColor: "#FFBB03" },
        { id: 3, label: "COMMISSIONS", href: "#", accentColor: "#00FF66" },
        { id: 4, label: "ABOUT ME", href: "#", accentColor: "#FF007F" },
    ];
    return (
        <div>ArtworsMenu</div>
    )
}
