import "../styles/main.css";

export default function Login() {
  return (
    <div className="card">
      <h2>Citizen Login</h2>
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}
