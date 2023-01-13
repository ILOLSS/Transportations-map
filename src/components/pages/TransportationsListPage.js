
import React from 'react';
import styled from 'styled-components';
import TransportationsTable from '../organism/transportations/TransportationsTable';
import MapView from '../organism/map/MapView';

const DivRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    flex-direction: row;
    column-gap: 10px;
`;

function TransportationsListPage() {
    return (
        <DivRow>
            <TransportationsTable />
            <MapView />
        </DivRow>
    );
}

export default TransportationsListPage;
