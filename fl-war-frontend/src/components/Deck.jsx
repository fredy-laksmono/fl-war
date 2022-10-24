import { useState, useEffect } from "react";
import axios from "axios";
import RaceCard from "./RaceCard";
import UnitCard from "./UnitCard";

const Deck = (props) => {
  const [viewMode, setViewMode] = useState("none");
  const [raceData, updateRaceData] = useState("");

  const initiateDeckCreation = () => {
    setViewMode("Deck Creation");
  };
  let toRender = <div> Deck</div>;
  let raceToRender



  const getAllRacesData = async () => {
    console.log("get all race api called");
    const racesData = await axios
      .get("http://localhost:3001/api/race/")
      .then((response) => {
        return response;
      })
      .then((response) => {
        updateRaceData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllRacesData();
  }, [viewMode]);


  if(raceData){
    raceToRender = <div>
        {raceData.map((race) => (
            <RaceCard data={race}/>
        ))}
    </div>
  }


  if (viewMode === "Deck Creation") {
    toRender = (
      <div>
        Select your race
        {raceToRender}
      </div>
    );
  } else if (!props.deckId) {
    toRender = (
      <div>
        <button onClick={initiateDeckCreation}>Create new deck</button>
      </div>
    );
  }
  return toRender;
};

export default Deck;
