import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOMAIN = process.argv[2];
const regex = new RegExp(/DOMAIN/gi);

const robots = fs.readFileSync(
  path.join(__dirname, "../dist/robots.txt"),
  "utf8"
);
const newRobots = robots.replace(regex, DOMAIN);

fs.writeFileSync(path.join(__dirname, "../dist/robots.txt"), newRobots);

const sitemap = fs.readFileSync(
  path.join(__dirname, "../dist/sitemap.xml"),
  "utf8"
);
const newSitemap = sitemap.replace(regex, DOMAIN);

fs.writeFileSync(path.join(__dirname, "../dist/sitemap.xml"), newSitemap);
