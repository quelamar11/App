import React from "react";
import SpeechRecognitionComponent from "../components/SpeechRecognitionComponent";

export default function Home() {
  const handleCommand = (transcript) => {
    console.log("Recognized command:", transcript);
    // Add logic to map voice commands to app actions here
  };

  return (
    <div>
      <h1>Welcome to Kew's Voice Interaction</h1>
      <SpeechRecognitionComponent onCommand={handleCommand} />
    </div>
  );
}