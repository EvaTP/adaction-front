"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import layoutStyles from "../styles/layout.module.css";
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
    <div className="app_container">
      <header className="header"> 
        <div className="header_content">
          <h1 className="header_title">Adaction</h1>
        </div>  
        <p className="header_subtitle">Agir pour un environnement plus propre</p>     
      </header>

	  <div>
      <nav className={layoutStyles.navbar}>
        <div className={layoutStyles.navbar_container}>
          <Link href="/manage_users" className={layoutStyles.navbar_link}>
            <span>Gestion des bénévoles</span>
          </Link>
          <Link href="/leaderboard" className={layoutStyles.navbar_link}>
            <span>Leaderboard</span>
          </Link>
        </div>
      </nav>
	  </div>

    <main className={layoutStyles.main_content}>
      <div className={layoutStyles.card}>
        <div className={styles.volunteers_actions}>
          <button className={layoutStyles.submit_btn}>Ajouter un.e bénévole</button>
          <div className={styles.search_filters}>
            <div className={styles.search_container}>
              <input placeholder="Rechercher un.e bénévole" className={styles.search_input} type="text"/>
            </div>
            <div className={styles.location_filter}>
              <select className={styles.search_input}>
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
      <p className="info_text">🌱 Merci d'agir pour la planète. Vous faites partie du changement.</p>
      </footer>
    </div>
  );
}