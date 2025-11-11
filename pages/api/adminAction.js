import { supabaseAdmin } from "../../lib/supabase";

function normalize(s = "") {
  return s.trim().toLowerCase().replace(/\s+/g, ' ');
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { password, action, item } = req.body;
  if (password !== "Younesgdom") return res.status(401).json({ error: "Unauthorized" });

  if (!action || !item) return res.status(400).json({ error: "Missing action or item" });

  try {
    const normalizedOriginal = normalize(item.original);
    const normalizedTranslation = item.user_translation.trim();

    if (action === "approve") {
      await supabaseAdmin
        .from("pendingcorrection")
        .delete()
        .match({ original: normalizedOriginal, user_translation: normalizedTranslation });

      await supabaseAdmin
        .from("approvedcorrection")
        .insert([{ original: normalizedOriginal, user_translation: normalizedTranslation }]);

      return res.status(200).json({ success: true });

    } else if (action === "reject") {
      await supabaseAdmin
        .from("pendingcorrection")
        .delete()
        .match({ original: normalizedOriginal, user_translation: normalizedTranslation });

      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: "Unknown action" });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
