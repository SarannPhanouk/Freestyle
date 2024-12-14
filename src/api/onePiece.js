import axios from 'axios';

const BASE_URL = 'https://api.api-onepiece.com/v2';

const api = axios.create({ baseURL: BASE_URL });

export const getCharacters = () => api.get('/characters/en');
export const getSagas = () => api.get('/sagas/en');
export const getFruits = (id) => api.get(`/fruits/en`);