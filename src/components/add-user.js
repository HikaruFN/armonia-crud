import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    id: Math.random(),
    name: "",
    avatar: "",
    age: "",
    job: "",
    createdAt: "2021-05-21T10:16:36.456Z",
  });

  const trackName = (event) => {
    setNewUser({
      ...newUser,
      name: event.target.value,
    });
  };

  const trackAge = (event) => {
    setNewUser({
      ...newUser,
      age: event.target.value,
    });
  };

  const trackJob = (event) => {
    setNewUser({
      ...newUser,
      job: event.target.value,
    });
  };

  const updateData = async () => {
    const response = await axios.post(
      "https://5db179198087400014d38a73.mockapi.io/api/v1/users",
      newUser
    );
    console.log(response.data);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    updateData();
  };

  return (
    <div>
      <h1>Add user</h1>
      <form action="/">
        <label>Name </label>
        <input onChange={trackName} value={newUser.name} type="text" placeholder="Insert name..." />
        <label>Age </label>
        <input onChange={trackAge} type="number" placeholder="Insert age..."/>
        <label>job </label>
        <input onChange={trackJob} type="text" placeholder="Insert job..." />
        <button onClick={submitHandler} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
