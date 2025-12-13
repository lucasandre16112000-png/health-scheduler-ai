import express from 'express';
import { database } from '../database.js';

const router = express.Router();

router.get('/dashboard', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  
  const todayAppointments = database.appointments.filter(a => a.date === today);
  const totalPatients = database.patients.length;
  const totalDoctors = database.doctors.length;
  const totalAppointments = database.appointments.length;
  
  // Calculate wait time (simulated)
  const avgWaitTime = 15; // minutes
  
  // Appointments by status
  const appointmentsByStatus = {
    scheduled: database.appointments.filter(a => a.status === 'scheduled').length,
    confirmed: database.appointments.filter(a => a.status === 'confirmed').length,
    completed: database.appointments.filter(a => a.status === 'completed').length,
    cancelled: database.appointments.filter(a => a.status === 'cancelled').length
  };
  
  // Appointments by type
  const appointmentsByType = {
    consultation: database.appointments.filter(a => a.type === 'consultation').length,
    exam: database.appointments.filter(a => a.type === 'exam').length,
    followup: database.appointments.filter(a => a.type === 'followup').length,
    emergency: database.appointments.filter(a => a.type === 'emergency').length
  };
  
  res.json({
    overview: {
      todayAppointments: todayAppointments.length,
      totalPatients,
      totalDoctors,
      totalAppointments,
      avgWaitTime
    },
    appointmentsByStatus,
    appointmentsByType,
    recentAppointments: database.appointments.slice(-5).reverse()
  });
});

router.get('/doctor-performance/:doctorId', (req, res) => {
  const doctorId = parseInt(req.params.doctorId);
  const doctorAppointments = database.appointments.filter(a => a.doctorId === doctorId);
  
  const performance = {
    totalAppointments: doctorAppointments.length,
    completedAppointments: doctorAppointments.filter(a => a.status === 'completed').length,
    cancelledAppointments: doctorAppointments.filter(a => a.status === 'cancelled').length,
    avgDuration: doctorAppointments.reduce((sum, a) => sum + a.duration, 0) / doctorAppointments.length || 0,
    utilizationRate: (doctorAppointments.length / (8 * 60 / 30)) * 100 // Assuming 30min slots
  };
  
  res.json(performance);
});

export default router;
