inputElement = document.getElementById("input");
outputElement = document.getElementById("output");

function handleUpperCase(){
    outputElement.value = inputElement.value.toUpperCase();
}

function handleLowerCase(){
    outputElement.value = inputElement.value.toLowerCase();
}

function handleWordCount(){
    outputElement.value = `Word Count: ${inputElement.value.split(" ").length}`;
}

function handleCharacterCount(){
    outputElement.value = `Character count : ${inputElement.value.length}`;
}