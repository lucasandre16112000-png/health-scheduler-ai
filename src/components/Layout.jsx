import { Link, useLocation } from 'react-router-dom'
import { Calendar, Users, UserPlus, Stethoscope, LayoutDashboard, Activity } from 'lucide-react'

export default function Layout({ children }) {
  const location = useLocation()
  
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/appointments', icon: Calendar, label: 'Agendamentos' },
    { path: '/patients', icon: Users, label: 'Pacientes' },
    { path: '/doctors', icon: Stethoscope, label: 'Médicos' },
    { path: '/schedule', icon: Activity, label: 'Otimização' }
  ]
  
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Health Scheduler</h1>
              <p className="text-xs text-gray-500">Sistema Inteligente</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
          <div className="text-sm text-gray-600">
            <p className="font-medium">Desenvolvido por</p>
            <p className="text-primary-600 font-semibold">Lucas Andre S</p>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
