import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar'
import { getKey } from '../api_key';

const API_KEY = getKey();
const ROOT_URL = `https://www.mountainproject.com/data/get-ticks?key=${API_KEY}`;
const ROUTES_URL = `https://www.mountainproject.com/data/get-routes?key=${API_KEY}`

export const FETCH_USER = 'FETCH_USER';

export function fetchUser(email) {
    loadProgressBar();
    const routes = [];
    const url = `${ROOT_URL}&email=${email}`;
    let request = axios.get(url, {crossdomain: true})
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
            alert("Could Not Find User.", err);
        });

    return {
        type: FETCH_USER,
        payload: request
    };
}