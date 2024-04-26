import { useState, useEffect } from "react";
import "./container.css";
import Button from "./Button.jsx";
import { Upgrades } from "./Upgrades.js";

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
    setSeedsPerSec(seedsPerSec + increment);
    setSeeds((currentSeeds) => {
      return currentSeeds - cost;
    });
  }

  return (
    <div id="container">
      <h1>Seed Sower</h1>
      <img
        className="shake"
        onClick={addOneSeed}
        src="./src/seed-packet.png"
        alt="seed packet"
      />

      {/* THIS IS WORKING CODE DO NOT DELETE*/}
      {/* {Upgrades.map((item) => {
    return (
      <button onClick={() => buyUpgrade(item.cost, item.increment)} key={item.id} id="upgradeButton">
        Upgrade {item.name}: get {item.increment} seeds per second!
      </button>
    );
  })} */}
      <button onClick={() => buyUpgrade(1, 1)}>Get +1 seeds!</button>

      <Button />

      <p>You have {seeds} seeds.</p>
      <p>Collecting {seedsPerSec} seeds per second.</p>

      <br />
      <br />
      <br />
      <p>Lovingly made... </p>
    </div>
  );
}
