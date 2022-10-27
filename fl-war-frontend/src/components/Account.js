import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Deck from "./Deck";
import axios from "axios";

const Account = (props) => {
  const [playerDataState, updatePlayerData] = useState({
    name: "",
    id: "",
    deck_id: ""
  });

  const [playerObject, updatePlayerObject] = useState("");

  const { userId } = useParams();

  const check = async (id) => {
    console.log("Account.js check function get account api called");
    const userObject = await axios
      .get(`http://localhost:3001/api/account/${id}`)
      .then((response) => {
        updatePlayerObject(response.data);
        return response;
      })
      .catch((error) => {
        console.log("this is error", error);
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
    //updateRender();
  }, []);

  if (playerDataState.name) {
    toRender = (
      <div>
        Player {playerDataState.name}
        <div>
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
