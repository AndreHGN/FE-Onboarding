# Etapa 2.3 - Abstrações

## Objetivo:

_"And this... This is what is known as a Super Saiyan that has ascended past a Super Saiyan. Or, you could just call this a Super Saiyan 2."_

Essa etapa tem como objetivo apresentar os conceitos de Hooks e explorar sua capacidade de isolar responsabilidades e criar abstrações.

## Hooks:

Um dos aspectos mais importantes do React são os Hooks. A introdução dos Hooks tornou possível a criação de abstrações e isolar responsabilidades.

Introdução: [https://www.youtube.com/watch?v=dpw9EHDh2bM&ab_channel=ReactConf](https://www.youtube.com/watch?v=dpw9EHDh2bM&ab_channel=ReactConf)

Tudo que Você Precisa Saber: [https://pt-br.reactjs.org/docs/hooks-intro.html](https://pt-br.reactjs.org/docs/hooks-intro.html)

Existem uma série de Hooks que nos permitem fazer coisas fantásticas, mas por hora, se foque em **_useState_** e **_useEffect_**, eles são suficientes para a tarefa que você vai fazer e o segundo já é complexo o bastante. Não se preocupe em decorar tudo, ninguém conhece todas as ferramentas do React.

Para facilitar nosso trabalho, manter a consistência e isolar responsabilidades, nós criamos várias abstrações na nossa aplicação. Por mais que não criemos novas todos os dias, é extremamente importante aprender como elas funcionam e é isso que você vai fazer aqui.

Dando uma breve justificativa para o uso das nossas abstrações (voltada para o contexto da abstração que você irá criar), além de evitar repetição de código, podemos centralizar decisões e muda-las com facilidade.

Hoje, para fazermos requisições GraphQL usamos uma biblioteca chamada Apollo (material na **Parte 3**). Imagine que o Apollo amanhã não atende mais nossas necessidades como plataforma e desejamos mudar para outra biblioteca. Como temos uma abstração com essa responsabilidade, basta alterarmos um único arquivo e refletir essa trocar por toda a aplicação. Atualmente, temos mais de duzentas requisições diferentes no FE, imagine trocar uma a uma de Apollo para esse novo serviço hipotético.

## Implementação:

Você deverá implementar um Hook responsável por fazer as requisições ao Servidor do Playground e usar esse Hook no Componente apropriado. Difícil, né?! Se tiver problemas, peça ajuda.

Sua abstração deve possuir três Estados:

- Data - Representa a resposta da requisição.
- Loading - Representa se a requisição está "em andamento".
- Error - Representa se houve algum erro na requisição.

## Tarefas:

Essa Etapa é difícil, mas não extensa, faz sentido ser uma única entrega com um único PR. Porém, não deixe de pensar em tudo que você deve fazer para que sua Abstração funcione e como integrá-la ao seu código.

---

[Voltar](./intro.md)
