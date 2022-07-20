import md5 from 'md5';

// API Authentication 
const baseURL = 'http://gateway.marvel.com/v1/public';
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const timeStamp = Number(new Date());
const hash = md5(timeStamp + privateKey + publicKey);

const urlAuth = `ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

export const getAllCharacters = async (limit = '20') => {
  const response = await fetch(
    `${baseURL}/characters?${urlAuth}&limit=${limit.toString()}`
  );
  const { data } = await response.json();
  return data; 
};

export const getCharactersBySearch = async (query) => {
  const response = await fetch(
    `${baseURL}/characters?nameStartsWith=${query}${urlAuth}&limit=${limit.toString()}`
  );
  const { data } = await response.json();
  return data; 
};
