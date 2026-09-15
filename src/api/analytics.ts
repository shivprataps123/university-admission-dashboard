import axios from 'axios';
import type { AdmissionAnalytics } from '../types/analytics';

const API_BASE = import.meta.env.VITE_API_BASE ?? '/api/v1';

export async function getAdmissionAnalytics(): Promise<AdmissionAnalytics> {
  const response = await axios.get<AdmissionAnalytics>(
    `${API_BASE}/analytics/admissions`,
  );

  return response.data;
}