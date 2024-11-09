<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 13</title>
</head>
<body>
    <script>
     let rendaMensal = parseFloat(prompt("Digite a sua renda mensal: R$ "));
     let valorEmprestimo = parseFloat(prompt("Digite o valor do empréstimo solicitado: R$ "));
     let numPrestacoes = parseInt(prompt("Digite o número de prestações: "));
     let limiteEmprestimo = rendaMensal * 10;
     let valorPrestacao = valorEmprestimo / numPrestacoes;
     let limitePrestacao = rendaMensal * 0.30;
     if (valorEmprestimo <= limiteEmprestimo && valorPrestacao <= limitePrestacao) {
         console.log("Empréstimo pode ser concedido.");
     } else {
         console.log("Empréstimo não pode ser concedido.");
     }
    </script>
</body>
</html>
