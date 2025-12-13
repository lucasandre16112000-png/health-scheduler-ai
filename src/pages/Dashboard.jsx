import { useState, useEffect } from 'react'
import { Calendar, Users, Stethoscope, Clock, TrendingUp, AlertCircle } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
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
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }
  
  const stats = [
    {
      title: 'Agendamentos Hoje',
      value: analytics?.overview.todayAppointments || 0,
      icon: Calendar,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Total de Pacientes',
      value: analytics?.overview.totalPatients || 0,
      icon: Users,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: 'Médicos Ativos',
      value: analytics?.overview.totalDoctors || 0,
      icon: Stethoscope,
      color: 'bg-purple-500',
      change: '+2'
    },
    {
      title: 'Tempo Médio de Espera',
      value: `${analytics?.overview.avgWaitTime || 0} min`,
      icon: Clock,
      color: 'bg-orange-500',
      change: '-5 min'
    }
  ]
  
  const appointmentStatusData = analytics?.appointmentsByStatus ? [
    { name: 'Agendado', value: analytics.appointmentsByStatus.scheduled, fill: '#3b82f6' },
    { name: 'Confirmado', value: analytics.appointmentsByStatus.confirmed, fill: '#22c55e' },
    { name: 'Concluído', value: analytics.appointmentsByStatus.completed, fill: '#8b5cf6' },
    { name: 'Cancelado', value: analytics.appointmentsByStatus.cancelled, fill: '#ef4444' }
  ] : []
  
  const weeklyData = [
    { day: 'Seg', appointments: 12 },
    { day: 'Ter', appointments: 15 },
    { day: 'Qua', appointments: 8 },
    { day: 'Qui', appointments: 18 },
    { day: 'Sex', appointments: 14 },
    { day: 'Sáb', appointments: 6 },
    { day: 'Dom', appointments: 3 }
  ]
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Visão geral do sistema de agendamento inteligente</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card fade-in">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.title}</p>
            </div>
          )
        })}
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Appointments */}
        <div className="card">
          <h3 className="card-header">Agendamentos da Semana</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="appointments" stroke="#0ea5e9" strokeWidth={2} name="Agendamentos" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Appointment Status */}
        <div className="card">
          <h3 className="card-header">Status dos Agendamentos</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={appointmentStatusData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#0ea5e9" name="Quantidade" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Recent Appointments */}
      <div className="card">
        <h3 className="card-header">Agendamentos Recentes</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Data</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Horário</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Tipo</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {analytics?.recentAppointments?.map((apt, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{new Date(apt.date).toLocaleDateString('pt-BR')}</td>
                  <td className="py-3 px-4">{apt.time}</td>
                  <td className="py-3 px-4 capitalize">{apt.type}</td>
                  <td className="py-3 px-4">
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
      <div className="card bg-gradient-to-r from-primary-50 to-medical-50 border-l-4 border-primary-500">
        <div className="flex items-start gap-4">
          <TrendingUp className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Recomendações de IA</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-1" />
                <span>Taxa de utilização em 78% - Ótimo aproveitamento da agenda</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                <span>Tempo médio de espera reduzido em 25% esta semana</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
                <span>Considere adicionar mais horários às quintas-feiras (alta demanda)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
