import { useState } from "react";
import "../styles/main.css";

export default function ComplaintForm() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const submitComplaint = async () => {
    await fetch("http://localhost:5000/api/complaints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category,
        description,
        location: "Auto-detected"
      })
    });
    alert("Complaint Registered Successfully");
  };

  return (
    <div className="container">
      <h1>📢 CivicPulse</h1>

      <select onChange={e => setCategory(e.target.value)}>
        <option>Select Complaint Type</option>
        <option>Garbage</option>
        <option>Water</option>
        <option>Road</option>
        <option>Electricity</option>
      </select>

      <textarea
        rows="4"
        placeholder="Describe the issue clearly..."
        onChange={e => setDescription(e.target.value)}
      />

      <button onClick={submitComplaint}>Submit Complaint</button>
    </div>
  );
}
