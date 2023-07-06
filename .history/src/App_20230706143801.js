import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  return (
    <div>
      <AddUser />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
