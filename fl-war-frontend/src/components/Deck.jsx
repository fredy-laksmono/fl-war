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
const [selectedUnitName, updateSelectedUnitName] = useState({
    attack1_name: "Attack Unit 1",
    attack2_name: "Attack Unit 2",
    attack3_name: "Attack Unit 3",
    defense1_name: "Defense Unit 1",
    defense2_name: "Defense Unit 2"
})

const [currentDeckId, updateCurrentDeckId] = useState("")
const [deckIdDisplay, updateDeckIdDisplay] = useState({
    race_id: "",
    attack1_id: "",
    attack2_id: "",
    attack3_id: "",
    defense1_id: "",
    defense2_id: ""
})
const [deckDisplay, updateDeckDisplay] = useState({
    race: "",
    attack1: "",
    attack2: "",
    attack3: "",
    defense1: "",
    defense2: ""
})

const [currentUser, updateCurrentUser] = useState("")
const [needReload, setNeedReload] = useState(true)

  const initiateRaceSelection = () => {
    setViewMode("Race selection");
  };

  const initiateUnitSelection = () => {
    setViewMode("Unit selection")
  }

  const initiateManageDeck = () => {
    setViewMode("Manage deck")
  }

  const initiateDeletedDeck = () => {
    setViewMode("Deleted deck")
  }


  let toRender = <div> Deck</div>;
  let raceToRender
  let deckFrame
  let attackUnitListFrame
  let defenseUnitListFrame
  let createDeckButton = <button type="button" id="createDeck" disabled>Create Deck</button>

  const getUserObject = async () => {
    const userObject = await axios
    .get(`http://localhost:3001/api/account/${props.userId}`)
    .then((response) => {
        if (response.data._id){
            updateCurrentUser(response.data)
        }
        return response
    })
    .catch((error) => {
        console.error(error)
    })
  }

  const getDeckData = async () => {
    console.log("Deck.jsx getDeckData function get api account called")
    const userData = await axios
    .get(`http://localhost:3001/api/account/${props.userId}`)
    .then((response) => {
        if(response.data.deck_id){
            console.log("this is response data deck id",response.data.deck_id)
            updateCurrentDeckId(response.data.deck_id)
        }
        return response;
    })
    .catch((error) => {
        console.error(error)
    })

    if(currentUser.deck_id && needReload){
        console.log("Deck.jsx getDeckData function get api deck called")
        const deckIdData = await axios
        .get(`http://localhost:3001/api/deck/${currentDeckId}`)
        .then((response) => {
            const data = response.data;
            updateDeckIdDisplay(
                {
                    race_id: data.race_id,
                    attack1_id: data.attack1_id,
                    attack2_id: data.attack2_id,
                    attack3_id: data.attack3_id,
                    defense1_id: data.defense1_id,
                    defense2_id: data.defense2_id
                }
            )
            return response;
        })
        .catch((error) => {
            console.error(error)
        })
    }

    if(deckIdDisplay.defense2_id && needReload){

        let raceData
        let attack1Data
        let attack2Data
        let attack3Data
        let defense1Data
        let defense2Data

        console.log("Deck.jsx line 119 get race api called")
        const raceDisplayData = await axios
        .get(`http://localhost:3001/api/race/${deckIdDisplay.race_id}`)
        .then((response) => {
            raceData=response.data
            return response
        })
        .catch((error) => {
            console.error(error)
        })

        const attack1DisplayData = await axios
        .get(`http://localhost:3001/api/attackUnit/find/${deckIdDisplay.attack1_id}`)
        .then((response) => {
            attack1Data=response.data
            return response
        })
        .catch((error) => {
            console.error(error)
        })

        const attack2DisplayData = await axios
        .get(`http://localhost:3001/api/attackUnit/find/${deckIdDisplay.attack2_id}`)
        .then((response) => {
            attack2Data=response.data
            return response
        })
        .catch((error) => {
            console.error(error)
        })

        const attack3DisplayData = await axios
        .get(`http://localhost:3001/api/attackUnit/find/${deckIdDisplay.attack3_id}`)
        .then((response) => {
            attack3Data=response.data
            return response
        })
        .catch((error) => {
            console.error(error)
        })

        const defense1DisplayData = await axios
        .get(`http://localhost:3001/api/defenseUnit/find/${deckIdDisplay.defense1_id}`)
        .then((response) => {
            defense1Data=response.data
            return response
        })
        .catch((error) => {
            console.error(error)
        })

        const defense2DisplayData = await axios
        .get(`http://localhost:3001/api/defenseUnit/find/${deckIdDisplay.defense2_id}`)
        .then((response) => {
            defense2Data=response.data
            return response
        })
        .catch((error) => {
            console.error(error)
        })
        
        updateDeckDisplay({
            race: raceData,
            attack1: attack1Data,
            attack2: attack2Data,
            attack3: attack3Data,
            defense1: defense1Data,
            defense2: defense2Data
        })
    }
    setNeedReload(false)
  }

  const deleteDeck = async () => {
    console.log(currentDeckId)
    console.log("Deck.jsx Api called")
    const deckDelete = await axios
    .delete(`http://localhost:3001/api/deck/${currentDeckId}`)
    .then((response) => {
        initiateDeletedDeck()
        console.log("view mode after deck deletion", viewMode)
       
        // clean deck display
        updateDeckDisplay({
            race: "",
            attack1: "",
            attack2: "",
            attack3: "",
            defense1: "",
            defense2: ""
        })

        // clean deck Id display
        updateDeckIdDisplay({
            race_id: "",
            attack1_id: "",
            attack2_id: "",
            attack3_id: "",
            defense1_id: "",
            defense2_id: ""
        })

        // clean deck form
        updateDeckForm({
            race_id: "",
            user_id: "",
            attack1_id: "",
            attack2_id: "",
            attack3_id: "",
            defense1_id: "",
            defense2_id: ""
        })

        // clean the rest of state
        updateCurrentDeckId("")
        updateRaceSelected("");
        updateAttackUnitList("");
        updateDefenseUnitList("");
        updateSelectedUnitName({
            attack1_name: "Attack Unit 1",
            attack2_name: "Attack Unit 2",
            attack3_name: "Attack Unit 3",
            defense1_name: "Defense Unit 1",
            defense2_name: "Defense Unit 2"
        })

        return response
    })
    .catch((error)=>{
        console.error(error)
    })
  }

  const attackUnitSelect = (e) => {
    console.log(e.currentTarget)
    console.log(e.currentTarget.id)
    console.log(e.currentTarget.getAttribute("value"))
    if (!deckForm.attack1_id){
        updateDeckForm({ ...deckForm, attack1_id: e.currentTarget.id})
        updateSelectedUnitName({ ...selectedUnitName, attack1_name: e.currentTarget.getAttribute("value")})
    } else if (!deckForm.attack2_id){
        updateDeckForm({ ...deckForm, attack2_id: e.currentTarget.id})
        updateSelectedUnitName({ ...selectedUnitName, attack2_name: e.currentTarget.getAttribute("value")})
    } else if (!deckForm.attack3_id){
        updateDeckForm({ ...deckForm, attack3_id: e.currentTarget.id})
        updateSelectedUnitName({ ...selectedUnitName, attack3_name: e.currentTarget.getAttribute("value")})
    } else {
        // let player know they can only have 3 attack units
    }
  }

  const defenseUnitSelect = (e) => {
    if (!deckForm.defense1_id){
        updateDeckForm({ ...deckForm, defense1_id: e.currentTarget.id})
        updateSelectedUnitName({ ...selectedUnitName, defense1_name: e.currentTarget.getAttribute("value")})
    } else if (!deckForm.defense2_id){
        updateDeckForm({ ...deckForm, defense2_id: e.currentTarget.id})
        updateSelectedUnitName({ ...selectedUnitName, defense2_name: e.currentTarget.getAttribute("value")})
    } else {
        // let player know they can only have 2 defense units
    }
  }

  const removeUnitSelect = (e) => {
    if(e.target.id === "attack1"){
        updateDeckForm({ ...deckForm, attack1_id: ""})
        updateSelectedUnitName({ ...selectedUnitName, attack1_name: "Attack unit 1"})
    } else if(e.target.id === "attack2"){
        updateDeckForm({ ...deckForm, attack2_id: ""})
        updateSelectedUnitName({ ...selectedUnitName, attack2_name: "Attack unit 2"})
    } else if(e.target.id === "attack3"){
        updateDeckForm({ ...deckForm, attack3_id: ""})
        updateSelectedUnitName({ ...selectedUnitName, attack3_name: "Attack unit 3"})
    } else if(e.target.id === "defense1"){
        updateDeckForm({ ...deckForm, defense1_id: ""})
        updateSelectedUnitName({ ...selectedUnitName, defense1_name: "Defense unit 1"})
    } else if(e.target.id === "defense2"){
        updateDeckForm({ ...deckForm, defense2_id: ""})
        updateSelectedUnitName({ ...selectedUnitName, defense2_name: "Defense unit 2"})
  }
}

  const createDeck = async (e) => {
    // to do, check if deck is available. A user can only have one deck.
    if(currentUser.deck_id){
        console.log("update deck api called")
        const updateDeckData = await axios
        .put(`http://localhost:3001/api/deck/${currentDeckId}`,deckForm)
        .then((response) => {
            setNeedReload(true)
            initiateManageDeck()
            return response
        })
        .catch((error)=>{
            console.error(error)
        })
    } else{
        console.log("post deck api called");
        const createDeckData = await axios
        .post(`http://localhost:3001/api/deck`,deckForm)
        .then((response) => {
            setNeedReload(true)
            return response;
        })
        .then((response) => {
            initiateManageDeck()
        })
        .catch((error) => {
            console.error(error)
        })
    }
    
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

  const manageDeck = async () => {
    //populate deck form
    updateDeckForm({
        race_id: deckDisplay.race._id,
        user_id: props.userId,
        attack1_id: deckDisplay.attack1._id,
        attack2_id: deckDisplay.attack2._id,
        attack3_id: deckDisplay.attack3._id,
        defense1_id: deckDisplay.defense1._id,
        defense2_id: deckDisplay.defense2._id
    })

    //populate selected unit name
    updateSelectedUnitName({
        attack1_name: deckDisplay.attack1.name,
        attack2_name: deckDisplay.attack2.name,
        attack3_name: deckDisplay.attack3.name,
        defense1_name: deckDisplay.defense1.name,
        defense2_name: deckDisplay.defense2.name
    })
    updateRaceSelected(deckDisplay.race.name);
    initiateUnitSelection();
  }

  useEffect(() => {
    if(props.userId){
        console.log("run first use effect function")
        getUserObject()
        getDeckData()
    }
    if(viewMode==="Race selection"){
        getAllRacesData();
    }   
    if(raceSelected){
        getAllAttackUnitList()
        getAllDefenseUnitList()
    }
  }, [viewMode,currentDeckId,deckIdDisplay]);

  if (deckForm.attack3_id && deckForm.defense2_id){
    createDeckButton = <button type="button" id="createDeck" onClick={createDeck}>Create Deck</button>
  }

  if (attackUnitList && defenseUnitList){
    attackUnitListFrame = (
        <div>
            {attackUnitList.map((attackUnit) => (
                <UnitCard key={attackUnit._id} data={attackUnit} unitSelect={attackUnitSelect}/>
            ))}
        </div>
    )

    defenseUnitListFrame = (
        <div>
            {defenseUnitList.map((defenseUnit) => (
                <UnitCard key={defenseUnit._id} data={defenseUnit} unitSelect={defenseUnitSelect}/>
            ))}
        </div>
    )

    deckFrame = (
        <div>
            <div>
                <button id="attack1" onClick={removeUnitSelect}>{selectedUnitName.attack1_name}</button>
                <button id="attack2" onClick={removeUnitSelect}>{selectedUnitName.attack2_name}</button>
                <button id="attack3" onClick={removeUnitSelect}>{selectedUnitName.attack3_name}</button>
                <button id="defense1" onClick={removeUnitSelect}>{selectedUnitName.defense1_name}</button>
                <button id="defense2" onClick={removeUnitSelect}>{selectedUnitName.defense2_name}</button>
            </div>
            <br/>
            <div>
            {createDeckButton}
            </div>
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

  if (currentUser.deck_id && viewMode !== "Manage deck" && viewMode !== "Unit selection"){
    console.log("change to manage deck view")
    initiateManageDeck();
  }

  if (viewMode === "Race selection") {
    console.log("View mode = Race selection")
    toRender = (
      <div>
        Select your race
        {raceToRender}
      </div>
    );
  } else if(viewMode === "Unit selection") {
    console.log("View mode = Unit selection")
    toRender=(
        <div>
            {attackUnitListFrame}
            <br/>
            {defenseUnitListFrame}
            <br/>
            {deckFrame}
        </div>
    )
  } else if(viewMode === "Manage deck"){
    console.log("View mode = Manage deck")
    toRender=(
        <div>
            Your Deck
            <div>
                <div>Race: {deckDisplay.race.name}</div>
                <div>Attack1: {deckDisplay.attack1.name}</div>
                <div>Attack2: {deckDisplay.attack2.name}</div>
                <div>Attack3: {deckDisplay.attack3.name}</div>
                <div>Defense1: {deckDisplay.defense1.name}</div>
                <div>Defense2: {deckDisplay.defense2.name}</div>
            </div>
            <div>
                <button onClick={manageDeck}>Edit deck</button>
                <button onClick={deleteDeck}>Delete deck</button>
            </div>
        </div>
    )
  } else if (!props.deckId || viewMode==="Deleted deck") {
    console.log("View mode = Deleted deck / no deckId")
    toRender = (
      <div>
        <button onClick={initiateRaceSelection}>Create new deck</button>
      </div>
    );
  }
  return toRender;
};

export default Deck;
