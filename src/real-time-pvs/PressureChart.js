import * as React from 'react';
import ReactHighcharts from 'react-highcharts';
import _ from 'lodash';

const upperBound = 800;
const generateUpperBoundData = (length) => _.range(length).map(item => upperBound);

const lowerBound = 200;
const generateLowerBoundData = (length) => _.range(length).map(item => lowerBound);

const PressureChart = (props) => (<ReactHighcharts config={{
    title: {
        text: 'Pressure Chart'
    },
    xAxis: {categories: props.categories},
    series: [
        {name: 'pressure' , data: props.data} ,
        {name: 'upper bound' , data: generateUpperBoundData(props.data.length)},
        {name: 'lower bound' , data: generateLowerBoundData(props.data.length)},
    ]
}}/>)

export default PressureChart;