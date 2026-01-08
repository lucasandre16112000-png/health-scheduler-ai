# 🚀 Como Rodar o Health Scheduler AI no PowerShell (Windows)

**Versão:** 2.0 - Com todas as funcionalidades implementadas  
**Status:** ✅ 100% Funcional

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

1. **Node.js 20+** - [Download aqui](https://nodejs.org/)
2. **Git** - [Download aqui](https://git-scm.com/)
3. **PowerShell** - Já vem no Windows (ou use CMD)

Para verificar se está instalado, abra o PowerShell e execute:

```powershell
node --version
npm --version
git --version
```

---

## 🎯 Passo a Passo para Rodar

### **Passo 1: Abrir o PowerShell**

1. Pressione `Windows + X`
2. Selecione **Windows PowerShell** ou **Terminal**
3. Se preferir, pode usar **CMD** também

### **Passo 2: Clonar o Repositório**

```powershell
git clone https://github.com/lucasandre16112000-png/health-scheduler-ai.git
cd health-scheduler-ai
```

### **Passo 3: Instalar Dependências**

```powershell
npm install
```

⏳ Isso pode levar 2-3 minutos na primeira vez.

### **Passo 4: Iniciar o Projeto**

```powershell
npm run dev
```

Você verá algo como:

```
[0] 🏥 Health Scheduler AI Server running on port 5000
[1] ➜  Local:   http://localhost:3002/
```

---

## 📱 Acessar a Aplicação

Após rodar `npm run dev`, abra seu navegador e acesse:

| Serviço | URL |
|---------|-----|
| **Frontend** | http://localhost:3002 |
| **API Backend** | http://localhost:5000 |
| **Health Check** | http://localhost:5000/api/health |

---

## ✨ Funcionalidades Disponíveis

### 🗂️ Agendamentos
- ✅ Listar todos os agendamentos
- ✅ **Novo Agendamento** - Clique no botão "Novo Agendamento"
- ✅ **Editar** - Clique no ícone de lápis
- ✅ **Deletar** - Clique no ícone de lixeira
- ✅ Buscar melhor horário disponível
- ✅ Otimizar agenda automaticamente

### 👥 Pacientes
- ✅ Listar todos os pacientes
- ✅ **Novo Paciente** - Clique no botão "Novo Paciente"
- ✅ **Editar** - Clique no botão "Editar" no card
- ✅ **Deletar** - Clique no botão "Deletar" no card
- ✅ Visualizar informações completas

### 👨‍⚕️ Médicos
- ✅ Listar todos os médicos
- ✅ **Novo Médico** - Clique no botão "Novo Médico"
- ✅ **Editar** - Clique no botão "Editar" no card
- ✅ **Deletar** - Clique no botão "Deletar" no card
- ✅ Visualizar horários de atendimento

### 📊 Dashboard
- ✅ Métricas gerais do sistema
- ✅ Gráficos de agendamentos
- ✅ Status dos agendamentos
- ✅ Recomendações de IA

### ⚙️ Otimização
- ✅ Analisar agenda de médicos
- ✅ Taxa de utilização
- ✅ Tempo ocioso
- ✅ Recomendações automáticas

---

## 🛠️ Comandos Úteis

### Iniciar Frontend e Backend Juntos
```powershell
npm run dev
```

### Iniciar Apenas o Backend (Porta 5000)
```powershell
npm run dev:server
```

### Iniciar Apenas o Frontend (Porta 3002)
```powershell
npm run dev:client
```

### Build para Produção
```powershell
npm run build
```

### Rodar em Produção
```powershell
npm start
```

---

## 🧪 Testar a API com PowerShell

### Exemplo 1: Criar um Novo Agendamento

```powershell
$body = @{
    patientId = 1
    doctorId = 1
    date = "2024-12-25"
    time = "14:00"
    duration = 30
    type = "consultation"
    notes = "Consulta de acompanhamento"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:5000/api/appointments" `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body $body
```

### Exemplo 2: Listar Todos os Agendamentos

```powershell
Invoke-WebRequest -Uri "http://localhost:5000/api/appointments" | ConvertFrom-Json
```

### Exemplo 3: Criar um Novo Paciente

```powershell
$body = @{
    name = "João Silva"
    email = "joao@email.com"
    phone = "(11) 98765-4321"
    birthDate = "1990-01-15"
    cpf = "123.456.789-00"
    address = "Rua das Flores, 123"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:5000/api/patients" `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body $body
```

---

## 🔧 Troubleshooting

### Problema: "npm: O termo 'npm' não é reconhecido"
**Solução:** Node.js não está instalado. Baixe em https://nodejs.org/

### Problema: Porta 3002 já está em uso
**Solução:** Feche outros programas usando essa porta ou mude a porta no `vite.config.js`

### Problema: Porta 5000 já está em uso
**Solução:** Feche outros programas usando essa porta ou mude a porta no `server/index.js`

### Problema: Erro ao instalar dependências
**Solução:** Execute como Administrador
```powershell
npm install --force
```

### Problema: Componentes não aparecem
**Solução:** Limpe o cache e reinstale
```powershell
rm -r node_modules
rm package-lock.json
npm install
```

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

## 🎨 Como Usar a Interface

### Criar um Novo Agendamento
1. Clique em **"Novo Agendamento"** (botão azul)
2. Preencha os campos:
   - Selecione um **Paciente**
   - Selecione um **Médico**
   - Escolha a **Data**
   - Defina o **Horário**
   - Defina a **Duração** (padrão: 30 min)
   - Escolha o **Tipo** (Consulta, Exame, Retorno, Emergência)
   - Adicione **Observações** (opcional)
3. Clique em **"Criar"**

### Editar um Agendamento
1. Na tabela de agendamentos, clique no **ícone de lápis**
2. Modifique os campos desejados
3. Clique em **"Atualizar"**

### Deletar um Agendamento
1. Na tabela de agendamentos, clique no **ícone de lixeira**
2. Confirme a exclusão

### Criar um Novo Paciente
1. Clique em **"Novo Paciente"** (botão azul)
2. Preencha os campos obrigatórios:
   - **Nome**
   - **Email**
   - **Telefone**
   - **CPF**
3. Preencha os campos opcionais:
   - Data de Nascimento
   - Endereço
4. Clique em **"Criar"**

### Criar um Novo Médico
1. Clique em **"Novo Médico"** (botão azul)
2. Preencha os campos:
   - **Nome**
   - **Especialidade**
   - **CRM**
   - **Email**
   - **Telefone**
3. Clique em **"Criar"**

### Otimizar Agenda
1. Vá para a página **"Otimização"**
2. Selecione um **Médico** na lista
3. Clique em **"Otimizar"**
4. Veja as métricas e recomendações de IA

---

## 📈 Performance

- ⚡ Carregamento rápido (< 2 segundos)
- 🔄 Atualizações em tempo real
- 📱 Responsivo em desktop, tablet e mobile
- 🎯 Algoritmos eficientes de otimização

---

## 🔐 Segurança

- ✅ Validação de dados no backend
- ✅ Proteção contra SQL Injection
- ✅ CORS configurado
- ✅ Sanitização de inputs

---

## 📚 Documentação Adicional

- `README.md` - Visão geral do projeto
- `GUIA_EXECUCAO.md` - Guia completo de execução
- `CORRECOES_REALIZADAS.md` - Erros corrigidos

---

## 🎯 Próximos Passos

1. Explore todas as funcionalidades
2. Crie alguns dados de teste
3. Teste a otimização de agenda
4. Verifique as recomendações de IA

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique se Node.js está instalado
2. Certifique-se de que as portas estão livres
3. Consulte os logs no PowerShell
4. Verifique a documentação no projeto

---

**Pronto para usar! 🎉**

Divirta-se com o Health Scheduler AI!
