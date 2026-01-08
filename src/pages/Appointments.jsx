import { useState, useEffect } from 'react'
import { Calendar, Plus, Edit, Trash2, X } from 'lucide-react'
import axios from 'axios'

export default function Appointments() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [patients, setPatients] = useState([])
  const [doctors, setDoctors] = useState([])
  const [formData, setFormData] = useState({
    patientId: '',
    doctorId: '',
    date: '',
    time: '',
    duration: '30',
    type: 'consultation',
    notes: ''
  })
  
  useEffect(() => {
    fetchAppointments()
    fetchPatients()
    fetchDoctors()
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

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/patients')
      setPatients(response.data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/doctors')
      setDoctors(response.data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleOpenModal = (appointment = null) => {
    if (appointment) {
      setEditingId(appointment.id)
      setFormData({
        patientId: appointment.patientId,
        doctorId: appointment.doctorId,
        date: appointment.date,
        time: appointment.time,
        duration: appointment.duration,
        type: appointment.type,
        notes: appointment.notes
      })
    } else {
      setEditingId(null)
      setFormData({
        patientId: '',
        doctorId: '',
        date: '',
        time: '',
        duration: '30',
        type: 'consultation',
        notes: ''
      })
    }
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditingId(null)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.patientId || !formData.doctorId || !formData.date || !formData.time) {
      alert('Por favor, preencha todos os campos obrigatórios')
      return
    }

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/appointments/${editingId}`, {
          ...formData,
          patientId: parseInt(formData.patientId),
          doctorId: parseInt(formData.doctorId),
          duration: parseInt(formData.duration)
        })
      } else {
        await axios.post('http://localhost:5000/api/appointments', {
          ...formData,
          patientId: parseInt(formData.patientId),
          doctorId: parseInt(formData.doctorId),
          duration: parseInt(formData.duration)
        })
      }
      
      fetchAppointments()
      handleCloseModal()
      alert(editingId ? 'Agendamento atualizado com sucesso!' : 'Agendamento criado com sucesso!')
    } catch (error) {
      console.error('Error:', error)
      alert('Erro ao salvar agendamento')
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este agendamento?')) {
      try {
        await axios.delete(`http://localhost:5000/api/appointments/${id}`)
        fetchAppointments()
        alert('Agendamento deletado com sucesso!')
      } catch (error) {
        console.error('Error:', error)
        alert('Erro ao deletar agendamento')
      }
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
        <button 
          onClick={() => handleOpenModal()}
          className="btn-primary flex items-center gap-2"
        >
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
                <th className="text-left py-3 px-4 font-medium text-gray-600">Paciente</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Médico</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Data</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Horário</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Duração</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Tipo</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Ações</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => {
                const patient = patients.find(p => p.id === apt.patientId)
                const doctor = doctors.find(d => d.id === apt.doctorId)
                return (
                  <tr key={apt.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">#{apt.id}</td>
                    <td className="py-3 px-4">{patient?.name || 'N/A'}</td>
                    <td className="py-3 px-4">{doctor?.name || 'N/A'}</td>
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
                        <button 
                          onClick={() => handleOpenModal(apt)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(apt.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingId ? 'Editar Agendamento' : 'Novo Agendamento'}
              </h2>
              <button 
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Paciente *
                </label>
                <select
                  name="patientId"
                  value={formData.patientId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                >
                  <option value="">Selecione um paciente</option>
                  {patients.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Médico *
                </label>
                <select
                  name="doctorId"
                  value={formData.doctorId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                >
                  <option value="">Selecione um médico</option>
                  {doctors.map(d => (
                    <option key={d.id} value={d.id}>{d.name} - {d.specialty}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Horário *
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duração (minutos)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  min="15"
                  step="15"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Consulta
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="consultation">Consulta</option>
                  <option value="exam">Exame</option>
                  <option value="followup">Retorno</option>
                  <option value="emergency">Emergência</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Observações
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  rows="3"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
                >
                  {editingId ? 'Atualizar' : 'Criar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
