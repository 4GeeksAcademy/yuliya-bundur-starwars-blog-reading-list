import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Vehicles = () => {
    const {store, actions} = useContext(Context);
    const [vehicles, setVehicles] = useState([]);
    
    useEffect(() => {
    
        // Obtiene los datos del localStorage y los establece en el estado "vehicles"
        const vehiclesLocalData = JSON.parse(localStorage.getItem("vehiclesLocal"));
        setVehicles(vehiclesLocalData.results);
        }, []);

    const fetchVehiclesDetails = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
        
            const dataVehicles = await response.json();
            console.log("Vehicles details:", dataVehicles);
        } catch (error) {
            console.error("Error fetching vehicles details:", error);
        }
    };
    
    const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};

    return (
        <>
            <div className="back">
                <div className="container text-center">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        {!vehicles ? "Loading"
                            :
                            (vehicles.map((vehicles, uid) => (
                                <div className="col" key={uid}>
                                    <div className="p-3">
                                        <div className="card" >
                                                <img alt="" src={`https://starwars-visualguide.com/assets/img/vehicles/${uid+1}.jpg`} onError={handleOnErrorImg} />
                                            <div className="card-body">
                                                <p className="card-text">{vehicles.name}.</p>
                                                <div className="footerVehicles"> 
                                                    <Link to={`/vehicles/${vehicles.uid}`}>
                                                        <button className="btn btn-secondary" onClick={() => fetchVehiclesDetails(vehicles.url)}>
                                                            Get Details
                                                        </button>
                                                    </Link>
                                                    <button className="btn btn-danger" onClick={() => {actions.addFavorites(vehicles.name)}} type="button">
                                                        <i className="fas fa-heart"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )))
                        }
                    </div>    
                </div>
            </div>
        </>
    )
}