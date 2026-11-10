// Renders the link-preview covers (public/og/cover-pt.jpg and cover-en.jpg)
// from cover.html with headless Chrome, then compresses them to JPEG.
// WhatsApp skips heavy og:image files, so each cover must stay well under
// 300 KB; a PNG of the portrait would not.
//
//   node scripts/og-cover/render.mjs
//
// Needs Chrome or Edge (or CHROME_PATH pointing at one), network access for
// the Google Fonts the template loads, and sharp, which ships with Next.

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;
const LOCALES = ["pt", "en"];

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = join(here, "..", "..", "public");

const chrome = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].find((path) => path && existsSync(path));

if (!chrome) {
  throw new Error("Chrome or Edge not found. Set CHROME_PATH.");
}

const scratch = mkdtempSync(join(tmpdir(), "og-cover-"));

try {
  for (const lang of LOCALES) {
    const shot = join(scratch, `${lang}.png`);
    const page = pathToFileURL(join(here, "cover.html"));
    page.search = `lang=${lang}`;

    execFileSync(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--no-first-run",
        `--user-data-dir=${join(scratch, "profile")}`,
        // Rendered at 2x and scaled down, for smoother type edges.
        "--force-device-scale-factor=2",
        `--window-size=${WIDTH},${HEIGHT}`,
        // Gives the web fonts and the portrait time to load.
        "--virtual-time-budget=8000",
        `--screenshot=${shot}`,
        page.href,
      ],
      { stdio: "ignore" },
    );

    const out = join(publicDir, "og", `cover-${lang}.jpg`);
    await sharp(shot)
      .resize(WIDTH, HEIGHT, { kernel: "lanczos3" })
      // 4:4:4 keeps the cyan type from bleeding.
      .jpeg({ quality: 84, mozjpeg: true, chromaSubsampling: "4:4:4" })
      .toFile(out);

    console.log(`${out}  ${Math.round(statSync(out).size / 1024)} KB`);
  }
} finally {
  rmSync(scratch, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
}
