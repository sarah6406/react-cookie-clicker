import { useState, useEffect } from "react";
import "./app.css";
export default function App() {
  const [cookies, setCookies] = useState(0);

  const [cookiesPerSec, setCookiesPerSec] = useState(1);

  useEffect(() => {
    // a timer to be created when the page loads to increase cookies by cps every second
    const myInterval = setInterval(() => {
      increaseCookiesByOne();
    }, 1000 / cookiesPerSec);

    // function to clean up my timer when I rerun the useEffect
    return () => {
      clearInterval(myInterval);
    };
  }, [cookiesPerSec]);

  function increaseCookiesByOne() {
    console.log("cookie clicker clicked!");
    setCookies((currentCookies) => {
      return currentCookies + 1;
    });
  }

  function buyUpgrade() {
    setCookiesPerSec(cookiesPerSec + 1);
  }

  function tenCookies() {
    setCookiesPerSec(cookiesPerSec + 10);
    setCookies((currentCookies) => {
      return currentCookies - 10;
    });
  }

  function hundredCookies() {
    setCookiesPerSec(cookiesPerSec + 100);
    setCookies((currentCookies) => {
      return currentCookies - 100;
    });
  }
  function thousandCookies() {
    setCookiesPerSec(cookiesPerSec + 1000);
    setCookies((currentCookies) => {
      return currentCookies - 1000;
    });
  }

  return (
    <div id="container">
      <h1>Cookie Clicker</h1>
      <button onClick={increaseCookiesByOne}>I am a cookie...</button>
      {/* <button onClick={buyUpgrade}>Get +1 cookies per second!</button> */}
      <button onClick={tenCookies}>Get +10 cookies per second!</button>
      <button onClick={hundredCookies}>Get +100 cookies per second!</button>
      <button onClick={thousandCookies}>Get +1000 cookies per second!</button>

      {/* image onclick... */}
      {/* <img onClick={}  src="" alt="" />  */}
      <p>I have {cookies} cookies.</p>
      <p>Collecting {cookiesPerSec} cookies per second.</p>
    </div>
  );
}
