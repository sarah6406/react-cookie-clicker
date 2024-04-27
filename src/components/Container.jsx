import { useState, useEffect } from "react";
import "./container.css";
import Buttons from "./Buttons.jsx";

export default function Container() {
  const [seeds, setSeeds] = useState(0)
    // parseInt(localStorage.getItem("seeds")) || 0);
  const [seedsPerSec, setSeedsPerSec] = useState(1
    // parseInt(localStorage.getItem("seedsPerSec") || 1)
  );

  // useEffect dependency to store seeds and seedsPerSec within local storage so values persist even on page refresh...
  // useEffect(() => {
  //   localStorage.setItem("seeds", seeds.toString());
  //   localStorage.setItem("seedsPerSec", seedsPerSec.toString());
  //   console.log(localStorage);
  // }, [seeds, seedsPerSec]);

  useEffect(() => {
    // a timer to be created when the page loads to increase seeds by seedsPerSec every second
    const interval = setInterval(() => {
      addOneSeed();
    }, 1000 / seedsPerSec); // why am i dividing by seedsPerSec?
    // optional function to clean up my timer when I rerun the useEffect????
    return () => {
      clearInterval(interval);
    };
  }, [seedsPerSec]); // tells useEffect what it should be listening to in order to run the code (am I understanding that right? )

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
      <p>
        <em>Tap the packet!</em>
      </p>

      <img
        className="shake"
        onClick={addOneSeed}
        src="/seed-packet.png"
        alt="seed packet"
      />

      <p>You have {seeds} seeds.</p>
      <p>Collecting {seedsPerSec} seeds per second.</p>

      <Buttons buyUpgrade={buyUpgrade} />

      <p>Lovingly made... </p>
    </div>
  );
}
