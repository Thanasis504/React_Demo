// Hackerboard.jsx
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ScoreChart from './ScoreChart';
import ScoreTable from './ScoreTable';
import GlitchEffect from './GlitchEffect';
import Navbar from './Navbar';

const socket = io("http://localhost:3000");

const Hackerboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetchScores();
    socket.on("scoreUpdated", fetchScores);
    return () => socket.off("scoreUpdated", fetchScores);
  }, []);

  const fetchScores = async () => {
    try {
      const response = await fetch("http://localhost:3000/scores");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setScores(data);
    } catch (error) {
      console.error("Error fetching scores:", error);
    }
  };

  return (
    <div className="container mt-5">
      
      <Navbar />
      <h1 className="text-center text-danger">HACKERBOARD</h1>
      <p className="text-center text-muted">Where the world gets ranked!</p>

      {/* ScoreChart Component */}
      <ScoreChart scores={scores} />

      {/* ScoreTable Component */}
      <ScoreTable scores={scores} />
    </div>
  );
};

export default Hackerboard;
