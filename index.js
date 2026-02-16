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
// closing popup
document.addEventListener("click", () => {
    popup.classList.remove("active");
});
