let label=document.getElementById("label1");
let textBox=document.getElementById("textBox");
let button=document.getElementById("button1");
console.log("Запустился");
button.onclick=function()
{
    let texboxtext=textBox.value;
    alert(texboxtext);
    console.log("!");
}
label.innerHTML="Hello";
label.style.color="red";
label.style.fontSize="30px";