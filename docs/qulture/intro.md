<img src="https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f918.svg" width="100">

# Parte 3 - QultureApp

## Objetivo:

_"And this... Is... To go... Even further... Beyond!"_

Agora, sim, é hora de olhar para o nosso projeto e entender como ele funciona. Esse Parte tem como objetivo colocar o desenvolvedor em contato com o projeto do QultureApp para ler e interpretar o código, utilizar nossos padrões, serviços e abstrações e fazer uma pequena mudança. Mas antes disso, mais algumas tecnologias. 😬

## TS:

O TS (TypeScript) é um dialeto do JS, isso significa que ele altera a forma com que o JS é escrito, mas não altera o seu funcionamento. O TS torna obrigatório a tipagem dos objetos JS e introduz enumeradores.

Básico: [https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

Por mais que a tipagem não seja necessária para o funcionamento "correto" de uma função ou um Componente, ela facilita com que outro desenvolvedor leia e compreenda seu código, além de evitar uma série de erros na hora de escrever.

Por isso, "Tipe" seu código, Parça! 😠

## Apollo:

O Apollo é nossa biblioteca de estimação para fazer requisições GraphQL.

Básico: [https://www.apollographql.com/docs/tutorial/introduction/](https://www.apollographql.com/docs/tutorial/introduction/)

Caso Queira: [https://odyssey.apollographql.com/lift-off-part1/feature-overview-and-setup](https://odyssey.apollographql.com/lift-off-part1/feature-overview-and-setup)

Para sua alegria, o Apollo está encapsulado em nossas Abstrações (😉), então você irá interagir com ele indiretamente. Lembre-se o Apollo trabalha com Cache e precisamos atualizá-lo manualmente algumas vezes. Um dia você terá problemas com o Cache do Apollo (_"I Have Spoken"_).

---

[Voltar](../../README.md)
