import { useState } from "react";
import data from "./Users.json";
import "./index.css";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["id", "title", "firstName", "lastName"];
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search User..."
        className="input-text"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="container">
        {data
          .filter((item) => {
            if (query == " ") {
              return item;
            } else if (
              keys.some((key) =>
                item[key].toLowerCase().includes(query.toLowerCase())
              )
            ) {
              return item;
            }
          })
          .map((item) => {
            return (
              <div className="first" key={item.id}>
                <img src={item.picture} alt="profile" />
                <div>
                  <p> {item.id}</p>

                  <p>
                    {`${item.title} 
                    ${item.firstName}
                    ${item.lastName}
                    `}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
