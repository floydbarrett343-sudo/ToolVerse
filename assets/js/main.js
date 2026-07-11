/*==================================
MAIN WEBSITE JAVASCRIPT
==================================*/


document.addEventListener(

"DOMContentLoaded",

()=>{



/*==================================
TOOL SEARCH SYSTEM
==================================*/


const searchInput = document.querySelector(

".glass-card input"

);


const toolCards = document.querySelectorAll(

".tool-card"

);





if(searchInput){



searchInput.addEventListener(

"keyup",

()=>{



    const searchValue = 

    searchInput.value.toLowerCase();




    let found = false;




    toolCards.forEach(card=>{


        const toolName = 

        card.querySelector("h3")

        .innerText

        .toLowerCase();





        if(toolName.includes(searchValue)){


            card.style.display="block";


            found=true;



        }

        else{


            card.style.display="none";


        }



    });




    // No Result Message


    let noResult = document.querySelector(

        ".no-result"

    );



    if(!found && searchValue !== ""){


        if(!noResult){


            noResult=document.createElement(

                "p"

            );


            noResult.className="no-result";


            noResult.innerText=

            "No tool found 😔";



            document.querySelector(

            ".tool-grid"

            )

            .appendChild(noResult);



        }



    }

    else{


        if(noResult){


            noResult.remove();


        }


    }



});



}





/*==================================
BUTTON RIPPLE EFFECT
==================================*/


const buttons=document.querySelectorAll(

".btn"

);



buttons.forEach(button=>{


button.addEventListener(

"click",

function(e){



    const ripple=document.createElement(

        "span"

    );



    ripple.className="ripple";



    this.appendChild(ripple);



    setTimeout(()=>{


        ripple.remove();


    },600);



});



});






/*==================================
CURRENT YEAR FOOTER
==================================*/


const year=document.querySelector(

".year"

);



if(year){


year.innerHTML=

new Date().getFullYear();



}




});