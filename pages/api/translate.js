import fs from "fs";
import path from "path";
import translate from "google-translate-api-x";

export default async function handler(req, res) {
  try {
    const { text, target } = req.query || {};
    if (!text || !target) {
      return res.status(400).json({ translation: null, error: "Missing text or target" });
    }

    const idiomsPath = path.join(process.cwd(), "data/idioms.json");
    const dictPath = path.join(process.cwd(), "data/dictionary.json");

    const idioms = JSON.parse(fs.readFileSync(idiomsPath, "utf8"));
    const dictionary = JSON.parse(fs.readFileSync(dictPath, "utf8"));

    const lowerText = text.toLowerCase();

    // 1️⃣ Check idioms first
    if (idioms[lowerText]) {
      return res.status(200).json({ translation: idioms[lowerText] });
    }

    // 2️⃣ Check dictionary
    if (dictionary[lowerText]) {
      return res.status(200).json({ translation: dictionary[lowerText] });
    }

    // 3️⃣ Fallback to Google Translate
    const result = await translate(String(text), { to: String(target) });
    const translated = result?.text ?? null;

    if (!translated) {
      return res.status(500).json({ translation: null, error: "No translation produced" });
    }

    return res.status(200).json({ translation: translated });
  } catch (err) {
    console.error("Translate API error:", err && (err.message ? err.message : err));
    return res.status(500).json({
      translation: null,
      error: "Translate failed: " + (err && err.message ? err.message : String(err))
    });
  }
}
