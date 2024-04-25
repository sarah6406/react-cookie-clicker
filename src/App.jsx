import { useState, useEffect } from "react";

export default function App() {
  const [cookies, setCookies] = useState(0);

  const [cookiesPerSec, setCookiesPerSec] = useState(1);

  useEffect(() => {
    // a timer to be created when the page loads to increase cookies by cps every second
    const myInterval = setInterval(() => {
      increaseCookies();
    }, 1000);
    // function to clean up my timer when I rerun the useEffect
    return clearInterval(myInterval);
  }, []);

  function increaseCookies() {
    setCookies((currentCookies) => currentCookies + 1);
  }
  return (
    <div>
      <h1>Cookie Clicker</h1>
      <button onClick={increaseCookies}>I am a cookie...</button>
      {/* image onclick... */}
      {/* <img onClick={}  src="" alt="" />  */}
      <p>I have {cookies} cookies.</p>
    </div>
  );
}
