import { useNavigate } from "react-router-dom";
import { FaQuestionCircle, FaHeadset } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Tech Support</h1>
      <p>This is my first React website</p>

      <div className="card-container">
        <div className="card" onClick={() => navigate("/faq")}>
          <FaQuestionCircle size={40} color="#3498db" />
          <h3>FAQ</h3>
          <p>Find answers to common questions</p>
        </div>

        <div className="card" onClick={() => navigate("/support")}>
          <FaHeadset size={40} color="#e67e22" />
          <h3>Support</h3>
          <p>Raise a ticket for help</p>
        </div>
      </div>
    </div>
  );
}

export default Home;