### CONTEXTE PROJET ♻️  ADACTION
Adaction est une association qui sensibilise aux ramassages des déchets sauvages (mégots de cigarette, plastiques d’emballages, etc).
L’objectif est de développer une application avec :
# une vue association
- qui permet de créer les comptes des bénévoles
- qui permet de suivre les statistiques globales des collectes
# une vue bénévole
- qui permet d’enregistrer les collectes selon les lieux de collecte et le type de collecte
- qui permet de dépenser ses points récoltés grâce aux collectes
# 🎯 Objectifs
L’objectif principal du projet est d’avoir un back-end. La prise en main d’un framework front-end est secondaire.

✅ fait  ❌ pas fait   💙 BONUS   📛 problème


## Fonctionnalités BACK-END
✅  Développer un back-end
✅  Mettre en place un CRUD
✅  Mettre en place une base de données
✅  Savoir concevoir le schéma d’une base de données relationnelles
✅  Savoir écrire des requêtes SQL
✅ Savoir utiliser un SGDBR (Neon pour Paris)
[ ] Savoir chiffrer un mot de passe
[ ] Comprendre la configuration de son app
✅  L’utilité du package.json

## Fonctionnalités FRONT-END
[ ] Développer en mobile-first
✅  Mettre en place un site interactif
✅  Savoir GET des données
✅  Savoir POST des données
✅  Savoir PUT ou PATCH des données
✅  Savoir DELETE des données
✅  Adopter un framework [NEXT.JS, EXPRES.JS]
✅  Savoir utiliser un gestionnaire de paquets
✅  Savoir créer des composants
✅  Savoir utiliser des props
✅  Savoir utiliser des states
[ ] BONUS : Savoir utiliser des hooks 🪝 

# Git
[ ] Savoir créer et travailler avec des branches
✅  Savoir merge : savoir régler des conflits
✅  Savoir rebase

# 💙 BONUS+
✅ (Niveau 1+) Déployer son back-end en production avec Vercel (solution gratuite)
[ ] (Niveau 1+) Développer l’authentification
[ ] (Niveau 2) Mettre en place un middleware
❌  (Niveau 3) Utiliser un ORM (Paris : Prisma)
[ ] (Niveau 1) Intégrer des règles d’accessibilité et d’éco-conception
❌  (Niveau 1) Utiliser un framework CSS tel que Tailwind

# 📥 Rendu
Ce qui est attendu :
- un lien github contenant votre back-end
-  second lien github contenant votre front-end
- un fichier avec votre schéma de base de données
- un fichier .sql avec vos requêtes SQL

### VUES FRONT-END

# 🌱 1. Vue BENEVOLE : Gestion de compte et connexion
Pouvoir se connecter à l’application avec un login et password fourni par l’association
- NIVEAU 1 : tous les bénévoles ont le même identifiant et mot de passe
- NIVEAU 2 : chaque bénévole a ses propres identifiants
💙 [BONUS] : Pouvoir éditer son profil
- Modifier ses identifiants
- Modifier son mot de passe

# 🌱 2. Vue BENEVOLE : Gestion des collectes de déchets
Pouvoir enregistrer une collecte (bénévole responsable, date, lieu)
- Le.la bénévole responsable est la personne connectée à l’application
- La date saisie par défaut est celle du jour. Il sera possible à l’utilisateur.trice de la modifier
- Pour éviter tout problème de saisie, la localisation sera une liste déroulante
       - La liste des villes sera stockée en base. On créera une route en back-end pour les récupérer.
- Un enregistrement correspond à l’association des informations suivantes :
		- Bénévole
		- Date
		- Lieu
		- Déchets collectés
		- Quantité

☝️ Nous pouvons partir avec ces premiers déchets :
🗑️ Mégots de cigarette
🗑️ Emballages plastiques
🗑️ Bouteilles de verre
🗑️ Déchets électroniques
🗑️ Déchets métalliques (canettes, conserves)
👉 Pour rappel, vous retrouverez des exemples de jeux de données en Annexes à la fin de l’énoncé. Ce qui vous est partagé est au format .json, n’oubliez pas de les intégrer en tant que données au sein d’une base de donnée relationnelle


# ⚙️ 3. Vue ASSOCIATION : Gestion des bénévoles
✅  Développer une page qui permet de lister tous les bénévoles
Il sera possible de :
✅ - Filtrer les bénévoles par localisation
- 💙 [BONUS] : Retrouver un bénévole au travers d’une recherche par nom
Développer les fonctionnalités suivante :
✅ - Pouvoir ajouter un compte bénévole
✅ - Pouvoir modifier un compte bénévole
✅ - Pouvoir supprimer un compte bénévole

# ⚙️ 4. Vue ASSOCIATION : Tableau de bord
Développer une vue qui permet à l’association de suivre les statistiques des collectes
✅ - Voir le total de déchets collectés
❌ - Filtrer par date (mois, année)
✅ - Filtrer par lieu (ville ou région)

 ### 💙 Les BONUS 💪
# 💙 [BONUS] Gamification : dépense des points collectés
Pour encourager les bénévoles dans leurs actions, l’association a décidé de mettre en place un système de points qui, au cumulé, permet de débloquer des dons qu’iels peuvent faire auprès d’associations.

En résumé :
chaque bénévole cumule des points par rapport à ses collectes
ces points peuvent être transformés en dons pour des associations
📌 Il faudra :
- Mettre en place un référentiel des dons possibles
- Avoir un historique des points cumulés
- Avoir un historique des points dépensés
- Exemple de système de points :

Mégots de cigarette = 10 points
	Emballages plastiques = 30 points
	Bouteilles de verre = 20 points
	Articles de pêche = 15 points
	Déchets métalliques = 15 points
Exemple de dons possibles :
	1000 points → 10 euros reversés
	2000 points → 20 euros reversés
	5000 points → 50 euros reversés
Exemple d’associations pour les dons :
	LPO – Ligue pour la Protection des Oiseaux
	ASPAS – Association pour la Protection des Animaux Sauvages
	FNE – France Nature Environnement
	WWF – World Wide Fund for Nature
	IUCN – Union Internationale pour la Conservation de la Nature

# 💙 [BONUS+] Accessibilité de l’application et éco-conception
📌 Fonctionnalités à développer :
- Dans chaque page web, le contraste entre la couleur du texte et la couleur de son arrière-plan doit être suffisamment élevé
- Chaque liste de lien doit être correctement structuré
- Chaque lien doit être explicite
- Identifier et réparer les problèmes d’éco-conception


## Ressources
# Icones : LUCIDE : https://lucide.dev/icons/
(on peut changer la couleur de l'icône sur le site)

Ci-dessous un exemple de rendu :
https://adaction.vercel.app/

1. La page de connexion : https://adaction.vercel.app/login
Tu peux saisir n'importe quel prénom et mot de passe pour parcourir la suite
2. Association, page de gestion des bénévoles : https://adaction.vercel.app/manage-users

Documentation Neon x NodeJS
https://neon.tech/docs/guides/node

