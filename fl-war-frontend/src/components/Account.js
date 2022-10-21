import { checkout } from "../../../routes";
import { useState, useEffect } from "react";

const Account = (props) => {
  const [playerName, updatePlayerName] = useState();
  let toRender = (
    <div>
      <h5>Player Id is not detected, please create a new user account</h5>
      <label>Name: </label>
      <button></button>
    </div>
  );
  if (props.id) {
    if (check(props.id)) {
      toRender = <div>Welcome player {props.id}</div>;
    }
  }
  return toRender;
};

export default Account;
