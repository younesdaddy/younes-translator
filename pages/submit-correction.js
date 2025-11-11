import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function SubmitCorrection() {
  const [original, setOriginal] = useState("");
  const [userTranslation, setUserTranslation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const { data, error } = await supabase
        .from("pendingcorrection")
        .insert([{ original, user_translation: userTranslation }]);

      if (error) throw error;

      setMessage("Submitted! ✅");
      setOriginal("");
      setUserTranslation("");
    } catch (err) {
      console.error(err);
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Submit a Correction</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <textarea
          placeholder="Original text"
          value={original}
          onChange={(e) => setOriginal(e.target.value)}
          required
          rows={4}
        />
        <textarea
          placeholder="Your correction"
          value={userTranslation}
          onChange={(e) => setUserTranslation(e.target.value)}
          required
          rows={4}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
