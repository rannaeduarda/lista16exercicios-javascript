<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 12</title>
</head>
<body>
    <script>
     let caracter = prompt("Digite um caractere: ").toLowerCase(); // Converte o caractere para minúsculo
     if (['a', 'e', 'i', 'o', 'u'].includes(caracter)) {
         console.log("O caractere é uma vogal.");
     } else if (caracter >= 'a' && caracter <= 'z') {
         console.log("O caractere é uma consoante.");
     } else if (caracter >= '0' && caracter <= '9') {
         console.log("O caractere é um número.");
     } else {
         console.log("O caractere é um símbolo.");
      
     }
    </script>
</body>
</html>
