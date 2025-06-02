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
  const [isLoading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

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
      {/* MODALE */}
      {showModal && (
        <div className={layoutStyles.modal_overlay}>
          <div className={layoutStyles.modal}>
            <h3>Ajouter un.e bénévole</h3>
            <form className={layoutStyles.form_container}>
              <div>
                <label className={layoutStyles.form_label}>Prénom</label>
                <input required type="text"></input>
              </div>
              <div>
                <label className={layoutStyles.form_label}>Nom</label>
                <input required type="text"></input>
              </div>
              <div>
                <label className={layoutStyles.form_label}>Email</label>
                <input required type="email"></input>
              </div>
              <div>
                <label className={layoutStyles.form_label}>Mot de passe</label>
                <input required type="password"></input>
              </div>
              <div>
                <label className={layoutStyles.form_label}>Localisation</label>
                <input required type="text"></input>
              </div>
              <div className={layoutStyles.modal_actions}>
                <button type="submit" className={layoutStyles.submit_btn}>
                  Ajouter
                </button>
                <button
                  type="submit"
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
