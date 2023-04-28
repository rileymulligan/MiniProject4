window.onload = function () {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}

const primaryNav = document.getElementById('navigation');
const displayButton = document.getElementById('displayMenu');

displayButton.addEventListener("click", slideMenu);

function slideMenu() {
    let visibility = primaryNav.getAttribute("data-visible");

    // if button is clicked, open the menu
    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        displayButton.setAttribute("data-visible", "true");
    }
    else {
        primaryNav.setAttribute("data-visible", "false");
        displayButton.setAttribute("data-visible", "false");
    }
}

// function displayMenu() {
//     document.getElementById('hamburger-icon').style.display = "none";
//     document.getElementById('x-icon').style.display = "block";
//     document.getElementById('navigation').style.transform = "translateX(0%)";
//     // document.getElementById('navigation').style.display = "block";
// }

// function hideMenu() {
//     document.getElementById('navigation').style.transform = "translateX(100%)";
//     document.getElementById('hamburger-icon').style.display = "block";
//     document.getElementById('x-icon').style.display = "none";
//     // document.getElementById('navigation').style.display = "none";

// }

// window.addEventListener("resize", hideButtons);

// function hideButtons() {
//     if(window.innerWidth > 767) {
//         document.getElementById('hamburger-icon').style.display = "none";
//         document.getElementById('x-icon').style.display = "none";
//         document.getElementById('navigation').style.transform = "translateX(0%)";
    
//     }
//     else {
//         document.getElementById('hamburger-icon').style.display = "block";   
//         document.getElementById('navigation').style.transform = "translateX(100%)";

//     }
// }