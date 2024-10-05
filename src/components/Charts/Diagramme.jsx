import { Box } from '@mui/material';
import React, { useState } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import ChartFilterCheckbox from '../ChartFilterCheckbox/ChartFilterCheckbox';
import './chartsStyle.css';

const data = [
    { name: 'Vos fichiers', value: 5, color: '#0040BA' },
    { name: 'Système', value: 10, color: '#009BCC' },
];

const renderLegend = (props) => {
    const { payload } = props;

    // Calculate total value for percentage calculation
    const total = data.reduce((acc, entry) => acc + entry.value, 0);

    return (
        <ul className='diagramme-legend'>
            {payload.map((entry, index) => (
                <li key={`item-${index}`} style={{ color: "#A3AED0", fontSize: '16px', fontWeight:500 }}>
                    {entry.value} <span style={{color:"#2B3674", fontWeight:500, fontSize:18, display:"block"}}>{((entry.payload.value / total) * 100).toFixed(2)}%</span>
                </li>
            ))}
        </ul>
    );
};

export default function Diagramme() {
    const [filter, setFilter] = useState(["all"]);
    return (
        <div className='diagramme'>
            <div className="header">
                <h3>Diagramme</h3>
                <div className="filter-box" style={{ zIndex: '100' }}>
                    <ChartFilterCheckbox filter={filter} setFilter={setFilter} options={["Vos fichiers", "Système"]}/>
                </div>
            </div>

            <div className="chart">
                <Box sx={{ width: '100%', height: 350 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Legend verticalAlign="bottom" height={100} content={renderLegend} />
                        </PieChart>
                    </ResponsiveContainer>
                </Box>
            </div>
        </div>
    )
}