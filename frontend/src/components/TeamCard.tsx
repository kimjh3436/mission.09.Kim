import React from "react";

// Props interface for TeamCard
interface TeamCardProps {
  school: string;
  mascot: string;
  location: string;
}
// TeamCard Component: Displays individual team details
const TeamCard: React.FC<TeamCardProps> = ({ school, mascot, location }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      textAlign: "center"
    }}>
      <h2>{school}</h2>
      <p><strong>Mascot:</strong> {mascot}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default TeamCard;
