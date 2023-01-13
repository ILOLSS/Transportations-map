
import React from 'react';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet'
import RoutingTransportation from './RoutingTransportation';

const MapWrap = styled(MapContainer)`
    flex: 2;
    height: 100vh;
    border: 4px solid #a8d5e5;
    border-radius: 10px;
`;

const DefaultIcon = L.icon({
    iconUrl: '/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
});

L.Marker.prototype.options.icon = DefaultIcon;

function TransportationsMap() {
    
    return (
        <MapWrap scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RoutingTransportation />
        </MapWrap>
    );
}

export default TransportationsMap;
