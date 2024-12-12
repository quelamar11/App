import { commandParser } from "../utils/CommandHandler";

const handleCommand = (transcript) => {
  const parsedCommand = commandParser(transcript);
  console.log("Parsed command:", parsedCommand);

  // Example: Trigger actions based on parsed command
  if (parsedCommand.action === "openApp") {
    console.log(`Opening ${parsedCommand.app}`);
  } else if (parsedCommand.action === "fetchWeather") {
    console.log("Fetching weather...");
  } else if (parsedCommand.action === "setReminder") {
    console.log(`Setting reminder with data: ${parsedCommand.data}`);
  } else {
    console.log("Command not recognized.");
  }
};