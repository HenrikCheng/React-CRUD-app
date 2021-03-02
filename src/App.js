import React, { useState } from "react";

import AddUser from "./forms/AddUser";
import UserTable from "./tables/UserTable";

const App = () => {
  // const [editing, setEditing] = useState(false);

  const usersData = [
    { id: 1, name: "Apple", username: "APPL" },
    { id: 2, name: "Paypal", username: "PYPL" },
    { id: 3, name: "Neste", username: "HEL:NESTE" },
    { id: 4, name: "Ica", username: "STO:ICA" },
  ];
  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = user.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>Minna's Portfolio</h1>
      <div className="flex-row">
        <div className="flex-large">
          <AddUser addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View stocks</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
