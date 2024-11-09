<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 7</title>
</head>
<body>
    <script>
     let percentualRevendedor = 0.25; 
     let percentualImpostos = 0.45; 
     let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: R$ "));
     let custoFinal = custoFabrica + (custoFabrica * percentualRevendedor) + (custoFabrica * percentualImpostos);
         console.log("Custo de Fábrica: R$ " + custoFabrica.toFixed(2));
         console.log("Percentual do Revendedor (25%): R$ " + (custoFabrica * percentualRevendedor).toFixed(2));
         console.log("Impostos (45%): R$ " + (custoFabrica * percentualImpostos).toFixed(2));
         console.log("Custo Final ao Consumidor: R$ " + custoFinal.toFixed(2));
    </script>
</body>
</html>
