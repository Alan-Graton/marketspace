# marketspace

## Sobre

Marketspace é uma aplicação mobile para compra e venda de itens novos e usados.
Esse projeto é um dos desafios da trilha de React Native do Ignite, nosso bootcamp completo de especialização em React, React Native e Node.js.

## REFACTOR

Será necessário refatorar o desenvolvimento da tela de detalhes de um anúncio.

A tela será dividida em outras 3 telas: 

- Detalhes do Anúncio (de outra pessoa)
- Detalhes do meu Anúncio
- Pré-visualização do meu Anúncio

Para refatorar posso colocar todo o conteúdo em comum entre as telas dentro de um componente global, enquanto os Headers e Footers
vão ser alterados conforme necessário dentro das próprias telas.

As telas: `AnnouncementsDetails` && `MyAnnouncementsDetails` vão receber parâmetros de rotas utilizados em sua versão anterior, 
já na tela `MyAnnouncementPreview` não será necessário buscar os dados via API, já que eu posso apenas buscar do form anterior.

## TODO

- [X] Desenvolvimento inicial das interfaces (layout, estilização)
- [X] Desenvolvimento inicial das funcionalidades (navegação, utilidades)
- [ ] Integração com Backend
- [ ] Finalização da dinâmica das telas com ações do usuário pós-integração com Backend
