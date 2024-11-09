<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 4</title>
</head>
<body>
    <script>
     let numero = parseInt(prompt("Digite um número: "));
     if (numero % 10 === 0) {
    console.log("O número é divisível por 10.");
     } else if (numero % 5 === 0) {
         console.log("O número é divisível por 5.");
     } else if (numero % 2 === 0) {
         console.log("O número é divisível por 2.");
     } else {
         console.log("O número não é divisível por 10, 5 ou 2.");
     }
    </script>
</body>
</html>
