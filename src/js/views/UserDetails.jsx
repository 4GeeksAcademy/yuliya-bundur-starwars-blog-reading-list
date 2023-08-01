import React from "react";
import { useParams } from "react-router-dom";


export const UserDetails = () => {
  const params = useParams();
  console.log(params, params.userId)
  const id = params.userId - 1;
  const user = JSON.parse(localStorage.getItem('usersLocal'))

  return (
    <div className="card my-1 mx-4" style={{ backgroundColor: "#0a0909"}}>
      <div className="card-header" style={{ color: "white" }}>{user[id].name} </div>
      <div className="card-body" style={{ color: "white" }}>
        <p className="card-text">User #: {id + 1}, Username: {user[id].username}</p>
        <p className="card-text">Mail: {user[id].email}</p>
        <p className="card-text">Website: {user[id].website}</p>
        <p className="card-text">phone: {user[id].phone}</p>
        <p className="card-text">City: {user[id].address.city}, Zipe code: {user[id].address.zipcode}</p>
      </div>
      <div className="card-footer" style={{ color: "white" }}>Company: {user[id].company.name}</div>
    </div>
  )
}