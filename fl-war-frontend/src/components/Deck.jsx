import { useState, useEffect } from "react";
import axios from "axios";
import RaceCard from "./RaceCard";
import UnitCard from "./UnitCard";

const Deck = (props) => {
  const [viewMode, setViewMode] = useState("none");
  const [raceData, updateRaceData] = useState("");
  const [raceSelected, updateRaceSelected] = useState("")
const [unitList, updateUnitList] = useState("")

  const initiateRaceSelection = () => {
    setViewMode("Race selection");
  };

  const initiateUnitSelection = () => {
    setViewMode("Unit selection")
  }


  let toRender = <div> Deck</div>;
  let raceToRender
  let deckFrame
  let attackUnitListFrame
  let defenseUnitListFrame


  const updatePlayerRace = (e) => {
    console.log("Race selected is ", e.target.value)
    updateRaceSelected(e.target.value)
    initiateUnitSelection();
  }

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


  if (raceSelected){
    
  }
  else if(raceData){
    raceToRender = <div>
        {raceData.map((race) => (
            <RaceCard data={race} onClick={updatePlayerRace}/>
        ))}
    </div>
  }


  if (viewMode === "Race selection") {
    toRender = (
      <div>
        Select your race
        {raceToRender}
      </div>
    );
  } else if(viewMode === "Unit selection") {
    toRender=(
        <div>
            Select your unit
        </div>
    )
  } else if (!props.deckId) {
    toRender = (
      <div>
        <button onClick={initiateRaceSelection}>Create new deck</button>
      </div>
    );
  }
  return toRender;
};

export default Deck;
