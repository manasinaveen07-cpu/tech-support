import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Tech Support 💻</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/support">Support</Link>
      </div>
    </nav>
  );
}