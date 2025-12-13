// In-memory database for demonstration
// Author: Lucas Andre S

export const database = {
  appointments: [
    {
      id: 1,
      patientId: 1,
      doctorId: 1,
      date: '2024-12-15',
      time: '09:00',
      duration: 30,
      status: 'scheduled',
      type: 'consultation',
      notes: 'Consulta de rotina'
    },
    {
      id: 2,
      patientId: 2,
      doctorId: 2,
      date: '2024-12-15',
      time: '10:00',
      duration: 45,
      status: 'scheduled',
      type: 'exam',
      notes: 'Exame de sangue'
    },
    {
      id: 3,
      patientId: 3,
      doctorId: 1,
      date: '2024-12-16',
      time: '14:00',
      duration: 30,
      status: 'confirmed',
      type: 'followup',
      notes: 'Retorno pós-cirurgia'
    }
  ],
  
  patients: [
    {
      id: 1,
      name: 'Maria Silva',
      email: 'maria.silva@email.com',
      phone: '(11) 98765-4321',
      birthDate: '1985-03-15',
      cpf: '123.456.789-00',
      address: 'Rua das Flores, 123 - São Paulo, SP'
    },
    {
      id: 2,
      name: 'João Santos',
      email: 'joao.santos@email.com',
      phone: '(11) 91234-5678',
      birthDate: '1990-07-22',
      cpf: '987.654.321-00',
      address: 'Av. Paulista, 1000 - São Paulo, SP'
    },
    {
      id: 3,
      name: 'Ana Costa',
      email: 'ana.costa@email.com',
      phone: '(11) 99999-8888',
      birthDate: '1978-11-30',
      cpf: '456.789.123-00',
      address: 'Rua Augusta, 500 - São Paulo, SP'
    }
  ],
  
  doctors: [
    {
      id: 1,
      name: 'Dr. Carlos Mendes',
      specialty: 'Cardiologia',
      crm: 'CRM/SP 123456',
      email: 'carlos.mendes@clinic.com',
      phone: '(11) 3000-1000',
      workingHours: {
        monday: ['09:00-12:00', '14:00-18:00'],
        tuesday: ['09:00-12:00', '14:00-18:00'],
        wednesday: ['09:00-12:00'],
        thursday: ['09:00-12:00', '14:00-18:00'],
        friday: ['09:00-12:00', '14:00-17:00']
      }
    },
    {
      id: 2,
      name: 'Dra. Patricia Lima',
      specialty: 'Pediatria',
      crm: 'CRM/SP 654321',
      email: 'patricia.lima@clinic.com',
      phone: '(11) 3000-2000',
      workingHours: {
        monday: ['08:00-12:00', '13:00-17:00'],
        tuesday: ['08:00-12:00', '13:00-17:00'],
        wednesday: ['08:00-12:00', '13:00-17:00'],
        thursday: ['08:00-12:00', '13:00-17:00'],
        friday: ['08:00-12:00']
      }
    },
    {
      id: 3,
      name: 'Dr. Roberto Alves',
      specialty: 'Ortopedia',
      crm: 'CRM/SP 789012',
      email: 'roberto.alves@clinic.com',
      phone: '(11) 3000-3000',
      workingHours: {
        monday: ['10:00-13:00', '15:00-19:00'],
        tuesday: ['10:00-13:00', '15:00-19:00'],
        wednesday: ['10:00-13:00', '15:00-19:00'],
        thursday: ['10:00-13:00', '15:00-19:00'],
        friday: ['10:00-13:00']
      }
    }
  ]
};

let nextAppointmentId = 4;
let nextPatientId = 4;
let nextDoctorId = 4;

export const getNextId = (type) => {
  if (type === 'appointment') return nextAppointmentId++;
  if (type === 'patient') return nextPatientId++;
  if (type === 'doctor') return nextDoctorId++;
};
