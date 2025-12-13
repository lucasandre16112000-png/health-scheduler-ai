import { useState } from 'react'
import { Activity, TrendingUp, AlertTriangle, CheckCircle, Search } from 'lucide-react'
import axios from 'axios'

export default function Schedule() {
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [optimization, setOptimization] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const handleOptimize = async () => {
    if (!selectedDoctor) return
    
    setLoading(true)
    try {
      const response = await axios.get(`http://localhost:5000/api/appointments/optimize/${selectedDoctor}`)
      setOptimization(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error:', error)
      setLoading(false)
    }
  }
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Otimização de Agenda</h1>
        <p className="text-gray-600">Utilize IA para otimizar agendamentos e reduzir tempo de espera</p>
      </div>
      
      {/* Optimization Controls */}
      <div className="card">
        <h3 className="card-header">Analisar Agenda</h3>
        <div className="flex gap-4">
          <select 
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Selecione um médico</option>
            <option value="1">Dr. Carlos Mendes - Cardiologia</option>
            <option value="2">Dra. Patricia Lima - Pediatria</option>
            <option value="3">Dr. Roberto Alves - Ortopedia</option>
          </select>
          <button 
            onClick={handleOptimize}
            disabled={!selectedDoctor || loading}
            className="btn-primary flex items-center gap-2 disabled:opacity-50"
          >
            <Search className="w-5 h-5" />
            {loading ? 'Analisando...' : 'Otimizar'}
          </button>
        </div>
      </div>
      
      {/* Results */}
      {optimization && (
        <>
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <Activity className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-800">Taxa de Utilização</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600">
                {optimization.metrics.utilizationRate.toFixed(1)}%
              </p>
              <p className="text-sm text-gray-600 mt-1">Aproveitamento da agenda</p>
            </div>
            
            <div className="card bg-gradient-to-br from-green-50 to-green-100">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-gray-800">Total de Agendamentos</h3>
              </div>
              <p className="text-3xl font-bold text-green-600">
                {optimization.metrics.totalAppointments}
              </p>
              <p className="text-sm text-gray-600 mt-1">Consultas agendadas</p>
            </div>
            
            <div className="card bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h3 className="font-semibold text-gray-800">Tempo Ocioso</h3>
              </div>
              <p className="text-3xl font-bold text-orange-600">
                {optimization.metrics.gapTime} min
              </p>
              <p className="text-sm text-gray-600 mt-1">Intervalos entre consultas</p>
            </div>
          </div>
          
          {/* Recommendations */}
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-semibold text-gray-800">Recomendações de IA</h3>
            </div>
            
            {optimization.recommendations.length > 0 ? (
              <div className="space-y-3">
                {optimization.recommendations.map((rec, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${
                      rec.priority === 'high' ? 'bg-red-50 border-red-500' :
                      rec.priority === 'medium' ? 'bg-yellow-50 border-yellow-500' :
                      'bg-blue-50 border-blue-500'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        rec.priority === 'high' ? 'text-red-600' :
                        rec.priority === 'medium' ? 'text-yellow-600' :
                        'text-blue-600'
                      }`} />
                      <div>
                        <p className="font-medium text-gray-800 capitalize">{rec.type.replace('_', ' ')}</p>
                        <p className="text-sm text-gray-600 mt-1">{rec.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
                <p className="font-medium">Agenda otimizada!</p>
                <p className="text-sm">Não há recomendações no momento.</p>
              </div>
            )}
          </div>
          
          {/* Optimized Schedule */}
          <div className="card">
            <h3 className="card-header">Agenda Otimizada</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Horário</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Duração</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Tipo</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {optimization.optimizedSchedule.map((apt, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{apt.time}</td>
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      
      {!optimization && (
        <div className="card text-center py-12">
          <Activity className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Selecione um médico</h3>
          <p className="text-gray-600">Escolha um médico acima para analisar e otimizar sua agenda</p>
        </div>
      )}
    </div>
  )
}
