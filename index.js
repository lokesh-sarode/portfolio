
// Scroll reveal animation
document.addEventListener("DOMContentLoaded", function () {

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    reveals.forEach(reveal => {
        const rect = reveal.getBoundingClientRect();

        // If already in viewport on load
        if (rect.top < window.innerHeight) {
            reveal.classList.add("active");
        } else {
            observer.observe(reveal);
        }
    });

});

const text = [
    "Web Developer",
    "Python Developer",
    "Cybersecurity Specialist",
    "VAPT Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, index++);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
            type();   // Call again AFTER delay
        }, 1000);
    } else {
        setTimeout(type, 120); // typing speed
    }
}

type();




const donwloadBtn = document.getElementById("downloadBtn");
const popup = document.getElementById("popup");

donwloadBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    popup.classList.toggle("active");
})

popup.addEventListener("click", (e) => {
    e.stopPropagation();
})


const hamburgerBtn = document.getElementById("hamburger");
const hamburgerPopup = document.getElementById("hamburger-popup");

hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburgerPopup.classList.toggle("active");
})


hamburgerPopup.addEventListener("click", (e) => {
    e.stopPropagation();
})


// closing popup
document.addEventListener("click", () => {
    popup.classList.remove("active");
    hamburgerPopup.classList.remove("active");
});

