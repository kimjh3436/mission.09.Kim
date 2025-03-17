import React from "react";
import TeamCard from "./TeamCard";

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

interface TeamListProps {
  teams: Team[];
}

const TeamList: React.FC<TeamListProps> = ({ teams }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", padding: "20px" }}>
      {teams.length > 0 ? (
        teams.map((team, index) => (
          <TeamCard key={index} school={team.school} mascot={team.name} location={`${team.city}, ${team.state}`} />
        ))
      ) : (
        <p>Loading teams...</p>
      )}
    </div>
  );
};

export default TeamList;
