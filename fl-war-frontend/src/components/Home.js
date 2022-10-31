import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = (params) => {
  let baseUrl = process.env.baseUrl || "http://localhost:3001"; // To-do: find a way to do it dynamically
  baseUrl = "https://fl-war.herokuapp.com"; // Hardcoding for heroku deployment, remove this once found a way to do it dynamically
  let navigate = useNavigate();

  let homeToRender;
  let submitButton = (
    <input disabled type="submit" value="Create new account" />
  );

  const [userFormState, updateUserForm] = useState({
    name: "",
    email: ""
  });

  useEffect(() => {}, []);

  // Function for new player, user who use their existing account unique url should never reach this function
  const handleNewUserPath = () => {
    navigate(`/new`);
  };

  const handleChange = (e) => {
    updateUserForm({ ...userFormState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await axios
      .post(`${baseUrl}/api/newUser/`, userFormState)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error(error);
      });
    updateUserForm({
      name: "",
      email: ""
    });
    navigate(`/new/${newUser.data._id}/${newUser.data.name}`);
  };

  if (userFormState.email && userFormState.name) {
    submitButton = (
      <input className="click-able" type="submit" value="Create new account" />
    );
  }

  if (params.new) {
    homeToRender = (
      <div className="third">
        <p>Welcome to FL-WAR.</p>
        <br />
        <p>Please create your new account by clicking the following button</p>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>{" "}
          <input
            type="text"
            placeholder="Player Name"
            id="name"
            value={userFormState.name}
            onChange={handleChange}
          />
          <br />
          <label>Email: </label>{" "}
          <input
            type="text"
            placeholder="player@email.com"
            id="email"
            value={userFormState.email}
            onChange={handleChange}
          />
          <br />
          <br />
          {submitButton}
        </form>
        <p>
          PS: Please use your unique url provided if you want use account
          created before. If you lost it, just re-create it.
        </p>
      </div>
    );
  } else {
    homeToRender = (
      <div className="center">
        <button onClick={handleNewUserPath}>Play Game</button>
      </div>
    );
  }

  return homeToRender;
};

export default Home;
