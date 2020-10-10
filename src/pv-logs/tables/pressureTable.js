import * as React from 'react';
import axiosInstance from "../../axios-instance";
import PvLogsTable from "./pvLogsTable";


const columns = [
    {name: 'pressure', title: 'pressure'},
    {name: 'pressure_stat', title: 'pressure stat'},
    {name: 'pressure_sevr', title: 'pressure sevr'},
    {name: 'time', title: 'time'},
]
const getPvLogs = async (query) => (await axiosInstance.get('/pv', {params: query})).data;

export const PressureTable = (props) => (
    <PvLogsTable table_type={2} parametersId={props.parametersId} columns={columns} getPvLogs={getPvLogs}/>
)