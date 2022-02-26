const fileUpload = document.querySelector("#file");
const imageBox = document.querySelector(".imageBox")
fileUpload.onchange = function changePic() {
    for(i = 0; i<fileUpload.files.length; i++) {
        const zurag = document.createElement("img")
        zurag.src = URL.createObjectURL(fileUpload.files[i])
        imageBox.appendChild(zurag);
    }
}

// fileUpload.addEventListener("click", changePic)
// document.addEventListener('click', event => {
//     if(event.target.id == "img") {
//         console.log(event.target);
//     }
// })