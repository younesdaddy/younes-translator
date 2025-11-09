import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const pendingPath = path.join(process.cwd(), "data", "pendingCorrections.json");
  const pending = fs.existsSync(pendingPath)
    ? JSON.parse(fs.readFileSync(pendingPath, "utf8"))
    : [];
  res.status(200).json(pending);
}
