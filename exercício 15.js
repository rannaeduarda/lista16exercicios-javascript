<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pluviometria Junho</title>
</head>
<body>
    <h1>Simulação de Pluviometria de Junho</h1>
    <script>
        function calcularPluviometria() {
           
            let indicePluvio = [];
            let diaMaisChuva = 0;
            let diaMenosChuva = 0;
            let maxChuva = -1;
            let minChuva = 9999;
            let somaPrimeira = 0;
            let somaSegunda = 0;
            
            for (let i = 1; i <= 30; i++) {
              
            let chuvaDia = parseFloat(prompt(Digite o índice pluviométrico do dia ${i}:));
                
                indicePluvio[i - 1] = chuvaDia;
               
                if (chuvaDia > maxChuva) {
                    maxChuva = chuvaDia;
                    diaMaisChuva = i;
                }
                
                if (chuvaDia < minChuva) {
                    minChuva = chuvaDia;
                    diaMenosChuva = i;
                }
               
                if (i <= 15) {
                    somaPrimeira += chuvaDia;
                } else {
                    somaSegunda += chuvaDia;
                }
            }
            
            let mediaPrimeiraQuinzenas = somaPrimeira / 15;
            let mediaSegundaQuinzenas = somaSegunda / 15;
            
            alert(Resultado da Pluviometria de Junho: \n\n +
                  - Dia com maior chuva: Dia ${diaMaisChuva} com ${maxChuva.toFixed(2)} mm\n +
                  - Dia com menor chuva: Dia ${diaMenosChuva} com ${minChuva.toFixed(2)} mm\n +
                  - Média da primeira quinzena: ${mediaPrimeiraQuinzenas.toFixed(2)} mm\n +
                  - Média da segunda quinzena: ${mediaSegundaQuinzenas.toFixed(2)} mm);
        }
        
        calcularPluviometria();
    </script>
</body>
</html>
