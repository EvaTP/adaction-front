"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import styles from "../styles/layout.module.css";
import styles from "../styles/globals.css";
import ItemVolunteer from "./components/itemVolunteer";
import { useState, useEffect } from "react";

//URL API Express = "http://localhost:3001/volunteers";

export default function VolunteersMgt(){

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/volunteers")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;


  return (
    <div className="app-container">
      <header className="header"> 
        <div className="header-content">
          <h1 className="header-title">Adaction</h1>
        </div>  
        <p className="header-subtitle">Agir pour un environnement plus propre</p>     
      </header>

	  <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/manage-users" className="navbarLink">
            <span>Gestion des bénévoles</span>
          </Link>
          <Link href="/leaderboard" className="navbarLink">
            <span>Leaderboard</span>
          </Link>
        </div>
      </nav>
	  </div>

    <main className="main-content">
      <div className="card">
        <div className={styles.volunteers-actions}>
          <button className={submit-btn}>Ajouter un.e bénévole</button>
          <div className={search-filters}>
            <div className={search-container}>
              <input placeholder="Rechercher un.e bénévole" className={search-input} type="text"/>
            </div>
            <div className={location-filter}>
              <select className={search-input}>
                <option value>Toutes les villes</option>
                <option value="Paris">Paris</option>
                <option value="Lyon">Lyon</option>
                <option value="Bordeaux">Bordeaux</option>
                <option value="Strasbourg">Strasbourg</option>
                <option value="Nantes">Nantes</option>
                <option value="Marseille">Marseille</option>
                <option value="Nice">Nice</option>
                <option value="Lille">Lille</option>
                <option value="Montpellier">Montpellier</option>
              </select>
            </div>
          </div>

          {data.map((volunteer) => (
            <ItemVolunteer key={volunteer.firstname} volunteer={volunteer} />
          ))}
        </div>
      </div>
    </main>
	  <footer>
      <p class="info-text">🌱 Merci d'agir pour la planète. Vous faites partie du changement.</p>
      </footer>
    </div>
  );
}