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

O back-end do projeto utiliza Supabase/Lovable Cloud como plataforma de serviços.

O Supabase fornece os seguintes recursos:

PostgreSQL: gerenciamento e armazenamento dos dados.

Autenticação: gerenciamento da autenticação dos usuários.

Storage: armazenamento de arquivos e imagens.

Funções RPC: execução de funções diretamente no banco de dados.

A aplicação se comunica diretamente com o Supabase por meio do cliente JavaScript (Supabase JS), realizando operações em tabelas como items, claims, lost_reports e profiles.

O projeto também utiliza funções de servidor do TanStack Start, incluindo funcionalidades para análise de fotografias.

O esquema do banco de dados está definido no arquivo schema.sql.

Front-end

O front-end do projeto é desenvolvido com React 19 e TypeScript, utilizando TanStack Start e TanStack Router para estruturar a aplicação e gerenciar as rotas.

As principais tecnologias e ferramentas utilizadas são:

React: construção da interface e dos componentes.

TypeScript: tipagem estática e maior segurança durante o desenvolvimento.

Tailwind CSS: estilização da interface.

Vite: execução do ambiente de desenvolvimento e compilação para produção.

TanStack Start: estruturação da aplicação e gerenciamento das funções de servidor.

TanStack Router: gerenciamento das rotas da aplicação.

ESLint: análise estática e identificação de possíveis problemas no código.

Prettier: padronização da formatação do código.

Vitest: execução de testes automatizados.

Instalação das dependências:

npm install

Execução em ambiente de desenvolvimento:

npm run dev

Build para produção:

npm run build

CI/CD

O projeto utiliza GitHub Actions para automatizar processos de Integração Contínua (CI), realizando verificações automáticas no código.

O workflow é executado automaticamente quando ocorre:

Um push na branch main.

A abertura ou atualização de um Pull Request direcionado à branch main.

Durante a execução, são realizadas as seguintes etapas:

Instalação das dependências: instala os pacotes necessários utilizando npm ci.

Lint: verifica possíveis problemas e inconsistências no código com npm run lint.

Testes automatizados: executa os testes utilizando Vitest.

Build: verifica se a aplicação pode ser compilada para produção com npm run build.

O arquivo de configuração da automação está localizado em .github/workflows/ci.yml.
