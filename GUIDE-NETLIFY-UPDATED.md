## Guide de Déploiement et de Gestion du Site RISOMES sur Netlify (Mise à Jour)

Ce guide vous aidera à déployer et gérer votre site web RISOMES sur Netlify, en tenant compte des dernières modifications.

### 1. Préparation des Fichiers

Vous avez reçu un fichier ZIP nommé `risomes-website-updated.zip`. Ce fichier contient la version la plus récente de votre site web, incluant toutes les modifications demandées :

*   **Favicon et Logos :** Le favicon (`Fichier15@2x.png`) a été intégré à côté du logo court RISOMES (`Fichier14@2x.png`) dans l'en-tête de toutes les pages (`index.html`, `qui-sommes-nous.html`, `nos-solutions.html`, `contact.html`, `intranet.html`).
*   **Photos de Présentation :** Les photos de Mathilde Théry (`MT.jpg`) et Blandine Collin (`BC.jpg`) ont été mises à jour sur la page "Qui sommes-nous ?". La photo de présentation de la page d'accueil a été retirée.
*   **Fonctionnalités JavaScript :** Les scripts JavaScript ont été mis à jour pour gérer les boîtes de dialogue des formulaires de contact et d'offres.
*   **Mentions Légales :** Les mentions légales sur la page de contact ont été mises à jour.
*   **Intranet :** Un système d'administration pour l'intranet a été créé. Il est accessible via l'URL temporaire fournie lors des tests.

**Avant de déployer, assurez-vous de décompresser ce fichier ZIP.**

### 2. Déploiement sur Netlify

Netlify est une plateforme d'hébergement et de déploiement web qui simplifie la mise en ligne de sites statiques et d'applications web. Voici les étapes pour déployer votre site :

1.  **Connectez-vous à Netlify :**
    *   Allez sur [app.netlify.com](https://app.netlify.com/) et connectez-vous à votre compte. Si vous n'en avez pas, vous pouvez en créer un gratuitement.

2.  **Ajoutez un nouveau site :**
    *   Cliquez sur le bouton "Add new site" (Ajouter un nouveau site) en haut à droite.
    *   Sélectionnez "Deploy manually" (Déployer manuellement).

3.  **Glissez-déposez votre dossier :**
    *   Prenez le dossier `risomes-website` (celui que vous avez décompressé à partir du ZIP) et glissez-le directement dans la zone de glisser-déposer de Netlify.
    *   Netlify détectera automatiquement les fichiers de votre site et commencera le déploiement.

4.  **Configuration initiale (si nécessaire) :**
    *   Netlify devrait automatiquement détecter votre fichier `netlify.toml` qui contient les configurations de base pour le déploiement.
    *   Si vous rencontrez des problèmes, assurez-vous que le dossier racine de votre site est bien `risomes-website`.

5.  **Site en ligne :**
    *   Une fois le déploiement terminé, Netlify vous fournira une URL temporaire (par exemple, `https://random-name-12345.netlify.app`). Votre site est maintenant en ligne !

### 3. Configuration du Domaine Personnalisé

Pour utiliser votre propre nom de domaine (par exemple, `www.votresite.fr`) :

1.  **Dans Netlify :**
    *   Allez dans les paramètres de votre site (Site settings).
    *   Cliquez sur "Domain management" (Gestion des domaines) dans le menu de gauche.
    *   Cliquez sur "Add custom domain" (Ajouter un domaine personnalisé).
    *   Suivez les instructions pour ajouter votre domaine. Netlify vous guidera pour configurer les enregistrements DNS chez votre fournisseur de domaine (registrar).

2.  **Chez votre fournisseur de domaine :**
    *   Connectez-vous au panneau de contrôle de votre fournisseur de domaine (par exemple, GoDaddy, OVH, Gandi).
    *   Accédez à la section de gestion des DNS.
    *   Modifiez ou ajoutez les enregistrements DNS comme indiqué par Netlify (généralement un enregistrement `CNAME` pour `www` et un enregistrement `A` pour le domaine racine).
    *   Les modifications DNS peuvent prendre quelques minutes à plusieurs heures pour se propager.

### 4. Gestion des Mises à Jour

Pour mettre à jour votre site après avoir apporté des modifications locales :

1.  **Modifiez vos fichiers locaux :**
    *   Apportez les modifications nécessaires aux fichiers HTML, CSS, JavaScript, etc., dans votre dossier `risomes-website`.

2.  **Déployez à nouveau sur Netlify :**
    *   Retournez sur le tableau de bord de votre site dans Netlify.
    *   Allez dans l'onglet "Deploys" (Déploiements).
    *   Glissez-déposez le dossier `risomes-website` mis à jour dans la zone de déploiement, ou utilisez l'intégration Git si vous avez configuré un dépôt (recommandé pour les mises à jour fréquentes).
    *   Netlify détectera les changements et déploiera la nouvelle version de votre site.

### 5. Gestion de l'Intranet

Le système d'administration de l'intranet est une application Flask qui tourne sur un serveur séparé. Pour le moment, il est accessible via une URL temporaire. Si vous souhaitez un déploiement permanent pour l'intranet, veuillez me le faire savoir. Cela nécessitera une configuration de serveur plus avancée.

### 6. Dépannage et Support

*   **Problèmes de déploiement :** Vérifiez l'onglet "Deploys" sur Netlify pour voir les logs de construction. Ils peuvent indiquer la cause du problème.
*   **Site non visible :** Assurez-vous que vos enregistrements DNS sont correctement configurés et que la propagation DNS est terminée.
*   **Questions :** N'hésitez pas à me contacter si vous avez des questions ou si vous rencontrez des difficultés. Je suis là pour vous aider à chaque étape.

