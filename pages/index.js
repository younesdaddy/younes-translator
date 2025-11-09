import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [text, setText] = useState("");
  const [target, setTarget] = useState("ar");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCorrectionPanel, setShowCorrectionPanel] = useState(false);
  const [userCorrection, setUserCorrection] = useState("");

  const handleTranslate = async () => {
    if (!text.trim()) {
      setResult("Write something first.");
      return;
    }

    setLoading(true);
    setResult("");
    setShowCorrectionPanel(false);
    setUserCorrection("");

    try {
      const res = await fetch(`/api/translate?text=${encodeURIComponent(text)}&target=${target}`);
      const json = await res.json().catch(() => null);

      if (!res.ok) {
        const msg = json?.translation || json?.error || json?.message || "Server error while translating";
        setResult(`Error: ${msg}`);
        setLoading(false);
        return;
      }

      const translation =
        json?.translation ??
        json?.translated ??
        json?.translatedText ??
        json?.result ??
        json?.data?.translatedText ??
        null;

      if (translation) {
        setResult(translation);
      } else {
        setResult(json ? `Unexpected response shape: ${JSON.stringify(json)}` : "No translation returned");
      }
    } catch (err) {
      setResult("Error translating 💀 (Check your connection 👻)");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitCorrection = () => {
    if (!userCorrection.trim()) {
      alert("Nothing to submit!");
      return;
    }

    fetch("/api/submitCorrection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ original: text, user_translation: userCorrection })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          alert("Error submitting correction: " + data.error);
        } else {
          alert("Correction submitted!");
          setShowCorrectionPanel(false);
        }
      })
      .catch(() => alert("Network error!"));
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{
        fontFamily: "'Pacifico', serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F3F4F6",
        padding: 20
      }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img src="/logo.png" alt="Logo" style={{ width: "90px", marginBottom: "10px" }} />
          <h1 style={{ fontSize: "2.2rem", color: "#4F46E5", fontWeight: "700" }}>✒ Younes Translator 📖</h1>
        </div>

        <div style={{
          backgroundColor: "#ffffff",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "540px"
        }}>
          <textarea
            style={{
              width: "80%",
              maxWidth: "540px",
              margin: "0 auto 15px",
              height: "140px",
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid #6755cf",
              resize: "vertical",
              fontSize: "18px",
              fontFamily: "'Cinzel', serif",
              display: "block",
            }}
            placeholder="Enter text to translate..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleTranslate();
              }
            }}
          />

          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 15 }}>
            <select
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #6755cf",
                width: "170px",
                fontFamily: "'Pacifico', serif",
                fontSize: "16px"
              }}
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            >
              <option value="ar">Arabic 📗</option>
              <option value="fr">French 📘</option>
              <option value="en">English 📙</option>
            </select>

            <button
              onClick={handleTranslate}
              disabled={loading}
              style={{
                padding: "10px 18px",
                backgroundColor: loading ? "#9be59a" : "#22c93b",
                color: "#000",
                border: "none",
                borderRadius: "12px",
                cursor: loading ? "default" : "pointer",
                fontWeight: 600,
                fontSize: "16px",
                fontFamily: "'Cinzel', serif"
              }}
            >
              {loading ? "Translating…" : "Translate"}
            </button>

            <button
              onClick={() => { setText(""); setResult(""); setShowCorrectionPanel(false); setUserCorrection(""); }}
              style={{
                padding: "10px 14px",
                backgroundColor: "#f3f4f6",
                border: "1px solid #ddd",
                borderRadius: "12px",
                cursor: "pointer",
                fontFamily: "'Cinzel', serif",
                fontSize: "16px"
              }}
            >
              Clear
            </button>
          </div>

          <div style={{
            minHeight: "90px",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #6755cf",
            backgroundColor: "#e5e4f0",
            color: "#111827",
            whiteSpace: "pre-wrap",
            fontSize: "18px",
            fontFamily: "'Cinzel', serif"
          }}>
            {result || <span style={{ color: "#6b7280" }}>Translation will appear here</span>}
          </div>

          {result && (
            <button
              onClick={() => { setUserCorrection(result); setShowCorrectionPanel(!showCorrectionPanel); }}
              style={{
                marginTop: "10px",
                padding: "9px 12px",
                borderRadius: "15px",
                backgroundColor: "#9bc7c7",
                border: "1px solid #6755cf",
                cursor: "pointer",
                fontFamily: "'Cinzel', serif",
                fontSize: "15px",
                fontWeight: "700"   // bolded button text
              }}
            >
              Submit Correction ?
            </button>
          )}

          {showCorrectionPanel && (
            <div style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              backgroundColor: "#fff",
              width: "100%",
              maxWidth: "400px"
            }}>
              <textarea
                style={{
                  width: "100%",
                  height: "60px",
                  padding: "8px",
                  borderRadius: "8px",
                  border: "1px solid #888",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "14px",
                  resize: "vertical"
                }}
                value={userCorrection}
                onChange={(e) => setUserCorrection(e.target.value)}
              />
              <button
                onClick={handleSubmitCorrection}
                style={{
                  marginTop: "6px",
                  padding: "6px 10px",
                  borderRadius: "8px",
                  backgroundColor: "#22c93b",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "14px",
                  fontWeight: "700"
                }}
              >
                Submit
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
