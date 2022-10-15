Refactorings são transformações de código que melhoram a manutenção de um software, mas sem afetar o seu funcionamento. É um conjunto de técnicas que podemos aplicar para que um código muito grande, mal organizado ou mal escrito fique melhor, mais legível, mais fácil de entender e modificar.

Essas técnicas de refatoração, embora não tragam novas funcionalidades, fazem com que outras funcionalidades e manutenções futuras - que precisem ser feitas no sistema - fiquem cada vez mais fáceis. Talvez a curto prazo, não seja possível se perceber muita vantagem, mas a médio e longo prazo, o sistema vai crescer cada vez e vai ficando cada vez mais consistente, mais durável, isto é, vai durar muitos e muitos anos, sem que seja necessário sua reescrita total.

Alguns procedimentos simples que podem ser feitos para organizar e melhorar a legibilidade do código:

## 1 - Extrair Método

Sempre que um método está com muitas linhas, é ideal que se extraia em outros pequenos métodos. Vamos supor que nosso código de testes estivesse com muitas linhas no método 'Busca fotos no site AluraPic, poderíamos separar em vários pequenos métodos e chamá-los aqui dentro, por exemplo:

```
it('Busca fotos no site AluraPic', ()=> {
   fazLoginNoSite(login, senha);
   escolheFoto(foto);
   fazDownloadFotoSelecionada();        
})
```

## 2 - Parametrizar Método

Muitas vezes temos métodos muitos similares, com códigos repetidos, que poderiam ter apenas uma pequena alteração. Para esses casos, podemos incluir parâmetros nesses métodos e definir um comportamento diferente baseado no parâmetro informado. Importante considerar a necessidade de usar objeto parâmetro. Exemplo: ao invés de passar parâmetros como login, senha e telefone, podemos utilizar o objeto completo, que já possui todos esses dados, por exemplo, Usuario.

## 3 - Substituir valores muito usados por constantes

Sempre devemos considerar o menor número possível de ajustes caso haja necessidade de alterar alguma coisa. Sendo assim, sempre que for necessário repetir um valor ou percentual em muitos pontos diferentes do código, o ideal é centralizar essa informação numa constante.

## 4 - Separar, sempre que possível, em classes e/ou arquivos separados por funcionalidade

Quanto menos código por arquivo, maior a chance de entendimento e legibilidade. Separar as informações de acordo com alguma afinidade facilita a localização das mesmas e evita código repetido.

Existem várias outras técnicas e boas práticas que podem ser utilizadas, de acordo, inclusive, com a linguagem de programação que você estiver utilizando para escrever o código.