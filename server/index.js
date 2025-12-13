import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import appointmentsRouter from './routes/appointments.js';
import patientsRouter from './routes/patients.js';
import doctorsRouter from './routes/doctors.js';
import analyticsRouter from './routes/analytics.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/appointments', appointmentsRouter);
app.use('/api/patients', patientsRouter);
app.use('/api/doctors', doctorsRouter);
app.use('/api/analytics', analyticsRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Health Scheduler AI Server Running', author: 'Lucas Andre S' });
});

app.listen(PORT, () => {
  console.log(`🏥 Health Scheduler AI Server running on port ${PORT}`);
  console.log(`📅 Author: Lucas Andre S`);
});
