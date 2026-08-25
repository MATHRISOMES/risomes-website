// Navigation sur mobile
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

    // Gestion de la modal "Recevoir nos offres" (page d'accueil)
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
            offerForm.addEventListener("submit", function() {
                // Netlify Forms gère nativement la soumission (data-netlify="true").
                // On laisse uniquement passer le cas "Autre" pour compléter le champ
                // structure avant l'envoi réel — sans preventDefault().
                const structure = document.getElementById("structure").value;
                if (structure === "autre") {
                    const autreStructure = prompt("Veuillez préciser votre structure:");
                    if (autreStructure) {
                        document.getElementById("structure").value = `Autre: ${autreStructure}`;
                    }
                }
            });
        }
    }

    // ============================================================
    // NOTE — Formulaire "Demander un devis" (id="devis-form",
    // page contact.html) :
    // Aucun gestionnaire JS n'est nécessaire ici. Ce formulaire est
    // géré nativement par Netlify Forms via les attributs
    // data-netlify="true" et name="contact" ajoutés directement
    // dans contact.html. Le bloc JavaScript qui interceptait
    // auparavant la soumission (e.preventDefault() + mailto:) a été
    // supprimé : c'est précisément ce qui empêchait l'envoi.
    // ============================================================

    // Gestion des modales CGV, Données personnelles, Mentions légales et Règlement intérieur
    const cgvModal = document.getElementById("cgvModal");
    const dataModal = document.getElementById("dataModal");
    const mentionsLegalesModal = document.getElementById("mentionsLegalesModal");
    const reglementModal = document.getElementById("reglementModal");

    // Fonction pour ouvrir les modales
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

    window.openMentionsLegalesModal = function() {
        if (mentionsLegalesModal) {
            mentionsLegalesModal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    };

    window.openReglementModal = function() {
        if (reglementModal) {
            reglementModal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    };

    // Fermeture générique : chaque modale gère sa propre croix et son propre clic extérieur
    [cgvModal, dataModal, mentionsLegalesModal, reglementModal].forEach(function(modal) {
        if (!modal) return;
        const closeBtn = modal.querySelector(".close");
        if (closeBtn) {
            closeBtn.addEventListener("click", function() {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            });
        }
        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
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

    // Gestion des erreurs d'images
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


    // Gestion des modales de contact pour la page nos-solutions
    const contactModal1 = document.getElementById("contactModal1");
    const contactModal2 = document.getElementById("contactModal2");
    const contactModal3 = document.getElementById("contactModal3");
    
    const openContactModalBtn1 = document.getElementById("openContactModalBtn1");
    const openContactModalBtn2 = document.getElementById("openContactModalBtn2");
    const openContactModalBtn3 = document.getElementById("openContactModalBtn3");

    // Fonction pour ouvrir les modales de contact
    if (openContactModalBtn1 && contactModal1) {
        openContactModalBtn1.addEventListener("click", function() {
            contactModal1.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    }

    if (openContactModalBtn2 && contactModal2) {
        openContactModalBtn2.addEventListener("click", function() {
            contactModal2.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    }

    if (openContactModalBtn3 && contactModal3) {
        openContactModalBtn3.addEventListener("click", function() {
            contactModal3.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    }

    // Fonction pour fermer les modales de contact
    function setupContactModalClose(modal) {
        if (modal) {
            const closeBtn = modal.querySelector(".close");
            if (closeBtn) {
                closeBtn.addEventListener("click", function() {
                    modal.style.display = "none";
                    document.body.style.overflow = "auto";
                });
            }
            
            window.addEventListener("click", function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    document.body.style.overflow = "auto";
                }
            });
        }
    }

    setupContactModalClose(contactModal1);
    setupContactModalClose(contactModal2);
    setupContactModalClose(contactModal3);

    // Gestion des formulaires de contact — Netlify Forms gère nativement la
    // soumission (data-netlify="true" ajouté directement dans le HTML).
    // On conserve uniquement la logique "Autre" pour compléter le champ
    // structure avant l'envoi réel, sans preventDefault().
    function setupContactForm(formId) {
        const form = document.getElementById(formId);

        if (form) {
            form.addEventListener("submit", function() {
                const structureField = form.querySelector('[name="structure"]');
                if (structureField && structureField.value === "autre") {
                    const autreStructure = prompt("Veuillez préciser votre structure:");
                    if (autreStructure) {
                        structureField.value = `Autre: ${autreStructure}`;
                    }
                }
            });
        }
    }

    setupContactForm("contactForm1");
    setupContactForm("contactForm2");
    setupContactForm("contactForm3");
