import React, { useState } from "react";

import AddUser from "./forms/AddUser";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";

const App = () => {
  const initialFormState = { id: null, name: "", username: "" };
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const usersData = [
    { id: 1, name: "Apple", username: "APPL", position: 7, price: 125 },
    { id: 2, name: "Paypal", username: "PYPL", position: 1, price: 280 },
    { id: 3, name: "Neste", username: "HEL:NESTE", position: 15, price: 55.09 },
    { id: 4, name: "Ica", username: "STO:ICA", position: 10, price: 44 },
  ];
  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = user.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      position: user.position,
      price: user.price,
    });
  };

  return (
    <div className="container">
      <h1>Minna's Portfolio</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit stock</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add stock</h2>
              <AddUser addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View stocks</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
