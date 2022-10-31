import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Deck from "./Deck";
import axios from "axios";

const Account = (props) => {
  let baseUrl = process.env.baseUrl || "http://localhost:3001"; // To-do: find a way to do it dynamically
  baseUrl = "https://fl-war.herokuapp.com"; // To-do: Hardcoding for heroku deployment
  const [playerDataState, updatePlayerData] = useState({
    name: "",
    id: "",
    deck_id: ""
  });

  const [playerObject, updatePlayerObject] = useState("");

  const { userId } = useParams();

  const check = async (id) => {
    const userObject = await axios
      .get(`${baseUrl}/api/account/${id}`)
      .then((response) => {
        updatePlayerObject(response.data);
        return response;
      })
      .catch((error) => {
        console.error(error);
      });
    if (userObject.data._id === id) {
      updatePlayerData({
        name: userObject.data.name,
        id: userObject.data._id
      });
      return userObject;
    }
  };

  let toRender = (
    <div>
      <h5>Player Id is not valid, please create a new user account</h5>
      <Link to="/new">Create account page</Link>
    </div>
  );

  useEffect(() => {
    if (userId.length === 24) {
      check(userId);
    }
  }, []);

  if (playerDataState.name) {
    toRender = (
      <div className="third">
        <div className="player-status">Player: {playerDataState.name}</div>

        <div className="deck-frame">
          <Deck userId={playerDataState.id} currentUser={playerObject} />
        </div>
      </div>
    );
  } else {
    toRender = (
      <div>
        <h5>Player Id is not valid, please create a new user account</h5>
        <Link to="/new">Create account page</Link>
      </div>
    );
  }

  return toRender;
};

export default Account;
