const gal = document.getElementById('gallerycontent');

const folderId  = "1NRdfRNjotbFWXrz42cvzuzIaPNs4aeDr";
const apiKey    = "AIzaSyCZ5XT3Y-ivj3mdcehzSF1ixJdOUNVCVfE";

const url =
    `https://www.googleapis.com/drive/v3/files` +
    `?q='${folderId}'+in+parents` +
    `&fields=files(id,name,mimeType)` +
    `&key=${apiKey}`;

const response = await fetch(url);
const data = await response.json();


const images = data.files;

images.forEach(file => {

    const img = document.createElement("img");

    console.log(file);

    // img.src = `https://drive.google.com/uc?export=view&id=${file.id}`;
    // img.src = `https://drive.usercontent.google.com/download?id=${file.id}`;
    // img.src = `https://drive.google.com/file/d/${file.id}/view?usp=drive_link`
    img.src = `https://drive.usercontent.google.com/download?id=${file.id}&export=view`;
    // img.src = `https://drive.usercontent.google.com/download?id=${file.id}&export=view&authuser=0`
    img.alt = file.name;
    // img.loading = "lazy";
    img.classList.add('gal-img');

    gal.appendChild(img);

    // console.log(`img:       ${img}`);
    // console.log(`src:       ${img.src}`);
    // console.log(`complete:  ${img.complete}`);
    // console.log(`natwidth:  ${img.naturalWidth}`);
    // console.log(`natheight: ${img.naturalHeight}`);

    img.onload = () => {
        console.log("Loaded!");
        console.log("Dimensions:", img.naturalWidth, img.naturalHeight);
    };

    img.onerror = () => {
        console.log("Image failed to load!");
    };

    console.log("Initial state:", img.complete);

});

async function getImages() {

    const response = await fetch("image-list.json");
    const filenames = await response.json();

    return filenames.map(filename => `images/${filename}`);
}