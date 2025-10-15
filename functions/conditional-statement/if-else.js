const submit = document.getElementById('submit');
const input = document.getElementById('age');
const text = document.getElementById('value')

submit.onclick = function (){
    let age  = input.value
    age = Number(age)
    
    if(age>=70){
    text.textContent= `You are ${age} year old. You Should be retiring you old hag`;
}
else if (age === 0) {
    text.textContent= `You are ${age} year old. Them Just Dey Born You`;
}
else if(age>=16){
    text.textContent= `You are ${age} year old. You Should be Working`;
} 
else if (age < 16) {
    text.textContent= `You are ${age} year old. You should be in school smallie`;
}

else{
     text.textContent= `You are ${age} year old. omo, i no get wetin i wan tell you`;

} 
};
