"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import layoutStyles from "../styles/layout.module.css";
import ItemNavbar from "../general-components/itemNavbar";
import { useState, useEffect } from "react";

//URL API Express = "http://localhost:3001/volunteers";

export default function Dashboard(){
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
     
	<ItemNavbar />
	
      <div className={layoutStyles.main_content}>
        <div className={layoutStyles.card}>
          <div className={styles.dashboard_header}>
              <h2 className={styles.card_header}>Bonjour{} !</h2>
              <div className={styles.month_navigation}>
                <button className={styles.month_nav_btn}>Previous</button>
                  <span className={styles.current_month}></span>
                 <button className={styles.month_nav_btn}>Next</button>
              </div>
              <div className={styles.waste_grid}>
                <div className={styles.waste_card}>
                  <div className={`${styles.waste_icon} ${styles.badge_organic}`}>
                    <Image
                        src="/waste-cigarette.svg"
                        alt="icon-user"
                        width={25}
                        height={25}
                        priority
                        />
                  </div>
                  <div className={styles.waste_info}>
                    <h3>Mégots de cigarette</h3>
                    <p className={styles.waste_count}></p>
                  </div>
                </div>
                <div className={styles.waste_card}>
                  <div className={`${styles.waste_icon} ${styles.badge_plastic}`}>
                    <Image
                        src="/waste-plastic-package.svg"
                        alt="icon-user"
                        width={25}
                        height={25}
                        priority
                        />
                  </div>
                  <div className={styles.waste_info}>
                    <h3>Plastique</h3>
                    <p className={styles.waste_count}></p>
                  </div>
                </div>
                <div className={styles.waste_card}>
                  <div className={`${styles.waste_icon} ${styles.badge_glass}`}>
                    <Image
                        src="/waste-glass-wine.svg"
                        alt="icon-user"
                        width={25}
                        height={25}
                        priority
                        />
                  </div>
                  <div className={styles.waste_info}>
                    <h3>Verre</h3>
                    <p className={styles.waste_count}></p>
                  </div>
                </div>
                <div className={styles.waste_card}>
                  <div className={`${styles.waste_icon} ${styles.badge_metal}`}>
                      <Image
                        src="/waste-metal-trash.svg"
                        alt="icon-user"
                        width={25}
                        height={25}
                        priority
                        />
                  </div>
                  <div className={styles.waste_info}>
                    <h3>Métal</h3>
                    <p className={`${styles.waste_icon} ${styles.badge_electronic}`}></p>
                  </div>
                </div>
                <div className={styles.waste_card}>
                  <div className={styles.waste_icon}>
                      <Image
                        src="/waste-smartphone.svg"
                        alt="icon-user"
                        width={25}
                        height={25}
                        priority
                        />
                  </div>
                  <div className={styles.waste_info}>
                    <h3>Electronique</h3>
                    <p className={styles.waste_count}></p>
                  </div>
                </div>
                <div className={styles.waste_card}>
                  <div className={`${styles.waste_icon} ${styles.badge_other}`}>
                      <Image
                        src="/waste-circle-help.svg"
                        alt="icon-user"
                        width={25}
                        height={25}
                        priority
                        />
                  </div>
                  <div className={styles.waste_info}>
                    <h3>Autre</h3>
                    <p className={styles.waste_count}></p>
                  </div>
                </div>               
              </div>
          </div>
        </div>
      </div>

      <footer>
        <p className={layoutStyles.info_text}>🌱  Merci d'agir pour la planète. Vous faites partie du changement.</p>
      </footer>
    </div>
  );
}