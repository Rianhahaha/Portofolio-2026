"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Inisialisasi Lenis
        const lenis = new Lenis({
            duration: 1.2, // Durasi sedikit dipercepat dari 1.5 biar transisi antar section gak terlalu lambat
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential out easing
            smoothWheel: true,
        });

        // Sync frame rate browser
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Interceptor untuk menangani klik internal hash link (#) secara smooth
        const handleHashScroll = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Mencari element <a> terdekat, krn user bisa saja klik tag <p> atau <div> di dalam button
            const anchor = target.closest("a");

            if (anchor) {
                const href = anchor.getAttribute("href");

                // Deteksi apakah link mengarah ke internal hash ID di halaman yang sama
                if (href && href.startsWith("#")) {
                    e.preventDefault(); // Matikan fitur instant jump bawaan browser

                    // Ambil target element berdasarkan ID (misal: "#recent-artwork")
                    const targetElement = document.querySelector(href) as HTMLElement;

                    if (targetElement) {
                        // Serahkan eksekusi scroll ke engine Lenis agar dapet efek ngerem (easing)
                        lenis.scrollTo(targetElement, {
                            offset: 0, // Sesuaikan kalau ada fixed navbar di atas, pasang minus jika perlu offset
                            immediate: false,
                        });

                        // Tetap update URL bar tanpa memicu instant jump
                        window.history.pushState(null, "", href);
                    }
                }
            }
        };

        // Pasang event listener secara global di level document
        document.addEventListener("click", handleHashScroll);

        // Cleanup memory leak pas komponen unmount
        return () => {
            lenis.destroy();
            document.removeEventListener("click", handleHashScroll);
        };
    }, []);

    return <>{children}</>;
}