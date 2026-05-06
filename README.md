# 📋 Trello Kanban

Aplicação de gerenciamento de tarefas no estilo Kanban, inspirada no Trello. Permite organizar tarefas em colunas personalizáveis com drag and drop, facilitando a visualização do fluxo de trabalho.

## ✨ Funcionalidades

- 🗂️ **Colunas personalizáveis** (ex: A fazer, Em progresso, Concluído)
- 🖱️ **Drag and drop** de cards entre colunas
- ➕ **Criação e edição** de tarefas
- 🗑️ **Remoção** de cards e colunas
- 💾 **Persistência local** dos dados

## 🛠️ Stack

| Tecnologia | Uso |
|---|---|
| React | Biblioteca de UI e gerenciamento de estado |
| TypeScript | Tipagem estática |
| Vite | Build tool e servidor de desenvolvimento |
| CSS | Estilização customizada |

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js 18+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/EsdrasMarcelinoDaSilva/trello-kanban.git
cd trello-kanban

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173)

### Build para produção

```bash
npm run build
npm run preview
```

## 📁 Estrutura do projeto

```
trello-kanban/
├── src/
│   ├── components/    # Componentes React (Board, Column, Card)
│   └── ...
├── public/            # Arquivos estáticos
├── index.html         # Entry point HTML
└── vite.config.ts     # Configuração do Vite
```

## 🔧 Decisões técnicas

- **React com TypeScript** — tipagem das entidades (cards, colunas) para segurança no desenvolvimento
- **Vite** — hot reload rápido durante o desenvolvimento
- **Estado local com React** — gerenciamento de estado simples sem dependência de bibliotecas externas
