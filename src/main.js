import "./style/base.scss";
import validator from "validator";
// accordion
const $accordionBtns = document.querySelectorAll(".accordion > ul li > button");

$accordionBtns.forEach(($el) => {
    $el.addEventListener("click", (e) => {
        $el.parentElement.classList.toggle("active");
    });
});

// email-vali
const $form = document.querySelector("form");
$form.addEventListener("submit", (e) => {
    let $value = $form.email.value;
    if (!validator.isEmail($value)) {
        e.preventDefault();
        $form.toggleAttribute("error", true);
    } else {
        $form.toggleAttribute("error", false);
    }
});

// mobile-nav
const $navButton = document.querySelector(".nav-container > button");
const $navContent = document.querySelector(".nav-container > .nav-content");
const $navCloser = $navContent.querySelector(".header > button");

$navButton.addEventListener("click", (e) => {
    $navContent.classList.add("active");
    $changeBodyOverFlow();
});

$navCloser.addEventListener("click", (e) => {
    $navContent.classList.remove("active");
    $changeBodyOverFlow();
});

function $changeBodyOverFlow() {
    $navContent.classList.contains("active")
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "hidden auto");
}

// tabs
const $tabs = document.querySelectorAll(".tabs > li");
const $textContainers = document.querySelectorAll(
    ".features > .container >  .text"
);

const $featureImage = document
    .querySelector(".features .image")
    .querySelector("img");

$tabs.forEach(($tab, $index) => {
    $tab.addEventListener("click", (e) => {
        $tabs.forEach(($el) => $el.classList.remove("active"));
        $tab.classList.add("active");
        $textContainers.forEach(($el) => $el.classList.remove("active"));
        $textContainers[$index].classList.add("active");
        $featureImage.src = `./assets/images/illustration-features-tab-${
            $index + 1
        }.svg`;
        $featureImage.alt = `features-tab-${$index + 1}`;
    });
});
