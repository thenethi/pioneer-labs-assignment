import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const PopulationGraph = () => {
    const [populationData, setPopulationData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const labels = data.data.map(entry => entry.Year);
                const population = data.data.map(entry => entry.Population);
                const chartData = {
                    labels: labels,
                    datasets: [{
                        label: 'Population',
                        data: population,
                        borderColor: 'green',
                        tension: 0.4,
                        fill: false
                    }]
                };
                setPopulationData(chartData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const ctx = document.getElementById('population-chart');
        if (ctx && populationData.labels && populationData.labels.length > 0) {
            Chart.getChart(ctx)?.destroy();
            new Chart(ctx, {
                type: 'line',
                data: populationData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: false,
                            suggestedMin: 300000000, 
                            ticks: {
                                callback: function(value, index, values) {
                                    return value.toLocaleString(); 
                                }
                            },
                            title: {
                                display: true,
                                text: 'Population'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Year'
                            }
                        }
                    }
                }
            });
        }
    }, [populationData]);

    return (
        <div>
            <h2 className='graph-heading'>Population Data in Different Years</h2>
            <canvas id="population-chart" width="400" height="200"></canvas>
        </div>
    );
};

export default PopulationGraph;
