// Navigation sur mobile
document.addEventListener("DOMContentLoaded", function() {

    // Masquage initial des blocs dépliables (Nos solutions) — fait ici en JS
    // uniquement, jamais en dur dans le HTML, pour que le contenu reste
    // consultable si JavaScript est indisponible (RGAA 7.2 / WCAG 4.1.2).
    ["section-sensibilisations", "section-formations-immersives", "section-accompagnements"].forEach(function(id) {
        const section = document.getElementById(id);
        if (section) section.style.display = "none";
    });

    // Piège de focus + restauration du focus pour toutes les modales du site
    // (accessibilité clavier : le focus reste dans la boîte tant qu'elle est
    // ouverte, et revient sur l'élément qui l'a ouverte à la fermeture)
    (function setupModalFocusTrap() {
        const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
        let lastFocusedBeforeModal = null;

        document.querySelectorAll(".modal").forEach(function(modal) {
            const observer = new MutationObserver(function() {
                if (modal.style.display === "block") {
                    lastFocusedBeforeModal = document.activeElement;
                    const focusables = modal.querySelectorAll(focusableSelector);
                    if (focusables.length) focusables[0].focus();
                } else if (lastFocusedBeforeModal) {
                    lastFocusedBeforeModal.focus();
                    lastFocusedBeforeModal = null;
                }
            });
            observer.observe(modal, { attributes: true, attributeFilter: ["style"] });
        });

        document.addEventListener("keydown", function(event) {
            if (event.key !== "Tab") return;
            const openModal = Array.from(document.querySelectorAll(".modal")).find(function(m) {
                return m.style.display === "block";
            });
            if (!openModal) return;
            const focusables = Array.from(openModal.querySelectorAll(focusableSelector));
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        });
    })();

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" || event.key === "Esc") {
            document.querySelectorAll(".modal").forEach(function(modal) {
                if (modal.style.display === "block") {
                    modal.style.display = "none";
                    document.body.style.overflow = "auto";
                }
            });
        }
    });
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

    // Fermeture générique : chaque modale gère sa propre croix et son propre clic extérieur
    [cgvModal, dataModal, mentionsLegalesModal].forEach(function(modal) {
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

    // Modale de prise de rendez-vous (encart "besoins spécifiques")
    const rdvModal = document.getElementById("rdvModal");
    const openRdvModalBtn = document.getElementById("openRdvModalBtn");
    if (openRdvModalBtn && rdvModal) {
        openRdvModalBtn.addEventListener("click", function() {
            rdvModal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    }

    // Modale "Nos méthodes pédagogiques"
    const methodesPedagogiquesModal = document.getElementById("methodesPedagogiquesModal");
    const openMethodesPedagogiquesBtn = document.getElementById("openMethodesPedagogiquesBtn");
    if (openMethodesPedagogiquesBtn && methodesPedagogiquesModal) {
        openMethodesPedagogiquesBtn.addEventListener("click", function() {
            methodesPedagogiquesModal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    }

    // Modale "Vos besoins et prérequis"
    const besoinsPrerequisModal = document.getElementById("besoinsPrerequisModal");
    const openBesoinsPrerequisBtn = document.getElementById("openBesoinsPrerequisBtn");
    if (openBesoinsPrerequisBtn && besoinsPrerequisModal) {
        openBesoinsPrerequisBtn.addEventListener("click", function() {
            besoinsPrerequisModal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    }

    // Blocs dépliables "Les sensibilisations / formations immersives / accompagnements"
    const solutionSectionIds = ["section-sensibilisations", "section-formations-immersives", "section-accompagnements"];
    const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    function setSolutionSection(sectionId, open) {
        const section = document.getElementById(sectionId);
        if (!section) return;
        section.style.display = open ? "block" : "none";
        document.querySelectorAll('[aria-controls="' + sectionId + '"]').forEach(function(btn) {
            btn.setAttribute("aria-expanded", String(open));
            btn.classList.toggle("active", open);
        });
    }

    // Blocs dépliables "Les sensibilisations / formations immersives / accompagnements" :
    // un seul bloc ouvert à la fois. Cliquer sur un autre bloc referme le précédent.
    window.toggleSolutionSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;
        if (section.style.display !== "none") {
            window.closeSolutionSection(sectionId);
            return;
        }
        solutionSectionIds.forEach(function(id) {
            if (id !== sectionId) setSolutionSection(id, false);
        });
        setSolutionSection(sectionId, true);
        section.scrollIntoView({ behavior: scrollBehavior, block: "start" });
    };

    // Replie un bloc et ramène l'utilisateur sur les trois grands blocs du haut
    window.closeSolutionSection = function(sectionId) {
        setSolutionSection(sectionId, false);
        const topGrid = document.querySelector(".solutions-nav-grid:not(.solutions-nav-grid-small)");
        if (topGrid) {
            topGrid.scrollIntoView({ behavior: scrollBehavior, block: "center" });
            const topBtn = topGrid.querySelector('[aria-controls="' + sectionId + '"]');
            if (topBtn) topBtn.focus({ preventScroll: true });
        }
    };

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
    setupContactModalClose(rdvModal);
    setupContactModalClose(methodesPedagogiquesModal);
    setupContactModalClose(besoinsPrerequisModal);

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
