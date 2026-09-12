// =========================
// HAMBURGER MENU
// =========================

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {

    menuIcon.classList.toggle("bx-x");

    navbar.classList.toggle("active");

};


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.onclick = () => {

        menuIcon.classList.remove("bx-x");

        navbar.classList.remove("active");

    };

});


// =========================
// ACTIVE NAVBAR
// =========================

const sections = document.querySelectorAll("section");

window.onscroll = () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

};


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.querySelector("#contact-form");

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        alert(
            "Pesan berhasil diisi!"
        );

        contactForm.reset();

    }
);