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

                const subject = encodeURIComponent("Nouvelle demande d'offre");
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

    // Gestion des formulaires de contact
    function setupContactForm(formId, modalId) {
        const form = document.getElementById(formId);
        const modal = document.getElementById(modalId);
        
        if (form && modal) {
            form.addEventListener("submit", function(e) {
                e.preventDefault();
                
                const formData = new FormData(form);
                const data = {};
                
                for (let [key, value] of formData.entries()) {
                    data[key] = value;
                }
                
                // Gestion spéciale pour "autre" structure
                let structureText = data.structure;
                if (data.structure === "autre") {
                    const autreStructure = prompt("Veuillez préciser votre structure:");
                    if (autreStructure) {
                        structureText = `Autre: ${autreStructure}`;
                    }
                }
                
                // Construction du sujet et du corps de l'email
                let subject = "";
                let body = `Nom: ${data.nom}\nPrénom: ${data.prenom}\nEmail: ${data.email}\nStructure: ${structureText}\n`;
                
                if (data.fonction) {
                    body += `Fonction: ${data.fonction}\n`;
                }
                
                if (formId === "contactForm1") {
                    subject = "Demande d'information - Sensibilisations";
                    if (data.sensibilisation) {
                        body += `Sensibilisation: ${data.sensibilisation}\n`;
                    }
                } else if (formId === "contactForm2") {
                    subject = "Demande de devis - Formations immersives";
                    if (data.formation) {
                        body += `Formation: ${data.formation}\n`;
                    }
                    if (data.participants) {
                        body += `Nombre de participants: ${data.participants}\n`;
                    }
                    if (data.dates) {
                        body += `Dates souhaitées: ${data.dates}\n`;
                    }
                } else if (formId === "contactForm3") {
                    subject = "Demande d'information - Accompagnements";
                    if (data.accompagnement) {
                        body += `Type d'accompagnement: ${data.accompagnement}\n`;
                    }
                    if (data.contexte) {
                        body += `Contexte: ${data.contexte}\n`;
                    }
                }
                
                if (data.message) {
                    body += `\nMessage:\n${data.message}`;
                }
                
                // Ouverture du client email
                const encodedSubject = encodeURIComponent(subject);
                const encodedBody = encodeURIComponent(body);
                window.location.href = `mailto:risomes@outlook.fr?subject=${encodedSubject}&body=${encodedBody}`;
                
                // Fermeture de la modale et reset du formulaire
                modal.style.display = "none";
                document.body.style.overflow = "auto";
                form.reset();
            });
        }
    }

    setupContactForm("contactForm1", "contactModal1");
    setupContactForm("contactForm2", "contactModal2");
    setupContactForm("contactForm3", "contactModal3");

