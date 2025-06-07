"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import layoutStyles from "../styles/layout.module.css";
import ItemVolunteer from "./components/itemVolunteer";
import { useState, useEffect } from "react";

//URL API Express = "http://localhost:3001/volunteers";

export default function VolunteersMgt() {
  const [data, setData] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [isLoading, setLoading] = useState(true);
  // AJOUTER UN BENEVOLE (formulaire modale)
  const [showModal, setShowModal] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');

  // useEffect(async () => {
  //   fetch("http://localhost:3001/volunteers")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
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

useEffect(() => {
  const fetchCities = async () => {
    try {
      const res = await fetch("http://localhost:3001/cities");
      const data = await res.json();
      setCities(data);
    } catch (error) {
      console.error("Erreur lors du fetch des villes :", error);
    }
  };
  fetchCities();
}, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  // On filtre les bénévoles selon la ville sélectionnée
  const filteredVolunteers = selectedCity
    ? data.filter((volunteer) => volunteer.location === selectedCity)
    : data;

  // soumission du formulaire (modale) "ajouter un bénévole" 
  const handleAddVolunteer = async (e) => {
    e.preventDefault();

  const newVolunteer = { firstname, lastname, email, password, location };

  try {
    const res = await fetch("http://localhost:3001/volunteers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVolunteer),
    });

    if (!res.ok) {
      throw new Error("Erreur lors de l'ajout du bénévole");
    }

    // Réinitialise les champs et masque la modale après soumission
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setLocation('');
    setShowModal(false);

    // Re-fetch des bénévoles pour mettre à jour la liste
    setLoading(true);
    const volunteersRes = await fetch("http://localhost:3001/volunteers");
    const volunteersData = await volunteersRes.json();
    setData(volunteersData);
    setLoading(false);

  } catch (error) {
    console.error(error);
    alert("Impossible d'ajouter le bénévole, réessayez.");
  }
};

  return (
    <div className="app_container">
      <header className={layoutStyles.header}>
        <div className={layoutStyles.header_content}>
          <p className={layoutStyles.header_title}>
            <Image
              src="/recycle.svg"
              alt="icon-edit"
              width={30}
              height={30}
              priority
            />
            Adaction
          </p>
        </div>
        <p className={layoutStyles.header_subtitle}>
          Agir pour un environnement plus propre
        </p>
      </header>

      <div>
        <nav className={layoutStyles.navbar}>
          <div className={layoutStyles.navbar_container}>
            <Link href="/manage-users" className={layoutStyles.navbar_link}>
              <Image
                src="/sprout.svg"
                alt="icon-leaf"
                width={25}
                height={25}
                priority
              />
              <span>Gestion des bénévoles</span>
            </Link>
            <Link href="/leaderboard" className={layoutStyles.navbar_link}>
              <Image
                src="/trophy.svg"
                alt="icon-trophy"
                width={25}
                height={25}
                priority
              />
              <span>Leaderboard</span>
            </Link>
          </div>
        </nav>
      </div>

      <main className={layoutStyles.main_content}>
        <div className={layoutStyles.card}>
          <div className={styles.volunteers_actions}>
            <button
              className={layoutStyles.submit_btn}
              onClick={() => setShowModal(true)}
            >
              <Image
                src="/user-plus.svg"
                alt="icon-addvolunteer"
                width={30}
                height={30}
                priority
              />
              Ajouter un.e bénévole
            </button>
            <div className={styles.search_filters}>
              <div className={styles.search_container}>
                <input
                  placeholder="Rechercher un.e bénévole"
                  className={styles.search_input}
                  type="text"
                />
              </div>
              <div className={styles.location_filter}>
                <select
                className={styles.search_input}
                value = {selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                >
                <option value="">Toutes les villes</option>
                {cities.map((city)=>(
                   <option key={city.id} value={city.name}>
                  {city.name}
                </option>
                ))}
                </select>
                  {/* 
                  <option value="Paris">Paris</option>
                  <option value="Lyon">Lyon</option>
                  <option value="Bordeaux">Bordeaux</option>
                  <option value="Strasbourg">Strasbourg</option>
                  <option value="Nantes">Nantes</option>
                  <option value="Marseille">Marseille</option>
                  <option value="Nice">Nice</option>
                  <option value="Lille">Lille</option>
                  <option value="Montpellier">Montpellier</option> */}
              </div>
            </div>

            {filteredVolunteers.map((volunteer) => (
              <ItemVolunteer key={volunteer.id} volunteer={volunteer} />
            ))}
          </div>
        </div>
      </main>
      {/* MODALE */}
      {showModal && (
        <div className={layoutStyles.modal_overlay}>
          <div className={layoutStyles.modal}>
            <h3>Ajouter un.e bénévole</h3>
            <form className={layoutStyles.form_container} onSubmit={handleAddVolunteer}>
              <div>
                <label className={layoutStyles.form_label}>Prénom</label>
                 <input
                  required
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div>
                <label className={layoutStyles.form_label}>Nom</label>
                 <input
                    required
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
              </div>
              <div>
                <label className={layoutStyles.form_label}>Email</label>
                 <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div>
                <label className={layoutStyles.form_label}>Mot de passe</label>
                 <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              <div>
                <label className={layoutStyles.form_label}>Localisation</label>
                 <input
                    required
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
              </div>
              <div className={layoutStyles.modal_actions}>
                <button type="submit" className={layoutStyles.submit_btn}>
                  Ajouter
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className={layoutStyles.cancel_btn}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer>
        <p className={layoutStyles.info_text}>
          🌱 Merci d'agir pour la planète. Vous faites partie du changement.
        </p>
      </footer>
    </div>
  );
}
