import { useState, useEffect } from 'react'
import { Stethoscope, Plus, Edit, Trash2, X, Clock } from 'lucide-react'
import axios from 'axios'

export default function Doctors() {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    crm: '',
    email: '',
    phone: '',
    workingHours: {
      monday: ['09:00-12:00', '14:00-18:00'],
      tuesday: ['09:00-12:00', '14:00-18:00'],
      wednesday: ['09:00-12:00'],
      thursday: ['09:00-12:00', '14:00-18:00'],
      friday: ['09:00-12:00', '14:00-17:00']
    }
  })
  
  useEffect(() => {
    fetchDoctors()
  }, [])
  
  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/doctors')
      setDoctors(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error:', error)
      setLoading(false)
    }
  }

  const handleOpenModal = (doctor = null) => {
    if (doctor) {
      setEditingId(doctor.id)
      setFormData({
        name: doctor.name,
        specialty: doctor.specialty,
        crm: doctor.crm,
        email: doctor.email,
        phone: doctor.phone,
        workingHours: doctor.workingHours
      })
    } else {
      setEditingId(null)
      setFormData({
        name: '',
        specialty: '',
        crm: '',
        email: '',
        phone: '',
        workingHours: {
          monday: ['09:00-12:00', '14:00-18:00'],
          tuesday: ['09:00-12:00', '14:00-18:00'],
          wednesday: ['09:00-12:00'],
          thursday: ['09:00-12:00', '14:00-18:00'],
          friday: ['09:00-12:00', '14:00-17:00']
        }
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

  const handleWorkingHoursChange = (day, index, value) => {
    const newHours = [...formData.workingHours[day]]
    newHours[index] = value
    setFormData(prev => ({
      ...prev,
      workingHours: {
        ...prev.workingHours,
        [day]: newHours
      }
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.specialty || !formData.crm || !formData.email || !formData.phone) {
      alert('Por favor, preencha todos os campos obrigatórios')
      return
    }

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/doctors/${editingId}`, formData)
      } else {
        await axios.post('http://localhost:5000/api/doctors', formData)
      }
      
      fetchDoctors()
      handleCloseModal()
      alert(editingId ? 'Médico atualizado com sucesso!' : 'Médico criado com sucesso!')
    } catch (error) {
      console.error('Error:', error)
      alert('Erro ao salvar médico')
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este médico?')) {
      try {
        await axios.delete(`http://localhost:5000/api/doctors/${id}`)
        fetchDoctors()
        alert('Médico deletado com sucesso!')
      } catch (error) {
        console.error('Error:', error)
        alert('Erro ao deletar médico')
      }
    }
  }
  
  if (loading) return <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
  </div>
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Médicos</h1>
          <p className="text-gray-600">Gerencie o corpo clínico</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Novo Médico
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-medical-100 rounded-full flex items-center justify-center">
                <Stethoscope className="w-8 h-8 text-medical-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                <p className="text-sm text-medical-600 font-medium">{doctor.specialty}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm mb-4">
              <p className="text-gray-600"><span className="font-medium">CRM:</span> {doctor.crm}</p>
              <p className="text-gray-600"><span className="font-medium">Email:</span> {doctor.email}</p>
              <p className="text-gray-600"><span className="font-medium">Telefone:</span> {doctor.phone}</p>
            </div>
            <div className="border-t pt-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Horários de Atendimento</span>
              </div>
              <div className="text-xs text-gray-500 space-y-1">
                {Object.entries(doctor.workingHours).map(([day, hours]) => (
                  hours.length > 0 && (
                    <div key={day} className="flex justify-between">
                      <span className="capitalize">{day}:</span>
                      <span>{hours.join(', ')}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
            <div className="flex gap-2 border-t pt-3">
              <button 
                onClick={() => handleOpenModal(doctor)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                <Edit className="w-4 h-4" />
                Editar
              </button>
              <button 
                onClick={() => handleDelete(doctor.id)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <Trash2 className="w-4 h-4" />
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingId ? 'Editar Médico' : 'Novo Médico'}
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
                  Nome *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Especialidade *
                </label>
                <input
                  type="text"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CRM *
                </label>
                <input
                  type="text"
                  name="crm"
                  value={formData.crm}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
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
