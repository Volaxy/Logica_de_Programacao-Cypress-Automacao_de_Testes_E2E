Um *flaky test* é um teste intermitente (ou teste sensível) que as vezes falha e às vezes não. E os resultados desse tipo de teste podem passar despercebidos. Um exemplo seria testar o tempo de resposta de uma requisição.

No processo de elaboração e execução dos testes é muito comum nos depararmos com erros randômicos, conhecidos como flaky tests. Esses erros que acontecem de forma aleatória, não necessariamente são falhas. Isso porque ao iniciarmos o processo de automação e2e, por exemplo, programamos os scripts em nossa máquina local, executando os testes exclusivamente e tudo parece funcionar corretamente. Porém, ao executá-los num ambiente diferente, isso pode ter um resultado diferente.

O conceito de "flaky" acontece porque o mesmo código apresenta resultados de falha e sucesso, sem que haja nenhuma alteração. Isso geralmente acontece por conta de alguns fatores, como:
* Dependência de código de terceiros.
* Comportamentos não-determinísticos.
* Concorrência de processos.
* Falta de atualização de dados entre passagens de testes.
* Diferença de fuso horário.
* Dependência na ordem de execução de testes.
* Entre outros.

Manter testes que falham na suite de testes pode ser extremamente prejudicial pois fere a confiança nos testes. Sendo assim, deve-se fazer o máximo para evitá-los. A identificação desse tipo de problema ocorre comparando os resultados de testes apresentados, após várias passagens de teste. Caso você use o dashboard do Cypress na versão paga, ele já fornece essa análise. Algumas dicas que podem ser úteis para evitar os flaky tests:

1. Se a falha for por diferença de tempo nos diversos ambientes, considere colocar pontos de espera, orientado a algum evento e não com tempo fixo;

2. Verificar se as variáveis de ambiente estão configuradas corretamente para cada tipo de ambiente onde o teste será executado;

3. Verificar se a ferramenta de teste automatizado que você está usando dá suporte a rerun ou reteste, que é um recurso que permite que a ferramenta rode novamente o teste em caso de falha, para verificar se numa segunda tentativa vai dar certo. Isso é normalmente configurável por teste;

4. Se for alguma situação de teste que compare data ou hora, tente usar alguma constante para retornar esse valor e não depender da hora/data real do ambiente, que pode estar diferente;

5. Caso seja algum teste que faz uma chamada a alguma API externa ou de terceiros, considere usar um mock para ter um controle melhor sobre a resposta que será devolvida.

Flaky tests não devem estar na suite de testes. Se não for possível corrigi-lo, considere remover o teste ou pensar em outra alternativa para verificar esse resultado.