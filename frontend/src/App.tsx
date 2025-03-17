import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TeamList from "./components/TeamList";

// Define the structure of a Team object
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function App() {
    // State to store the list of teams
  const [teams, setTeams] = useState<Team[]>([]);

   // Fetch team data from the JSON file when the component mounts
  useEffect(() => {
    fetch("/Teams.json") 
      .then((response) => response.json())
      .then((data) => setTeams(data.teams)) // Set the fetched teams in state
      .catch((error) => console.error("Error loading teams:", error));
  }, []);

  return (
    <div>
      <Header />
      <TeamList teams={teams} />
    </div>
  );
}

export default App;
