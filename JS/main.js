let icon = document.querySelector(".icon i");
let settingBox = document.querySelector(".setting-box");

icon.addEventListener("click",fun);
function fun() {
    icon.classList.toggle("fa-spin");

    settingBox.classList.toggle("open");
}

//select all bullet
const allBullets = document.querySelectorAll(".nav-bullet .bullet");

//loop in all bullets
allBullets.forEach( bullet => {

    bullet.addEventListener("click" , (e) => {
        
        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: "smooth"
        })
    })
})

//switch colors
let colorsLi = document.querySelectorAll(".colors-list li");

//loop in all list items
colorsLi.forEach( li => {

//click on every items
li.addEventListener("click", (e) => {

//set color on root
document.documentElement.style.setProperty("--main-color",e.target.dataset.color);

//set item in local storage
localStorage.setItem("color-option",e.target.dataset.color)


//remove active class from All childrens
e.target.parentElement.querySelectorAll(".active").forEach( 
    
    element => { element.classList.remove("active") });

//Add active class on self
e.target.classList.add("active");

});

});

//check if localstorage have color-option
if( localStorage.getItem("color-option") !== null ) {

    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color-option"));
}

//switch random-background
let randomBackEl = document.querySelectorAll(".random-background span");

//loop in all spans
randomBackEl.forEach( span => {

//click on every spans
span.addEventListener("click", (e) => {

//remove active class from All childrens
e.target.parentElement.querySelectorAll(".active").forEach( 
    
    element => { element.classList.remove("active") });

//Add active class on self
e.target.classList.add("active");

});

});


// select landingPage element
let landingPage = document.querySelector(".landing-page");

//get array of images
let imgsArray = ["bolton-web-design-website-designer-3.jpg", "custom-web-design.jpg", "three.jpeg", "We-Design-It-Website-Development-Team.jpeg", "getty_516755340_345279.jpg"];

setInterval(() => {

// get random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

// change background image url
    landingPage.style.backgroundImage = 'url("IMAGES/' + imgsArray[randomNumber] + '")';
 
}, 5000);


// select skills selector
let skills = document.querySelector(".skills");

window.onscroll = function ()  {

    if ( window.pageYOffset > ( skills.offsetTop + skills.offsetHeight - window.innerHeight) ) {

        let allskills = document.querySelectorAll(".skills span");

        allskills.forEach( (skill) => 
        {skill.style.width = skill.dataset.progress;}
        )

    }

}

// نفس الكود اللي قبله ولكن مفصل ومشروح
// let skills = document.querySelector(".skills");

// window.onscroll = function () {

//     let skillsoffsettop = skills.offsetTop;

//     let skillsouterHight = skills.offsetHeight;

//     let windowHight = window.innerHeight;

//    let windowscrolltop = window.pageYOffset;

//    if ( windowscrolltop > (skillsoffsettop + skillsouterHight - windowHight)) {

//     let allskills = document.querySelectorAll(".skills span");

//     allskills.forEach( (skill) => 
//     {skill.style.width = skill.dataset.progress;}
//     )

//    }
// }


// create pop-up with images 
let gallary = document.querySelectorAll(".gallary img");

gallary.forEach( img => {
    img.addEventListener("click" , () => {
        
// create overlay element
let overlay =document.createElement("div");


//add class to overlay
overlay.className = ("pop-up");

//append overlay to the body
document.body.appendChild(overlay);


//create popup-box
let popupBox = document.createElement("div");

//add class to popup-Box
popupBox.className = ("popup-box");

//create the image
let popimg = document.createElement("img");

//set image src
popimg.src = img.src;

//add image to popup-box
popupBox.appendChild(popimg);

//append popupBox in body
document.body.appendChild(popupBox);


//create close-span
let closebtn = document.createElement("span");

//create text in close-span 
let closebtnText = document.createTextNode("x");

//add closebtnText in close-button
closebtn.appendChild(closebtnText);

//add class to close-button 
closebtn.className = 'close-button';

//add close-button to popup-box
popupBox.appendChild(closebtn)

    })
})


//close popup
document.addEventListener( "click" , (e) => {

    if (e.target.className == 'close-button') {

    //remove current popup
    e.target.parentNode.remove();

    //remove overlay
    document.querySelector(".pop-up").remove()
    }
})


let toggleMenu = document.querySelector(".toggle-menu");

let menuLinks = document.querySelector(".menu-links");

toggleMenu.addEventListener("click", () => {

    menuLinks.classList.toggle("open")

} )

