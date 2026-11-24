# Registro de uso de IA (AI_LOG)

[English](AI_LOG.md) · **Português (Brasil)**

Registrem aqui como o time usou inteligência artificial no projeto. O uso de IA é liberado e incentivado, desde que documentado: este arquivo é entregável obrigatório e serve de roteiro para o bloco “IA na prática” da apresentação.

A documentação do projeto deve ser escrita **em inglês** (a versão principal é o [`AI_LOG.md`](AI_LOG.md)), com uma **versão em português** ao lado. Mantenham as duas versões alinhadas.

Mantenham este arquivo na **raiz** do repositório. Incluam as ferramentas utilizadas e, para cada uso relevante, o prompt principal, o que a IA gerou, o que o time aproveitou e o que foi corrigido ou rejeitado — e por quê.

Nunca commitem chaves de API, senhas ou outros segredos. Esses valores vão em `.env` (fora do repositório) e em GitHub Secrets.

Copiem o modelo abaixo sempre que precisarem de uma entrada nova.

## Ferramentas

- (ex.: ChatGPT, GitHub Copilot, Cursor, outro)

## Modelo de registro

```markdown
### [data] — [tarefa ou trecho]

- **Prompt principal:**
- **O que a IA gerou:**
- **O que o time aproveitou:**
- **O que o time corrigiu ou rejeitou, e por quê:**
```

## Registro

### 24/11/2026 — Autenticação JWT (exemplo)

- **Prompt principal:** "Gere um middleware de autenticação JWT em Node.js/Express, com tratamento de token expirado e uma rota protegida de exemplo."
- **O que a IA gerou:** um middleware e um exemplo de rota, com uma dependência desatualizada e sem validação de variáveis de ambiente.
- **O que o time aproveitou:** a estrutura do middleware e o fluxo de verificação do token.
- **O que o time corrigiu ou rejeitou, e por quê:** atualizamos a biblioteca, movemos o segredo para variável de ambiente e incluímos testes. O exemplo de rota foi reescrito para se adequar ao nosso modelo de usuário.

### [data] — [tarefa ou trecho]

- **Prompt principal:** Crie uma aplicação web completa, responsiva e funcional (MVP pronto para produção) de Achados e Perdidos para o Senac Canoas (Brasil) em pt-BR, usando React, Tailwind CSS, JavaScript, Netlify Functions e Supabase (Auth, Database, Storage) em planos gratuitos.

Interface e Páginas:

- Design moderno e minimalista (azul-escuro, laranja e fundos claros) com navegação: Início, Procurar, Achei algo, Perdi algo, Administração.
- Página Inicial: barra de busca, ações rápidas, estatísticas e objetos encontrados recentemente.
- Busca e Detalhes: filtros por nome, categoria, cor, local, data e palavras-chave; página de detalhes do item com botão "Tenho interesse".

Funcionalidades Principais:

- Itens Encontrados: formulário com upload de foto, preenchimento sugerido por IA editável (categoria, cor, características, marcas) com analisador local gratuito como fallback, e aprovação manual antes de publicar.
- Itens Perdidos: formulário de registro que gera um protocolo único, mantendo e-mail/telefone privados ocultos do público.
- Correspondência com IA (Matching): sugerir possíveis combinações entre itens perdidos e encontrados com pontuação de relevância e justificativa (sem confirmação automática).
- Fluxo de Reivindicação e Retirada: usuário solicita o item -> recepção aprova -> sistema gera código único aleatório de retirada (salvo como hash SHA-256) -> recepção valida o código presencialmente -> status muda para "Devolvido".
- Painel Administrativo: área restrita à equipe (Supabase Auth) para gerenciar itens e relatos, aprovar/rejeitar solicitações, validar códigos de retirada, atualizar status (Encontrado, Aguardando retirada, Devolvido), ver contatos mascarados e ocultar fotos sensíveis.

Segurança e Privacidade:

- Remover metadados EXIF das fotos enviadas; restringir fotos com rostos, documentos ou cartões bancários apenas à equipe.
- Ocultar automaticamente itens devolvidos da busca pública e arquivar registros com mais de 90 dias.
- Nunca expor segredos ou tokens administrativos no código frontend; incluir um arquivo .env.example.
- Inspecionar o código existente primeiro, reutilizar componentes funcionais e garantir persistência real de dados (sem dados fictícios/mock).

- **O que a IA gerou:** O esqueleto completo da frontend do site
- **O que o time aproveitou:** Tudo
- **O que o time corrigiu ou rejeitou, e por quê:** Nada
