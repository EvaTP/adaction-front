"use client";
import Image from "next/image";
import Link from "next/link";
//import styles from "./page.module.css";  pas de styles de page pour l'instant
import layoutStyles from "../styles/layout.module.css";
import ItemNavbar from "../general-components/itemNavbar";
import { useState, useEffect } from "react";

//URL API Express = "http://localhost:3001/volunteers";


export default function Profil(){
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // MODIFIER LE BENEVOLE
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [location, setLocation] = useState('');
	const [volunteerId, setVolunteerId] = useState(null);

useEffect(() => {
	// récupérer le bénévole connecté depuis localStorage
	// si pas connecté, redirection vers la page connexion
  const storedUser = localStorage.getItem('loggedInVolunteer');
//   if(!storedUser){
// 	window.location.href= "/connexion";
// 	return;
//   }
 if (storedUser) {
	const user = JSON.parse(storedUser);
	setVolunteerId(user.id);
    setFirstname(user.firstname);
    setLastname(user.lastname);
    setLocation(user.location);
  }

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3001/volunteers");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Erreur lors du fetch :", error);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

// fonction appelée au submit du formulaire
  const handleVolunteerProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/volunteers/${volunteerId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          location,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour du profil.");
      }

      alert("Profil mis à jour avec succès !");
    } catch (error) {
      console.error("Erreur :", error);
      alert("Une erreur est survenue.");
    }
  };

// bouton de déconnexion (supprime le localstorage et redirige vers la page connexion)
const handleLogout = () => {
  localStorage.removeItem("connectedVolunteerId");
  window.location.href = "/connexion";
};

  return (
	<div className="app_container">
	<ItemNavbar />
	
      <div className={layoutStyles.main_content}>
        <div className={layoutStyles.card}>
              <h2 className={layoutStyles.card_header}>Mon profil</h2>
            
			<form className={layoutStyles.form_container} onSubmit={handleVolunteerProfile}>
              <div>
                <label className={layoutStyles.form_label}>Prénom</label>
                 <input
				placeholder = "Votre prénom"
                required
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div>
                <label className={layoutStyles.form_label}>Nom</label>
                 <input
                    placeholder = "Votre nom"
					required
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
              </div>       
              <div>
                <label className={layoutStyles.form_label}>Localisation</label>
                 <input
                    placeholder = "Votre ville"
					required
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
              </div>
              <div className={layoutStyles.modal_actions}>
                <button type="submit" className={layoutStyles.submit_btn}>
					<Image
						src="/save.svg"
						alt="icon-save"
						width={30}
						height={30}
						priority
						/>
                	Mise à jour
				</button>
				<button type="button" className={layoutStyles.submit_btn.logout_btn}
				onClick={handleLogout}
				>
					<Image
						src="/log-out.svg"
						alt="icon-logout"
						width={30}
						height={30}
						priority
						/>
                	Déconnexion
				</button>
              </div>
            </form>
        </div>
      </div>

      <footer>
        <p className={layoutStyles.info_text}>🌱  Merci d'agir pour la planète. Vous faites partie du changement.</p>
      </footer>
    </div>
  );
}