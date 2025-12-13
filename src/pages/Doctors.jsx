import { useState, useEffect } from 'react'
import { Stethoscope, Plus, Clock } from 'lucide-react'
import axios from 'axios'

export default function Doctors() {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  
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
        <button className="btn-primary flex items-center gap-2">
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
              <div>
                <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                <p className="text-sm text-medical-600 font-medium">{doctor.specialty}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm mb-4">
              <p className="text-gray-600"><span className="font-medium">CRM:</span> {doctor.crm}</p>
              <p className="text-gray-600"><span className="font-medium">Email:</span> {doctor.email}</p>
              <p className="text-gray-600"><span className="font-medium">Telefone:</span> {doctor.phone}</p>
            </div>
            <div className="border-t pt-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Horários de Atendimento</span>
              </div>
              <div className="mt-2 text-xs text-gray-500 space-y-1">
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
          </div>
        ))}
      </div>
    </div>
  )
}
