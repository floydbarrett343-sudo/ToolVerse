/*==================================
THEME SWITCHER
==================================*/


// Select Theme Button

const themeBtn = document.querySelector(".theme-btn");


// Check Saved Theme

const savedTheme = localStorage.getItem("theme");



// Apply Saved Theme

if(savedTheme === "dark"){

    document.body.classList.add("dark");

    if(themeBtn){

        themeBtn.innerHTML = "☀️";

    }

}




// Theme Button Click

if(themeBtn){


themeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("dark");



    // Check Current Theme


    const isDark = document.body.classList.contains("dark");



    if(isDark){


        themeBtn.innerHTML="☀️";


        localStorage.setItem(
            "theme",
            "dark"
        );


    }

    else{


        themeBtn.innerHTML="🌙";


        localStorage.setItem(
            "theme",
            "light"
        );


    }



});


}