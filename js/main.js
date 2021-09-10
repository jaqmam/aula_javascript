//Dicionário
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);

//Array de dicionários
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
console.log(frutas[1].nome);
alert(frutas[1].cor);

//Arrays
var lista = ["maçã","pêra","laranja"];
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
alert(lista[1]);


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