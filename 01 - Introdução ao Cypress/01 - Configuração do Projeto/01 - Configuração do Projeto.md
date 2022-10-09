As principais funcionalidades ao se colocar um software em produção são testadas e automatizadas pelos testes automáticos para se evitar perda de tempo e esforço nos mesmos requisitos, garantindo uma constância.

Ao se abrir a pasta do projeto (no VS Code por exemplo), você pode digitar `npm init` para configurar o seu projeto.
Ao se pedir o "test comand:", digite o comando `npx cypress open`. Pois a cada vez que os testes forem executados, esse comando será entendido.

Depois de configurado, digite `npm i cypress --save-dev` para instalar o *cypress* dentro do projeto somente no ambiente de desenvolvimento.

Para abrir o script de teste do *Cypress*, basta digitar `npm run test`.