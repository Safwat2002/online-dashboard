import { PieChart } from '@mui/x-charts/PieChart';
import * as React from 'react';
import ChartFilterCheckbox from '../ChartFilterCheckbox/ChartFilterCheckbox';
import './statisticsChart.css';

export default function StatisticsChart() {
    return (
        <div className="statistics-chart">
            <div className="header">
                <h3>Diagramme</h3>
                <div className="select-filter">
                    <ChartFilterCheckbox />
                </div>
            </div>

            <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 10, label: ' Vos fichiers' },
                        { id: 1, value: 15, label: ' Système' },
                        { id: 2, value: 20, label: 'series C' },
                    ],
                },
            ]}
            width={400}
            height={200}
        />
        </div>
    );
}