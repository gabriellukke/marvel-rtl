import md5 from 'md5';

export const baseURL = 'http://gateway.marvel.com/v1/public';
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const timeStamp = Number(new Date());
const hash = md5(timeStamp + privateKey + publicKey);

export const urlAuth = `ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;
