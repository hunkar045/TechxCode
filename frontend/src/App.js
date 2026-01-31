import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    citizenName: "",
    category: "",
    description: ""
  });

  const submitGrievance = async () => {
    await fetch("http://localhost:5000/api/grievances/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Grievance Submitted");
  };

  return (
    <div className="container">
      <h1>CivicFlow</h1>
      <input placeholder="Name" onChange={e => setForm({...form, citizenName:e.target.value})}/>
      <input placeholder="Category" onChange={e => setForm({...form, category:e.target.value})}/>
      <textarea placeholder="Description" onChange={e => setForm({...form, description:e.target.value})}/>
      <button onClick={submitGrievance}>Submit</button>
    </div>
  );
}

export default App;
