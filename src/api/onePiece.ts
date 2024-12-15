import axios, { AxiosResponse } from 'axios';
import { Character } from '@/models/character';
import { Fruit } from '@/models/fruit';
import { Saga } from '@/models/saga';

const BASE_URL = 'https://api.api-onepiece.com/v2';

const api = axios.create({ baseURL: BASE_URL });

export const getCharacters = (): Promise<AxiosResponse<Character[]>> => 
  api.get('/characters/en');

export const getSagas = (): Promise<AxiosResponse<Saga[]>> => 
  api.get('/sagas/en');

export const getFruits = (): Promise<AxiosResponse<Fruit[]>> => 
  api.get('/fruits/en');