import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Account = (props) => {
  const [playerName, updatePlayerName] = useState();

  const { userId } = useParams();

  const check = async (id) => {
    const userObject = await axios
      .get(`http://localhost:3001/api/account/${id}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(userObject);
    return userObject;
  };

  let toRender = (
    <div>
      <h5>Player Id is not detected, please create a new user account</h5>
      <label>Name: </label>
      <button></button>
    </div>
  );
  if (userId) {
    if (check(userId)) {
      toRender = <div>Welcome player {userId}</div>;
    }
  }
  return toRender;
};

export default Account;
