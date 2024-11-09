<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
      let salario = parseFloat(prompt("Digite o seu salário: "));
      let prestacao = parseFloat(prompt("Digite o valor da prestação: "));
      let limite = salario * 0.20;
      if (prestacao > limite) {
         console.log("Empréstimo não pode ser concedido.");
      } else {
         console.log("Empréstimo pode ser concedido.");
      }
    </script>
    
</body>
</html>
