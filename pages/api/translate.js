import translate from 'google-translate-api-x';
import { supabase } from "../../lib/supabase";

// normalize function for DB matching
function normalize(s = "") {
  return s.trim().toLowerCase().replace(/\s+/g, ' ');
}

export default async function handler(req, res) {
  try {
    const { text, target } = req.query;
    if (!text || !target) return res.status(400).json({ translation: null, error: "Missing text or target" });

    const normalizedText = normalize(text);

    // Check approvedcorrection first
    const { data: approved, error } = await supabase
      .from("approvedcorrection")
      .select("user_translation")
      .eq("original", normalizedText)
      .single();

    if (approved?.user_translation) {
      return res.status(200).json({ translation: approved.user_translation });
    }

    // fallback to Google Translate
    const result = await translate(text, { to: target });
    const translation = result?.text ?? null;

    return res.status(200).json({ translation });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
