import { useState, useEffect } from 'react'
import { Users, Plus } from 'lucide-react'
import axios from 'axios'

export default function Patients() {
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchPatients()
  }, [])
  
  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/patients')
      setPatients(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error:', error)
      setLoading(false)
    }
  }
  
  if (loading) return <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
  </div>
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Pacientes</h1>
          <p className="text-gray-600">Gerencie o cadastro de pacientes</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Novo Paciente
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <div key={patient.id} className="card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{patient.name}</h3>
                <p className="text-sm text-gray-600">{patient.email}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600"><span className="font-medium">Telefone:</span> {patient.phone}</p>
              <p className="text-gray-600"><span className="font-medium">CPF:</span> {patient.cpf}</p>
              <p className="text-gray-600"><span className="font-medium">Nascimento:</span> {new Date(patient.birthDate).toLocaleDateString('pt-BR')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
