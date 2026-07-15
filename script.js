function generatePassword(){

const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*()_+?><";

let chars="";

if(document.getElementById("upper").checked)
chars+=upper;

if(document.getElementById("lower").checked)
chars+=lower;

if(document.getElementById("number").checked)
chars+=number;

if(document.getElementById("symbol").checked)
chars+=symbol;

const length=document.getElementById("length").value;

let password="";

for(let i=0;i<length;i++){
password+=chars.charAt(Math.floor(Math.random()*chars.length));
}

document.getElementById("password").value=password;

}

function copyPassword(){

const password=document.getElementById("password");

password.select();

document.execCommand("copy");

alert("Password Copied!");
}
