import React from "react";

// Header Component: Displays the website title and introduction
const Header: React.FC = () => {
  return (
    <header style={{ textAlign: "center", padding: "20px", fontSize: "24px", fontWeight: "bold" }}>
      <h1>NCAA Basketball Teams</h1>
      <p>Explore teams from across the country!</p>
    </header>
  );
};

export default Header;
