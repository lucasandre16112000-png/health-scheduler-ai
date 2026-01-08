# 🏥 Health Scheduler AI - Sistema Inteligente de Agendamento

**Versão:** 2.0 - Totalmente Funcional  
**Status:** ✅ Pronto para Produção  
**Autor:** Lucas Andre S  
**Linguagem:** Portuguese (Brasil)

---

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação Rápida](#instalação-rápida)
- [Instalação Detalhada](#instalação-detalhada)
- [Como Rodar](#como-rodar)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Troubleshooting](#troubleshooting)
- [Suporte](#suporte)

---

## 🎯 Visão Geral

O **Health Scheduler AI** é um sistema inteligente de agendamento para clínicas e hospitais que utiliza algoritmos de IA para otimizar automaticamente a agenda de médicos, reduzindo tempo ocioso e melhorando a experiência do paciente.

### ✨ Principais Características

- 📅 **Agendamento Inteligente** - Sistema automático com IA
- 👥 **Gestão de Pacientes** - Cadastro completo e organizado
- 👨‍⚕️ **Gestão de Médicos** - Controle de especialidades e horários
- 📊 **Dashboard Analytics** - Métricas em tempo real
- ⚙️ **Otimização de Agenda** - Recomendações automáticas
- 🔍 **Busca de Melhor Horário** - Algoritmo inteligente
- 💾 **Banco de Dados** - Dados persistentes e seguros

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em seu computador:

| Software | Versão Mínima | Download |
|----------|---------------|----------|
| **Node.js** | 18.0.0 | [nodejs.org](https://nodejs.org/) |
| **npm** | 9.0.0 | Vem com Node.js |
| **Git** | 2.30.0 | [git-scm.com](https://git-scm.com/) |
| **PowerShell** | 5.0 | Já vem no Windows |

### ✅ Verificar Instalação

Abra o **PowerShell** e execute:

```powershell
node --version
npm --version
git --version
```

Você deve ver versões similares a:
```
v22.13.0
9.8.1
git version 2.40.0
```

---

## 🚀 Instalação Rápida

Se você quer começar **AGORA** em poucos passos:

### **Opção 1: Tudo em Um Comando (RECOMENDADO)**

Abra o **PowerShell** e execute:

```powershell
git clone https://github.com/lucasandre16112000-png/health-scheduler-ai.git && cd health-scheduler-ai && npm install && npm run dev
```

Aguarde 2-3 minutos e acesse: **http://localhost:3002**

### **Opção 2: Comando Rápido (Se já tem a pasta)**

```powershell
cd health-scheduler-ai && npm run dev
```

Acesse: **http://localhost:3002**

---

## 📖 Instalação Detalhada (Passo a Passo)

Se preferir fazer passo a passo (recomendado para iniciantes):

### **Passo 1: Abrir o PowerShell**

1. Pressione `Windows + X` no teclado
2. Selecione **Windows PowerShell** ou **Terminal**
3. Uma janela preta vai abrir

Você verá algo como:
```
PS C:\Users\SeuUsuario>
```

### **Passo 2: Clonar o Repositório do GitHub**

No PowerShell, execute:

```powershell
git clone https://github.com/lucasandre16112000-png/health-scheduler-ai.git
```

**O que acontece:**
- Git vai baixar todos os arquivos do projeto (~50MB)
- Você verá mensagens como `Cloning into 'health-scheduler-ai'...`
- Isso pode levar 1-2 minutos

**Resultado esperado:**
```
Cloning into 'health-scheduler-ai'...
remote: Enumerating objects: 1234, done.
remote: Counting objects: 100% (1234/1234), done.
...
Receiving objects: 100% (1234/1234), 26.01 MiB | 24.61 MiB/s
```

### **Passo 3: Entrar na Pasta do Projeto**

```powershell
cd health-scheduler-ai
```

**O que muda:**
Seu prompt vai mudar de:
```
PS C:\Users\SeuUsuario>
```

Para:
```
PS C:\Users\SeuUsuario\health-scheduler-ai>
```

### **Passo 4: Instalar Dependências**

```powershell
npm install
```

**O que acontece:**
- npm vai baixar todas as bibliotecas necessárias (~300MB)
- Você verá muitas linhas com `added XXX packages`
- Isso pode levar 2-3 minutos

**Resultado esperado:**
```
added 305 packages in 45s
```

### **Passo 5: Rodar o Projeto**

```powershell
npm run dev
```

**O que acontece:**
- O servidor backend inicia na porta 5000
- O frontend inicia na porta 3002
- Você verá mensagens como:

```
[0] 🏥 Health Scheduler AI Server running on port 5000
[0] 📅 Author: Lucas Andre S
[1] ➜  Local:   http://localhost:3002/
```

### **Passo 6: Abrir no Navegador**

1. Abra seu navegador (Chrome, Firefox, Edge, etc)
2. Digite na barra de endereço:
```
http://localhost:3002
```

3. Pressione Enter

**Pronto! O sistema está rodando!** 🎉

---

## 🎮 Como Rodar

### **Primeira Vez (Novo Computador)**

Execute os comandos um por um:

```powershell
# 1. Clone o repositório
git clone https://github.com/lucasandre16112000-png/health-scheduler-ai.git
```

```powershell
# 2. Entre na pasta
cd health-scheduler-ai
```

```powershell
# 3. Instale as dependências
npm install
```

```powershell
# 4. Rode o projeto
npm run dev
```

Acesse: **http://localhost:3002**

### **Próximas Vezes (Já tem a pasta)**

```powershell
# 1. Entre na pasta
cd health-scheduler-ai

# 2. Rode o projeto
npm run dev
```

Acesse: **http://localhost:3002**

### **Atualizar do GitHub (Se houver mudanças)**

```powershell
# 1. Entre na pasta
cd health-scheduler-ai

# 2. Puxe as atualizações
git pull origin main

# 3. Instale novamente (se necessário)
npm install

# 4. Rode o projeto
npm run dev
```

### **Parar o Servidor**

Pressione `Ctrl + C` no PowerShell

---

## ✨ Funcionalidades

### 📊 Dashboard
- Métricas gerais do sistema
- Gráficos de agendamentos
- Status dos pacientes
- Recomendações de IA

### 📅 Agendamentos
- ✅ **Novo Agendamento** - Clique no botão azul
- ✅ **Editar** - Clique no ícone de lápis
- ✅ **Deletar** - Clique no ícone de lixeira
- ✅ **Listar** - Tabela com todos os agendamentos

**Como Criar um Agendamento:**
1. Clique em **"Novo Agendamento"**
2. Selecione um **Paciente**
3. Selecione um **Médico**
4. Escolha a **Data**
5. Defina o **Horário**
6. Clique em **"Criar"**

### 👥 Pacientes
- ✅ **Novo Paciente** - Clique no botão azul
- ✅ **Editar** - Clique no botão "Editar" no card
- ✅ **Deletar** - Clique no botão "Deletar" no card
- ✅ **Visualizar** - Cards com informações completas

**Como Criar um Paciente:**
1. Clique em **"Novo Paciente"**
2. Preencha:
   - Nome *
   - Email *
   - Telefone *
   - CPF *
   - Data de Nascimento (opcional)
   - Endereço (opcional)
3. Clique em **"Criar"**

### 👨‍⚕️ Médicos
- ✅ **Novo Médico** - Clique no botão azul
- ✅ **Editar** - Clique no botão "Editar" no card
- ✅ **Deletar** - Clique no botão "Deletar" no card
- ✅ **Horários** - Visualizar horários de atendimento

**Como Criar um Médico:**
1. Clique em **"Novo Médico"**
2. Preencha:
   - Nome *
   - Especialidade *
   - CRM *
   - Email *
   - Telefone *
3. Clique em **"Criar"**

### ⚙️ Otimização IA
- Análise automática de agenda
- Taxa de utilização
- Tempo ocioso
- Recomendações inteligentes

---

## 🏗️ Estrutura do Projeto

```
health-scheduler-ai/
├── src/                          # Frontend React
│   ├── pages/                   # Páginas principais
│   │   ├── Dashboard.jsx        # Dashboard com métricas
│   │   ├── Appointments.jsx     # Gerenciamento de agendamentos
│   │   ├── Patients.jsx         # Gerenciamento de pacientes
│   │   ├── Doctors.jsx          # Gerenciamento de médicos
│   │   └── Schedule.jsx         # Otimização de agenda
│   ├── components/              # Componentes reutilizáveis
│   │   └── Layout.jsx           # Layout principal
│   ├── App.jsx                  # Rotas da aplicação
│   ├── main.jsx                 # Ponto de entrada
│   └── index.css                # Estilos globais
│
├── server/                       # Backend Node.js
│   ├── index.js                 # Servidor principal
│   ├── database.js              # Dados em memória
│   ├── routes/                  # Rotas da API
│   │   ├── appointments.js      # Endpoints de agendamentos
│   │   ├── patients.js          # Endpoints de pacientes
│   │   └── doctors.js           # Endpoints de médicos
│   └── utils/                   # Utilitários
│       └── scheduler.js         # Algoritmos de IA
│
├── package.json                 # Dependências do projeto
├── vite.config.js              # Configuração do Vite
├── tailwind.config.js          # Configuração do Tailwind
└── README.md                    # Este arquivo
```

---

## 🔧 Comandos Disponíveis

### **Desenvolvimento**

```powershell
# Rodar frontend e backend juntos
npm run dev

# Rodar apenas o backend (porta 5000)
npm run dev:server

# Rodar apenas o frontend (porta 3002)
npm run dev:client
```

### **Produção**

```powershell
# Build para produção
npm run build

# Rodar em produção
npm start
```

### **Git**

```powershell
# Ver status
git status

# Ver histórico de commits
git log --oneline

# Puxar atualizações
git pull origin main

# Fazer commit
git add .
git commit -m "sua mensagem"

# Fazer push
git push origin main
```

---

## 🌐 URLs de Acesso

| Serviço | URL | Descrição |
|---------|-----|-----------|
| **Frontend** | http://localhost:3002 | Interface web principal |
| **Backend API** | http://localhost:5000 | API REST |
| **Health Check** | http://localhost:5000/api/health | Status do servidor |

---

## 📊 Dados de Exemplo

O sistema vem com dados pré-carregados para teste:

### Pacientes
- Maria Silva (CPF: 123.456.789-00)
- João Santos (CPF: 987.654.321-00)
- Ana Costa (CPF: 456.789.123-00)

### Médicos
- Dr. Carlos Mendes (Cardiologia)
- Dra. Patricia Lima (Pediatria)
- Dr. Roberto Alves (Ortopedia)

### Agendamentos
- 3 agendamentos de exemplo

---

## 🐛 Troubleshooting

### ❌ Erro: "npm: O termo 'npm' não é reconhecido"

**Solução:** Node.js não está instalado
1. Baixe em https://nodejs.org/
2. Execute o instalador
3. Reinicie o PowerShell
4. Tente novamente

### ❌ Erro: "Porta 3002 já está em uso"

**Solução:** Outro programa está usando a porta
1. Pressione `Ctrl + C` para parar o servidor
2. Feche outros programas que possam estar usando a porta
3. Execute `npm run dev` novamente

### ❌ Erro: "Porta 5000 já está em uso"

**Solução:** Similar ao anterior
1. Pressione `Ctrl + C`
2. Aguarde 10 segundos
3. Execute `npm run dev` novamente

### ❌ Erro: "Could not read package.json"

**Solução:** Você não está na pasta correta
1. Execute `cd health-scheduler-ai`
2. Verifique se o prompt mostra `health-scheduler-ai`
3. Tente novamente

### ❌ Componentes não aparecem

**Solução:** Cache do navegador
1. Pressione `Ctrl + Shift + Delete` no navegador
2. Limpe o cache
3. Recarregue a página (F5)

### ❌ Botões não funcionam

**Solução:** Atualizar do GitHub
```powershell
git pull origin main
npm install
npm run dev
```

---

## 📞 Suporte

Se encontrar problemas:

1. **Verifique os pré-requisitos** - Node.js, npm e Git instalados
2. **Verifique as portas** - 3002 e 5000 devem estar livres
3. **Limpe o cache** - Ctrl + Shift + Delete no navegador
4. **Reinicie o servidor** - Ctrl + C e `npm run dev`
5. **Atualize do GitHub** - `git pull origin main`

---

## 📚 Documentação Adicional

- **COMO_RODAR_POWERSHELL.md** - Guia específico para Windows
- **GUIA_EXECUCAO.md** - Guia geral de execução
- **CORRECOES_REALIZADAS.md** - Histórico de correções

---

## 🔗 Links Importantes

- **Repositório:** https://github.com/lucasandre16112000-png/health-scheduler-ai
- **Issues:** https://github.com/lucasandre16112000-png/health-scheduler-ai/issues
- **Node.js:** https://nodejs.org/
- **Git:** https://git-scm.com/

---

## 📄 Licença

Este projeto foi desenvolvido por **Lucas Andre S**.

---

## ✅ Checklist de Primeiro Uso

- [ ] Node.js instalado
- [ ] Git instalado
- [ ] PowerShell aberto
- [ ] Repositório clonado
- [ ] Pasta `health-scheduler-ai` criada
- [ ] `npm install` executado
- [ ] `npm run dev` rodando
- [ ] Navegador aberto em http://localhost:3002
- [ ] Dashboard visível
- [ ] Botões funcionando

---

**🎉 Pronto para usar! Divirta-se com o Health Scheduler AI!**

---

*Última atualização: 08 de Janeiro de 2026*  
*Versão: 2.0 - Totalmente Funcional*
