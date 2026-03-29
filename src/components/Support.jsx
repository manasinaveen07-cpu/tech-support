import { useState } from "react";

function Support() {
  const [issue, setIssue] = useState("");

  return (
    <div>
      <h2>Raise a Support Ticket</h2>

      <input
        type="text"
        placeholder="Describe your issue"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
      />

      <br /><br />

      <button onClick={() => alert("Issue submitted: " + issue)}>
        Submit
      </button>
    </div>
  );
}

export default Support;