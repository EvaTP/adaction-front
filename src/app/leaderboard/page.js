"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import layoutStyles from "../styles/layout.module.css";
import ItemLeaderboard from "./components/itemLeaderboard";
import { useState, useEffect } from "react";

//URL API Express = "http://localhost:3001/volunteers";

export default function VolunteersLeaderboard() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(async () => {
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
          <h2 className={layoutStyles.card_header}>
            <Image
              src="/trophy.svg"
              alt="icon-trophy"
              width={25}
              height={25}
              priority
            />
            &nbsp;&nbsp;Leaderboard Global
          </h2>
          <div className={styles.leaderboard_container}>
            {data.map((volunteer) => (
              <ItemLeaderboard
                key={volunteer.firstname}
                volunteer={volunteer}
              />
            ))}
          </div>
        </div>
      </main>

      <footer>
        <p className={layoutStyles.info_text}>
          🌱 Merci d'agir pour la planète. Vous faites partie du changement.
        </p>
      </footer>
    </div>
  );
}
