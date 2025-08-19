# Guide de Déploiement Netlify - RISOMES

## 🎯 Déploiement Rapide (5 minutes)

### Étape 1 : Préparation
1. Téléchargez le dossier complet `risomes-website`
2. Vérifiez que tous les fichiers sont présents :
   - `index.html`
   - `qui-sommes-nous.html`
   - `nos-solutions.html`
   - `contact.html`
   - `intranet.html`
   - Dossier `assets/` avec CSS, JS et images

### Étape 2 : Compte Netlify
1. Allez sur [netlify.com](https://netlify.com)
2. Cliquez sur "Sign up" (gratuit)
3. Créez votre compte avec email ou GitHub

### Étape 3 : Déploiement
1. **Glissez-déposez** le dossier `risomes-website` sur Netlify
2. **Attendez 30 secondes** le déploiement
3. **Récupérez votre URL** (ex: `https://nom-aleatoire.netlify.app`)

### Étape 4 : Personnalisation (Optionnel)
1. Changez le nom du site : Settings > Site details > Change site name
2. Ajoutez un domaine personnalisé : Settings > Domain management

## 🔄 Mises à Jour du Site

### Méthode Simple (Glisser-Déposer)
1. Modifiez vos fichiers localement
2. Glissez-déposez le dossier mis à jour sur Netlify
3. Le site se met à jour automatiquement

### Méthode Avancée (Git)
1. Connectez votre repository GitHub/GitLab
2. Chaque modification dans le repository met à jour le site automatiquement

## 📝 Modifications Courantes

### Changer l'Email de Contact
Dans `contact.html`, ligne ~47 :
```html
<a href="mailto:VOTRE-EMAIL@domaine.com">VOTRE-EMAIL@domaine.com</a>
```

### Modifier le Numéro SIRET
Dans `contact.html`, section mentions légales :
```html
<p><strong>SIRET N° :</strong> VOTRE-NUMERO-SIRET</p>
```

### Changer les Couleurs du Site
Dans `assets/css/style.css`, lignes 9-13 :
```css
:root {
    --primary-color: #607d8b;    /* Bleu-gris-vert plus filigrane */
    --secondary-color: #f4a261;  /* Orange */
    --accent-color: #e76f51;     /* Rouge */
}
```

### Remplacer les Images
1. Remplacez les fichiers dans `assets/images/`
2. Gardez les mêmes noms de fichiers
3. Re-déployez sur Netlify

### Suppression du Surlignement du Nom RISOMES
Le surlignement du nom RISOMES dans l'en-tête a été supprimé via le CSS. Le logo et le nom restent cliquables pour revenir à la page d'accueil.

## 🛡️ Sécurité et Performance

### Inclus Automatiquement
- ✅ Certificat SSL gratuit
- ✅ CDN mondial
- ✅ Protection DDoS
- ✅ Compression automatique
- ✅ Headers de sécurité

### Formulaires de Contact
Pour activer les formulaires Netlify (gratuit) :
1. Ajoutez `netlify` dans les balises `<form>`
2. Exemple : `<form netlify class="contact-form">`
3. Les soumissions apparaîtront dans votre tableau de bord Netlify

## 📊 Analytics et Suivi

### Google Analytics (Optionnel)
Ajoutez ce code avant `</head>` dans chaque page HTML :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

### Netlify Analytics (Payant)
- Statistiques détaillées
- Pas besoin de code supplémentaire
- Activable dans Settings > Analytics

## 🆘 Résolution de Problèmes

### Le Site Ne S'Affiche Pas
1. Vérifiez que `index.html` est à la racine
2. Contrôlez les erreurs dans Deploy log
3. Assurez-vous que tous les fichiers sont uploadés

### Les Images Ne S'Affichent Pas
1. Vérifiez les chemins dans le code HTML
2. Assurez-vous que les images sont dans `assets/images/`
3. Respectez la casse des noms de fichiers

### Les Styles CSS Ne Fonctionnent Pas
1. Vérifiez que `assets/css/style.css` existe
2. Contrôlez les liens CSS dans les fichiers HTML
3. Videz le cache du navigateur (Ctrl+F5)

### Erreur 404 sur les Pages
1. Vérifiez que tous les fichiers HTML sont à la racine
2. Contrôlez l'orthographe des noms de fichiers
3. Le fichier `netlify.toml` gère les redirections

## 💰 Coûts Netlify

### Plan Gratuit (Suffisant pour RISOMES)
- ✅ 100 GB de bande passante/mois
- ✅ Sites illimités
- ✅ Déploiements illimités
- ✅ SSL gratuit
- ✅ Formulaires (100 soumissions/mois)

### Plans Payants (Si Besoin)
- **Pro** (19$/mois) : Plus de bande passante, analytics
- **Business** (99$/mois) : Fonctionnalités avancées

## 📞 Support

### Documentation Officielle
- [docs.netlify.com](https://docs.netlify.com)
- Guides détaillés en anglais

### Support Netlify
- Chat en direct (plans payants)
- Forum communautaire
- Email support

### Support Technique Local
Pour des modifications importantes, contactez :
- Un développeur web local
- Une agence web
- Un freelance spécialisé

---

**🎉 Félicitations ! Votre site RISOMES est maintenant en ligne et prêt à accueillir vos visiteurs.**


