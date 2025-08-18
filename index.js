const logo = document.getElementById("logo");

function changeBorder() {
    logo.style.border = "solid white 1px";
    logo.style.boxShadow = "0 0 20px 10px rgba(255, 255, 255, 0.289)";
}

const en = document.getElementById("en")

function changeLanguage1() {
    en.style.backgroundColor = "rgb(0, 0, 131)";
    he.style.backgroundColor = "rgba(0, 0, 131, 0)";
    ru.style.backgroundColor = "rgba(0, 0, 131, 0)";
    document.getElementById("name").textContent = "GucksimHere - Start your dream project!";
    document.getElementById("projects").textContent = "🔷Projects Created";
    document.getElementById("earned").textContent = "💵Earned Money";
    document.getElementById("including").textContent = "*including this one";
    document.getElementById("donate").textContent = "Donate";
}

const he = document.getElementById("he")

function changeLanguage2() {
    he.style.backgroundColor = "rgb(0, 0, 131)";
    en.style.backgroundColor = "rgba(0, 0, 131, 0)";
    ru.style.backgroundColor = "rgba(0, 0, 131, 0)";
    document.getElementById("name").textContent = "GucksimHere - התחילו את פרויקט החלומות שלכם עכשיו!";
    document.getElementById("projects").textContent = "🔷פרויקטים";
    document.getElementById("earned").textContent = "💵הרווחתי כסף";
    document.getElementById("including").textContent = "כולל זה*";
    document.getElementById("donate").textContent = "דוניית";
}

const ru = document.getElementById("ru")

function changeLanguage3() {
    ru.style.backgroundColor = "rgb(0, 0, 131)";
    he.style.backgroundColor = "rgba(0, 0, 131, 0)";
    en.style.backgroundColor = "rgba(0, 0, 131, 0)";
    document.getElementById("name").textContent = "GucksimHere - Начни проект своей мечты!";
    document.getElementById("projects").textContent = "🔷Создано проектов";
    document.getElementById("earned").textContent = "💵Заработано денег";
    document.getElementById("including").textContent = "*включая этот";
    document.getElementById("donate").textContent = "Задонатить";
}

