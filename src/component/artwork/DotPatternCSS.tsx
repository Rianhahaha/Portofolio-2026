// Contoh penggunaan langsung via Tailwind Arbitrary Values
export default function DotPatternCSS() {
    return (
        <div
            className="w-full h-screen "
            style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255, 1) 10px, transparent 10px)',
                backgroundSize: '50px 50px', // Ini untuk mengatur gap/jarak antar dot
            }}
        />
    );
}