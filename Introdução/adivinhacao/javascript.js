let valor = Math.random() * 100;
let valoraleatorio = Math.floor(valor);
console.log(valoraleatorio);


function adivinhar(){
    let chute = document.getElementById('numero').value;

    if( chute == valoraleatorio){
        document.getElementById("resposta").innerHTML = "Chute correto";
        document.getElementById("resposta").style.setProperty("background-color", "green");
} 
    if(chute > valoraleatorio){
        document.getElementById("resposta").innerHTML = "Esse valor está acima do valor aleatorio!";
        document.getElementById("resposta").style.setProperty("background-color", "red");
}
    if(chute < valoraleatorio){
        document.getElementById("resposta").innerHTML = "Esse valor está abaixo do valor aleatorio!"
        document.getElementById("resposta").style.setProperty("background-color", "red");
}
}