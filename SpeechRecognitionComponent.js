import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRecognitionComponent = ({ onCommand }) => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      onCommand(transcript); // Pass recognized text to a callback for further processing
    }
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => SpeechRecognition.stopListening();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Speech Recognition</h2>
      <p>{listening ? "Listening..." : "Click Start to speak"}</p>
      <button onClick={startListening}>Start</button>
      <button onClick={stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <div>
        <strong>Transcript:</strong> {transcript}
      </div>
    </div>
  );
};

export default SpeechRecognitionComponent;