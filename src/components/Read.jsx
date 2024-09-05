import React, { useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import app from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Read() {
  const navigate = useNavigate();
  let [fruitArray, setFruitArray] = useState([]);

  const fetchData = async () => {
    try {
      const db = getDatabase(app);
      const dbRef = ref(db, "nature/fruits");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setFruitArray(Object.values(snapshot.val()));
      } else {
        alert("No data available");
      }
    } catch (error) {
      alert("Error fetching data: " + error.message);
    }
  };

  return (
    <div>
    <h1>Read</h1>
      <button onClick={fetchData}>Display Data</button>
      <ul>
        {fruitArray.map((item, index) => (
          <li key={index}>
            {item.fruitName} : {item.fruitDefinition}
          </li>
        ))}
      </ul>
      <button className="button1" onClick={() => navigate("/")}>
        Go Homepage
      </button>
      <button className="button1" onClick={() => navigate("/updateread")}>
        Go UpdateRead Page
      </button>

    </div>
  );
}

export default Read;
