O Cypress é um framework de teste com o conceito all-in-one, ou seja, todas as bibliotecas e ferramentas necessárias estão integradas, de forma que só há necessidade de instalação do próprio Cypress.

A imagem abaixo exemplifica como era o processo de testes automatizados antes e depois do Cypress, no que tange a necessidade de instalação de bibliotecas auxiliares:

![Print da tela do Cypress, em fundo branco, com a demonstração de todos os frameworks que eram necessários antes de existir o Cypress e como ficou simples depois do mesmo, que já possui tudo com o conceito all-in-one, isto é, tudo em um só, em tradução livre](../images/mocha%20e%20mochawesome-img1.png)

O [Mocha](https://mochajs.org/) é um framework de testes JavaScript, que pode ser utilizado tanto nos projetos backend (rodando no Node.JS) quanto nos projetos frontend (rodando diretamente no browser), para diversos tipos de teste, seja BDD (Behavior Driven Development ou em tradução, Desenvolvimento Guiado por Comportamento) ou TDD (Test Driven Development ou Desenvolvimento Orientado por Testes), síncrono ou assíncrono, usando o gerador de relatório que mais se adequa ao projeto.

O [Mochawesome](https://www.npmjs.com/package/mochawesome) é justamente um gerador personalizado de relatório, utilizado em conjunto com o Mocha. Com ele podemos fazer configurações, verificar se o log será gerado em html, json, onde será gerado, qual o formato de data para ser utilizado no nome, o título, dentre outros parâmetros. Vamos detalhar alguns dos principais:

![Print da tela do VS Code, em fundo preto, com a configuração de alguns parâmetros padrão do relatório](../images/mocha%20e%20mochawesome-img2.png)

* `“reporter”`: essa propriedade define o padrão de geração de relatórios. Configurando como padrão aqui no arquivo Cypress.json, sempre que o comando cypress run for disparado, o tipo de relatório gerado será do Mochawesome, mesmo que não seja incluído a opção --reporter mochawesome conforme demonstrado na aula.
* `“reportDir”`: diretório padrão onde serão gerados os relatórios.
* `“overwrite”`: caso não se inclua um timestamp, o relatório padrão é gerado com o nome mochawesome.json ou mochawesome.html. Para esses casos, definimos se o relatório será sobrescrito ou não.
* `“html”`: passamos o parâmetro true ou false para indicar se o relatório será gerado em formato html.
* `“json”`: passamos o parâmetro true ou false para indicar se o relatório será gerado em formato json.
* `“timestamp”`: formato de apresentação do relatório com relação à data e hora.
* `“charts”`: dá a possibilidade de gerar gráficos quando unificamos os resultados.
* `“code”`: mostra exatamente qual o código foi executado tanto na falha quanto no sucesso.
* `“reportTitle”`: o título a ser apresentado no relatório.
Além do pacote mochawesome, pode-se instalar também o [mochawesome-merge](https://www.npmjs.com/package/mochawesome-merge), que unifica todos os arquivos .json de relatório em apenas um, denominado output.json. E para ficar visualmente melhor, o [mochawesome-report-generator](https://www.npmjs.com/package/mochawesome-report-generator), que é outro pacote, que transforma o arquivo .json em um arquivo .html.