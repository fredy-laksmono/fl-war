import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Account = (props) => {
  const [playerDataState, updatePlayerData] = useState({
    name: "",
    id: "",
    deck_id: ""
  });

  const { userId } = useParams();

  const check = async (id) => {
    const userObject = await axios
      .get(`http://localhost:3001/api/account/${id}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log("this is error", error);
      });
    console.log("this is userObject after checking", userObject);
    if (userObject.data._id === id) {
      console.log("user found");
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

  const updateRender = () => {
    console.log("update render called", playerDataState);
    if (playerDataState.name) {
      toRender = <div>Welcome player {playerDataState.name}</div>;
    } else {
      toRender = (
        <div>
          <h5>Player Id is not valid, please create a new user account</h5>
          <Link to="/new">Create account page</Link>
        </div>
      );
    }
  };

  useEffect(() => {
    if (userId.length == 24) {
      check(userId);
    }
    updateRender();
  }, []);

  if (playerDataState.name) {
    toRender = <div>Welcome player {playerDataState.name}</div>;
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
