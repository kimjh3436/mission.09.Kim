import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TeamList from "./components/TeamList";

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function App() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch("/Teams.json") // Adjust this path if necessary
      .then((response) => response.json())
      .then((data) => setTeams(data.teams)) // Ensure `data.teams` matches JSON structure
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
