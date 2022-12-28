import React from "react";
import { Link } from "react-router-dom";

const User = ({ user, singleUserDelete, edit }) => {
  return (
    <div className="user-row">
      <div className="col">
        <input id={Number(user.id)} className="row-select" type="checkbox" value={user.id}></input>
      </div>
      <div className="col">{user.name}</div>
      <div className="col">{user.email}</div>
      <div className="col">{user.role}</div>
      <div className="col">
        <Link to="/edit"><i onClick={() => edit(user)}
          className="fa-solid fa-pen-to-square"
          style={{ color: "#899CA0", marginRight: "40px", cursor: "pointer" }}
        ></i></Link>
        <i onClick={() => singleUserDelete(user.id)}
          className="fa-solid fa-trash-can"
          style={{ color: "red", cursor: "pointer" }}
        ></i>
      </div>
    </div>
  );
};

export default User;
