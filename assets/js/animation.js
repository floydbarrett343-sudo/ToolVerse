/*==================================
SCROLL REVEAL ANIMATION
==================================*/


// Select Animated Elements

const animatedElements = document.querySelectorAll(

    ".fade-up, .fade-left, .fade-right, .tool-card, .category-card"

);




// Intersection Observer Settings

const observerOptions = {

    threshold:0.15

};




// Create Observer

const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


            // Stop observing after animation


            observer.unobserve(entry.target);


        }



    });



},

observerOptions

);





// Observe All Elements


animatedElements.forEach(element=>{


    observer.observe(element);


});





/*==================================
STAGGER CARD ANIMATION
==================================*/


const cards = document.querySelectorAll(

".tool-card"

);



cards.forEach((card,index)=>{


    card.style.transitionDelay = 

    `${index * 0.1}s`;


});






/*==================================
SMOOTH SCROLL
==================================*/


document.querySelectorAll(

'a[href^="#"]'

).forEach(anchor=>{


    anchor.addEventListener(

    "click",

    function(e){


        const target = document.querySelector(

            this.getAttribute("href")

        );



        if(target){


            e.preventDefault();



            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });



});





/*==================================
PARALLAX EFFECT
==================================*/


window.addEventListener("scroll",()=>{


    const scrollPosition = window.scrollY;


    const shapes = document.querySelectorAll(

        ".shape"

    );



    shapes.forEach(shape=>{


        shape.style.transform = 

        `translateY(${scrollPosition * 0.15}px)`;


    });



});