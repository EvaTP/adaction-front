// page web donate

"use client";
import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import layoutStyles from "../styles/layout.module.css";
import ItemNavbar from "../general-components/itemNavbar";
import { useState, useEffect } from "react";

export default function DonatePage() {
  const [associations, setAssociations] = useState([]); // État pour stocker les associations
  const [loading, setLoading] = useState(true); // État pour indiquer si les données sont en cours de chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  useEffect(() => {
    async function fetchAssociations() {
      try {
        const response = await fetch("http://localhost:3001/associations");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAssociations(data);
      } catch (e) {
        console.error("Failed to fetch associations:", e);
        setError("Impossible de charger les associations. Veuillez réessayer plus tard.");
      } finally {
        setLoading(false); // Arrête le chargement, que ce soit un succès ou une erreur
      }
    }

    fetchAssociations();
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une seule fois après le premier rendu

  if (loading) {
    return (
      <div className={layoutStyles.container}> {/* Utilisez un style de layout si disponible */}
        <ItemNavbar /> {/* Votre barre de navigation */}
        <h1 className={styles.title}>Chargement des associations...</h1>
        <p>Merci de patienter.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={layoutStyles.container}>
        <ItemNavbar />
        <h1 className={styles.title}>Erreur</h1>
        <p className={styles.errorMessage}>{error}</p>
      </div>
    );
  }

  return (

    
    <div className={layoutStyles.container}> {/* Ou un div simple si layoutStyles.container n'est pas nécessaire */}
      <ItemNavbar /> {/* la barre de navigation */}
    <div className={styles.global}>
      <h1 className={styles.pageTitle}>Faire un Don</h1> {/* Appliquez vos styles ici */}

      {/* Grid pour les cartes d'associations */}
      <div className={styles.associationsGrid}>
        {associations.length > 0 ? (
          associations.map((association) => (
            <div key={association.id} className={styles.associationCard}>
              {/* Vérifiez si votre objet association a une propriété imageUrl */}
              {association.imageUrl && (
                <Image
                  src={association.imageUrl}
                  alt={association.name}
                  width={300} // Adaptez la largeur et la hauteur
                  height={200} // en fonction de votre design
                  className={styles.associationImage}
                />
              )}
              <h2 className={styles.associationName}>{association.name}</h2>
              <p className={styles.associationDescription}>{association.description}</p>
              {/* Vous pouvez ajouter un lien vers une page de don spécifique pour l'association */}
              <Link href={`/donate/${association.id}`} className={styles.donateButton}>
                Faire un don
              </Link>
            </div>
          ))
        ) : (
          <p>Aucune association disponible pour le moment.</p>
        )}
      </div>
      </div>
    </div>
  );
}