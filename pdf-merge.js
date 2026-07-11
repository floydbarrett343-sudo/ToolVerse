const pdfInput =
document.getElementById("pdfInput");


const fileList =
document.getElementById("fileList");


const mergeBtn =
document.getElementById("mergeBtn");


const downloadBtn =
document.getElementById("downloadBtn");



let selectedFiles=[];




pdfInput.addEventListener("change",()=>{


selectedFiles=[...pdfInput.files];


fileList.innerHTML="";



selectedFiles.forEach(file=>{


let item=document.createElement("p");


item.innerHTML="📄 "+file.name;


fileList.appendChild(item);



});


});






mergeBtn.addEventListener("click",async()=>{


if(selectedFiles.length < 2){


alert("Please select at least 2 PDF files");


return;


}



const mergedPdf = await PDFLib.PDFDocument.create();




for(const file of selectedFiles){


const bytes = await file.arrayBuffer();


const pdf = await PDFLib.PDFDocument.load(bytes);



const pages = await mergedPdf.copyPages(

pdf,

pdf.getPageIndices()

);



pages.forEach(page=>{


mergedPdf.addPage(page);


});


}





const mergedBytes = await mergedPdf.save();



const blob = new Blob(

[mergedBytes],

{

type:"application/pdf"

}

);



const url = URL.createObjectURL(blob);



downloadBtn.href=url;


downloadBtn.style.display="inline-block";



});