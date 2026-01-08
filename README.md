# 🏥 Health Scheduler AI - Sistema Inteligente de Agendamento

**Versão:** 2.0 - Totalmente Funcional  
**Status:** ✅ Pronto para Produção  
**Autor:** Lucas Andre S  
**Linguagem:** Portuguese (Brasil)

---

## 📋 Sumário Rápido

- [Instalação Rápida](#instalação-rápida)
- [Instalação Passo a Passo](#instalação-passo-a-passo)
- [Funcionalidades](#funcionalidades)
- [Troubleshooting](#troubleshooting)

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

---

## 📦 Pré-requisitos

Antes de começar, instale:

1. **Node.js** - https://nodejs.org/ (versão 18+)
2. **Git** - https://git-scm.com/
3. **PowerShell** - Já vem no Windows

---

## 🚀 Instalação Rápida

### **Para Clientes (Recomendado)**

Abra o **PowerShell** e execute **UM COMANDO POR VEZ**:

**Comando 1: Clonar o repositório**
```powershell
git clone https://github.com/lucasandre16112000-png/health-scheduler-ai.git
```
Aguarde terminar (pode levar 1-2 minutos)

**Comando 2: Entrar na pasta**
```powershell
cd health-scheduler-ai
```

**Comando 3: Instalar dependências**
```powershell
npm install
```
Aguarde terminar (pode levar 2-3 minutos)

**Comando 4: Rodar o projeto**
```powershell
npm run dev
```

**Pronto! Acesse: http://localhost:3002**

---

## 📖 Instalação Passo a Passo (Detalhado)

Se você é iniciante, siga este guia completo:

### **Passo 1: Abrir o PowerShell**

1. Pressione `Windows + X` no teclado
2. Selecione **Windows PowerShell** ou **Terminal**
3. Uma janela preta vai abrir

Você verá:
```
PS C:\Users\SeuUsuario>
```

### **Passo 2: Clonar o Repositório**

**Execute este comando:**
```powershell
git clone https://github.com/lucasandre16112000-png/health-scheduler-ai.git
```

**O que vai acontecer:**
- Git vai baixar o projeto do GitHub (~50MB)
- Você verá mensagens como `Cloning into 'health-scheduler-ai'...`
- Pode levar 1-2 minutos

**Quando terminar, você verá:**
```
Cloning into 'health-scheduler-ai'...
remote: Enumerating objects: 1234, done.
...
Receiving objects: 100% (1234/1234), 26.01 MiB | 24.61 MiB/s
```

### **Passo 3: Entrar na Pasta do Projeto**

**Execute este comando:**
```powershell
cd health-scheduler-ai
```

**O que vai mudar:**
Seu prompt vai mudar de:
```
PS C:\Users\SeuUsuario>
```

Para:
```
PS C:\Users\SeuUsuario\health-scheduler-ai>
```

**Isso significa que você está na pasta correta!**

### **Passo 4: Instalar as Dependências**

**Execute este comando:**
```powershell
npm install
```

**O que vai acontecer:**
- npm vai baixar todas as bibliotecas necessárias (~300MB)
- Você verá muitas linhas com `added XXX packages`
- Pode levar 2-3 minutos

**Quando terminar, você verá:**
```
added 305 packages in 45s
```

### **Passo 5: Rodar o Projeto**

**Execute este comando:**
```powershell
npm run dev
```

**O que vai acontecer:**
- O servidor backend inicia na porta 5000
- O frontend inicia na porta 3002
- Você verá mensagens como:

```
[0] 🏥 Health Scheduler AI Server running on port 5000
[0] 📅 Author: Lucas Andre S
[1] ➜  Local:   http://localhost:3002/
```

**Quando você ver isso, o projeto está rodando!**

### **Passo 6: Abrir no Navegador**

1. Abra seu navegador (Chrome, Firefox, Edge, etc)
2. Digite na barra de endereço:
```
http://localhost:3002
```

3. Pressione Enter

**Pronto! O sistema está funcionando!** 🎉

---

## 🎮 Como Usar

### **Próximas Vezes (Já tem a pasta)**

Você só precisa fazer 2 comandos:

**Comando 1: Entrar na pasta**
```powershell
cd health-scheduler-ai
```

**Comando 2: Rodar o projeto**
```powershell
npm run dev
```

Depois acesse: **http://localhost:3002**

### **Parar o Servidor**

Pressione `Ctrl + C` no PowerShell

### **Atualizar do GitHub**

Se houver atualizações, execute:

**Comando 1: Entrar na pasta**
```powershell
cd health-scheduler-ai
```

**Comando 2: Puxar atualizações**
```powershell
git pull origin main
```

**Comando 3: Instalar novamente**
```powershell
npm install
```

**Comando 4: Rodar**
```powershell
npm run dev
```

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

**Como Criar um Paciente:**
1. Clique em **"Novo Paciente"**
2. Preencha:
   - Nome *
   - Email *
   - Telefone *
   - CPF *
3. Clique em **"Criar"**

### 👨‍⚕️ Médicos
- ✅ **Novo Médico** - Clique no botão azul
- ✅ **Editar** - Clique no botão "Editar" no card
- ✅ **Deletar** - Clique no botão "Deletar" no card

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

## 🌐 URLs de Acesso

| Serviço | URL |
|---------|-----|
| **Frontend** | http://localhost:3002 |
| **Backend API** | http://localhost:5000 |
| **Health Check** | http://localhost:5000/api/health |

---

## 📊 Dados de Exemplo

O sistema vem com dados pré-carregados:

### Pacientes
- Maria Silva (CPF: 123.456.789-00)
- João Santos (CPF: 987.654.321-00)
- Ana Costa (CPF: 456.789.123-00)

### Médicos
- Dr. Carlos Mendes (Cardiologia)
- Dra. Patricia Lima (Pediatria)
- Dr. Roberto Alves (Ortopedia)

---

## 🐛 Troubleshooting

### ❌ Erro: "npm: O termo 'npm' não é reconhecido"

**Solução:**
1. Node.js não está instalado
2. Baixe em https://nodejs.org/
3. Execute o instalador
4. Reinicie o PowerShell
5. Tente novamente

### ❌ Erro: "Porta 3002 já está em uso"

**Solução:**
1. Pressione `Ctrl + C` para parar o servidor
2. Feche outros programas que possam estar usando a porta
3. Execute `npm run dev` novamente

### ❌ Erro: "Porta 5000 já está em uso"

**Solução:**
1. Pressione `Ctrl + C`
2. Aguarde 10 segundos
3. Execute `npm run dev` novamente

### ❌ Erro: "Could not read package.json"

**Solução:**
1. Você não está na pasta correta
2. Execute `cd health-scheduler-ai`
3. Verifique se o prompt mostra `health-scheduler-ai`
4. Tente novamente

### ❌ Botões não funcionam

**Solução:**
1. Limpe o cache do navegador (Ctrl + Shift + Delete)
2. Recarregue a página (F5)
3. Se persistir, atualize do GitHub:
```powershell
git pull origin main
```

### ❌ Erro: "O token '&&' não é um separador de instruções válido"

**Solução:**
Você está usando PowerShell antigo. Execute os comandos **UM POR UM**, não juntos:

```powershell
git clone https://github.com/lucasandre16112000-png/health-scheduler-ai.git
```

```powershell
cd health-scheduler-ai
```

```powershell
npm install
```

```powershell
npm run dev
```

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique se Node.js está instalado
2. Verifique se as portas 3002 e 5000 estão livres
3. Limpe o cache do navegador
4. Reinicie o servidor (Ctrl + C e `npm run dev`)
5. Atualize do GitHub (`git pull origin main`)

---

## 🔗 Links Importantes

- **Repositório:** https://github.com/lucasandre16112000-png/health-scheduler-ai
- **Node.js:** https://nodejs.org/
- **Git:** https://git-scm.com/

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
