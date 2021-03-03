import React from "react";

const UserTable = (props) => {
  let sum = 0;
  props.users.forEach((element) => {
    sum += element.position * element.price;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker Symbol</th>
          <th>Position</th>
          <th>Price</th>
          <th>Value</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.position}</td>
              <td>{user.price} $</td>
              <td>{user.price * user.position} $</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className="button muted-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteUser(user.id)}
                  className="button muted-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No stocks</td>
          </tr>
        )}
        <tr>
          <td>Total Worth</td>
          <td>{sum} $</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
