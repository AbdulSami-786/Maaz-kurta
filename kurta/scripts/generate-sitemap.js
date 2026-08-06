// Regenerates public/sitemap.xml from src/Data.json so every product gets an
// indexable URL automatically — runs before each build (see package.json).
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const SITE_URL = "https://mdfashion.online";

const slugify = (str = "") =>
  str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const data = JSON.parse(readFileSync(join(root, "src/Data.json"), "utf8"));

const staticUrls = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/kids-kurta", priority: "0.9", changefreq: "daily" },
  { path: "/sherwani", priority: "0.9", changefreq: "weekly" },
  { path: "/new-arrivals", priority: "0.8", changefreq: "daily" },
  { path: "/sale", priority: "0.8", changefreq: "daily" },
  { path: "/about-us", priority: "0.5", changefreq: "monthly" },
  { path: "/faq", priority: "0.5", changefreq: "monthly" },
];

const productUrls = (data.products || []).map((p) => ({
  path: `/product/${slugify(p.name)}-${p.id}`,
  priority: "0.7",
  changefreq: "weekly",
}));

const urls = [...staticUrls, ...productUrls];
const today = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(root, "public/sitemap.xml"), xml);
console.log(`sitemap.xml written with ${urls.length} URLs`);
