// Erzeugt Favicon, App-Icons (H-Marke) und das Open-Graph-Vorschaubanner.
// Aufruf: npm run icons   (benötigt sharp; läuft im postinstall/prebuild)
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");
const assets = join(pub, "assets");

const NAVY = "#001031";
const NAVY2 = "#062046";
const BLUE = "#0d76c7";
const ICE = "#9fc3e9";

const hMark = readFileSync(join(assets, "mark-h-white.png"));
const logoWhite = readFileSync(join(assets, "logo-white.png"));

// ---------- App-/Favicon-Icon: Navy-Quadrat mit H-Marke ----------
function iconBg(size) {
  const r = Math.round(size * 0.2);
  return Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${NAVY2}"/>
          <stop offset="0.6" stop-color="${NAVY}"/>
          <stop offset="1" stop-color="#00081f"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="42%" r="60%">
          <stop offset="0" stop-color="${BLUE}" stop-opacity="0.45"/>
          <stop offset="0.75" stop-color="${BLUE}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="${r}" ry="${r}" fill="url(#g)"/>
      <rect width="${size}" height="${size}" rx="${r}" ry="${r}" fill="url(#glow)"/>
    </svg>`);
}

async function makeIcon(size, outName) {
  const bg = await sharp(iconBg(size)).png().toBuffer();
  // H-Marke proportional einpassen (Höhe ~62% der Iconfläche)
  const hHeight = Math.round(size * 0.62);
  const hWidth = Math.round(hHeight * (380 / 764));
  const h = await sharp(hMark).resize({ height: hHeight }).png().toBuffer();
  const out = await sharp(bg)
    .composite([{ input: h, left: Math.round((size - hWidth) / 2), top: Math.round((size - hHeight) / 2) }])
    .png()
    .toBuffer();
  writeFileSync(join(pub, outName), out);
  return out;
}

// ICO-Container um ein PNG legen (ein 48x48-Eintrag, browserweit kompatibel)
function pngToIco(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // count
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8); // size of data
  entry.writeUInt32LE(6 + 16, 12); // offset
  return Buffer.concat([header, entry, png]);
}

// ---------- OG-Vorschaubanner 1200x630 ----------
function ogSvg() {
  return Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${NAVY2}"/>
        <stop offset="0.55" stop-color="${NAVY}"/>
        <stop offset="1" stop-color="#00081f"/>
      </linearGradient>
      <pattern id="grid" width="78" height="78" patternUnits="userSpaceOnUse">
        <path d="M78 0 L0 0 0 78" fill="none" stroke="${ICE}" stroke-opacity="0.10" stroke-width="1"/>
      </pattern>
      <radialGradient id="rg" cx="78%" cy="42%" r="55%">
        <stop offset="0" stop-color="${BLUE}" stop-opacity="0.40"/>
        <stop offset="0.8" stop-color="${BLUE}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <rect width="1200" height="630" fill="url(#rg)"/>

    <!-- Kicker -->
    <rect x="80" y="150" width="16" height="16" fill="${BLUE}"/>
    <text x="112" y="164" font-family="'IBM Plex Mono', monospace" font-size="22" letter-spacing="4"
          fill="${ICE}" font-weight="500">HUBERT HEINZE GMBH · GLASFACHGROSSHANDEL</text>

    <!-- Headline -->
    <text x="78" y="290" font-family="'Space Grotesk','Helvetica Neue',Arial,sans-serif" font-size="78"
          font-weight="700" fill="#ffffff" letter-spacing="-1.5">Glas am Bau &amp;</text>
    <text x="78" y="378" font-family="'Space Grotesk','Helvetica Neue',Arial,sans-serif" font-size="78"
          font-weight="700" fill="#ffffff" letter-spacing="-1.5">in der Industrie.</text>

    <!-- Sub -->
    <text x="80" y="450" font-family="'IBM Plex Sans','Helvetica Neue',Arial,sans-serif" font-size="29"
          fill="#ffffff" fill-opacity="0.82">Beratung, Fachplanung und Veredelung aus einer Hand.</text>

    <!-- Footer line -->
    <line x1="80" y1="520" x2="640" y2="520" stroke="${ICE}" stroke-opacity="0.25" stroke-width="1"/>
    <text x="80" y="560" font-family="'IBM Plex Mono', monospace" font-size="22" letter-spacing="2"
          fill="${ICE}" fill-opacity="0.85">glashandel-heinze.de · FROHBURG · SACHSEN</text>
  </svg>`);
}

async function makeOg() {
  const base = await sharp(ogSvg()).png().toBuffer();
  // H-Marke groß auf der rechten Seite
  const hHeight = 520;
  const h = await sharp(hMark).resize({ height: hHeight }).png().toBuffer();
  const hMeta = await sharp(h).metadata();
  const out = await sharp(base)
    .composite([{ input: h, left: 1200 - (hMeta.width ?? 260) - 70, top: Math.round((630 - hHeight) / 2) }])
    .png()
    .toBuffer();
  writeFileSync(join(pub, "og-image.png"), out);
}

async function run() {
  await makeIcon(512, "icon.png");
  await makeIcon(192, "icon-192.png");
  await makeIcon(180, "apple-icon.png");
  const ico = await makeIcon(48, "_favicon-48.png");
  writeFileSync(join(pub, "favicon.ico"), pngToIco(ico, 48));
  await makeOg();
  // logoWhite nur referenziert, damit Asset-Existenz früh auffällt
  if (!logoWhite.length) throw new Error("logo-white.png fehlt");
  console.log("✓ Icons + OG-Banner erzeugt");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
