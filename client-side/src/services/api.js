import axios from 'axios';

const timeStamp = '1618073699';
const apiKey = 'c36d324644269cda40a7b11379185f6f';
const hash = '0fc91d7b73e1c262562ca64f6c41f419';


const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: timeStamp,
        apikey: apiKey,
        hash,

    }
});

export default api;