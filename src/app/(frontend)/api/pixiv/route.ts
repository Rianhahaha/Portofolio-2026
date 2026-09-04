// app/api/pixiv/route.ts
import { NextRequest, NextResponse } from "next/server";

// --- ambil daftar ilustrasi ---
async function getPixivIllusts(userId: string, limit: number) {
  const getProfile = await fetch(
    `https://www.pixiv.net/ajax/user/${userId}/profile/all`,
    { method: "GET" },
  );

  const res = await getProfile.json();
  const ids = Object.keys(res.body.illusts).sort(
    (a, b) => Number(b) - Number(a),
  );
  console.log("ids list: ", ids);

  const details = await Promise.all(
    ids.slice(0, limit).map(async (id) => {
      const illustRes = await fetch(`https://www.pixiv.net/ajax/illust/${id}`, {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Referer: "https://www.pixiv.net/",
        },
      });
      const illustData = await illustRes.json();
      function encodedURI(uri: string) {
        return `/api/pixiv/image?url=${encodeURIComponent(uri)}`;
      }
      return {
        id,
        title: illustData.body.title,
        // url asli (kena 403 kalau dipakai langsung)
        original: illustData.body.urls.original,
        uploadDate: illustData.body.uploadDate,

        // url proxy lewat API ini
        proxy: {
          // orginal: `/api/pixiv/image?url=${encodeURIComponent(
          //   illustData.body.urls.original,
          // )}`,
          orginal: encodedURI(illustData.body.urls.original),
          thumb: encodedURI(illustData.body.urls.thumb),
          regular: encodedURI(illustData.body.urls.regular),
          small: encodedURI(illustData.body.urls.small),
        },
      };
    }),
  );

  return details;
}

// --- endpoint utama: return list karya ---
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("user") || "67360022"; // default user
  const illusts = await getPixivIllusts(userId, 30);
  // console.log(illusts);
  return NextResponse.json(illusts);
}
