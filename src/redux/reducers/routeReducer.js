
const SET_ROUTE_TRANSPORTATIONS = 'SET_ROUTE_TRANSPORTATIONS';
const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';

export const FETCH_ROUTE_TRANSPORTATIONS = 'FETCH_ROUTE_TRANSPORTATIONS';

export function setRouteTransportations(data) {
    return {
        type: SET_ROUTE_TRANSPORTATIONS,
        payload: { data }
    };
}

export function setLoading() {
    return {
        type: SET_LOADING
    };
}

export function setError() {
    return {
        type: SET_ERROR
    };
}

export function fetchRouteTransportations(data) {
    return {
        type: FETCH_ROUTE_TRANSPORTATIONS,
        payload: data
    };
}

const initialState = {
    routeTransportations: {},
    isLoading: false,
    isError: false
};

export default function routeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ROUTE_TRANSPORTATIONS:
            return {
                ...state,
                routeTransportations: action.payload.data,
                isLoading: false,
                isError: false
            };
        case SET_LOADING:
            return {
                ...state, 
                isLoading: true,
                isError: false
            };
        case SET_ERROR:
            return {
                ...state, 
                isLoading: false,
                isError: true
            };
        default:
            return state;
    }
}
