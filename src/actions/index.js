import axios from 'axios';

const API_KEY = '106635196-7386eb17c9b59aaa02314e6588deb35d';
const ROOT_URL = `https://www.mountainproject.com/data/get-ticks?key=${API_KEY}`;
const ROUTES_URL = `https://www.mountainproject.com/data/get-routes?key=${API_KEY}`

export const FETCH_USER = 'FETCH_USER';

export function fetchUser(email) {
    const routes = [];
    const url = `${ROOT_URL}&email=${email}`;
    const request = axios.get(url)
        .then((res) => {
            res.data.ticks.forEach((tick) => {
                routes.push(tick.routeId);
              });
              const routeList = routes.join();
              const routesUrl = `${ROUTES_URL}&routeIds=${routeList}`
              return axios.get(routesUrl)            
        })
        .catch((err) => {
            console.log("Error: Could Not Complete Request");
        });

    return {
        type: FETCH_USER,
        payload: request
    };
}