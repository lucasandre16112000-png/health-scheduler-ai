import express from 'express';
import { database, getNextId } from '../database.js';
import { optimizeSchedule, findBestTimeSlot } from '../utils/scheduler.js';

const router = express.Router();

// Get all appointments
router.get('/', (req, res) => {
  res.json(database.appointments);
});

// Get appointment by ID
router.get('/:id', (req, res) => {
  const appointment = database.appointments.find(a => a.id === parseInt(req.params.id));
  if (!appointment) {
    return res.status(404).json({ error: 'Appointment not found' });
  }
  res.json(appointment);
});

// Create new appointment
router.post('/', (req, res) => {
  const { patientId, doctorId, date, time, duration, type, notes } = req.body;
  
  const newAppointment = {
    id: getNextId('appointment'),
    patientId: parseInt(patientId),
    doctorId: parseInt(doctorId),
    date,
    time,
    duration: duration || 30,
    status: 'scheduled',
    type: type || 'consultation',
    notes: notes || ''
  };
  
  database.appointments.push(newAppointment);
  res.status(201).json(newAppointment);
});

// Update appointment
router.put('/:id', (req, res) => {
  const index = database.appointments.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Appointment not found' });
  }
  
  database.appointments[index] = {
    ...database.appointments[index],
    ...req.body
  };
  
  res.json(database.appointments[index]);
});

// Delete appointment
router.delete('/:id', (req, res) => {
  const index = database.appointments.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Appointment not found' });
  }
  
  database.appointments.splice(index, 1);
  res.json({ message: 'Appointment deleted successfully' });
});

// Get optimized schedule for a doctor
router.get('/optimize/:doctorId', (req, res) => {
  const doctorId = parseInt(req.params.doctorId);
  const doctorAppointments = database.appointments.filter(a => a.doctorId === doctorId);
  const optimized = optimizeSchedule(doctorAppointments);
  res.json(optimized);
});

// Find best time slot
router.post('/find-slot', (req, res) => {
  const { doctorId, date, duration } = req.body;
  const bestSlot = findBestTimeSlot(doctorId, date, duration);
  res.json(bestSlot);
});

export default router;
