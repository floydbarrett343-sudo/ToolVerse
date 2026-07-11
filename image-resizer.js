const imageInput =
document.getElementById("imageInput");


const preview =
document.getElementById("preview");


const widthInput =
document.getElementById("width");


const heightInput =
document.getElementById("height");


const resizeBtn =
document.getElementById("resizeBtn");


const downloadBtn =
document.getElementById("downloadBtn");



let imageFile;



imageInput.addEventListener(
"change",
()=>{


imageFile=imageInput.files[0];


const reader=new FileReader();



reader.onload=function(e){


preview.src=e.target.result;


preview.style.display="block";



const img=new Image();


img.src=e.target.result;



img.onload=()=>{


widthInput.value=img.width;

heightInput.value=img.height;



};


};



reader.readAsDataURL(imageFile);



});





resizeBtn.addEventListener(
"click",
()=>{


if(!imageFile){

alert("Please upload image");

return;

}



const canvas=document.createElement("canvas");


const ctx=canvas.getContext("2d");



const img=new Image();



img.onload=()=>{


canvas.width=

widthInput.value;


canvas.height=

heightInput.value;




ctx.drawImage(

img,

0,

0,

canvas.width,

canvas.height

);





canvas.toBlob(blob=>{


const url=

URL.createObjectURL(blob);



downloadBtn.href=url;


downloadBtn.style.display="inline-block";



},

"image/png"

);



};



img.src=preview.src;



});