import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") 
    return res.status(405).json({ error: "Method not allowed" });

  const { original, user_translation } = req.body;
  if (!original || !user_translation) 
    return res.status(400).json({ error: "Missing data" });

  const pendingPath = path.join(process.cwd(), "data", "pendingCorrections.json");
  const approvedPath = path.join(process.cwd(), "data", "approvedCorrections.json");

  // Remove from pending
  let pending = fs.existsSync(pendingPath)
    ? JSON.parse(fs.readFileSync(pendingPath, "utf8"))
    : [];

  pending = pending.filter(p => !(p.original === original && p.user_translation === user_translation));
  fs.writeFileSync(pendingPath, JSON.stringify(pending, null, 2));

  // Add to approved with status
  let approved = fs.existsSync(approvedPath)
    ? JSON.parse(fs.readFileSync(approvedPath, "utf8"))
    : [];

  approved.push({ original, user_translation, status: "approved" });
  fs.writeFileSync(approvedPath, JSON.stringify(approved, null, 2));

  res.status(200).json({ success: true });
}
