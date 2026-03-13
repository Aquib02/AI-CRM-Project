import React from "react";
import InteractionForm from './Components/InteractionForm'
import ChatBox from './Components/ChatBox';
import './App.css'

function App() {
  return (
    <div className="main-layout">

      <div className="left-panel">
        <InteractionForm />
      </div>

      <div className="right-panel">
        <ChatBox />
      </div>

    </div>
  );
}

export default App;