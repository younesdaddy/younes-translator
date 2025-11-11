import { supabaseAdmin } from "../../lib/supabase";

function normalize(s = "") {
  return s.trim().toLowerCase().replace(/\s+/g, ' ');
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { original, user_translation } = req.body;
  if (!original || !user_translation) return res.status(400).json({ error: "Missing fields" });

  try {
    const normalizedOriginal = normalize(original);
    const normalizedTranslation = user_translation.trim();

    const { data, error } = await supabaseAdmin
      .from("pendingcorrection")
      .insert([{ original: normalizedOriginal, user_translation: normalizedTranslation }])
      .select();

    if (error) throw error;

    res.status(200).json({ success: true, row: data?.[0] ?? null });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
