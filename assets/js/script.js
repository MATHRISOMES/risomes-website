// Navigation mobile
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function() {
            navMenu.classList.toggle("active");
            
            // Animation du hamburger
            const spans = hamburger.querySelectorAll("span");
            spans.forEach((span, index) => {
                if (navMenu.classList.contains("active")) {
                    if (index === 0) span.style.transform = "rotate(45deg) translate(5px, 5px)";
                    if (index === 1) span.style.opacity = "0";
                    if (index === 2) span.style.transform = "rotate(-45deg) translate(7px, -6px)";
                } else {
                    span.style.transform = "none";
                    span.style.opacity = "1";
                }
            });
        });

        // Fermer le menu mobile lors du clic sur un lien
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                const spans = hamburger.querySelectorAll("span");
                spans.forEach(span => {
                    span.style.transform = "none";
                    span.style.opacity = "1";
                });
            });
        });
    }

    // Gestion de la modal "Recevoir nos offres" (page d\'accueil)
    const openModalBtn = document.getElementById("openModalBtn");
    const offerModal = document.getElementById("offerModal");
    const closeModalSpan = offerModal ? offerModal.querySelector(".close") : null;

    if (openModalBtn && offerModal && closeModalSpan) {
        openModalBtn.addEventListener("click", function() {
            offerModal.style.display = "block";
            document.body.style.overflow = "hidden";
        });

        closeModalSpan.addEventListener("click", function() {
            offerModal.style.display = "none";
            document.body.style.overflow = "auto";
        });

        window.addEventListener("click", function(event) {
            if (event.target == offerModal) {
                offerModal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });

        const offerForm = offerModal.querySelector("form");
        if (offerForm) {
            offerForm.addEventListener("submit", function(e) {
                e.preventDefault();
                const structure = document.getElementById("structure").value;
                let structureText = structure;
                if (structure === "autre") {
                    const autreStructure = prompt("Veuillez préciser votre structure:");
                    if (autreStructure) {
                        structureText = `Autre: ${autreStructure}`;
                    }
                }
                const fonction = document.getElementById("fonction").value;
                const email = document.getElementById("email").value;

                const subject = encodeURIComponent("Nouvelle demande d\'offre");
                const body = encodeURIComponent(`Structure: ${structureText}\nFonction: ${fonction}\nEmail: ${email}`);
                window.location.href = `mailto:risomes@outlook.fr?subject=${subject}&body=${body}`;
                offerModal.style.display = "none";
                document.body.style.overflow = "auto";
                offerForm.reset();
            });
        }
    }

    // Gestion des modales CGV et Données personnelles
    const cgvModal = document.getElementById("cgvModal");
    const dataModal = document.getElementById("dataModal");

    // Fonction pour ouvrir les modales CGV et données personnelles
    window.openCGVModal = function() {
        if (cgvModal) {
            cgvModal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    };

    window.openDataModal = function() {
        if (dataModal) {
            dataModal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    };

    // Gestion de la fermeture des modales CGV et données personnelles
    if (cgvModal) {
        const cgvCloseBtn = cgvModal.querySelector(".close");
        if (cgvCloseBtn) {
            cgvCloseBtn.addEventListener("click", function() {
                cgvModal.style.display = "none";
                document.body.style.overflow = "auto";
            });
        }
        
        window.addEventListener("click", function(event) {
            if (event.target == cgvModal) {
                cgvModal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    }

    if (dataModal) {
        const dataCloseBtn = dataModal.querySelector(".close");
        if (dataCloseBtn) {
            dataCloseBtn.addEventListener("click", function() {
                dataModal.style.display = "none";
                document.body.style.overflow = "auto";
            });
        }
        
        window.addEventListener("click", function(event) {
            if (event.target == dataModal) {
                dataModal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    }

    // Contenu des CGV
    const cgvContent = `CONDITIONS GÉNÉRALES DE VENTE (CGV)
Société
RISOMES – Réponses Innovantes Solutions Opérationnelles dans le Médico-Social
Forme juridique : Société par Actions Simplifiée (SAS)
Capital social : 5 000 €
Siège social : Coublevie
SIREN : 988 870 473 – RCS Grenoble
Numéro APE : 7022Z

1. Champ d’application
Les présentes Conditions Générales de Vente s’appliquent à toutes les prestations de conseil et d’accompagnement fournies par RISOMES aux collectivités publiques, entreprises et autres organismes, qu’ils soient publics ou privés, en France et à l’étranger.
Elles prévalent sur tout document du client, sauf dérogation expresse et écrite.

2. Objet de la mission
RISOMES intervient dans les domaines suivants :
•	Conseil et accompagnement stratégique et organisationnel des collectivités publiques, entreprises et organismes publics ou privés, notamment pour le contrôle, l’enquête administrative et l’inspection, ainsi que dans les secteurs social et médico-social.
•	Optimisation de l’efficience et de la qualité des missions confiées, en respect des obligations légales et réglementaires.
•	Services d’accompagnement personnalisé, veille juridique et formation.
•	Conception et sécurisation d’outils, supervision technique des processus.
•	Audit, contrôle interne et évaluation en établissements et services sociaux et médico-sociaux (ESSMS).
•	Management de transition dans le secteur médico-social.
•	Participation, par tous moyens, à des opérations financières, mobilières ou immobilières liées à son objet (création ou acquisition de sociétés, prise de participations, fusion, location-gérance, etc.).

3. Commande et contractualisation
Toute prestation fait l’objet d’un devis ou d’une lettre de mission précisant :
•	Les objectifs et le périmètre d’intervention
•	Les livrables attendus
•	Les modalités d’exécution et le calendrier
•	Les conditions financières
La commande est considérée comme ferme dès réception du devis signée ou de la lettre de mission signée par le client.
Toute modification ultérieure doit faire l’objet d’un avenant signé par les deux parties.

4. Prix et modalités de paiement
Les prix sont exprimés en euros hors taxes et soumis à la TVA au taux en vigueur.
•	Acompte : 30 % à la signature du devis, sauf accord contraire.
•	Solde : payable à réception de facture, selon les échéances définies.
•	Retard de paiement : pénalités de retard au taux légal en vigueur, majorées d’une indemnité forfaitaire de 40 € pour frais de recouvrement.

5. Délais et conditions d’exécution
RISOMES s’engage à mobiliser ses compétences et ressources pour mener la mission à bien.
Les délais indiqués sont indicatifs et peuvent être ajustés en cas de force majeure ou de retard imputable au client.
Le client s’engage à fournir les informations et accès nécessaires dans les délais requis.

6. Confidentialité
Chaque partie s’engage à garder strictement confidentielles toutes les informations échangées.
Cette obligation perdure pendant 5 ans après la fin de la prestation.

7. Propriété intellectuelle
Les livrables, outils, rapports et supports mis au point par RISOMES sont la propriété exclusive de la société.
Toute reproduction, diffusion ou exploitation sans autorisation écrite préalable est interdite.

8. Responsabilité
RISOMES est tenue à une obligation de moyens.
Elle ne saurait être tenue responsable des décisions ou actions du client fondées sur ses recommandations.
En tout état de cause, sa responsabilité est limitée au montant total facturé pour la mission concernée.

9. Sous-traitance
RISOMES pourra faire appel à des consultants ou prestataires externes qualifiés pour l’exécution totale ou partielle de la mission, dans le respect des présentes CGV.

10. Force majeure
Aucune partie ne pourra être tenue responsable en cas de survenance d’un événement de force majeure, rendant impossible l’exécution de ses obligations contractuelles.

11. Droit applicable et juridiction
Les présentes CGV sont soumises au droit français.
En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, compétence exclusive est attribuée au tribunal compétent du ressort du siège social de RISOMES (Tribunal administratif de Grenoble 2 Place de Verdun, Boîte Postale 1135 38022 Grenoble Cedex Téléphone : 04 76 42 90 00 ou Tribunal judiciaire de Grenoble Place Firmin Gautier BP 110 38019 GRENOBLE CEDEX Téléphone 04 38 21 21 21 ).
`;

    // Contenu des données personnelles
    const dataContent = `Politique de confidentialité  
Réponses Innovantes Solutions Opérationnelles dans le Médico-Social.
RISOMES
Société par Actions Simplifiée au capital de 5.000 €
Siège social : COUBLEVIE
SIREN 988 870 473 RCS GRENOBLE

ARTICLE 1 : PRÉAMBULE  
La présente politique de confidentialité a pour but d’informer les utilisateurs du site :  

•	Sur la manière dont sont collectées leurs données personnelles. Sont considérées comme des données personnelles, toute information permettant d’identifier un utilisateur. A ce titre, il peut s’agir : de ses noms et prénoms, de son âge, de son adresse postale ou email, de sa localisation ou encore de son adresse IP (liste non-exhaustive) ; 
•	Sur les droits dont ils disposent concernant ces données ;  
•	Sur la personne responsable du traitement des données à caractère personnel collectées et traitées ;  
•	Sur les destinataires de ces données personnelles ;  
•	Sur la politique du site en matière de cookies.  

ARTICLE 2 : PRINCIPES RELATIFS À LA COLLECTE ET AU TRAITEMENT DES DONNÉES PERSONNELLES   
Conformément à l’article 5 du Règlement européen 2016/679, les données à caractère personnel sont :   
•	Traitées de manière licite, loyale et transparente au regard de la personne concernée ; 
•	Collectées pour des finalités déterminées (cf. Article 3.1 des présentes), explicites et légitimes, et ne pas être traitées ultérieurement d’une manière incompatible avec ces finalités ; 
•	Adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées ; 
•	Exactes et, si nécessaire, tenues à jour. Toutes les mesures raisonnables doivent être prises pour que les données à caractère personnel qui sont inexactes, eu égard aux finalités pour lesquelles elles sont traitées, soient effacées ou rectifiées sans tarder ;  
•	Conservées sous une forme permettant l’identification des personnes concernées pendant une durée n’excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées ; 
•	Traitées de façon à garantir une sécurité appropriée des données collectées, y compris la protection contre le traitement non autorisé ou illicite et contre la perte, la destruction ou les dégâts d’origine accidentelle, à l’aide de mesures techniques ou organisationnelles appropriées.  

Le traitement n’est licite que si, et dans la mesure où, au moins une des conditions suivantes est remplie : 
•	La personne concernée a consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques ;
•	Le traitement est nécessaire à l’exécution d’un contrat auquel la personne concernée est partie ou à l’exécution de mesures précontractuelles prises à la demande de celle-ci ; 
•	Le traitement est nécessaire au respect d’une obligation légale à laquelle le responsable du traitement est soumis ; 
•	Le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d’une autre personne physique ; 
•	Le traitement est nécessaire à l’exécution d’une mission d’intérêt public ou relevant de l’exercice de l’autorité publique dont est investi le responsable du traitement ; 
•	Le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement ou par un tiers, à moins que ne prévalent les intérêts ou les libertés et droits fondamentaux de la personne concernée qui exigent une protection des données à caractère personnel, notamment lorsque la personne concernée est un enfant. 

ARTICLE 3 : DONNÉES À CARACTÈRE PERSONNEL COLLECTÉES ET TRAITÉES DANS LE CADRE DE LA NAVIGATION SUR LE SITE  

Article 3.1 : Données collectées  
Les données personnelles collectées dans le cadre de notre activité sont les suivantes :  mail, nom et prénom
La collecte et le traitement de ces données répond à la (aux) finalité(s) suivante(s) :   Suivi de la qualité du service et envoi des informations demandées

Article 3.2 : Mode de collecte des données 
Lorsque vous utilisez notre site, sont automatiquement collectées les données suivantes :  aucunes
D’autres données personnelles sont collectées lorsque vous effectuez les opérations suivantes sur la plateforme :  mail, noms, et prénom lors de la demande de devis
•	de la norme simplifiée NS-056 applicable aux fichiers des clients-prospects des assureurs ( Délib. CNIL no 2013-213, 11 juill. 2013 ) :
o	le principe est celui de la conservation le temps nécessaire à la gestion de la relation commerciale ;
o	les données des clients utilisées à des fins de prospection commerciale peuvent être conservées pendant un délai de 3 ans à compter de la fin de la relation commerciale ;
o	les données relatives à un prospect non-client peuvent être conservées pendant un délai de 3 ans à compter de leur collecte par le responsable du traitement ou à partir du dernier contact émanant du prospect ;
o	concernant la gestion des listes d’opposition à recevoir de la prospection : la durée de conservation est de 3 ans au minimum à compter de l’exercice du droit d’opposition ;
•	de la norme simplifiée NS-047 applicable à la gestion de la téléphonie sur le lieu de travail ( Délib. CNIL no 2005-019, 3 févr. 2005 ) : conservation des données pendant un an courant à la date de l’exigibilité des sommes dues en paiement des prestations des services de téléphonie.
La société est susceptible de conserver certaines données à caractère personnel au-delà des délais annoncés ci-dessus afin de remplir ses obligations légales ou réglementaires. 

Article 3.3 : Hébergement des données 
Le site RISOMES est hébergé par NETLIFY


ARTICLE 4 : RESPONSABLE DU TRAITEMENT DES DONNÉES ET DÉLÉGUÉ À LA PROTECTION DES DONNÉES  

Article 4.1 : Le responsable du traitement des données  
Les données à caractère personnelles sont collectées par Réponses Innovantes Solutions Opérationnelles dans le Médico-Social.
RISOMES
Société par Actions Simplifiée au capital de 5.000 €
Siège social : COUBLEVIE
SIREN 988 870 473 RCS GRENOBLE
 
Le responsable du traitement des données à caractère personnel peut être contacté de la manière suivante :  
Par mail : risomes@outlook.fr 

Article 4.2 : Le délégué à la protection des données  
Le délégué à la protection des données de l’entreprise ou du responsable est la SAS RISOMES
Si vous estimez, après nous avoir contactés, que vos droits “Informatique et Libertés”, ne sont pas respectés, vous pouvez adresser une information à la CNIL. 

ARTICLE 5 : LES DROITS DE L’UTILISATEUR EN MATIÈRE DE COLLECTE ET DE TRAITEMENT DES DONNÉES  
Tout utilisateur concerné par le traitement de ses données personnelles peut se prévaloir des droits suivants, en application du règlement européen 2016/679 et de la Loi Informatique et Liberté (Loi 78-17 du 6 janvier 1978) :   
•	Droit d’accès, de rectification et droit à l’effacement des données (posés respectivement aux articles 15, 16 et 17 du RGPD) ;  

•	Droit à la portabilité des données (article 20 du RGPD) ; 

•	Droit à la limitation (article 18 du RGPD) et à l’opposition du traitement des données (article 21 du RGPD) ;  

•	Droit de ne pas faire l’objet d’une décision fondée exclusivement sur un procédé automatisé ;  

•	Droit de déterminer le sort des données après la mort ;  

•	Droit de saisir l’autorité de contrôle compétente (article 77 du RGPD).  
Pour exercer vos droits, veuillez adresser votre demande par mail à risomes@outllook.fr.
Afin que le responsable du traitement des données puisse faire droit à sa demande, l’utilisateur peut être tenu de lui communiquer certaines informations telles que : ses noms et prénoms, son adresse e-mail ainsi que son numéro de compte, d’espace personnel ou d’abonné.  
Consultez le site cnil.fr pour plus d’informations sur vos droits. 

ARTICLE 6 : CONDITIONS DE MODIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ 

L’éditeur du site NETLIFY se réserve le droit de pouvoir modifier la présente Politique à tout moment afin d’assurer aux utilisateurs du site sa conformité avec le droit en vigueur.  
Les éventuelles modifications ne sauraient avoir d’incidence sur les achats antérieurement effectués sur le site, lesquels restent soumis à la Politique en vigueur au moment de l’achat et telle qu’acceptée par l’utilisateur lors de la validation de l’achat.  
L’utilisateur est invité à prendre connaissance de cette Politique à chaque fois qu’il utilise nos services, sans qu’il soit nécessaire de l’en prévenir formellement.  
La présente politique, éditée le 01 JUILLET 2025, a été mise à jour le 08 AOUT 2025.
`;

    // Injecter le contenu dans les modales
    if (cgvModal) {
        const cgvContentDiv = cgvModal.querySelector(".modal-text-content");
        if (cgvContentDiv) {
            cgvContentDiv.innerHTML = cgvContent.replace(/\n/g, '<br>');
        }
    }

    if (dataModal) {
        const dataContentDiv = dataModal.querySelector(".modal-text-content");
        if (dataContentDiv) {
            dataContentDiv.innerHTML = dataContent.replace(/\n/g, '<br>');
        }
    }

    // Fonction pour ouvrir les modales
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    }

    // Fonction pour fermer les modales
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // Gestion des clics sur les boutons de fermeture
    document.querySelectorAll(".modal .close").forEach(closeBtn => {
        closeBtn.addEventListener("click", function() {
            const modal = this.closest(".modal");
            if (modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    });

    // Fermer les modales en cliquant à l\'extérieur
    window.addEventListener("click", function(event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Rendre les fonctions globales pour pouvoir les appeler depuis le HTML
    window.openModal = openModal;
    window.closeModal = closeModal;

       // Gestion des modales de contact sur la page \'Nos solutions\'
    const openContactModalBtn1 = document.getElementById("openContactModalBtn1");
    const contactModal1 = document.getElementById("contact-modal-1");
    const closeModalSpan1 = contactModal1 ? contactModal1.querySelector(".close") : null;

    if (openContactModalBtn1 && contactModal1 && closeModalSpan1) {
        openContactModalBtn1.addEventListener("click", function() {
            contactModal1.style.display = "block";
            document.body.style.overflow = "hidden";
        });

        closeModalSpan1.addEventListener("click", function() {
            contactModal1.style.display = "none";
            document.body.style.overflow = "auto";
        });

        window.addEventListener("click", function(event) {
            if (event.target == contactModal1) {
                contactModal1.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });

        const contactForm1 = contactModal1.querySelector("form");
        if (contactForm1) {
            contactForm1.addEventListener("submit", function(e) {
                e.preventDefault();
                const email = document.getElementById("email1").value;
                const subject = document.getElementById("subject1").value;
                const message = document.getElementById("message1").value;

                const mailSubject = encodeURIComponent(subject);
                const mailBody = encodeURIComponent(`De: ${email}\nObjet: ${subject}\nMessage: ${message}`);
                window.location.href = `mailto:risomes@outlook.fr?subject=${mailSubject}&body=${mailBody}`;
                contactModal1.style.display = "none";
                document.body.style.overflow = "auto";
                contactForm1.reset();
            });
        }
    }

    const openContactModalBtn2 = document.getElementById("openContactModalBtn2");
    const contactModal2 = document.getElementById("contact-modal-2");
    const closeModalSpan2 = contactModal2 ? contactModal2.querySelector(".close") : null;

    if (openContactModalBtn2 && contactModal2 && closeModalSpan2) {
        openContactModalBtn2.addEventListener("click", function() {
            contactModal2.style.display = "block";
            document.body.style.overflow = "hidden";
        });

        closeModalSpan2.addEventListener("click", function() {
            contactModal2.style.display = "none";
            document.body.style.overflow = "auto";
        });

        window.addEventListener("click", function(event) {
            if (event.target == contactModal2) {
                contactModal2.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });

        const contactForm2 = contactModal2.querySelector("form");
        if (contactForm2) {
            contactForm2.addEventListener("submit", function(e) {
                e.preventDefault();
                const email = document.getElementById("email2").value;
                const subject = document.getElementById("subject2").value;
                const message = document.getElementById("message2").value;

                const mailSubject = encodeURIComponent(subject);
                const mailBody = encodeURIComponent(`De: ${email}\nObjet: ${subject}\nMessage: ${message}`);
                window.location.href = `mailto:risomes@outlook.fr?subject=${mailSubject}&body=${mailBody}`;
                contactModal2.style.display = "none";
                document.body.style.overflow = "auto";
                contactForm2.reset();
            });
        }
    }

    const openContactModalBtn3 = document.getElementById("openContactModalBtn3");
    const contactModal3 = document.getElementById("contact-modal-3");
    const closeModalSpan3 = contactModal3 ? contactModal3.querySelector(".close") : null;

    if (openContactModalBtn3 && contactModal3 && closeModalSpan3) {
        openContactModalBtn3.addEventListener("click", function() {
            contactModal3.style.display = "block";
            document.body.style.overflow = "hidden";
        });

        closeModalSpan3.addEventListener("click", function() {
            contactModal3.style.display = "none";
            document.body.style.overflow = "auto";
        });

        window.addEventListener("click", function(event) {
            if (event.target == contactModal3) {
                contactModal3.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });

        const contactForm3 = contactModal3.querySelector("form");
        if (contactForm3) {
            contactForm3.addEventListener("submit", function(e) {
                e.preventDefault();
                const email = document.getElementById("email3").value;
                const subject = document.getElementById("subject3").value;
                const message = document.getElementById("message3").value;

                const mailSubject = encodeURIComponent(subject);
                const mailBody = encodeURIComponent(`De: ${email}\nObjet: ${subject}\nMessage: ${message}`);
                window.location.href = `mailto:risomes@outlook.fr?subject=${mailSubject}&body=${mailBody}`;
                contactModal3.style.display = "none";
                document.body.style.overflow = "auto";
                contactForm3.reset();
            });
        }
    }

    // Gestion du bouton téléphone sur la page contact
    const showPhoneBtn = document.getElementById("showPhoneBtn");
    const phoneNumber = document.getElementById("phoneNumber");

    if (showPhoneBtn && phoneNumber) {
        showPhoneBtn.addEventListener("click", function() {
            phoneNumber.style.display = "block";
            showPhoneBtn.style.display = "none";
        });
    }

    // Gestion du formulaire de devis sur la page contact
    const devisForm = document.getElementById("devis-form");
    if (devisForm) {
        devisForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const solutions = document.getElementById("solutions").value;
            const message = document.getElementById("message").value;

            const subject = encodeURIComponent("Demande de devis");
            const body = encodeURIComponent(`De: ${email}\nSolutions: ${solutions}\nMessage: ${message}`);
            window.location.href = `mailto:risomes@outlook.fr?subject=${subject}&body=${body}`;
            devisForm.reset();
        });
    }

    // Animations au scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll(".solution-card, .proposition-item, .team-member, .benefit-item");
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        elements.forEach(element => {
            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
            element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            observer.observe(element);
        });
    }

    // Initialiser les animations au chargement
    animateOnScroll();

    // Smooth scroll pour les ancres
    const links = document.querySelectorAll("a[href^=\"#\"]");
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector(".header").offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Effet parallaxe léger sur le hero
    document.addEventListener("scroll", function() {
        const hero = document.querySelector(".hero");
        const heroPage = document.querySelector(".hero-page");
        const scrolled = window.pageYOffset;
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        if (heroPage) {
            const rate = scrolled * -0.5;
            heroPage.style.transform = `translateY(${rate}px)`;
        }
    });

    // Gestion du focus pour l\'accessibilité
    const focusableElements = document.querySelectorAll(
        "a, button, input, textarea, select, [tabindex]:not([tabindex=\"-1\"])"
    );
    
    focusableElements.forEach(element => {
        element.addEventListener("focus", function() {
            this.style.outline = "2px solid var(--primary-color)";
            this.style.outlineOffset = "2px";
        });
        
        element.addEventListener("blur", function() {
            this.style.outline = "none";
        });
    });

    // Validation des formulaires en temps réel
    const emailInputs = document.querySelectorAll("input[type=\"email\"]");
    
    emailInputs.forEach(input => {
        input.addEventListener("blur", function() {
            const email = this.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && !emailRegex.test(email)) {
                this.style.borderColor = "#e53e3e";
                this.style.boxShadow = "0 0 0 1px #e53e3e";
            } else {
                this.style.borderColor = "#e2e8f0";
                this.style.boxShadow = "none";
            }
        });
    });

    // Gestion des erreurs d\'images
    const images = document.querySelectorAll("img");
    
    images.forEach(img => {
        img.addEventListener("error", function() {
            this.style.display = "none";
            console.warn("Image non trouvée:", this.src);
        });
    });

    // Performance : lazy loading pour les images
    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute("data-src");
                        observer.unobserve(img);
                    }
                }
            });
        });

        const lazyImages = document.querySelectorAll("img[data-src]");
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

