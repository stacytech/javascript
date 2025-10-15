// Welcome1.textContent="Hello stacy"
const hello1 = document.getElementById("hello");
const username = document.getElementById("Username");
const age= document.getElementById("age");
const lastname= document.getElementById("lastname");
const submit = document.getElementById("submit");

submit.onclick = function(){
    const user = Username.value;
    const myage = age.value;
    hello1.textContent = `hello my name is ${user} and i am ${myage} years old.`;
};