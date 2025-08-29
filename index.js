const logo = document.getElementById("logo");

function changeBorder() {
    logo.style.border = "solid white 1px";
    logo.style.boxShadow = "0 0 20px 10px rgba(255, 255, 255, 0.289)";
}

const en = document.getElementById("en")

function changeLanguage1() {
    document.body.style.fontFamily = "font"
    en.style.backgroundColor = "rgb(0, 0, 131)";
    he.style.backgroundColor = "rgba(0, 0, 131, 0)";
    ru.style.backgroundColor = "rgba(0, 0, 131, 0)";
    document.getElementById("name").textContent = "GucksimHere - Start your dream project!";
    document.getElementById("projects").textContent = "🔷Projects Created";
    document.getElementById("earned").textContent = "💵Earned Money";
    document.getElementById("about-me").textContent = "About me";
    document.getElementById("pcard").textContent = "Hi! I am passionate about web development and JavaScript. I love creating interactive websites, experimenting with HTML, CSS and JS, making projects interesting and functional."
    pcard.style.textAlign = "center"
    pcard.style.fontSize = "30px"
    document.getElementById("planh1").textContent = "Plans"
    document.getElementById("new").textContent = "New"
    document.getElementById("frontend").textContent = "Frontend"
    document.getElementById("portfolio").textContent = "Portfolio"
    document.getElementById("popular").textContent = "Most Popular"
    document.getElementById("perproject").textContent = "/ project"
    document.getElementById("perproject2").textContent = "/ project"
    document.getElementById("minimumcost").textContent = "minimum cost"
    document.getElementById("mincost").textContent = "minimum cost"
    document.getElementById("buy").textContent = "Order"
    document.getElementById("buy2").textContent = "Order"
    document.getElementById("descportfolio").textContent = "Modern, responsive website with a clean design to showcase your portfolio, projects, bio, contact info, and social links. Easily customizable for self-presentation and attracting clients"
    document.getElementById("descfrontend").textContent = "Create adaptive and interactive websites using HTML, CSS, and JavaScript. Build beautiful pages, interactive elements, and mini-apps for any device. Basic Firebase integration for user authorization and data storage."
    document.getElementById("descfrontend").style.fontSize = "14px"
}

const he = document.getElementById("he")

function changeLanguage2() {
    document.body.style.fontFamily = "hebrew";
    document.getElementById("descportfolio").style.fontFamily = "font";
    he.style.backgroundColor = "rgb(0, 0, 131)";
    en.style.backgroundColor = "rgba(0, 0, 131, 0)";
    ru.style.backgroundColor = "rgba(0, 0, 131, 0)";
    document.getElementById("name").textContent = "GucksimHere - התחילו את פרויקט החלומות שלכם עכשיו!";
    document.getElementById("projects").textContent = "🔷פרויקטים";
    document.getElementById("earned").textContent = "💵הרווחתי כסף";
    document.getElementById("about-me").textContent = "עליי";
    document.getElementById("pcard").textContent = "היי! אני נלהב מפיתוח אתרים. אני אוהב ליצור אתרים אינטראקטיביים, להתנסות ב-HTML, CSS ו-JS, ולהפוך פרויקטים למעניינים ופונקציונליים."
    pcard.style.textAlign = "right";
    pcard.style.fontSize = "30px";
    document.getElementById("planh1").textContent = "פלנים";
    document.getElementById("buy").textContent = "הזמנה";
    document.getElementById("buy2").textContent = "הזמנה";
    document.getElementById("popular").textContent = "פופולרי";
    document.getElementById("new").textContent = "חדש";
    document.getElementById("minimumcost").textContent = "עלות מינימלית";
    document.getElementById("mincost").textContent = "עלות מינימלית";
    document.getElementById("portfolio").textContent = "תיק"
    document.getElementById("frontend").textContent = "פרונת-אנד"
    document.getElementById("perproject").textContent = "/ פרויקט"
    document.getElementById("perproject2").textContent = "/ פרויקט"
    document.getElementById("descfrontend").style.fontSize = "14px"
    document.getElementById("descportfolio").textContent = "Modern, responsive website with a clean design to showcase your portfolio, projects, bio, contact info, and social links. Easily customizable for self-presentation and attracting clients"
    document.getElementById("descfrontend").textContent = "Create adaptive and interactive websites using HTML, CSS, and JavaScript. Build beautiful pages, interactive elements, and mini-apps for any device. Basic Firebase integration for user authorization and data storage."
}

const ru = document.getElementById("ru")

function changeLanguage3() {
    
    const ru = document.getElementById("ru");
    const he = document.getElementById("he");
    const en = document.getElementById("en");
    const pcard = document.getElementById("pcard");

    document.body.style.fontFamily = "font";
    ru.style.backgroundColor = "rgb(0, 0, 131)";
    he.style.backgroundColor = "rgba(0, 0, 131, 0)";
    en.style.backgroundColor = "rgba(0, 0, 131, 0)";
    
    document.getElementById("name").textContent = "GucksimHere - Начни проект своей мечты!";
    document.getElementById("projects").textContent = "🔷Создано проектов";
    document.getElementById("earned").textContent = "💵Заработано денег";
    document.getElementById("about-me").textContent = "Обо мне";
    
    pcard.textContent = "Привет! Я увлечён веб-разработкой и JavaScript. Люблю создавать интерактивные сайты, экспериментировать с HTML, CSS и JS, делая проекты интересными и функциональными.";
    pcard.style.textAlign = "center";
    pcard.style.fontSize = "20px";
    
    document.getElementById("planh1").textContent = "Планы";
    document.getElementById("new").textContent = "Новое";
    document.getElementById("frontend").textContent = "Фронтенд";
    document.getElementById("portfolio").textContent = "Страница Портфолио";
    document.getElementById("popular").textContent = "Популярное";
    
    document.getElementById("perproject").textContent = "/ проект";
    document.getElementById("perproject2").textContent = "/ проект";
    document.getElementById("minimumcost").textContent = "мин. цена";
    document.getElementById("mincost").textContent = "мин. цена";
    document.getElementById("buy").textContent = "Заказать";
    document.getElementById("buy2").textContent = "Заказать";
    
    document.getElementById("descportfolio").textContent = "Современный, адаптивный сайт с лаконичным дизайном для демонстрации вашего портфолио, проектов, биографии, контактной информации и ссылок на социальные сети. Легко настраивается для самопрезентации и привлечения клиентов.";
    document.getElementById("descfrontend").textContent = "Создаю адаптивные и интерактивные сайты на HTML, CSS и JavaScript с красивыми страницами, интерактивными элементами и базовой интеграцией Firebase.";
    document.getElementById("descfrontend").style.fontSize = "17px";
}





const texts = ["Modern Solutions.", "Clean Design.", "Best Delivery."];
let index = 0;

setInterval(() => {
  document.getElementById("pluses").textContent = texts[index];
  index = (index + 1) % texts.length; // зацикливаем
}, 2000); // смена каждые 2 секунды

