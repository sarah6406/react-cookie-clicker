import { useState, useEffect } from "react";
import "./app.css";


export default function App() {
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

  function oneSeeds() {
    setSeedsPerSec(seedsPerSec + 1);
    setSeeds((currentSeeds) => {
      return currentSeeds - 1;
    });
  }

  // function buyUpgrade() {
  //   setCookiesPerSec(cookiesPerSec + 1);
  // }
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

  // function thousandCookies() {
  //   setCookiesPerSec(cookiesPerSec + 1000);
  //   setCookies((currentCookies) => {
  //     return currentCookies - 1000;
  //   });
  // }
  return (
    <div id="container">
      <h1>Seed Sower</h1>
      <img className="shake" onClick={oneSeeds}src="./src/seed-packet.png" alt="seed packet" />
      <button onClick={oneSeeds}>Get +1 seeds per second!</button>
      {/* <button onClick={buyUpgrade}>Get +1 cookies per second!</button> */}
      <button onClick={fiveSeeds}>Get +5 seeds per second!</button>
      <button onClick={tenSeeds}>Get +10 seeds per second!</button>
      {/* <button onClick={thousandCookies}>Get +1000 cookies per second!</button> */}

      {/* image onclick... */}
      {/* <img onClick={}  src="" alt="" />  */}
      <p>I have {seeds} seeds.</p>
      <p>Collecting {seedsPerSec} seeds per second.</p>
    </div>
  );
}
