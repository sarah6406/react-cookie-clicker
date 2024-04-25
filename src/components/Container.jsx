import { useState, useEffect } from "react";
import "./container.css";
import { Upgrades } from "./Upgrades";
import UpgradesArray from "./UpgradesArray";

export default function Container() {
  const [seeds, setSeeds] = useState(0);
  const [seedsPerSec, setSeedsPerSec] = useState(1);

  useEffect(() => {
    // a timer to be created when the page loads to increase cookies by cps every second
    const myInterval = setInterval(() => {
      upgrade();
    }, 1000 / seedsPerSec);

    // function to clean up my timer when I rerun the useEffect
    return () => {
      clearInterval(myInterval);
    };
  }, [seedsPerSec]);

  function upgrade() {
    setSeeds((currentSeeds) => {
      return currentSeeds + 1;
    });
  }

  function upgradeItems() {
    return (
      <div>
        {Upgrades.map((item) => {
          return (
            <button key={item.id} id="upgradeButton">
              Upgrade {item.name}: get {item.increment} seeds per second!
            </button>
          );
        })}
      </div>
    );
  }
  

  function oneSeed() {
    setSeedsPerSec(seedsPerSec + 1);
    setSeeds((currentSeeds) => {
      return currentSeeds - 1;
    });
    // buyUpgrade();
  }

//   function buyUpgrade({Upgrades}) {
//     setSeedsPerSec(seedsPerSec + {cost});
//   }



  function fiveSeeds() {
    setSeedsPerSec(seedsPerSec + 5);
    setSeeds((currentSeeds) => {
      return currentSeeds - 5;
    });
  }

  function tenSeeds() {
    setSeedsPerSec(seedsPerSec + 10);
    setSeeds((currentSeeds) => {
      return currentSeeds - 10;
    });
  }
  return (
    <div id="container">
      <h1>Seed Sower</h1>
      <img
        className="shake"
        onClick={oneSeed}
        src="./src/seed-packet.png"
        alt="seed packet"
      />
      <button onClick={upgradeItems}>Get +1 seeds per second!</button>
      {/* <button onClick={buyUpgrade}>Get +1 cookies per second!</button> */}
      <button onClick={fiveSeeds}>Get +5 seeds per second!</button>
      <button onClick={tenSeeds}>Get +10 seeds per second!</button>
      {/* <UpgradesArray /> */}

      {/* <button onClick={thousandCookies}>Get +1000 cookies per second!</button> */}

      {/* image onclick... */}
      {/* <img onClick={}  src="" alt="" />  */}
      <p>You have {seeds} seeds.</p>
      <p>Collecting {seedsPerSec} seeds per second.</p>
      <UpgradesArray />
      <br />
      <br />
      <br />
      <p>Lovingly made... </p>
    </div>
  );
}

