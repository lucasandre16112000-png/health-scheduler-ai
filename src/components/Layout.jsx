import { Link, useLocation } from 'react-router-dom'
import { Calendar, Users, UserPlus, Stethoscope, LayoutDashboard, Activity, Heart } from 'lucide-react'

export default function Layout({ children }) {
  const location = useLocation()
  
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/appointments', icon: Calendar, label: 'Agendamentos' },
    { path: '/patients', icon: Users, label: 'Pacientes' },
    { path: '/doctors', icon: Stethoscope, label: 'Médicos' },
    { path: '/schedule', icon: Activity, label: 'Otimização IA' }
  ]
  
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-2xl border-r border-gray-200">
        <div className="p-6 h-full flex flex-col">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-medical-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-medical-600 bg-clip-text text-transparent">
                  Health Scheduler
                </h1>
                <p className="text-xs text-gray-500 font-semibold">Sistema Inteligente</p>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-primary-500 to-medical-500 rounded-full mt-3"></div>
          </div>
          
          {/* Navigation */}
          <nav className="space-y-2 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`sidebar-link ${
                    isActive ? 'sidebar-link-active' : 'sidebar-link-inactive'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{item.label}</span>
                </Link>
              )
            })}
          </nav>
          
          {/* Footer */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-4 border border-blue-100">
              <p className="text-sm font-semibold text-gray-700 mb-1">Desenvolvido por</p>
              <p className="text-lg font-bold bg-gradient-to-r from-primary-600 to-medical-600 bg-clip-text text-transparent">
                Lucas Andre S
              </p>
              <p className="text-xs text-gray-500 mt-1">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
