
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';

function RoutingTransportation() {
    const currentTransportationsID = useSelector(state => state.transportations.currentTransportationsID);
    const currentTransportations = useSelector(state => state.transportations.listTransportations[currentTransportationsID]);
    const route = useSelector(state => state.route.routeTransportations);
    const map = useMap();

    useEffect(() => {
        if (route.routes) {
            map.eachLayer((layer) => {
                if (layer instanceof L.Polyline || layer instanceof L.Marker) {
                    map.removeLayer(layer);
                }
            });
            L.marker([currentTransportations.latFrom, currentTransportations.lngFrom], {title: 'From'}).addTo(map);
            L.marker([currentTransportations.latTo, currentTransportations.lngTo], {title: 'To'}).addTo(map);
            const polyline = require('@mapbox/polyline');
            const polylineRoute = L.polyline(polyline.decode(route.routes[0].geometry), {color: '#0080FF'}).addTo(map);
            map.fitBounds(polylineRoute.getBounds());
        }
    }, [route, currentTransportations, map]);

    return null;
}

export default RoutingTransportation;
