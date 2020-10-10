import * as React from 'react';
import axiosInstance from "../../axios-instance";
import PvLogsTable from "./pvLogsTable";


const columns = [
    {name: 'thermometer_1', title: 'thermometer 1'},
    {name: 'thermometer_2', title: 'thermometer 2'},
    {name: 'thermometer_3', title: 'thermometer 3'},
    {name: 'time', title: 'time'},
]
const getPvLogs = async (query) => (await axiosInstance.get('/pv', {params: query})).data;

export const ThermometerTable = (props) => (
    <PvLogsTable table_type={3} parametersId={props.parametersId} columns={columns} getPvLogs={getPvLogs}/>
)