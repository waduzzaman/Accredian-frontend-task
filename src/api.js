// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Change this to your backend URL
});

export async function createReferral(referralData) {
  try {
    const response = await api.post('/referrals', referralData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getReferralPrograms() {
  try {
    const response = await api.get('/referral-programs');
    return response.data;
  } catch (error) {
    throw error;
  }
}
