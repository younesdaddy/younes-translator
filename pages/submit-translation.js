// pages/submit-translation.js
import { useState } from "react";

export default function SubmitTranslationPage() {
  const [original, setOriginal] = useState("");
  const [userTranslation, setUserTranslation] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const res = await fetch("/api/submitTranslation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          original,
          user_translation: userTranslation
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Server error");

      setMessage("Submitted ✔");
      setOriginal("");
      setUserTranslation("");
    } catch (err) {
      console.error(err);
      setMessage("Error: " + err.message);
    }
  }

  return (
    <div style={{ padding: 20, maxWidth: 800 }}>
      <h1>Submit a Translation</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <textarea
          placeholder="Original text"
          value={original}
          onChange={(e) => setOriginal(e.target.value)}
          required
          rows={4}
        />
        <textarea
          placeholder="Your translation"
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
