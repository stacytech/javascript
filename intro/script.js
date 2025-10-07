// Welcome1.textContent="Hello stacy"
const welcome1 = document.getElementById("welcome");
const firstname = document.getElementById("firstname");
const middlename= document.getElementById("middlename");
const lastname= document.getElementById("lastname");
const submit = document.getElementById("submit");

submit.onclick = function(){
    const first = firstname.value;
    const middle = middlename.value;
    const last = lastname.value;
    welcome1.textContent = `welcome ${first} ${middle} ${last}`
}

