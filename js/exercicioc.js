//01) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba a soma desses números no console.
// Declare duas variáveis e atribua valores numéricos a elas
var numero1 = 10;
var numero2 = 5;

// Calcule a soma dos números
var soma = numero1 + numero2;

// Exiba a soma no console
console.log("A soma dos números é:", soma);

//02) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba a subtração desses números no console.
// Declare duas variáveis e atribua valores numéricos a elas
var numero1 = 20;
var numero2 = 8;

// Calcule a subtração dos números
var subtracao = numero1 - numero2;

// Exiba a subtração no console
console.log("A subtração dos números é:", subtracao);

//03) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba o produto desses números no console.
// Declare duas variáveis e atribua valores numéricos a elas
var numero1 = 7;
var numero2 = 4;

// Calcule o produto dos números
var produto = numero1 * numero2;

// Exiba o produto no console
console.log("O produto dos números é:", produto);

//04) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba a divisão desses números no console.
// Declare duas variáveis e atribua valores numéricos a elas
var numero1 = 20;
var numero2 = 5;

// Calcule a divisão dos números
var divisao = numero1 / numero2;

// Exiba a divisão no console
console.log("A divisão dos números é:", divisao);

//05) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba o quadrado desse número no console
// Declare uma variável e atribua a ela um valor numérico
var numero = 9;

// Calcule o quadrado do número
var quadrado = numero * numero;

// Exiba o quadrado no console
console.log("O quadrado do número é:", quadrado);

//06) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba a raiz quadrada desse número no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = 25;

// Calcule a raiz quadrada do número
var raizQuadrada = Math.sqrt(numero);

// Exiba a raiz quadrada no console
console.log("A raiz quadrada do número é:", raizQuadrada);

//07) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba o módulo desse número (valor absoluto) no console.

// Declare uma variável e atribua a ela um valor numérico
var numero = -10;

// Calcule o módulo do número (valor absoluto)
var modulo = Math.abs(numero);

// Exiba o módulo no console
console.log("O módulo do número é:", modulo);

//08) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é par ou ímpar no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = 7;

// Verifique se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

//09) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é positivo, negativo ou zero no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = -8;

// Verifique se o número é positivo, negativo ou zero
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

//10) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba o maior número no console.
// Declare duas variáveis e atribua valores numéricos a elas
var numero1 = 15;
var numero2 = 27;

// Encontre o maior número entre as duas variáveis
var maiorNumero = Math.max(numero1, numero2);

// Exiba o maior número no console
console.log("O maior número é:", maiorNumero);

//11) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba o menor número no console.Declare três variáveis e atribua a elas valores numéricos. Em seguida, exiba a média desses números no console.Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba o fatorial desse número no console.
// Declare duas variáveis e atribua valores numéricos a elas
var numero1 = 25;
var numero2 = 12;

// Encontre o menor número entre as duas variáveis
var menorNumero = Math.min(numero1, numero2);

// Exiba o menor número no console
console.log("O menor número é:", menorNumero);
Calculando a média de três números:
javascript
Copy code
// Declare três variáveis e atribua valores numéricos a elas
var num1 = 10;
var num2 = 20;
var num3 = 30;

// Calcule a média dos três números
var media = (num1 + num2 + num3) / 3;

// Exiba a média no console
console.log("A média dos números é:", media);
Calculando o fatorial de um número:
javascript
Copy code
// Declare uma variável e atribua a ela um valor numérico
var numero = 5;

// Calcule o fatorial do número
var fatorial = 1;
for (var i = 2; i <= numero; i++) {
    fatorial *= i;
}

// Exiba o fatorial no console
console.log("O fatorial de", numero, "é:", fatorial);

//12) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é primo ou não no console.
// Função para verificar se um número é primo
function verificarPrimo(numero) {
    // Se o número for menor ou igual a 1, não é primo
    if (numero <= 1) {
        return false;
    }
    // Verifica se o número é divisível por qualquer número entre 2 e sua raiz quadrada
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            // Se for divisível, não é primo
            return false;
        }
    }
    // Se não for divisível por nenhum número além de 1 e ele mesmo, é primo
    return true;
}

// Declare uma variável e atribua a ela um valor numérico
var numero = 17;

// Verifique se o número é primo
if (verificarPrimo(numero)) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}

//13) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba todos os números de 1 até o número fornecido no console.Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba a tabuada desse número no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = 8;

// Exiba todos os números de 1 até o número fornecido no console
console.log("Números de 1 até " + numero + ":");
for (var i = 1; i <= numero; i++) {
    console.log(i);
}

// Exiba a tabuada do número fornecido no console
console.log("\nTabuada do " + numero + ":");
for (var j = 1; j <= 10; j++) {
    console.log(numero + " x " + j + " = " + (numero * j));
}

//14) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é um quadrado perfeito no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = 16;

// Calcule a raiz quadrada do número
var raizQuadrada = Math.sqrt(numero);

// Verifique se a raiz quadrada é um número inteiro
if (Number.isInteger(raizQuadrada)) {
    console.log(numero + " é um quadrado perfeito.");
} else {
    console.log(numero + " não é um quadrado perfeito.");
}

//15) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é múltiplo de 3 no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = 9;

// Verifique se o número é múltiplo de 3
if (numero % 3 === 0) {
    console.log(numero + " é múltiplo de 3.");
} else {
    console.log(numero + " não é múltiplo de 3.");
}

//16) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é divisível por 5 no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = 15;

// Verifique se o número é divisível por 5
if (numero % 5 === 0) {
    console.log(numero + " é divisível por 5.");
} else {
    console.log(numero + " não é divisível por 5.");
}

//17) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba a soma de todos os números pares de 1 até o número fornecido no console.
// Declare uma variável e atribua a ela um valor numérico
var numeroFornecido = 10;
var somaPares = 0;

// Percorra todos os números de 1 até o número fornecido
for (var i = 1; i <= numeroFornecido; i++) {
    // Verifique se o número atual é par
    if (i % 2 === 0) {
        // Se for par, adicione-o à soma
        somaPares += i;
    }
}

// Exiba a soma dos números pares no console
console.log("A soma dos números pares de 1 até " + numeroFornecido + " é:", somaPares);

//18) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba a soma desses números no console.
// Declare duas variáveis e atribua valores numéricos a elas
var numero1 = 20;
var numero2 = 35;

// Calcule a soma dos números
var soma = numero1 + numero2;

// Exiba a soma no console
console.log("A soma dos números é:", soma);

//19) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba a subtração desses números no console.
// Declare duas variáveis e atribua valores numéricos a elas
var numero1 = 50;
var numero2 = 30;

// Calcule a subtração dos números
var subtracao = numero1 - numero2;

// Exiba a subtração no console
console.log("A subtração dos números é:", subtracao);

//20) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba o produto desses números no console.
// Declare duas variáveis e atribua valores numéricos a elas
var numero1 = 7;
var numero2 = 9;

// Calcule o produto dos números
var produto = numero1 * numero2;

// Exiba o produto no console
console.log("O produto dos números é:", produto);

//21) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba a divisão desses números no console.
// Declare duas variáveis e atribua valores numéricos a elas
var numero1 = 15;
var numero2 = 3;

// Calcule a divisão dos números e exiba no console
var divisao = numero1 / numero2;
console.log("A divisão dos números é:", divisao);

// Declare uma variável e atribua a ela um valor numérico
var numero = 7;

// Calcule o quadrado do número e exiba no console
var quadrado = numero * numero;
console.log("O quadrado do número é:", quadrado);

//22) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba a raiz quadrada desse número no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = 25;

// Calcule a raiz quadrada do número
var raizQuadrada = Math.sqrt(numero);

// Exiba a raiz quadrada no console
console.log("A raiz quadrada de", numero, "é:", raizQuadrada);

//23) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba o módulo desse número (valor absoluto) no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = -10;

// Calcule o módulo do número (valor absoluto)
var modulo = Math.abs(numero);

// Exiba o módulo no console
console.log("O módulo do número é:", modulo);

//24) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é par ou ímpar no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = 7;

// Verifique se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log(numero + " é um número par.");
} else {
    console.log(numero + " é um número ímpar.");
}

//25) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é positivo, negativo ou zero no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = -8;

// Verifique se o número é positivo, negativo ou zero
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

//26) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba o maior número no console.
// Declare duas variáveis e atribua valores numéricos a elas
var numero1 = 25;
var numero2 = 17;

// Encontre o maior número entre as duas variáveis
var maiorNumero = Math.max(numero1, numero2);

// Exiba o maior número no console
console.log("O maior número é:", maiorNumero);

//27) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba o menor número no console.
// Declare duas variáveis e atribua valores numéricos a elas
var numero1 = 25;
var numero2 = 17;

// Encontre o menor número entre as duas variáveis
var menorNumero = Math.min(numero1, numero2);

// Exiba o menor número no console
console.log("O menor número é:", menorNumero);

//28) Declare três variáveis e atribua a elas valores numéricos. Em seguida, exiba a média desses números no console.
// Declare três variáveis e atribua valores numéricos a elas
var numero1 = 10;
var numero2 = 20;
var numero3 = 30;

// Calcule a média dos números
var media = (numero1 + numero2 + numero3) / 3;

// Exiba a média no console
console.log("A média dos números é:", media);

//29) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba o fatorial desse número no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = 5;

// Calcule o fatorial do número
var fatorial = 1;
for (var i = 2; i <= numero; i++) {
    fatorial *= i;
}

// Exiba o fatorial no console
console.log("O fatorial de", numero, "é:", fatorial);

//30) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é primo ou não no console.
// Função para verificar se um número é primo
function verificarPrimo(numero) {
    // Se o número for menor ou igual a 1, não é primo
    if (numero <= 1) {
        return false;
    }
    // Verifica se o número é divisível por qualquer número entre 2 e sua raiz quadrada
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            // Se for divisível, não é primo
            return false;
        }
    }
    // Se não for divisível por nenhum número além de 1 e ele mesmo, é primo
    return true;
}

// Declare uma variável e atribua a ela um valor numérico
var numero = 17;

// Verifique se o número é primo
if (verificarPrimo(numero)) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}

//31) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba todos os números de 1 até o número fornecido no console.
// Declare uma variável e atribua a ela um valor numérico
var numeroFornecido = 10;

// Exiba todos os números de 1 até o número fornecido
console.log("Números de 1 até " + numeroFornecido + ":");
for (var i = 1; i <= numeroFornecido; i++) {
    console.log(i);
}

//32) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba a tabuada desse número no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = 7;

// Exiba a tabuada do número fornecido
console.log("Tabuada do " + numero + ":");
for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}

//33) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é um quadrado perfeito no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = 25;

// Calcule a raiz quadrada do número
var raizQuadrada = Math.sqrt(numero);

// Verifique se a raiz quadrada é um número inteiro
if (Number.isInteger(raizQuadrada)) {
    console.log(numero + " é um quadrado perfeito.");
} else {
    console.log(numero + " não é um quadrado perfeito.");
}

//34) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é múltiplo de 3 no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = 9;

// Verifique se o número é múltiplo de 3
if (numero % 3 === 0) {
    console.log(numero + " é múltiplo de 3.");
} else {
    console.log(numero + " não é múltiplo de 3.");
}

//35) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é divisível por 5 no console.
// Declare uma variável e atribua a ela um valor numérico
var numero = 15;

// Verifique se o número é divisível por 5
if (numero % 5 === 0) {
    console.log(numero + " é divisível por 5.");
} else {
    console.log(numero + " não é divisível por 5.");
}

//36) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba a soma de todos os números pares de 1 até o número fornecido no console.
// Declare uma variável e atribua a ela um valor numérico
var numeroFornecido = 10;
var somaPares = 0;

// Percorra todos os números de 1 até o número fornecido
for (var i = 1; i <= numeroFornecido; i++) {
    // Verifique se o número atual é par
    if (i % 2 === 0) {
        // Se for par, adicione-o à soma
        somaPares += i;
    }
}

// Exiba a soma dos números pares no console
console.log("A soma dos números pares de 1 até " + numeroFornecido + " é:", somaPares);
