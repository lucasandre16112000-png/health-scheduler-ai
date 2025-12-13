import { useState, useEffect } from 'react'
import { Calendar, Users, Stethoscope, Clock, TrendingUp, AlertCircle, Activity, CheckCircle2, ArrowUp, ArrowDown } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts'
import axios from 'axios'

export default function Dashboard() {
  const [analytics, setAnalytics] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchAnalytics()
  }, [])
  
  const fetchAnalytics = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/analytics/dashboard')
      setAnalytics(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching analytics:', error)
      setLoading(false)
    }
  }
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Carregando dados...</p>
        </div>
      </div>
    )
  }
  
  const stats = [
    {
      title: 'Agendamentos Hoje',
      value: analytics?.overview.todayAppointments || 0,
      icon: Calendar,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      change: '+12%',
      trend: 'up',
      description: 'vs. ontem'
    },
    {
      title: 'Total de Pacientes',
      value: analytics?.overview.totalPatients || 0,
      icon: Users,
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      change: '+8%',
      trend: 'up',
      description: 'este mês'
    },
    {
      title: 'Médicos Ativos',
      value: analytics?.overview.totalDoctors || 0,
      icon: Stethoscope,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      change: '+2',
      trend: 'up',
      description: 'novos médicos'
    },
    {
      title: 'Tempo de Espera',
      value: `${analytics?.overview.avgWaitTime || 0}min`,
      icon: Clock,
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      change: '-5min',
      trend: 'down',
      description: 'redução'
    }
  ]
  
  const appointmentStatusData = analytics?.appointmentsByStatus ? [
    { name: 'Agendado', value: analytics.appointmentsByStatus.scheduled, fill: '#3b82f6' },
    { name: 'Confirmado', value: analytics.appointmentsByStatus.confirmed, fill: '#22c55e' },
    { name: 'Concluído', value: analytics.appointmentsByStatus.completed, fill: '#8b5cf6' },
    { name: 'Cancelado', value: analytics.appointmentsByStatus.cancelled, fill: '#ef4444' }
  ] : []
  
  const weeklyData = [
    { day: 'Seg', appointments: 12, patients: 10 },
    { day: 'Ter', appointments: 15, patients: 13 },
    { day: 'Qua', appointments: 8, patients: 7 },
    { day: 'Qui', appointments: 18, patients: 15 },
    { day: 'Sex', appointments: 14, patients: 12 },
    { day: 'Sáb', appointments: 6, patients: 5 },
    { day: 'Dom', appointments: 3, patients: 3 }
  ]
  
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="fade-in">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-medical-500 rounded-xl flex items-center justify-center shadow-lg">
            <Activity className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600 text-lg">Visão geral do sistema de agendamento inteligente</p>
          </div>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div 
              key={index} 
              className="card-stat"
              style={{ 
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`stat-icon bg-gradient-to-br ${stat.gradient}`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                  stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-sm font-semibold text-gray-700 mb-1">{stat.title}</p>
              <p className="text-xs text-gray-500">{stat.description}</p>
            </div>
          )
        })}
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Appointments - Area Chart */}
        <div className="card-premium">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Agendamentos da Semana</h3>
              <p className="text-sm text-gray-600">Tendência semanal de consultas</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="colorAppointments" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#6b7280" style={{ fontSize: '12px', fontWeight: 600 }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px', fontWeight: 600 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="appointments" 
                stroke="#0ea5e9" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorAppointments)" 
                name="Agendamentos" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        {/* Appointment Status - Bar Chart */}
        <div className="card-premium">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Status dos Agendamentos</h3>
              <p className="text-sm text-gray-600">Distribuição por status</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={appointmentStatusData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" style={{ fontSize: '12px', fontWeight: 600 }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px', fontWeight: 600 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Bar dataKey="value" fill="#0ea5e9" radius={[8, 8, 0, 0]} name="Quantidade" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Recent Appointments Table */}
      <div className="card-premium">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Agendamentos Recentes</h3>
            <p className="text-sm text-gray-600">Últimas consultas agendadas</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Horário</th>
                <th>Tipo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {analytics?.recentAppointments?.map((apt, index) => (
                <tr key={index}>
                  <td className="font-semibold">{new Date(apt.date).toLocaleDateString('pt-BR')}</td>
                  <td className="font-semibold text-primary-600">{apt.time}</td>
                  <td className="capitalize">{apt.type}</td>
                  <td>
                    <span className={`badge ${
                      apt.status === 'confirmed' ? 'badge-success' :
                      apt.status === 'scheduled' ? 'badge-info' :
                      apt.status === 'completed' ? 'badge-success' :
                      'badge-danger'
                    }`}>
                      {apt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* AI Recommendations */}
      <div className="card-premium bg-gradient-to-br from-blue-50 via-white to-green-50 border-2 border-blue-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <TrendingUp className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              Recomendações de IA
              <span className="text-sm font-normal px-3 py-1 bg-gradient-to-r from-blue-100 to-green-100 rounded-full text-blue-700">
                Powered by AI
              </span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-green-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Taxa de utilização em 78%</p>
                  <p className="text-sm text-gray-600">Ótimo aproveitamento da agenda médica</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
                <Activity className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Tempo médio de espera reduzido em 25%</p>
                  <p className="text-sm text-gray-600">Otimização automática funcionando perfeitamente</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-orange-200 shadow-sm">
                <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Alta demanda às quintas-feiras</p>
                  <p className="text-sm text-gray-600">Considere adicionar mais horários neste dia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
