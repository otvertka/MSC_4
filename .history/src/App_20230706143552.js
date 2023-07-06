import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div>
      <AddUser />
      <UserList users={[]} />
    </div>
  );
}

export default App;
