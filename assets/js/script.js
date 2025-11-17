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

// Fonctions globales pour les modales du footer
function openCGVModal() {
    const cgvModal = document.getElementById("cgvModal");
    const closeModalSpanCGV = cgvModal ? cgvModal.querySelector(".close") : null;

    if (cgvModal) {
        cgvModal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    if (closeModalSpanCGV) {
        closeModalSpanCGV.onclick = function() {
            cgvModal.style.display = "none";
            document.body.style.overflow = "auto";
        };
    }

    window.onclick = function(event) {
        if (event.target == cgvModal) {
            cgvModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
}
    const cgvModal = document.getElementById("cgvModal");
    if (cgvModal) {
        cgvModal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function openDataModal() {
    const dataModal = document.getElementById("dataModal");
    const closeModalSpanData = dataModal ? dataModal.querySelector(".close") : null;

    if (dataModal) {
        dataModal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    if (closeModalSpanData) {
        closeModalSpanData.onclick = function() {
            dataModal.style.display = "none";
            document.body.style.overflow = "auto";
        };
    }

    window.onclick = function(event) {
        if (event.target == dataModal) {
            dataModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
}
    const dataModal = document.getElementById("dataModal");
    if (dataModal) {
        dataModal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

// Smooth scroll pour les ancres
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[href^=\"#\"]");
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            const hash = this.hash;
            if (hash) {
                e.preventDefault();
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    const headerOffset = 80; // Ajuster en fonction de la hauteur de votre header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});

