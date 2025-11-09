import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { original, user_translation } = req.body;
  if (!original || !user_translation) return res.status(400).json({ error: "Missing data" });

  const pendingPath = path.join(process.cwd(), "data", "pendingCorrections.json");

  let pending = fs.existsSync(pendingPath)
    ? JSON.parse(fs.readFileSync(pendingPath, "utf8"))
    : [];

  pending = pending.filter(p => !(p.original === original && p.user_translation === user_translation));
  fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));

  res.status(200).json({ success: true });
}
