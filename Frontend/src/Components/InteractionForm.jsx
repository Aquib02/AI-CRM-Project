import { useState } from "react";
import "./InteractionForm.css";

function InteractionForm() {

  const [hcpName, setHcpName] = useState("");
  const [interactionType, setInteractionType] = useState("");
  const [topicsDiscussed, setTopicsDiscussed] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [outcomes, setOutcomes] = useState("");
  const [followUp, setFollowUp] = useState("");

  // API call to FastAPI
  const handleSubmit = async () => {

    const formData = {
      hcp_name: hcpName,
      interaction_type: interactionType,
      topics_discussed: topicsDiscussed,
      sentiment: sentiment,
      outcomes: outcomes,
      follow_up_actions: followUp
    };

    const res = await fetch("http://127.0.0.1:8000/log-interaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    alert(data.message);
  };

  return (
    <div className="container">

      <h1 className="page-title">Log HCP Interaction</h1>

      <div className="card">

        <h2 className="section-title">Interaction Details</h2>

        <div className="grid">

          <div className="field">
            <label>HCP Name</label>
            <input
              type="text"
              placeholder="Search or select HCP..."
              value={hcpName}
              onChange={(e) => setHcpName(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Interaction Type</label>
            <select
              value={interactionType}
              onChange={(e) => setInteractionType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Meeting">Meeting</option>
              <option value="Call">Call</option>
              <option value="Email">Email</option>
            </select>
          </div>

          <div className="field">
            <label>Date</label>
            <input type="date" />
          </div>

          <div className="field">
            <label>Time</label>
            <input type="time" />
          </div>

        </div>

        <div className="field">
          <label>Attendees</label>
          <input type="text" placeholder="Enter names or search..." />
        </div>

        <div className="field">
          <label>Topics Discussed</label>
          <textarea
            placeholder="Enter key discussion points..."
            value={topicsDiscussed}
            onChange={(e) => setTopicsDiscussed(e.target.value)}
          ></textarea>
        </div>

        <button className="voice-btn">
          ✨ Summarize from Voice Note (Requires Consent)
        </button>

        <h3 className="sub-title">Materials Shared / Samples Distributed</h3>

        <div className="material-box">
          <div>
            <strong>Materials Shared</strong>
            <p>No materials added.</p>
          </div>

          <button className="btn">Search / Add</button>
        </div>

        <div className="material-box">
          <div>
            <strong>Samples Distributed</strong>
            <p>No samples added.</p>
          </div>

          <button className="btn">Add Sample</button>
        </div>

        <div className="field">
          <label>Observed/Inferred HCP Sentiment</label>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="sentiment"
                value="Positive"
                onChange={(e) => setSentiment(e.target.value)}
              />
              Positive
            </label>

            <label>
              <input
                type="radio"
                name="sentiment"
                value="Neutral"
                onChange={(e) => setSentiment(e.target.value)}
              />
              Neutral
            </label>

            <label>
              <input
                type="radio"
                name="sentiment"
                value="Negative"
                onChange={(e) => setSentiment(e.target.value)}
              />
              Negative
            </label>
          </div>
        </div>

        <div className="field">
          <label>Outcomes</label>
          <textarea
            placeholder="Key outcomes or agreements..."
            value={outcomes}
            onChange={(e) => setOutcomes(e.target.value)}
          ></textarea>
        </div>

        <div className="field">
          <label>Follow-up Actions</label>
          <textarea
            placeholder="Enter next steps or tasks..."
            value={followUp}
            onChange={(e) => setFollowUp(e.target.value)}
          ></textarea>
        </div>

        <div className="ai-box">
          <strong>AI Suggested Follow-ups:</strong>

          <ul>
            <li>Schedule follow-up meeting in 2 weeks</li>
            <li>Send OncoBoost Phase III PDF</li>
            <li>Add Dr. Sharma to advisory board invite list</li>
          </ul>
        </div>

        <button className="btn save-btn" onClick={handleSubmit}>
          Save Interaction
        </button>

      </div>

    </div>
  );
}

export default InteractionForm;