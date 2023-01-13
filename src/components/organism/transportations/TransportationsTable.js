
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import MakeTableDataSource from './helpers/MakeTableDataSource';
import { setListTransportations, setCurrentTransportations } from '../../../redux/reducers/transportationsReducer';

const columns = [{
    title: 'Номер заявки',
    dataIndex: 'number',
    key: 'number'
}, {
    title: 'Координаты ОТ lat',
    dataIndex: 'latFrom',
    key: 'latFrom',
    align: 'center'
}, {
    title: 'Координаты ОТ lng',
    dataIndex: 'lngFrom',
    key: 'lngFrom',
    align: 'center'
}, {
    title: 'Координаты ДО lat',
    dataIndex: 'latTo',
    key: 'latTo',
    align: 'center'
}, {
    title: 'Координаты ДО lng',
    dataIndex: 'lngTo',
    key: 'lngTo',
    align: 'center'
}];

const TableWrap = styled.div`
    flex: 1;
    overflow-x: scroll;
`;

function TransportationsTable() {

    const dispatch = useDispatch();
    const listTransportations = useSelector(state => state.transportations.listTransportations);
    const currentTransportations = useSelector(state => state.transportations.currentTransportationsID); 

    useEffect(() => {
        dispatch(setListTransportations());
    }, [dispatch]);

    return (
        <TableWrap>
            <Table
                dataSource={MakeTableDataSource(listTransportations)} 
                columns={columns}
                bordered={true}
                size={"small"}
                pagination={{ position: ['none', 'bottomLeft'] }}
                rowSelection={{
                    type: 'radio',
                    selectedRowKeys: [currentTransportations], // key === id
                    onSelect: (record) => dispatch(setCurrentTransportations(record.id))
                }}
            />
        </TableWrap>
    );
}

export default TransportationsTable;
