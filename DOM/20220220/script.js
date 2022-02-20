const heading = document.querySelector(".title")
// document - iin querySelector functionruu css selector paranater yawulna
// html object, attr-uud n property helbereer orj irne

const testid = heading.id;
const next = heading.nextElementSibling;
const prev = heading.previousElementSibling;
// baihgui bol null butsaana
//querySelectorAll bugdiig n listedList bolgoj butsaana

heading.id - "update";

const headingTag = document.getElementsByClassName("title");
const htmllist = document.body.children;

const input = document.querySelector("input");
input.type = "button";
input.value = "testme";
input.style.backgroundColor = "orangered";
input.style.color = "white";
input.style.botder = "1px solid white";
input.style.padding = "5px";
input.onclick = changeBg;

function changeBg() {
    document.body.style.backgroundColor = document.querySelector("input[type='color']").value;
}
input.nextElementSibling.onchange = changeBg;

const fileUpload = document.querySelector("#file");
// const files = fileUpload.files;
// const file = files[0];

const zurag = document.querySelector("#zurag");
fileUpload.onchange = function changePic() {
    zurag.src = URL.createObjectURL(fileUpload.files[0])
}