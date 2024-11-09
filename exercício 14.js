<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 14</title>
</head>
<body>
    <script>
     let populacaoA = 5000000;
     let populacaoB = 7000000;
     let taxaNatalidadeA = 0.03; // 3%
     let taxaNatalidadeB = 0.02; // 2%
     let anos = 0;
     while (populacaoA <= populacaoB) {
         populacaoA = Math.trunc(populacaoA + populacaoA * taxaNatalidadeA);
         populacaoB = Math.trunc(populacaoB + populacaoB * taxaNatalidadeB);
         anos += 1;
     }
         console.log("Serão necessários " + anos + " anos para que a população A ultrapasse a população B.");
    </script>
</body>
</html>
