import { FETCH_USER } from "../actions/index";

export default function(state = [], action) {
    console.log("action recived", action);
    switch (action.type) {
    case FETCH_USER:
        return action.payload.data.routes;
    }
    return state;
}   