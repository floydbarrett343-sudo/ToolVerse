/*==================================
NAVIGATION SYSTEM
==================================*/


// Select Elements

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");

const navLinks = document.querySelectorAll(".navbar a");

const header = document.querySelector(".header");




// Mobile Menu Toggle

if(menuBtn){


menuBtn.addEventListener("click",()=>{


    navbar.classList.toggle("active");


    // Change Icon


    if(navbar.classList.contains("active")){


        menuBtn.innerHTML="✕";


    }

    else{


        menuBtn.innerHTML="☰";


    }


});


}





// Close Menu After Click

navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        navbar.classList.remove("active");


        if(menuBtn){

            menuBtn.innerHTML="☰";

        }


    });


});





// Close Menu Outside Click


document.addEventListener("click",(event)=>{


    const clickedOutside = 

    !navbar.contains(event.target) &&

    !menuBtn.contains(event.target);



    if(clickedOutside){


        navbar.classList.remove("active");


        if(menuBtn){

            menuBtn.innerHTML="☰";

        }


    }



});






// Sticky Glass Header On Scroll


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.classList.add("active");


    }

    else{


        header.classList.remove("active");


    }


});