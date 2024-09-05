import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, get } from "firebase/database";
import app from "../firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";

const UpdateWrite = () => {
  const navigate = useNavigate();
  const { firebaseId } = useParams();

  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");

  const overwriteData = async () => {
    const db = getDatabase(app);
    const docRef = ref(db, "nature/fruits/" + firebaseId);
    try {
      await set(docRef, {
        fruitName: inputValue1,
        fruitDefinition: inputValue2,
      });
      alert("Data updated successfully");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // oke ini adalah percobaan

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "nature/fruits/" + firebaseId);
      try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const targetObject = snapshot.val();
          setInputValue1(targetObject.fruitName);
          setInputValue2(targetObject.fruitDefinition);
        } else {
          alert("Data not found");
        }
      } catch (error) {
        alert("Error fetching data: " + error.message);
      }
    };
    fetchData();
  }, [firebaseId]);

  return (
    <div>
      <h1>Update Write</h1>
      <input
        type="text"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <input
        type="text"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <br />
      <button onClick={overwriteData}>Update</button>
      <br />
      <button className="button1" onClick={() => navigate("/updateread")}>
        Go Update Read
      </button>
      <button className="button1" onClick={() => navigate("/read")}>
        Go Read Page
      </button>
    </div>
  );
};

export default UpdateWrite;
