import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const BtnFavorites = () => {
  const { store, setStore, actions } = useContext(Context);

  const removeFromFavorites = (item) => {
    console.log('Removing from favorites:', item);
    const updatedFavorites = store.favorites.filter((fav) => fav.uid !== item.uid);
    setStore({ favorites: updatedFavorites });
  };

  return (
    <div className="dropdown ml-auto" style={{ marginRight: "20px" }}>
      <button className="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Favorites  
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
          {store.favorites.length}
        </span>
      </button>
      <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
        {store.favorites.length === 0 ? (
          <li><span className="dropdown-item">No favorites selected</span></li>
        ) : (
          store.favorites.map((item) => (
            <li key={item.uid} className="d-flex align-items-center">
              <span className="dropdown-item">{item.uid}</span>
              <button
                type="button"
                className="btn btn-outline-danger me-2"
                onClick={() => removeFromFavorites(item)}>
                <i className="fa fa-trash"></i>
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};