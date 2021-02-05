import React, { useState } from "react";
import "./LotteryPage.css";
import { Link } from "react-router-dom";

export default function LotteryPage() {
  const [randomNames, setRandomNames] = useState([]);
  return (
    <div className="lotteryPage">
      <h2 className="title">LotteryPage</h2>
      <button
        onClick={() => {
          fetch("/get-winners")
            .then((response) => response.json())
            .then((data) => {
              setRandomNames(data.winners);
              console.log("Success:", data);

              console.log("Success:", data.winners);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }}
      >
        get random names
      </button>
      <div className="winners">
        {randomNames.map((name) => {
          return <h1 className="winner">{name}</h1>;
        })}
      </div>
      <Link className="button" to="/">
        click and go try your luck agin{" "}
      </Link>
    </div>
  );
}
