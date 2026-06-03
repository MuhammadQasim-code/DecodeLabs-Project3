const themeToggle = document.getElementById("themeToggle");
const aboutBtn = document.querySelector(".about-btn");
const aboutText = document.querySelector(".about-text")
const eduInfo = document.querySelector(".edu-info")
const eduBtn = document.querySelector(".edu-btn")
const contactBtn = document.querySelector(".contact-btn")
const contactInfo = document.querySelector(".contact-info")
const aboutHeroBtn = document.querySelectorAll(".hero-buttons .primary-btn")[0];
const projectHeroBtn = document.querySelectorAll(".hero-buttons .primary-btn")[1];
const projectsSection = document.querySelector(".projects-section");
const aboutSection = document.querySelector("#about")


aboutHeroBtn.addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
});

projectHeroBtn.addEventListener("click", () => {
    projectsSection.scrollIntoView({ behavior: "smooth" });
});


const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});



aboutBtn.addEventListener("click", () => {
    aboutText.classList.toggle("show");
});


eduBtn.addEventListener("click", () => {
    eduInfo.classList.toggle("show");
});

contactBtn.addEventListener("click" , ()=>{
    contactInfo.classList.toggle("show")
})