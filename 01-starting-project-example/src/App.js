import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersData, setUsersData] = useState([]);
  const getUsersDataHandler = ({ name, age }) => {
    setUsersData(prevState => [
      ...prevState,
      { name, age, id: Math.random().toString() },
    ]);
  };
  console.log(usersData);
  return (
    <div>
      <AddUser onGetData={getUsersDataHandler} />
      <UsersList users={usersData} />
    </div>
  );
}

export default App;
