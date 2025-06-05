'use client';
import { useState } from 'react';
import Image from "next/image";
import styles from './page.module.css';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Logique de connexion
    // console.log('Connexion:', formData);
  };

  const handleManageVolunteers = () => {
    // Redirection vers la gestion des bénévoles
    // router.push('/volunteers');
  };

return (
    <div className={styles.app_container}>

        <header className={styles.header}>
            <div className={styles.header_content}>
                <div className={styles.header_title}>
                    <Image src="/recycle.svg" alt="Recycle" className={styles.logo} width={40} height={40} />
                    Adaction
                </div>
            </div>
            <div className={styles.header_subtitle}>
                Agir pour un environnement plus propre
            </div>
        </header>

        <main className={styles.main_content}>
            <div className={styles.card}>
                <div className={styles.card_header}>
                    
                    Connexion
                </div>
                
                <form onSubmit={handleLogin} className={styles.form_container}>
                    <div>
                        <label htmlFor="firstName" className={styles.form_label}>
                            Prénom *
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Votre prénom"
                            className={styles.form_input}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className={styles.form_label}>
                            Mot de passe *
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Votre mot de passe"
                            className={styles.form_input}
                            required
                        />
                    </div>

                    <button type="submit" className={styles.submit_btn}>
                        <Image src="/log-in.svg" alt="Connexion" className={styles.logo} width={20} height={20} />
                        Se connecter
                    </button>

                    <button 
                        type="button" 
                        onClick={handleManageVolunteers}
                        className={styles.manage_btn}
                    >
                        <Image src="/users.svg" alt="Manage-users" className={styles.logo} width={20} height={20} />
                        Gérer les bénévoles
                    </button>
                </form>
            </div>
        </main>

        <footer>
            <p className={styles.info_text}>
                🌱 Merci d&apos;agir pour la planète. Vous faites partie du changement.
            </p>
        </footer>
    </div>
);
}