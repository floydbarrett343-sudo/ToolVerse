const imageInput =
document.getElementById("imageInput");


const preview =
document.getElementById("preview");


const compressBtn =
document.getElementById("compressBtn");


const downloadBtn =
document.getElementById("downloadBtn");


const quality =
document.getElementById("quality");


const originalSize =
document.getElementById("originalSize");


const compressedSize =
document.getElementById("compressedSize");



let compressedURL;



imageInput.addEventListener(
"change",
()=>{


const file=imageInput.files[0];


if(file){


originalSize.innerText=

(file.size/1024).toFixed(2)+" KB";



const reader=new FileReader();



reader.onload=(e)=>{


preview.src=e.target.result;

preview.style.display="block";


}


reader.readAsDataURL(file);


}


});





compressBtn.onclick=()=>{


const canvas=document.createElement("canvas");


const ctx=canvas.getContext("2d");


const img=new Image();



img.onload=()=>{


canvas.width=img.width;

canvas.height=img.height;



ctx.drawImage(
img,
0,
0
);



canvas.toBlob(

(blob)=>{


compressedURL=

URL.createObjectURL(blob);



compressedSize.innerText=

(blob.size/1024).toFixed(2)+" KB";



downloadBtn.href=

compressedURL;


downloadBtn.style.display="inline-block";



},

"image/jpeg",

quality.value/100


);



};



img.src=preview.src;



};