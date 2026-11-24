# Briefing do tema: Achados e perdidos

[English](BRIEFING.md) · **Português (Brasil)**

**Hack com IA: Codando com Inteligência**  
Senac na Prática · Técnico em Desenvolvimento de Sistemas  
Área: vida no campus e comunidade  
Imersão de 23/11 a 29/11 · apresentações em 30/11 e 01/12

Este briefing é o ponto de partida do **seu** tema. Leiam com calma, recortem um MVP que caiba em uma semana e registrem as decisões. Vocês vão transformar este problema em um produto real, com front-end e back-end, repositório organizado e uso documentado de IA. Esta é uma imersão colaborativa: a banca avalia o que o time construiu, decidiu e aprendeu.

## Tema e contexto

**Achados e perdidos** — Sistema para registrar e buscar objetos perdidos, com IA descrevendo o objeto a partir da foto.

Todo semestre o campus acumula garrafas, carregadores, cadernos, jaquetas e documentos que alguém perdeu no laboratório, na sala ou no pátio. Muita coisa vai para uma caixa na recepção, descrita de memória (“uma jaqueta preta”), ou circula numa foto solta em um grupo. Quem perdeu o objeto tem dificuldade para buscar; quem achou não sabe como registrar direito; e itens com dados pessoais — crachás, carteirinhas — exigem cuidado que o improviso não oferece.

Vocês vão construir um fluxo simples e responsável para registrar, descrever e localizar esses objetos no Senac e no entorno imediato do campus.

## Público e personas

- **Quem perdeu um objeto:** precisa descrever o que procura e reconhecer o item com segurança.
- **Quem encontrou um objeto:** quer registrar rápido, com foto e local, sem virar “responsável permanente” pelo item.
- **Recepção ou equipe do campus:** pode centralizar a guarda e a devolução, com um registro claro.

## Objetivo

Entregar um MVP em que um item encontrado (ou um relato de perda) é registrado com foto e local, a IA gera uma descrição estruturada a partir da imagem, e é possível buscar, acompanhar o status e concluir a devolução com o mínimo de dados pessoais expostos.

## Requisitos mínimos (MVP)

O recorte abaixo é realista para uma semana. Fechem-no no primeiro dia e registrem no `DECISIONS.md` o que entra, o que fica de fora e por quê. É melhor um fluxo completo e demonstrável do que uma lista longa pela metade.

1. Registrar um item encontrado, com foto, data, local aproximado no campus e um status inicial.
2. A IA gera uma descrição estruturada a partir da foto (tipo, cor, marcas visíveis) para a pessoa revisar e ajustar.
3. Registrar um relato de perda (o que a pessoa procura, quando e onde acha que perdeu).
4. Buscar e filtrar itens por tipo, cor, local ou palavras da descrição.
5. Fluxo simples de interesse e devolução, sem exibir telefone ou documento em uma listagem pública.
6. Atualizar o status do item (encontrado, aguardando retirada, devolvido).

## Onde a IA entra

O uso de IA é liberado e incentivado — no produto e no processo — e precisa aparecer no `AI_LOG.md`. Algumas frentes concretas neste tema:

- Descrever o objeto a partir da foto, em linguagem simples e com atributos úteis para a busca.
- Sugerir etiquetas (categoria, cor, tipo) que a pessoa confirma antes de publicar.
- Ajudar a cruzar um relato de perda com itens encontrados, apontando candidatos — sempre com confirmação humana.
- Alertar se a foto parece conter documento, rosto ou dado sensível, para o time tratar com mais cuidado.

Não publiquem, sem revisão de vocês, um texto ou uma decisão automática da IA como se já fosse a versão final.

## Extras opcionais

Só depois que o MVP estiver em pé. São ideias, não obrigações:

- Aviso quando entrar um item parecido com um relato de perda aberto.
- Mapa simples dos locais em que mais se encontram objetos.
- Código ou comprovante para a retirada na recepção.
- Orientação visível sobre o que fazer com documentos e cartões.

## Fora de escopo

Para proteger o prazo e o foco do produto:

- Envio pelos Correios ou logística fora do campus.
- Pagamento, recompensa ou leilão de itens não retirados.
- Reconhecimento facial ou identificação automática de pessoas nas fotos.
- Boletim oficial de ocorrência policial.

## Perguntas para guiar o time

Usem estas perguntas no primeiro dia, ao definir o MVP, e de novo antes da demo:

- Como vocês confirmam que quem veio retirar o item é de fato a pessoa certa, sem expor dados demais na tela?
- O que fazer quando a foto traz um documento, um crachá ou um rosto?
- Quem fica responsável por guardar o objeto físico enquanto o registro está aberto?
- Por quanto tempo um item permanece visível na busca?
- Como a busca funciona se a pessoa não lembra de detalhes, só de uma imagem mental vaga?

## Entregáveis e como a banca avalia

Esta é uma **imersão colaborativa** de uma semana, com times de 3 ou 4 estudantes do TDS. A banca avalia o trabalho de **vocês**, no próprio projeto — um retorno formativo, não uma comparação com outros times.

**O que precisa estar pronto no repositório** (raiz), em **inglês** (versão principal) e em **português** (`.pt-BR`), com o link entre os idiomas no topo de cada arquivo:

- `README.md` e `README.pt-BR.md`
- `DECISIONS.md` e `DECISIONS.pt-BR.md`
- `AI_LOG.md` e `AI_LOG.pt-BR.md`

A aplicação precisa ter **front-end e back-end**. O back-end pode ser **Java**, **Python** ou **Node.js** (isolados ou combinados, desde que integrados). O front-end é obrigatório (web, desktop ou mobile). Justifiquem a stack no `DECISIONS.md`. Também são obrigatórios o histórico com Conventional Commits, o trabalho via Pull Request com revisão, a proteção da `main` e uma pipeline de **GitHub Actions** verde (build, lint e testes) em PRs e na `main`. Não commitem segredos. No primeiro dia, adicionem o professor como colaborador: **adrianoanschau@gmail.com**.

O **congelamento do código** é no domingo, **29/11, às 23h59**. As apresentações são em **15 minutos + 5 minutos de perguntas**, nos dias 30/11 e 01/12, no Senac de Canoas, Sala 103. Ensaiem a demo e o roteiro (problema e solução, demo ao vivo, fluxo de trabalho, decisões, IA na prática e CI/CD).

A avaliação tem **duas bancas, com o mesmo peso**:

- **Banca Técnica (50%):** qualidade de código e arquitetura; Git, Conventional Commits e PRs; CI/CD; domínio do código nas perguntas.
- **Banca de Inovação e Impacto (50%):** originalidade; impacto (o problema real e para quem); experiência do usuário; clareza do pitch; uso criativo da IA.

Qualquer pessoa do time pode ser perguntada sobre qualquer parte do projeto. Usem a IA com inteligência, registrem o que ela gerou e o que vocês corrigiram, e assumam o código que forem apresentar.

Bom trabalho — e que a semana seja intensa, colaborativa e bem documentada.

