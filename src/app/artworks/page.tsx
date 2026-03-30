'use client';
import PagesLayout from "../../component/PagesLayout";
import { useEffect,useState } from "react";

interface Artwork {
  id: number;
  title: string;
  proxy: string;
}
export default function Artworks() {
const [artworks, setArtworks] = useState<Artwork[]>([]);
  // useEffect(() => {
  //   fetch("/api/pixiv")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArtworks(data);
  //       console.log("Artworks hasil scrape:", data);
  //     });
  // }, []);
  return (
    <PagesLayout>
      <section className="w-full min-h-[100vh] flex items-center justify-center overflow-hidden">
        <h1>Coming Soon :)</h1>
        {/* {artworks.map((artwork) => (
          <div key={artwork.id}>
            <h2>{artwork.title}</h2>
            <img src={artwork.proxy} alt={artwork.title} />
          </div>
        ))} */}
      </section>
      
    </PagesLayout>
  );
}
