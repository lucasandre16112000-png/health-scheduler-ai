import { useState, useEffect } from 'react'
import { Calendar, Plus, Edit, Trash2 } from 'lucide-react'
import axios from 'axios'

export default function Appointments() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchAppointments()
  }, [])
  
  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/appointments')
      setAppointments(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error:', error)
      setLoading(false)
    }
  }
  
  if (loading) {
    return <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
    </div>
  }
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Agendamentos</h1>
          <p className="text-gray-600">Gerencie todos os agendamentos</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Novo Agendamento
        </button>
      </div>
      
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Data</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Horário</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Duração</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Tipo</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Ações</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (
                <tr key={apt.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">#{apt.id}</td>
                  <td className="py-3 px-4">{new Date(apt.date).toLocaleDateString('pt-BR')}</td>
                  <td className="py-3 px-4">{apt.time}</td>
                  <td className="py-3 px-4">{apt.duration} min</td>
                  <td className="py-3 px-4 capitalize">{apt.type}</td>
                  <td className="py-3 px-4">
                    <span className={`badge ${
                      apt.status === 'confirmed' ? 'badge-success' :
                      apt.status === 'scheduled' ? 'badge-info' :
                      'badge-warning'
                    }`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
