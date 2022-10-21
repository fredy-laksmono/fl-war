import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = (params) => {
  let homeToRender;
  let navigate = useNavigate();

  const handleNewUserPath = () => {
    navigate(`/new`);
  };

  if (params.new) {
    homeToRender = (
      <div>
        <p>Welcome to FL-WAR.</p>
        <p>Please create your new account by clicking the following button</p>
        <button>Create new account</button>
        <p>
          PS: If you already have user account created before, please use your
          unique url provided if you want use the same account
        </p>
      </div>
    );
  } else {
    homeToRender = (
      <div>
        <button onClick={handleNewUserPath}>Play Game</button>
      </div>
    );
  }

  return homeToRender;
};

export default Home;
