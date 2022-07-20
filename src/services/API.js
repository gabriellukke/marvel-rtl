import { baseURL, urlAuth } from './authentication';

export const getAllCharacters = async (limit = '20') => {
  const response = await fetch(
    `${baseURL}/characters?${urlAuth}&limit=${limit.toString()}`
  );
  const { data } = await response.json();
  return data; 
};

export const getCharacterById = async (characterId) => {
  const response = await fetch(
    `${baseURL}/characters/${characterId}${urlAuth}`
  );
  const { data } = await response.json();
  return data;
};

export const getCharactersBySearch = async (query, limit = '20') => {
  const response = await fetch(
    `${baseURL}/characters?nameStartsWith=${query}&${urlAuth}&limit=${limit.toString()}`
  );
  const { data } = await response.json();
  return data; 
};
