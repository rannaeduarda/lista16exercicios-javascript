<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 16</title>
</head>
<body>
    <script>
        function contarOcorrencias() {
        let vetor = [];
        let valorBuscado;
        let contador = 0;
         console.log("Digite 15 números inteiros para o vetor:");
        for (let i = 0; i < 15; i++) {
        let numero = parseInt(prompt(Elemento [${i + 1}]:));
        vetor.push(numero);
        }
        valorBuscado = parseInt(prompt("Digite o valor que deseja buscar:"));
        for (let i = 0; i < 15; i++) {
        if (vetor[i] === valorBuscado) {
            contador++;
        }
        }
         console.log(O valor ${valorBuscado} ocorre ${contador} vez(es) no vetor.);
        }

         contarOcorrencias();
    </script>
</body>
</html>
