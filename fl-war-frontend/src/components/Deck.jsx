import { useState, useEffect } from "react";
import axios from "axios";
import RaceCard from "./RaceCard";
import UnitCard from "./UnitCard";

const Deck = (props) => {
  const [viewMode, setViewMode] = useState("none");
  const [raceData, updateRaceData] = useState("");
  const [raceSelected, updateRaceSelected] = useState("")
const [attackUnitList, updateAttackUnitList] = useState("")
const [defenseUnitList, updateDefenseUnitList] = useState("")
const [deckForm, updateDeckForm] = useState({
    race_id: "",
    user_id: "",
    attack1_id: "",
    attack2_id: "",
    attack3_id: "",
    defense1_id: "",
    defense2_id: ""
})

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

  const unitSelect = (e) => {
    if (!deckForm.attack1_id){
        updateDeckForm({ ...deckForm, attack1_id: e.currentTarget.id})
    } else if (!deckForm.attack2_id){
        updateDeckForm({ ...deckForm, attack2_id: e.currentTarget.id})
    } else if (!deckForm.attack3_id){
        updateDeckForm({ ...deckForm, attack3_id: e.currentTarget.id})
    } else {
        // let player know they can only have 3 attack units
    }
  }

  const createDeck = (e) => {

  }

  const updatePlayerRace = (e) => {
    console.log("Race selected is ", e.target.value)
    updateRaceSelected(e.target.value)
    updateDeckForm({ ...deckForm, race_id: e.target.id, user_id: props.userId})
    initiateUnitSelection();
  }

  const getAllAttackUnitList = async () => {
    console.log("get all Attack Unit api called");
    const attackUnitsData = await axios
    .get(`http://localhost:3001/api/attackUnit/${raceSelected}`)
    .then((response) => {
        return response;
    })
    .then((response) => {
        updateAttackUnitList(response.data)
    })
    .catch((error) => {
        console.error(error)
    })
  }

  const getAllDefenseUnitList = async () => {
    console.log("get all Defense Unit api called");
    const defenseUnitsData = await axios
    .get(`http://localhost:3001/api/defenseUnit/${raceSelected}`)
    .then((response) => {
        return response;
    })
    .then((response) => {
        updateDefenseUnitList(response.data)
    })
    .catch((error) => {
        console.error(error)
    })
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
    if(raceSelected){
        getAllAttackUnitList()
        getAllDefenseUnitList()
    }
  }, [viewMode]);


  if (attackUnitList && defenseUnitList){
    attackUnitListFrame = (
        <div>
            {attackUnitList.map((attackUnit) => (
                <UnitCard key={attackUnit._id} data={attackUnit} onClick={unitSelect}/>
            ))}
        </div>
    )

    defenseUnitListFrame = (
        <div>
            {defenseUnitList.map((defenseUnit) => (
                <UnitCard key={defenseUnit._id} data={defenseUnit} onClick={unitSelect}/>
            ))}
        </div>
    )

    deckFrame = (
        <div>
            <button>Attack Unit 1</button>
            <button>Attack Unit 2</button>
            <button>Attack Unit 3</button>
            <button>Defense unit 1</button>
            <button>Defense unit 2</button>
        </div>
    )
  }
  else if(raceData){
    raceToRender = <div>
        {raceData.map((race) => (
            <RaceCard key={race._id} data={race} onClick={updatePlayerRace}/>
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
            {attackUnitListFrame}
            <br/>
            {defenseUnitListFrame}
            <br/>
            {deckFrame}
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
