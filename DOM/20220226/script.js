// const container = document.querySelector('.container');
// const headingTag = document.createElement('h1');
// headingTag.setAttribute('id', 'title');
// headingTag.className = '';
// headingTag.textContent = "tggsdgs";
// container.append(headingTag);

const container = document.querySelector('.container');
const files = document.querySelector('#files');

function uploadFiles(){
    const images = files.files;
    for(var i = 0; i < images.length; i++){
        const img = document.createElement('img');
        img.setAttribute('class' , 'img blabla');
        img.setAttribute('id' , 'img');
        img.src = URL.createObjectURL(images[i]);
        container.append(img);
    }
}

files.addEventListener("change" , uploadFiles)

document.addEventListener('click' , function(event){
    if(event.target.id === "img"){
        event.target.classList.toggle('border');
        console.log(event.target.src);
    }
})

const modalContainer = document.createElement("div");
modalContainer.className = "modal-container";
const modalBody = document.createElement("div");
modalBody.className = "modal-body";
const modalImg = document.createElement("img");
modalBody.appendChild(modalImg);
modalContainer.appendChild(modalBody); 