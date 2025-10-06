// Welcome1.textContent="Hello stacy"
const welcome1 = document.getElementById("welcome");
const value = document.getElementById("input");
const submit = document.getElementById("submit");
submit.onclick = function(){
    const name = input.value;
    welcome1.textContent = `welcome ${name}`
  
}