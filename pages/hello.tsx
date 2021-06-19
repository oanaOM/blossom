import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";

const config: AxiosRequestConfig = {
  headers: { "Content-Type": "application/json" },
};

const Hello: React.FC = () => {
  const [plant, setPlant] = useState({ plant_name: "" });
  const [error, setError] = useState("");

  const addPlant = async () => {
    await axios
      .post("/.netlify/functions/add-plant", {
        plant_name: "parsley",
        user_id: "2",
      })
      .then((response) => setPlant(response.data.data.insert_plants_one))
      .catch((err) => setError(JSON.stringify(err, null, 2)));
  };
  return (
    <>
      <h1>Add a plant</h1>
      <button onClick={addPlant}>Add new plant</button>
      {plant.plant_name}
      {error && <h2>Ups, something went wrong {error}</h2>}
    </>
  );
};

export default Hello;
