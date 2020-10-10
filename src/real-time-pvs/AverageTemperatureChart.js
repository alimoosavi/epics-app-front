import * as React from 'react';
import ReactHighcharts from 'react-highcharts';
import _ from 'lodash';

const upperBound = 800;
const generateUpperBoundData = (length) => _.range(length).map(item => upperBound);

const AverageTemperatureChart = (props) => (<ReactHighcharts  config={{
    title: {
        text: 'Temperature Average Chart'
    },
    xAxis: {categories: props.categories},
    series: [{name: 'temperature average' , data: props.data} , {name: 'upper bound' , data: generateUpperBoundData(props.data.length)}]
}}/>)

export default AverageTemperatureChart;