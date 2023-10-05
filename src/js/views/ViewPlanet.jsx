import React from "react";
import { useEffect, useState, useContext, useParams } from "react";
import { Context } from "../store/appContext";
import { Spinner } from "../component/Spinner.jsx";
import { Link } from "react-router-dom";





export const ViewPlanet = () => {
    const params = useParams();
        console.log(params);
    const uid = parseInt(params.planetId) - 1;
        console.log(uid)
    const viewString = JSON.parse(localStorage.getItem("dataViewPlanet"));
        console.log(viewString);

    if (!viewString || viewString.length === 0 || uid < 0 || uid >= viewString.length) {
        return <div>No se encontró el planeta</div>; // Manejo de caso si el planeta no existe
    }    
    const planet = viewString[uid].properties;
    
    return (
            <>
                <div className="container" style={{ maxWidth: 550 }}>
                    <div className="card my-1 mx-4 d-flex align-items-center justify-content-center">
                        <h5 className="pt-3">Planet: { uid + 1 }</h5>
                        <div>
                            <img src="https://tse3.mm.bing.net/th?id=OIP.zUdfLxrDwJVBcv9h-_mSEQAAAA&pid=Api" className='mb-4 me-4' style={{ width: 50, height: 50 }} alt="..." />
                            <h1 className="card-text ms-3 d-inline">{planet.name}</h1>
                        </div>
                            <p className="card-text">Climate: {planet.climate}</p>
                            <p className="card-text">Created: {planet.created}</p>
                            <p className="card-text">Diameter: {planet.diameter}</p>
                            <p className="card-text">Gravity: {planet.gravity}</p>
                            <p className="card-text">Population: {planet.population}</p>
                    </div>
                </div>
            </>
    );
}