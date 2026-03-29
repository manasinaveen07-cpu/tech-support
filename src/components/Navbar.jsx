import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Tech Support</h2>

      <Link to="/">Home</Link> |{" "}
      <Link to="/faq">FAQ</Link> |{" "}
      <Link to="/support">Support</Link>

      <hr />
    </div>
  );
}

export default Navbar;