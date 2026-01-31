import "../styles/main.css";

export default function Register() {
  return (
    <div className="card">
      <h2>Register</h2>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
    </div>
  );
}
