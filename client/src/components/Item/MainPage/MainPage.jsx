import React, { useEffect, useState } from "react";
import "./MainPage.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
export default function MainPage() {
  let history = useHistory();
  const [nameToAdd, setNameToAdd] = useState("");
  const [names, setNames] = useState([]);
  return (
    <div className="mainPage">
      <div className="mainPage">
        <h1 className="welcome">welcome to Lottery Page</h1>

        <div className="title">
          <Link
            className="goTo"
            to="/lottery-page"
            style={{ display: names.length >= 5 ? "block" : "none" }}
            onClick={(e) => {
              const data = { namesToAdd: names };

              fetch("/add-names", {
                method: "POST", // or 'PUT',
                credentials: "include", // include, *same-origin, omit
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log("add Success:", data);
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
              history.push("/lottery-page");
            }}
          >
            Go To Lottery Page
          </Link>
        </div>
        <div className="addToLottery"></div>
        <input
          className="namesInput"
          type="text"
          value={nameToAdd}
          onChange={(e) => {
            setNameToAdd(e.target.value);
          }}
          placeholder="Add a name you want to add to the Lottery"
        />
        <button
          className="addButton"
          onClick={() => {
            let legalName = nameToAdd;
            legalName = legalName.trim();
            if (legalName) {
              console.log("asdas");
              setNames([...names, legalName]);
            }
          }}
        >
          add
        </button>
        <p style={{ fontSize: "10px", color: "red" }}>
          ** you have to add at least 5 names to go to the lottery page**{" "}
        </p>
        <br />
        {names.map((name) => {
          return <h3 className="user">{name}</h3>;
        })}
      </div>
    </div>
  );
}
