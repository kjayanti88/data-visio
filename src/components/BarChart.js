import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = (data) =>{
        //Setting the labels using x-axis data
        const Labels = data.data.map((row) => row.inputX);
        //Setting the values using y-axis data
        const dataVal = data.data.map((row) => row.inputY);

    return (        
        <div className="chartSection">
            <Bar 
            data = 
            {{
                labels: Labels,
                datasets: [
                    {
                        label: '# of votes',
                        data: dataVal,
                        backgroundColor: '#005f69',
                        borderColor: ['magenta'],
                        borderWidth: 2,
                    },
                ],
            }}
            options = {{
                maintainAspectRatio: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }}
            />
        </div>
    )
}

export default BarChart;