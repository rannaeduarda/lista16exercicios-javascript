<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>exercício 2</title>
</head>
<body>
    <script>
     let anoNascimento, idadeAtual, nome;
     anoNascimento = prompt("Digite seu ano de nascimento: ");
     idadeAtual = prompt("Digite sua idade atual: ");
     idadeAtual = parseInt(idadeAtual);
     console.log("Sua idade é: " + idadeAtual);
     if (idadeAtual >= 18) {
     nome = prompt("Digite seu nome: ");
         console.log(nome + ", sua entrada foi permitida.");
     } else {
         console.log("Desculpe, sua entrada não é permitida.");
     }
    </script>
</body>
</html>
