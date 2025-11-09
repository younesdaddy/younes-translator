import { useEffect, useState } from "react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [pending, setPending] = useState([]);

  // Password check
  const checkPassword = () => {
    if (password === "Younesgdom") { // <-- Change this to your desired password
      setAuthorized(true);
    } else {
      alert("Wrong password!");
    }
  };

  // Fetch pending corrections
  const fetchPending = async () => {
    const res = await fetch("/api/getPendingCorrections");
    const data = await res.json();
    setPending(data || []);
  };

  useEffect(() => {
    if (authorized) fetchPending();
  }, [authorized]);

  const approve = async (item) => {
    await fetch("/api/approveCorrection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    fetchPending();
  };

  const reject = async (item) => {
    await fetch("/api/rejectCorrection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    fetchPending();
  };

  // If not authorized, show password input
  if (!authorized) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f0f4f8",
        fontFamily: "'Poppins', sans-serif",
        color: "#333"
      }}>
        <h2 style={{ marginBottom: 20 }}>Enter Admin Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{
            padding: "10px 15px",
            fontSize: 16,
            borderRadius: 8,
            border: "1px solid #ccc",
            width: 250,
            marginBottom: 15
          }}
          onKeyDown={(e) => { if (e.key === "Enter") checkPassword(); }}
        />
        <button
          onClick={checkPassword}
          style={{
            padding: "10px 20px",
            borderRadius: 8,
            border: "none",
            backgroundColor: "#4f46e5",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Enter
        </button>
      </div>
    );
  }

  // Admin panel
  return (
    <div style={{ padding: 30, fontFamily: "'Poppins', sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <h1 style={{ color: "#4f46e5", marginBottom: 20 }}>Pending Corrections</h1>
      {pending.length === 0 && <p style={{ color: "#555" }}>No pending corrections</p>}
      {pending.map((c, i) => (
        <div key={i} style={{
          marginBottom: 15,
          border: "1px solid #e5e7eb",
          borderRadius: 8,
          padding: 15,
          backgroundColor: "#fff",
          boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
        }}>
          <p><strong>Original:</strong> {c.original}</p>
          <p><strong>Correction:</strong> {c.user_translation}</p>
          <button onClick={() => approve(c)} style={{
            marginRight: 10,
            padding: "5px 10px",
            borderRadius: 5,
            border: "none",
            backgroundColor: "#10b981",
            color: "#fff",
            cursor: "pointer"
          }}>Approve</button>
          <button onClick={() => reject(c)} style={{
            padding: "5px 10px",
            borderRadius: 5,
            border: "none",
            backgroundColor: "#ef4444",
            color: "#fff",
            cursor: "pointer"
          }}>Reject</button>
        </div>
      ))}
    </div>
  );
}
