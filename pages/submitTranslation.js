// pages/api/submitTranslation.js
import { supabase } from "../lib/supabase"; // fixed path

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { original, user_translation } = req.body;
    if (!original || !user_translation) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const payload = {
      original,
      user_translation,
      status: "pending" // table default should already be 'pending' but we set here to be safe
    };

    const { data, error } = await supabase.from("translations").insert([payload]).select().single();

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, row: data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
