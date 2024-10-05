import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useEffect, useState } from 'react';
import './dateFilter.css';
import dayjs from 'dayjs';

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'transparent', // Remove border color by default
                        },
                        '&:hover fieldset': {
                            borderColor: 'transparent', // Remove border color on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'transparent', // Remove border color when focused
                        },
                    },
                },
            },
        },
    },
});


function DateFilter({ title }) {
    const [filterOneValue, setFilterOneValue] = useState(dayjs("2021-10-10"));

    // useEffect(() => {
    //     console.log(filterOneValue['$d']);
    // }, [filterOneValue])

    return (
        <div className="goverment-filter">
            <div className="title">
                {title}
            </div>

            <div className="custom-selectbox">
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs} he>
                    <DatePicker
                        value={filterOneValue}
                        onChange={(newValue) => setFilterOneValue(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default DateFilter