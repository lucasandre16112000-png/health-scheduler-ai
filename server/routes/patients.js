import express from 'express';
import { database, getNextId } from '../database.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(database.patients);
});

router.get('/:id', (req, res) => {
  const patient = database.patients.find(p => p.id === parseInt(req.params.id));
  if (!patient) {
    return res.status(404).json({ error: 'Patient not found' });
  }
  res.json(patient);
});

router.post('/', (req, res) => {
  const newPatient = {
    id: getNextId('patient'),
    ...req.body
  };
  database.patients.push(newPatient);
  res.status(201).json(newPatient);
});

router.put('/:id', (req, res) => {
  const index = database.patients.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Patient not found' });
  }
  database.patients[index] = { ...database.patients[index], ...req.body };
  res.json(database.patients[index]);
});

router.delete('/:id', (req, res) => {
  const index = database.patients.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Patient not found' });
  }
  database.patients.splice(index, 1);
  res.json({ message: 'Patient deleted successfully' });
});

export default router;
