const name = document.getElementById('name');
const college = document.getElementById('college');
const loc = document.getElementById('location');
const imageLocation = document.getElementById('imgSelector');
const image = document.getElementById('image');
const btn = document.getElementById('btn');
const printName = document.getElementById('printName');
const printCollege = document.getElementById('printCollege');
const printLocation = document.getElementById('printLocation');
const idCardImage = document.getElementById('idCardImage');
let imgURL;

imageLocation.onchange = (e)=>{
    imgURL = URL.createObjectURL(e.target.files[0]);
    console.log(imgURL);
    image.src = imgURL;
}

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    printName.innerText = `Name: ${name.value}`;
    printCollege.innerText = `College Name: ${college.value}`;
    printLocation.innerText = `Location: ${loc.value}`;
    idCardImage.src = imgURL;
})