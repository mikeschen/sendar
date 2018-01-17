import axios from 'axios';

const API_KEY = '106635196-7386eb17c9b59aaa02314e6588deb35d';
const ROOT_URL = `https://www.mountainproject.com/data/get-user?key=${API_KEY}`;

export const FETCH_USER = 'FETCH_USER';

export function fetchUser(email) {
    const url = `${ROOT_URL}&email=${email}`;
    const request = axios.get(url);

    return {
        type: FETCH_USER,
        payload: request
    };
}