
const SET_LIST_TRANSPORTATIONS = 'SET_LIST_TRANSPORTATIONS';
const SET_CURRENT_TRANSPORTATIONS = 'SET_CURRENT_TRANSPORTATIONS';

export function setListTransportations(listTransportations) {
    if (!listTransportations) {
        listTransportations = [{
            id: 1,
            latFrom: 59.84660399,
            lngFrom: 30.29496392,
            latTo: 59.82934196,
            lngTo: 30.42423701
        }, {
            id: 2,
            latFrom: 59.82934196,
            lngFrom: 30.42423701,
            latTo: 59.82761295,
            lngTo: 30.41705607
        }, {
            id: 3,
            latFrom: 59.83567701,
            lngFrom: 30.38064206,
            latTo: 59.84660399,
            lngTo: 30.29496392
        }, {
            id: 4,
            latFrom: 59.84660399,
            lngFrom: 30.29496392,
            latTo: 59.82761295,
            lngTo: 30.41705607
        }, {
            id: 5,
            latFrom: 59.83567701,
            lngFrom: 30.38064206,
            latTo: 59.84660399,
            lngTo: 30.29496392
        }];
    }
    return {
        type: SET_LIST_TRANSPORTATIONS,
        payload: listTransportations.reduce(
            (accumulator, currentValue) => ({...accumulator, [currentValue.id]: currentValue}), 
            {}
        )
    };
}

export function setCurrentTransportations(requestID) {
    return {
        type: SET_CURRENT_TRANSPORTATIONS,
        payload: { requestID }
    };
}

const initialState = {
    listTransportations: {},
    currentTransportationsID: null,
};

export default function transportationsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LIST_TRANSPORTATIONS:
            return {
                ...state,
                listTransportations: action.payload,
                currentTransportationsID: Object.values(action.payload).length > 0 
                    ? Object.values(action.payload)[0].id
                    : null
            };
        case SET_CURRENT_TRANSPORTATIONS:
            return {
                ...state,
                currentTransportationsID: action.payload.requestID
            };
        default:
            return state;
    }
}
