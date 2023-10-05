import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Spinner } from "../component/Spinner.jsx";
import { Link } from "react-router-dom";


export const Planets = () => {
    const {store, actions} = useContext(Context);
    const [planets, setPlanets] = useState([]);
    
    useEffect(() => {
    
        // Obtiene los datos del localStorage y los establece en el estado 
            
        const planetsLocalData = JSON.parse(localStorage.getItem("planetsLocal"));
        setPlanets(planetsLocalData.results);
        }, []);

        const fetchPlanetsDetails = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
            
                const dataPlanets = await response.json();
                console.log("Planet details:", dataPlanets);
            } catch (error) {
                console.error("Error fetching planet details:", error);
        }
    };

    const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};

    return (
        <>
            <div className="back">
                <div className="container text-center">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {!planets ? "Loading" 
                        :
                            (planets.map((planets, uid) => (
                                <div className="col" key={uid}>
                                    <div className="p-3">
                                        <div className="card" >
                                                <img src={`https://starwars-visualguide.com/assets/img/planets/${uid+1}.jpg`} onError={handleOnErrorImg} />
                                            <div className="card-body">
                                                <p className="card-text">{planets.name}.</p>
                                                <div className="footerPlanets">
                                                    <Link to={`/planets/${planets.uid}`}>
                                                        <button className="btn btn-secondary" onClick={() => fetchPlanetsDetails(planets.url)}>
                                                            Get Details
                                                        </button>
                                                    </Link>
                                                    <button className="btn btn-danger" onClick={() => {actions.addFavorites(planets.name)}} type="button">
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