# Etapa 1.2 - Primeiro Request

## Objetivo:

_"What you're seeing now is my normal state."_

Essa etapa deve ser seu primeiro contato com JS e apresentar outros conceitos: Servidor Web, HTTP (Hypertext Transfer Protocol), API (Application Programming Interface) e GraphQL (Graphic Query Language).

## Servidor Web:

Um Servidor Web, de maneira bem genérica, é uma máquina conectada a Internet com uma ou mais responsabilidades específicas.

Definição Formal e Muitos Detalhes: [https://en.wikipedia.org/wiki/Web_server](https://en.wikipedia.org/wiki/Web_server)

No contexto QultureRocks, nosso Servidor Web é responsável por se comunicar com nosso Banco de Dados (o caso de uso mais comum). Assim, nessa etapa, trabalharemos com um Servidor Web com o mesmo propósito.

## HTTP:

O HTTP é um Protocolo de Comunicação usado para a comunicação entre Servidores Web e Páginas Web.

Definição Formal e Básicos: [https://developer.mozilla.org/pt-BR/docs/Web/HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP)

## API:

Em uma definição bem genérica, uma API é uma interface que possibilita que aplicação utilize os recursos computacionais e as funcionalidades de outra aplicação.

Definição Formal e Muitos Detalhes: [https://en.wikipedia.org/wiki/API](https://en.wikipedia.org/wiki/API)

No nosso contexto QultureRocks, nosso Servidor Web define APIs que permitem que nós e outros usuários manipulem os registros no nosso Banco de Dados.

## GraphQL:

GraphQL é uma linguagem de consulta, usada por APIs para a comunicação entre Cliente e Servidor.

Tudo que Você Precisa Saber: [https://graphql.org/learn/](https://graphql.org/learn/)

Nesse ponto da trilha é bem difícil explicar por que optamos pelo uso de GraphQL ao invés do tradicional REST, mas ao final da Trilha você terá entendido nossos motivos. De qualquer forma, se quiser ver alguns motivos: [https://graphql.org/faq/#why-should-i-use-graphql](https://graphql.org/faq/#why-should-i-use-graphql)

Para treinar os seus conhecimentos adquiridos com a leitura desses tutoriais, existe um Playground em [https://rickandmortyapi.com/graphql](https://rickandmortyapi.com/graphql) que nos permite fazer consultas sobre os episódios de Rick and Morty e, como você já deve imaginar, será utilizado na implementação.

## Implementação:

Mocks são legais, mas vivem pouco 😭.

Nessa etapa você deverá usar JS para fazer uma Query ao servidor acima e, a partir da resposta, mostrar na tela um Card com os detalhes de cada um dos episódios.

Lembre-se que além da lista de episódios com seus respectivos detalhes, também precisamos pedir ao servidor o número total de episódios para colocar na página.

Por hora, não se preocupe com paginação, ela faz parte da próxima etapa.

## Tarefas:

Para facilitar no desenvolvimento, fragmentamos essa etapa em algumas tarefas, semelhante a como fazemos no nosso dia a dia. Você deve realizar essas tarefas na ordem apresentada e criar um PR (Pull Request no GitHub) para cada uma das tarefas finalizadas.

## Lista de Tarefas 1.2:

- Ler e Praticar GraphQL
- Construir Query no Playground
- Implementar Query em JS
- Colocar JS na Tela
- Usar Resposta na Tela

---

[Voltar](./intro.md) - [Próximo](./third.md)
