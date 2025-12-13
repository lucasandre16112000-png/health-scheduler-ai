import express from 'express';
import { database, getNextId } from '../database.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(database.doctors);
});

router.get('/:id', (req, res) => {
  const doctor = database.doctors.find(d => d.id === parseInt(req.params.id));
  if (!doctor) {
    return res.status(404).json({ error: 'Doctor not found' });
  }
  res.json(doctor);
});

router.post('/', (req, res) => {
  const newDoctor = {
    id: getNextId('doctor'),
    ...req.body
  };
  database.doctors.push(newDoctor);
  res.status(201).json(newDoctor);
});

router.put('/:id', (req, res) => {
  const index = database.doctors.findIndex(d => d.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Doctor not found' });
  }
  database.doctors[index] = { ...database.doctors[index], ...req.body };
  res.json(database.doctors[index]);
});

router.delete('/:id', (req, res) => {
  const index = database.doctors.findIndex(d => d.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Doctor not found' });
  }
  database.doctors.splice(index, 1);
  res.json({ message: 'Doctor deleted successfully' });
});

export default router;
