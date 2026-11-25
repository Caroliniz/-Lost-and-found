# Achados e Perdidos

[English](README.md) · **Português (Brasil)**

Este documento apresenta o projeto Achados e Perdidos, desenvolvido como parte do curso Técnico em Desenvolvimento de Sistemas do Senac. A documentação será mantida em português e inglês, acompanhando a evolução do projeto.

## Equipe

- **Turma:** TDS — turmas mistas 6570, 6756 e 6863
- **Tech Lead:** Carolini Rodrigues
- **Responsável pela apresentação:** Gabriel Lopes
- **Integrantes:**
  - Carolini Rodrigues — [GitHub](https://github.com/Caroliniz)
  - Felipe (6756) — GitHub a confirmar
  - Gabriel Lopes — GitHub a confirmar
  - Davi (V Marins) — GitHub a confirmar

## Tema / área

Achados e perdidos — vida no campus e comunidade.

## Problema

Em ambientes acadêmicos, é comum que estudantes, professores e funcionários percam ou encontrem objetos durante sua rotina.

Muitas vezes, quem encontra um pertence não sabe como localizar seu proprietário, enquanto quem perdeu um objeto não possui um meio centralizado para verificar se alguém o encontrou.

A falta de um espaço organizado para divulgar esses objetos dificulta a comunicação e a recuperação dos pertences.

## Solução

O Achados e Perdidos é uma aplicação que tem como objetivo facilitar a identificação e a recuperação de objetos perdidos no ambiente acadêmico.

A aplicação permitirá que pessoas que encontrarem objetos registrem uma fotografia. A inteligência artificial será utilizada para analisar a imagem e gerar uma sugestão de descrição do objeto.

Após o cadastro, a imagem ficará disponível no menu principal da aplicação, permitindo que outras pessoas visualizem os objetos encontrados e reconheçam seus pertences.

### Funcionalidades principais

- Registro de objetos encontrados por meio de fotografias.
- Utilização de inteligência artificial para gerar descrições dos objetos a partir das imagens.
- Exibição dos objetos encontrados no menu principal.
- Visualização dos objetos publicados para facilitar o reconhecimento pelos proprietários.

Outras funcionalidades poderão ser documentadas conforme forem implementadas.

## Stack

### Linguagens e tecnologias

- **Java:** desenvolvimento do back-end.
- **JavaScript:** desenvolvimento de funcionalidades da aplicação.
- **React:** desenvolvimento da interface do usuário.
- **TypeScript:** desenvolvimento do front-end com tipagem estática.
- **PL/pgSQL:** linguagem procedural utilizada no PostgreSQL.

**Banco de dados:** PostgreSQL.

*Os frameworks, bibliotecas e versões específicas serão detalhados após a confirmação das configurações do projeto.*

## Estrutura de pastas

O projeto será organizado de forma a separar o back-end do front-end, facilitando a organização, manutenção e desenvolvimento das diferentes partes da aplicação.

A estrutura exata de diretórios será documentada conforme a organização efetivamente utilizada no repositório.

```text
/
├── README.md
├── README.pt-BR.md
├── DECISIONS.md
├── DECISIONS.pt-BR.md
├── AI_LOG.md
├── AI_LOG.pt-BR.md
├── .lovable/
├── drizzle/
├── public/
├── src/
└── supabase/
```

*Esta representação é uma referência inicial e deverá ser ajustada para corresponder às pastas reais do repositório.*

## Como rodar

### Pré-requisitos

- Java (versão a confirmar).
- Node.js e npm.
- PostgreSQL.
- Git.

### Back-end

Os comandos de instalação e execução serão adicionados após a confirmação da configuração do projeto.

### Front-end

Os comandos de instalação e execução serão adicionados após a confirmação das dependências e scripts utilizados.

## CI/CD

A automação do projeto será documentada nesta seção.

A pipeline deverá utilizar GitHub Actions para executar verificações automáticas, incluindo build, análise de código (lint) e testes.

As configurações de execução em pull requests e atualizações da branch `main` serão documentadas após a implementação dos workflows.

## Deploy

A aplicação possui uma versão disponível para visualização:

https://lost-found-senac.lovable.app/

## Links

- **Repositório:** A adicionar.
- **Aplicação:** https://lost-found-senac.lovable.app/
- **Board / projeto no GitHub:** A definir.
