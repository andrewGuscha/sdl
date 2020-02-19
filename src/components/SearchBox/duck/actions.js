import { COUNTRIES_REQUEST, COUNTRIES_REQUEST_CANCEL } from './types';

export const getCountries = (search = '') => ({
  type: COUNTRIES_REQUEST,
  search
});

export const cancelCountriesRequest = () => ({ type: COUNTRIES_REQUEST_CANCEL });