# Etapa 1.3 - Paginação e Filtro

## Objetivo:

Essa etapa não apresenta tecnologias nem conceitos novos 😁. Ela serve para que você praticar um pouco mais as coisas que aprendeu e fazer uma breve provocação para o uso do React.

## Paginação:

Paginar, como nome sugere, é dividir uma lista de registros em diferentes páginas (não esperava por essa, né?).

Apesar de simples, é algo bem útil. Pense em um BD com milhões de registros e o tempo de processamento para consultar toda essa informação. Agora, compare com o tempo necessário para consultar dez registros (bem mais rápido, né? 🙃).

A paginação diminui o tempo de processamento do servidor e evita mostrar ao usuário informações inúteis.

## Filtro:

Outra maneira de evitar que o usuário veja informação inútil é criar filtros (juro que não vamos definir). O mais comum é o filtro por nome e é isso que você vai fazer na implementação.

## Implementação:

Você deve ter notado que na sua listagem de episódios existem somente vinte registros, mas o número total de episódios é quarenta e um (até o final da quarta temporada). Pode ficar tranquilo, não roubaram vinte e um episódios, essa Query é paginada.

Assim, você deve permitir que o usuário avance até a próxima página da lista de episódios e veja os próximos resultados. Por fim, você deve implementar uma Barra de Busca no topo da Tela e permitir que o usuário filtre a listagem pelo Nome do Episódio.

Felizmente, o servidor utilizado já possui suporte para essas duas coisas, você só precisa refinar a sua Query usando Variáveis.

Lista de Tarefas 1.3

- Refinar Query com Page
- Permitir Troca de Página
- Criar Barra de Busca
- Usar Nome na Query

## Para Pensar:

Você teve dificuldade em gerir no código qual página estava sendo apresentada e qual nome de episódio sendo buscado?

Se sim, temos uma boa notícia. Com **React** é muito mais fácil gerenciar "Estados". Mas não vamos nos apressar, essa é sua próxima parada: [**Parte 2 - React**](../react/intro.md).

---

[Voltar](./intro.md)
