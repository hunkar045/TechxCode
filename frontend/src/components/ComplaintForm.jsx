import "../styles/main.css";

export default function ComplaintForm() {
  return (
    <div className="card">
      <h2>Register Complaint</h2>
      <select>
        <option>Garbage</option>
        <option>Water</option>
        <option>Road</option>
        <option>Electricity</option>
      </select>
      <textarea placeholder="Describe issue" />
      <button>Submit</button>
    </div>
  );
}
