import { useState, useEffect } from "react";
import axios from "axios";
import RaceCard from "./RaceCard";
import UnitCard from "./UnitCard";

const Deck = (props) =>{
    const [viewMode, setViewMode] = useState("none");
    const [raceData, updateRaceData] = useState([]);

    const initiateDeckCreation = () => {
        setViewMode("Deck Creation")
    }
    let toRender = <div> Deck
    </div>

    const getAllRacesData = async () => {
        const racesData = await axios
      .get("http://localhost:3001/api/race/")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("this is race data",racesData);
    updateRaceData(racesData)
    }

    useEffect(() => {
        getAllRacesData();
    },[viewMode])

    if(viewMode==="Deck Creation"){
        console.log("Check data to send to race card",raceData)
        toRender = <div>
            Select your race
            <div>
                <RaceCard data={raceData.data[0]}/>
            </div>
            <div>
                <RaceCard data={raceData.data[0]}/>
            </div>
        </div>
    }   
    else if (!props.deckId){
        toRender = <div>
            <button onClick={initiateDeckCreation}>Create new deck</button>
        </div>
    }
    return toRender
}

export default Deck