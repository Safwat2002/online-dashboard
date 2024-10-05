import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import { Bar, BarChart, LabelList, Legend, ResponsiveContainer, YAxis } from 'recharts';
import ChartFilterCheckbox from '../ChartFilterCheckbox/ChartFilterCheckbox';
import './chartsStyle.css';

const data = [
    { Soumis: 5, Rejeté: 10, Vérifié: 7, Annulé: 12, Signé: 15 },
];

const dataKeys = [{ dataKey: "Soumis", fill: "#FF8700" }, { dataKey: "Rejeté", fill: "#C82DB3" }, { dataKey: "Vérifié", fill: "#F22540" }, { dataKey: "Annulé", fill: "#70C700" }, { dataKey: "Signé", fill: "#00AFCF" }];

const fillColors = {
    Soumis:"#FF8700",
    Rejeté:"#C82DB3",
    Vérifié:"#F22540",
    Annulé:"#70C700",
    Signé:"#00AFCF"
}

const renderLegend = (props) => {
    const { payload } = props;
    return (
        <Box display="flex" justifyContent="center" mt={6} ml={6}>
            {payload.map((entry, index) => (
                <Box key={`item-${index}`} display="flex" flexWrap={'wrap'} justifyContent={'center'} alignItems="center" mr={3}>
                    <Box
                        sx={{
                            width: 29,
                            height: 29,
                            backgroundColor: entry.color,
                            borderRadius: '5px',
                            mr:'5px'
                        }}
                    />
                    <Typography variant="body2">{entry.value}</Typography>

                </Box>
            ))}
        </Box>
    );
};

export default function Filtre() {
    const theme = useTheme();
    const [filter, setFilter] = useState(["all"]);

    return (
        <div className="filtre">
            <div className="header">
                <h3>Filtre</h3>
                <div className="filter-box" style={{ zIndex: '100' }}>
                    <ChartFilterCheckbox filter={filter} setFilter={setFilter} options={["Soumis", "Rejeté", "Vérifié", "Annulé", "Signé" ]}/>
                </div>
            </div>

            <div className="chart">
                <Box sx={{ width: '100%', height: 350 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{
                                top: 20, bottom: 5,
                            }}
                            barSize={"15%"}
                            barGap={10}
                            >

                            <YAxis />
                            <Legend radius={[10, 10, 0, 0]} content={renderLegend} height={100} />

                            {
                                filter.length == 1 && filter.includes("all") ? (
                                    dataKeys.map((key, index) => (
                                        <Bar key={key.dataKey} dataKey={key.dataKey} fill={key.fill} radius={[10, 10, 0, 0]} >
                                            <LabelList dataKey={key.dataKey} position="top" />
                                        </Bar>
                                    ))
                                ) : (
                                    filter.map((key, index) => (
                                        <Bar key={key.dataKey} dataKey={key} fill={fillColors[key]} radius={[10, 10, 0, 0]} >
                                            <LabelList dataKey={key.dataKey} position="top" />
                                        </Bar>
                                    ))
                                )
                            }

                        </BarChart>
                    </ResponsiveContainer>
                </Box>

            </div>
        </div>
    );
}