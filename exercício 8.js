<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 8</title>
</head>
<body>
    <script>
     let salarioFixo = 1200.00; // Salário fixo
     let valorVendas = parseFloat(prompt("Digite o valor das vendas do mês: "));
     let comissao = valorVendas * 0.15; // Calcula a comissão de 15%
     let salarioTotal = salarioFixo + comissao; // Calcula o salário total
         console.log("Salário Fixo: R$ " + salarioFixo.toFixed(2));
         console.log("Valor das Vendas: R$ " + valorVendas.toFixed(2));
         console.log("Comissão: R$ " + comissao.toFixed(2));
         console.log("Salário Total: R$ " + salarioTotal.toFixed(2));
     let valorConsorcio = 280000.00;
     let entrada = 2500.00;
     let juros = 0.12;
     let parcelas = 65;
     let valorFinanciado = valorConsorcio - entrada;
     let montante = valorFinanciado * Math.pow((1 + juros), (parcelas / 12)); // Calcula o montante final com juros compostos
         console.log("Valor do Consórcio: R$ " + valorConsorcio.toFixed(2));
         console.log("Entrada: R$ " + entrada.toFixed(2));
         console.log("Valor Financiado: R$ " + valorFinanciado.toFixed(2));
         console.log("Valor Total a Pagar ao Final dos 65 meses: R$ " + montante.toFixed(2));
    </script>
</body>
</html>
