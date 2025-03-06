const temp = document.querySelector("body");
const welcome = document.querySelector("#welcome-message");
welcome.color = 'blue';
const button = document.querySelector("#button");
button.onclick = pressed;

function pressed(){
    temp.style.backgroundColor = "green";
    welcome.style.color = "yellow";
    welcome.innerText = "Hello again!";
}
