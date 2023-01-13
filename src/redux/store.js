import { createStore, combineReducers, applyMiddleware } from 'redux';
import transportationsReducer from './reducers/transportationsReducer';
import routeReducer from './reducers/routeReducer';
import createSagaMiddleware from '@redux-saga/core';
import { routeTransportationsWatcher } from './sagas/routeSaga';

const sagaMiddleware = createSagaMiddleware();

const combinedReducer = combineReducers({
    transportations: transportationsReducer,
    route: routeReducer
});

export const store = createStore(combinedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(routeTransportationsWatcher);
