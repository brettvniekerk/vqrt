import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const RoutingFile = fs.readFileSync(
  path.join(__dirname, "../src/Routing.tsx"),
  "utf8"
);

const paths = RoutingFile.matchAll(/^\s*(path:\s).*/gm);

const relevantLines = [...paths].map(path => path[0]);

const GeneratedRoutes = relevantLines.map(line => {
  const beginningIndex = line.indexOf('"') + 1;
  const endingIndex = line.lastIndexOf('"');

  return line.slice(beginningIndex, endingIndex);
});

export default GeneratedRoutes;
