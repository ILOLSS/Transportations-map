
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRouteTransportations } from '../../../redux/reducers/routeReducer';
import TransportationsMap from './TransportationsMap';

const UtilityDiv = styled.div`
    flex: 2;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function MapView() {

    const dispatch = useDispatch();
    const currentTransportationsID = useSelector(state => state.transportations.currentTransportationsID);
    const currentTransportations = useSelector(state => state.transportations.listTransportations[currentTransportationsID]);
    const isLoading = useSelector(state => state.route.isLoading);
    const isError = useSelector(state => state.route.isError);

    useEffect(() => {
        if (currentTransportations && currentTransportationsID) {
            dispatch(fetchRouteTransportations(currentTransportations));
        }
    }, [currentTransportationsID, currentTransportations, dispatch]);

    return (
        isLoading 
            ? <UtilityDiv>{'Loading...'}</UtilityDiv>
            : isError 
                ? <UtilityDiv>{'Something went wrong, please trye again'}</UtilityDiv>
                : <TransportationsMap/>
    );
}

export default MapView;
