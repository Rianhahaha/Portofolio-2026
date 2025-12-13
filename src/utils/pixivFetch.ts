// app/api/scrape/route.ts
import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET() {
  const res = await fetch("https://example.com");
  const html = await res.text();
  const $ = cheerio.load(html);

  const title = $("title").text();
  console.log(NextResponse.json({ title }));

  return NextResponse.json({ title });
}
