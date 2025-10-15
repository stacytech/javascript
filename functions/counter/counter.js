const label = document.getElementById("label");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
/*variable name (count)*/ let count = 0;


decrease.onclick = function(){
    count -= 1;
    label.textContent = `${count}`;
}

increase.onclick = function(){
    count += 1;
    label.textContent = `${count}`;
}

reset.onclick = function (){
    count=0;
    label.textContent = `${count}`

}