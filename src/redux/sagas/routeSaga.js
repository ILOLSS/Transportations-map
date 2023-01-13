
import { put, takeEvery } from '@redux-saga/core/effects';
import { 
    FETCH_ROUTE_TRANSPORTATIONS, 
    setRouteTransportations,
    setLoading,
    setError 
} from '../reducers/routeReducer';

function* fetchRouteTransportationsWorker({ payload }) {
    try {
        yield put(setLoading());
        const url = `http://router.project-osrm.org/route/v1/driving/${payload.lngFrom},${payload.latFrom};${payload.lngTo},${payload.latTo}?overview=full`;
        const response = yield fetch(url);
        const data = yield response.json();
        yield put(setRouteTransportations(data));
    } catch (error) {
        console.log(error);
        yield put(setError());
    }
}

export function* routeTransportationsWatcher() {
    yield takeEvery(FETCH_ROUTE_TRANSPORTATIONS, fetchRouteTransportationsWorker);
}
