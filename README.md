# Site Web RISOMES - Guide de Déploiement et de Gestion

Ce document fournit les instructions nécessaires pour déployer et gérer le site web RISOMES sur Netlify.

## Structure du Projet

Le projet est structuré comme suit :

```
risomes-website/
├── index.html               # Page d'accueil
├── qui-sommes-nous.html     # Page "Qui sommes-nous ?"
├── nos-solutions.html       # Page "Nos solutions"
├── contact.html             # Page "Nous contacter"
├── intranet.html            # Page "Intranet"
├── netlify.toml             # Fichier de configuration Netlify
├── README.md                # Ce fichier
├── GUIDE-NETLIFY.md         # Guide détaillé pour Netlify
└── assets/
    ├── css/
    │   └── style.css        # Styles CSS du site
    ├── js/
    │   └── script.js        # Scripts JavaScript du site
    └── images/              # Images du site (logos, photos, etc.)
        ├── Fichier14@2x.png
        ├── Fichier15@2x.png
        ├── Fichier16@2x.png
        ├── PrésentationBC.jpg
        └── PrésentationMT.jpg
```

## Modifications Récentes

Les modifications suivantes ont été apportées au site web :

*   **Page d'accueil (index.html) :**
    *   Suppression du texte "RISOMES (Réponses innovantes, Solutions opérationnelles dans le MEdico-Social)" en blanc.
    *   Suppression des virgules après "opérationnalité" et "intra" dans la section "C'est pourquoi RISOMES vous propose".
    *   Refonte de la section "Vos enjeux" avec une nouvelle structuration visuelle (icônes rondes) et ajustement de la mise en page.
    *   Suppression des puces avant les pictogrammes dans la partie "Notre défi, répondre à vos enjeux".
    *   Correction de la position des deux points ":" après "connaître" dans la section "Notre défi".
    *   Correction du bouton "Recevoir nos offres" pour ouvrir une boîte de dialogue avec un formulaire d'inscription (menu déroulant pour "ma structure", champ libre pour "ma fonction" et "adresse mail").
    *   Ajout de liens de renvoi vers la page "Nos solutions" avec des ancres spécifiques pour "accompagnements stratégiques", "formations immersives" et "soutien à la structuration".

*   **Page "Qui sommes-nous ?" (qui-sommes-nous.html) :**
    *   Ajout des photos de Blandine Collin et Mathilde Théry à côté de leurs présentations respectives.
    *   Ajustement des interlignes entre les paragraphes pour une meilleure lisibilité.
    *   Amélioration de la fluidité et de la présentation de la section "Les atouts de notre binôme".

*   **Fichier CSS (style.css) :**
    *   Ajustement de la couleur principale vers un bleu-gris-vert plus filigrane.
    *   Suppression de la justification du texte.
    *   Mise à jour des styles pour les nouvelles icônes rondes et la mise en page de la section "Vos enjeux".
    *   Ajustement des styles pour les photos de l'équipe.
    *   Intégration de la police Poppins.

*   **Fichier JavaScript (script.js) :**
    *   Implémentation de la logique pour la modal du bouton "Recevoir nos offres".
    *   Ajout d'un retour à l'accueil en cliquant sur le favicon (logo en haut à gauche) sur toutes les pages.

## Déploiement sur Netlify

Pour déployer ce site sur Netlify, suivez les étapes décrites dans le `GUIDE-NETLIFY.md`.

## Gestion et Modifications

Le site est construit en HTML, CSS et JavaScript pur, ce qui le rend facile à modifier. Vous pouvez éditer les fichiers directement avec un éditeur de texte. Pour des modifications plus complexes ou l'ajout de nouvelles fonctionnalités, des connaissances en développement web seront utiles.

Pour toute question ou assistance, n'hésitez pas à me contacter.

