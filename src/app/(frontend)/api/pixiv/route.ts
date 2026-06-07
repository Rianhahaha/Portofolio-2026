// app/api/pixiv/route.ts
import { NextRequest, NextResponse } from "next/server";

// --- ambil daftar ilustrasi ---
async function getPixivIllusts(userId: string, limit = 5) {
  const getProfile = await fetch(
    `https://www.pixiv.net/ajax/user/${userId}/profile/all`,
    { method: "GET" }
  );

  const res = await getProfile.json();
  const ids = Object.keys(res.body.illusts);

  const details = await Promise.all(
    ids.slice(0, limit).map(async (id) => {
      const illustRes = await fetch(`https://www.pixiv.net/ajax/illust/${id}`, {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Referer: "https://www.pixiv.net/",
        },
      });
      const illustData = await illustRes.json();

      return {
        id,
        title: illustData.body.title,
        // url asli (kena 403 kalau dipakai langsung)
        original: illustData.body.urls.original,
        // url proxy lewat API ini
        proxy: `/api/pixiv/image?url=${encodeURIComponent(
          illustData.body.urls.original
        )}`,
      };
    })
  );

  return details;
}

// --- endpoint utama: return list karya ---
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("user") || "67360022"; // default user
  const illusts = await getPixivIllusts(userId);
  return NextResponse.json(illusts);
}
