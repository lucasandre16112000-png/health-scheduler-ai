// AI-powered scheduling optimization algorithm
// Author: Lucas Andre S

import { database } from '../database.js';

/**
 * Optimizes appointment schedule to minimize wait times and gaps
 */
export function optimizeSchedule(appointments) {
  // Sort appointments by date and time
  const sorted = [...appointments].sort((a, b) => {
    const dateCompare = new Date(a.date) - new Date(b.date);
    if (dateCompare !== 0) return dateCompare;
    return a.time.localeCompare(b.time);
  });
  
  // Calculate metrics
  const metrics = {
    totalAppointments: sorted.length,
    averageDuration: sorted.reduce((sum, apt) => sum + apt.duration, 0) / sorted.length || 0,
    gapTime: calculateGapTime(sorted),
    utilizationRate: calculateUtilization(sorted)
  };
  
  return {
    optimizedSchedule: sorted,
    metrics,
    recommendations: generateRecommendations(sorted, metrics)
  };
}

/**
 * Finds the best available time slot for a new appointment
 */
export function findBestTimeSlot(doctorId, date, duration) {
  const doctor = database.doctors.find(d => d.id === doctorId);
  if (!doctor) {
    return { error: 'Doctor not found' };
  }
  
  // Get existing appointments for this doctor on this date
  const existingAppointments = database.appointments.filter(
    a => a.doctorId === doctorId && a.date === date
  );
  
  // Get doctor's working hours for this day
  const dayOfWeek = new Date(date).toLocaleDateString('en-US', { weekday: 'lowercase' });
  const workingHours = doctor.workingHours[dayOfWeek] || [];
  
  if (workingHours.length === 0) {
    return { available: false, message: 'Doctor not available on this day' };
  }
  
  // Find available slots
  const availableSlots = [];
  
  for (const period of workingHours) {
    const [start, end] = period.split('-');
    const slots = generateTimeSlots(start, end, duration, existingAppointments);
    availableSlots.push(...slots);
  }
  
  if (availableSlots.length === 0) {
    return { available: false, message: 'No available slots for this day' };
  }
  
  // Return best slot (earliest available)
  return {
    available: true,
    bestSlot: availableSlots[0],
    alternativeSlots: availableSlots.slice(1, 4),
    totalAvailable: availableSlots.length
  };
}

/**
 * Generates available time slots within a period
 */
function generateTimeSlots(startTime, endTime, duration, existingAppointments) {
  const slots = [];
  let current = timeToMinutes(startTime);
  const end = timeToMinutes(endTime);
  
  while (current + duration <= end) {
    const slotTime = minutesToTime(current);
    
    // Check if slot conflicts with existing appointments
    const hasConflict = existingAppointments.some(apt => {
      const aptStart = timeToMinutes(apt.time);
      const aptEnd = aptStart + apt.duration;
      return (current >= aptStart && current < aptEnd) ||
             (current + duration > aptStart && current + duration <= aptEnd);
    });
    
    if (!hasConflict) {
      slots.push({
        time: slotTime,
        duration,
        score: calculateSlotScore(current, existingAppointments)
      });
    }
    
    current += 15; // 15-minute intervals
  }
  
  // Sort by score (higher is better)
  return slots.sort((a, b) => b.score - a.score);
}

/**
 * Calculates gap time between appointments
 */
function calculateGapTime(appointments) {
  if (appointments.length < 2) return 0;
  
  let totalGap = 0;
  for (let i = 0; i < appointments.length - 1; i++) {
    const current = appointments[i];
    const next = appointments[i + 1];
    
    if (current.date === next.date) {
      const currentEnd = timeToMinutes(current.time) + current.duration;
      const nextStart = timeToMinutes(next.time);
      const gap = nextStart - currentEnd;
      if (gap > 0) totalGap += gap;
    }
  }
  
  return totalGap;
}

/**
 * Calculates schedule utilization rate
 */
function calculateUtilization(appointments) {
  if (appointments.length === 0) return 0;
  
  const totalMinutes = appointments.reduce((sum, apt) => sum + apt.duration, 0);
  const workingMinutes = 8 * 60; // Assuming 8-hour workday
  
  return Math.min((totalMinutes / workingMinutes) * 100, 100);
}

/**
 * Generates scheduling recommendations
 */
function generateRecommendations(appointments, metrics) {
  const recommendations = [];
  
  if (metrics.utilizationRate < 60) {
    recommendations.push({
      type: 'low_utilization',
      message: 'Taxa de utilização baixa. Considere aceitar mais agendamentos.',
      priority: 'medium'
    });
  }
  
  if (metrics.gapTime > 120) {
    recommendations.push({
      type: 'high_gap_time',
      message: 'Muitos intervalos entre consultas. Otimize a agenda para reduzir tempo ocioso.',
      priority: 'high'
    });
  }
  
  if (metrics.utilizationRate > 90) {
    recommendations.push({
      type: 'overbooked',
      message: 'Agenda muito cheia. Considere adicionar intervalos para evitar atrasos.',
      priority: 'high'
    });
  }
  
  return recommendations;
}

/**
 * Calculates quality score for a time slot
 */
function calculateSlotScore(slotMinutes, existingAppointments) {
  let score = 100;
  
  // Prefer morning slots
  if (slotMinutes >= 9 * 60 && slotMinutes < 12 * 60) {
    score += 20;
  }
  
  // Prefer slots with balanced spacing
  const nearbyAppointments = existingAppointments.filter(apt => {
    const aptTime = timeToMinutes(apt.time);
    return Math.abs(aptTime - slotMinutes) < 120; // Within 2 hours
  });
  
  if (nearbyAppointments.length === 0) {
    score -= 10; // Isolated slot
  } else if (nearbyAppointments.length > 3) {
    score -= 15; // Too crowded
  }
  
  return score;
}

// Helper functions
function timeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}
