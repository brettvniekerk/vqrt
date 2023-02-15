import { RoutingWithoutElements } from "../src/Routing";
import fs from "fs";

const now = new Date().toISOString().slice(0, 10);
const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>`;

const urls = RoutingWithoutElements.map(
  (route, i) =>
    `
  <url>
    <loc>DOMAIN${route}</loc>
    <lastmod>${now}</lastmod>
    ${!i ? "<priority>1.0</priority>" : "<priority>0.5</priority>"}
  </url>
`
);

const xml = `${xmlHeader}
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join(
  ""
)}</urlset>
`;

fs.writeFileSync("./public/sitemap.xml", xml);
