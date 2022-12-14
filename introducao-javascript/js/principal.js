var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Primeiro Paciente Cálculo IMC
var pacientes = document.querySelectorAll(".paciente");

for( i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdImc = paciente.querySelector(".info-imc");


    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        tdPeso.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {

        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);    
    } else {
        tdImc.textContent = "Altura e /ou peso inválidos!"
    }
}
//Atrelando evento:
/*          Anônima            
titulo.addEventListener("click", function(){
    console.log("Olá eu fui clicado!");
});
*/

/*          Nomeada:            
function mostraMensagem(){
    console.log("Olá eu fui clicado!");
}
*/

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});




/* console.log(paciente); // tr
console.log(tdPeso); // td Peso
console.log(peso); // receber 100
console.log(altura); // receber 2.00
console.log(imc); // receber 25 */
