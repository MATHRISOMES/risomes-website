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

    // Gestion de la modal "Recevoir nos offres" (rendu global)
    const openModalBtn = document.getElementById("openModalBtn");
    const offerModal = document.getElementById("offerModal");
    const closeModalSpan = offerModal ? offerModal.querySelector(".close") : null;

    if (openModalBtn && offerModal && closeModalSpan) {
        openModalBtn.addEventListener("click", function() {
            offerModal.style.display = "block";
            document.body.style.overflow = "hidden"; // Empêche le défilement du corps
        });

        closeModalSpan.addEventListener("click", function() {
            offerModal.style.display = "none";
            document.body.style.overflow = "auto"; // Rétablit le défilement du corps
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

       // Gestion des modales de contact sur la page 'Nos solutions'
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
});
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
document.addEventListener("DOMContentLoaded", animateOnScroll);

// Smooth scroll pour les ancres
document.addEventListener("DOMContentLoaded", function() {
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
document.addEventListener("DOMContentLoaded", function() {
    // Améliorer la navigation au clavier
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
});

// Validation des formulaires en temps réel
document.addEventListener("DOMContentLoaded", function() {
    const emailInputs = document.querySelectorAll("input[type=\"email\"]");
    
    emailInputs.forEach(input => {
        input.addEventListener("blur", function() {
            const email = this.value;
            const emailRegex = /^[^\]+\@[^\]+\.[^\]+$/;
            
            if (email && !emailRegex.test(email)) {
                this.style.borderColor = "#e53e3e";
                this.style.boxShadow = "0 0 0 1px #e53e3e";
            } else {
                this.style.borderColor = "#e2e8f0";
                this.style.boxShadow = "none";
            }
        });
    });
});

// Gestion des erreurs d\'images
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    
    images.forEach(img => {
        img.addEventListener("error", function() {
            this.style.display = "none";
            console.warn("Image non trouvée:", this.src);
        });
    });
});

// Performance : lazy loading pour les images
document.addEventListener("DOMContentLoaded", function() {
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





