# Health Scheduler AI - Sistema Inteligente de Agendamento

**Author:** Lucas Andre S

Sistema profissional de agendamento inteligente para clínicas e hospitais. Otimiza automaticamente a agenda médica, reduz tempo de espera dos pacientes e maximiza a utilização dos recursos com algoritmos de Inteligência Artificial.

![Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18-61dafb)
![Node.js](https://img.shields.io/badge/Node.js-20-green)

## 🏥 Funcionalidades

### Agendamento Inteligente
- **Otimização Automática de Agenda**: Algoritmos de IA que minimizam gaps e tempo de espera
- **Busca de Melhor Horário**: Sistema encontra automaticamente o melhor slot disponível
- **Gestão de Conflitos**: Detecta e previne sobreposição de agendamentos
- **Múltiplos Tipos de Consulta**: Consultas, exames, retornos e emergências

### Gestão de Pacientes
- **Cadastro Completo**: Nome, CPF, contato, endereço e histórico
- **Perfil do Paciente**: Visualização rápida de informações essenciais
- **Histórico de Consultas**: Acompanhamento completo do paciente

### Gestão de Médicos
- **Cadastro de Especialidades**: Cardiologia, Pediatria, Ortopedia, etc.
- **Horários de Trabalho**: Configuração flexível por dia da semana
- **Análise de Performance**: Métricas de utilização e produtividade
- **CRM e Credenciais**: Gestão completa de informações profissionais

### Dashboard Analítico
- **Métricas em Tempo Real**: Agendamentos, pacientes, médicos e tempo de espera
- **Gráficos Interativos**: Visualização de tendências e padrões
- **Recomendações de IA**: Sugestões automáticas para otimização
- **Alertas Inteligentes**: Notificações sobre agenda e performance

### Otimização com IA
- **Análise de Utilização**: Taxa de aproveitamento da agenda
- **Detecção de Gaps**: Identifica tempo ocioso entre consultas
- **Recomendações Personalizadas**: Sugestões baseadas em padrões
- **Score de Qualidade**: Avaliação da qualidade dos horários

## 🎨 Design

- **Tema Médico Profissional**: Cores azul e verde transmitindo confiança
- **Interface Limpa**: Design minimalista focado em usabilidade
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Transições elegantes para melhor UX

## 🛠️ Tecnologias

### Frontend
- **React 18**: Biblioteca moderna para interfaces
- **React Router**: Navegação entre páginas
- **Recharts**: Gráficos interativos e responsivos
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Ícones modernos e elegantes
- **Axios**: Cliente HTTP para API

### Backend
- **Node.js**: Runtime JavaScript
- **Express**: Framework web minimalista
- **CORS**: Habilitação de requisições cross-origin
- **In-Memory Database**: Banco de dados em memória para demonstração

### Algoritmos de IA
- **Otimização de Agenda**: Minimização de gaps e tempo ocioso
- **Busca de Melhor Slot**: Algoritmo de scoring para qualidade de horários
- **Análise Preditiva**: Recomendações baseadas em padrões
- **Cálculo de Métricas**: Utilização, gaps e performance

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/lucasandre16112000-png/health-scheduler-ai.git
cd health-scheduler-ai

# Instale as dependências
npm install

# Inicie o servidor backend (porta 5000)
npm run dev:server

# Em outro terminal, inicie o frontend (porta 3001)
npm run dev:client

# Ou inicie ambos simultaneamente
npm run dev
```

## 🚀 Uso

### 1. Dashboard
Acesse a página inicial para visualizar:
- Métricas gerais do sistema
- Gráficos de agendamentos da semana
- Status dos agendamentos
- Agendamentos recentes
- Recomendações de IA

### 2. Agendamentos
Gerencie todos os agendamentos:
- Visualize lista completa
- Crie novos agendamentos
- Edite agendamentos existentes
- Cancele ou confirme consultas

### 3. Pacientes
Cadastro e gestão de pacientes:
- Adicione novos pacientes
- Visualize informações completas
- Edite dados cadastrais
- Acompanhe histórico

### 4. Médicos
Gerenciamento do corpo clínico:
- Cadastre médicos e especialidades
- Configure horários de trabalho
- Visualize agenda individual
- Analise performance

### 5. Otimização
Utilize IA para melhorar a agenda:
- Selecione um médico
- Analise métricas de utilização
- Receba recomendações personalizadas
- Visualize agenda otimizada

## 📊 API Endpoints

### Agendamentos
- `GET /api/appointments` - Lista todos os agendamentos
- `GET /api/appointments/:id` - Busca agendamento por ID
- `POST /api/appointments` - Cria novo agendamento
- `PUT /api/appointments/:id` - Atualiza agendamento
- `DELETE /api/appointments/:id` - Remove agendamento
- `GET /api/appointments/optimize/:doctorId` - Otimiza agenda do médico
- `POST /api/appointments/find-slot` - Encontra melhor horário disponível

### Pacientes
- `GET /api/patients` - Lista todos os pacientes
- `GET /api/patients/:id` - Busca paciente por ID
- `POST /api/patients` - Cria novo paciente
- `PUT /api/patients/:id` - Atualiza paciente
- `DELETE /api/patients/:id` - Remove paciente

### Médicos
- `GET /api/doctors` - Lista todos os médicos
- `GET /api/doctors/:id` - Busca médico por ID
- `POST /api/doctors` - Cria novo médico
- `PUT /api/doctors/:id` - Atualiza médico
- `DELETE /api/doctors/:id` - Remove médico

### Analytics
- `GET /api/analytics/dashboard` - Métricas do dashboard
- `GET /api/analytics/doctor-performance/:doctorId` - Performance do médico

## 🧠 Algoritmos de IA

### Otimização de Agenda
```javascript
// Calcula gaps entre consultas
// Analisa taxa de utilização
// Gera recomendações personalizadas
// Ordena agendamentos otimamente
```

### Busca de Melhor Horário
```javascript
// Verifica disponibilidade do médico
// Detecta conflitos com agendamentos existentes
// Calcula score de qualidade do horário
// Retorna melhores opções disponíveis
```

### Sistema de Scoring
- **Horários da manhã**: +20 pontos (preferência)
- **Espaçamento balanceado**: Pontuação variável
- **Horários isolados**: -10 pontos
- **Horários muito próximos**: -15 pontos

## 🔐 Segurança

- Validação de dados no backend
- Proteção contra SQL Injection (estrutura preparada para DB real)
- CORS configurado adequadamente
- Sanitização de inputs

## 📈 Performance

- Carregamento rápido com lazy loading
- Otimização de re-renders no React
- Cache de requisições
- Algoritmos eficientes (O(n log n))

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

MIT License - use livremente para projetos pessoais ou comerciais.

## 👤 Autor

**Lucas Andre S**
- GitHub: [@lucasandre16112000-png](https://github.com/lucasandre16112000-png)
- Portfolio: Desenvolvedor Full Stack especializado em sistemas de saúde

## 🙏 Agradecimentos

- Inspirado em sistemas reais de agendamento médico
- Desenvolvido com foco em usabilidade e eficiência
- Projetado para escalabilidade e manutenibilidade

---

**Feito com ❤️ por Lucas Andre S**

## 🔮 Roadmap

- [ ] Integração com banco de dados real (PostgreSQL/MySQL)
- [ ] Sistema de notificações (SMS/Email)
- [ ] Integração com calendários (Google Calendar, Outlook)
- [ ] App mobile (React Native)
- [ ] Sistema de pagamentos
- [ ] Prontuário eletrônico
- [ ] Telemedicina integrada
- [ ] Relatórios avançados em PDF
