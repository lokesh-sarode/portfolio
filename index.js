const text = [
    "Web Developer",
    "Python Developer",
    "Cybersecurity Specialist",
    "VAPT Engineer"
]

let count = 0;
let index = 0;

let currentText = "";
let letter = "";

(function type() {
    if (count === text.length) count = 0;

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
        }, 1000);
    }
    setTimeout(type, 200);
}
)();


const donwloadBtn = document.getElementById(".downloadBtn");
donwloadBtn.addEventListener("click", () => {
    document.getElementById("popup").classList.toggle(".active");
})