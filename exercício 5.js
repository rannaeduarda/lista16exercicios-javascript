<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 5</title>
</head>
<body>
    <script>
     let peso = parseFloat(prompt("Digite o seu peso (em kg): "));
     let altura = parseFloat(prompt("Digite a sua altura (em metros): "));
     let imc = peso / (altura * altura);
     console.log("Seu IMC é: " + imc.toFixed(2)); 
     if (imc < 20) {
         console.log("Abaixo do peso.");
     } else if (imc >= 20 && imc < 25) {
         console.log("Peso Normal.");
     } else if (imc >= 25 && imc < 30) {
         console.log("Sobrepeso.");
     } else if (imc >= 30 && imc < 40) {
         console.log("Obeso.");
     } else {
         console.log("Obeso Mórbido.");
     }
    </script>
</body>
</html>
