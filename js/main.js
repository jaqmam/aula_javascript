//funções
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.amcom.com.br/");
    //window.location.href = "https://www.amcom.com.br/"; //mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function soma(n1,n2){
    return n1 + n2;
}*/

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

var validar = 0;
function validaIdade(idade){

    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

alert(soma(5,10));
alert(setReplace("Vai Japão","Japão", "Brasil"));

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);*/

//trabalhando com datas
/*var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
alert(d.getDate());*/

//Estruturas de Repetição
/*var count;
for (count=0; count <= 5; count++){
    alert(count);
}*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    //count = count + 1;
    count++;
}*/

//condicionais
/*var idade = prompt("qual sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
};*/    


//Dicionário
/*var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);*/

//Array de dicionários
/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
console.log(frutas[1].nome);
alert(frutas[1].cor);*/

//Arrays
/*var lista = ["maçã","pêra","laranja"];
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
alert(lista[1]);*/


/*var nome = "Jonatas Jaqmam Pereira";
var idade = 35;
var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(n1 * n2);
//alert(frase.replace("Japão","Brasil"));*/