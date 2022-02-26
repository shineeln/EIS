// const container = document.querySelector('.container');
// const headingTag = document.createElement('h1');
// headingTag.setAttribute('id', 'title');
// headingTag.className = '';
// headingTag.textContent = "tggsdgs";
// container.append(headingTag);

const container = document.querySelector('.container');
const files = document.querySelector('#files');
const box = document.querySelector('.box');

function uploadFiles() {
    const images = files.files;
    for (var i = 0; i < images.length; i++) {
        const img = document.createElement('img');
        img.setAttribute('class', 'img blabla');
        img.setAttribute('id', 'img');
        img.src = URL.createObjectURL(images[i]);
        container.prepend(img);
    }
}

files.addEventListener("change", uploadFiles)

const modalContainer = document.createElement("div");
const modalImg = document.createElement("img");
const modalBody = document.createElement("div");
modalContainer.className = "modal-container";
modalBody.className = "modal-body";
modalBody.append(modalImg);
modalContainer.append(modalBody);
box.append(modalContainer);

document.addEventListener('click', function (event) {
    if (event.target.id === "img") {
        event.target.classList.toggle('border');
        console.log(event.target.src);
        modalContainer.classList.toggle("active")
        modalImg.src = event.target.src;
    } else {
        modalContainer.classList.remove("active")
    }
})