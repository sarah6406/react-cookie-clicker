import { useState, useEffect } from "react";
import "./container.css";
import Buttons from "./Buttons.jsx";


export default function Container() {
  const [seeds, setSeeds] = useState(0);
  const [seedsPerSec, setSeedsPerSec] = useState(1);

  useEffect(() => {
    // a timer to be created when the page loads to increase seeds by seedsPerSec every second
    const interval = setInterval(() => {
      addOneSeed();
    }, 1000 / seedsPerSec); // why am i dividing by seedsPerSec?
    // optional function to clean up my timer when I rerun the useEffect????
    return () => {
      clearInterval(interval);
    };
  }, [seedsPerSec]); // tells useEffect what it should be listening to in order to run the code (am I understanding that right? why is console.log causing an error?)

  function addOneSeed() {
    setSeeds((currentSeeds) => {
      return currentSeeds + 1;
    });
  }
  //generic function for all upgrades
  function buyUpgrade(cost, increment) {
    if (cost <= seeds) {
      setSeedsPerSec(seedsPerSec + increment);
      setSeeds((currentSeeds) => {
        return currentSeeds - cost;
      });
    } else {
      alert("You do not have enough seeds!");
    }
  }

  return (
    <div id="container">
      <h1>Seed Sower</h1>
      <h4>
        <em>Tap the packet!</em>
      </h4>

      <img
        className="shake"
        onClick={addOneSeed}
        src="/seed-packet.png"
        alt="seed packet"
      />

      {/* THIS IS WORKING CODE DO NOT DELETE*/}

      <p>You have {seeds} seeds.</p>
      <p>Collecting {seedsPerSec} seeds per second.</p>
      

      <Buttons buyUpgrade={buyUpgrade}/>
      
      <p>Lovingly made... </p>
    </div>
  );
}
