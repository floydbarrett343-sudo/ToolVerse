const tools = [

{

icon:"🖼️",

title:"Image Compressor",

category:"image",

description:"Reduce image size without losing quality.",

url:"tools/image-compressor.html"

},



{

icon:"📐",

title:"Image Resizer",

category:"image",

description:"Resize images easily.",

url:"tools/image-resizer.html"

},



{

icon:"📄",

title:"PDF Merge",

category:"pdf",

description:"Merge multiple PDF files.",

url:"tools/pdf-merge.html"

},



{

icon:"📑",

title:"PDF Compressor",

category:"pdf",

description:"Compress PDF size.",

url:"tools/pdf-compressor.html"

},



{

icon:"🔢",

title:"Word Counter",

category:"text",

description:"Count words and characters.",

url:"tools/word-counter.html"

},



{

icon:"{}",

title:"JSON Formatter",

category:"developer",

description:"Format JSON code easily.",

url:"tools/json-formatter.html"

},



{

icon:"🧮",

title:"Age Calculator",

category:"calculator",

description:"Calculate your age.",

url:"tools/age-calculator.html"

}



];





const container = document.getElementById(
"toolsContainer"
);



function displayTools(category="all"){


container.innerHTML="";



const filteredTools =

category==="all"

?

tools

:

tools.filter(
tool=>tool.category===category
);



filteredTools.forEach(tool=>{


container.innerHTML += `


<a href="${tool.url}" class="tool-card">


<div class="tool-icon">

${tool.icon}

</div>


<h3>

${tool.title}

</h3>


<p>

${tool.description}

</p>


<span>

Open Tool →

</span>


</a>


`;


});


}





displayTools();





// FILTER BUTTONS


const filterButtons=document.querySelectorAll(
".filter-btn"
);



filterButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


filterButtons.forEach(btn=>{

btn.classList.remove("active");

});


button.classList.add("active");



displayTools(
button.dataset.category
);



});



});