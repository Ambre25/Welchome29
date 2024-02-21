// CARTE LOISIR

import React from 'react'
import { FormControl, MenuItem, Paper, Select, Typography } from '@mui/material'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
import DateTimePicker from './DateTimePicker'
import dayjs from 'dayjs'

const LoisirCard = ({ text, img_url, width, customComponent, value, onChange }) => {

    const isSelectionMade = Boolean(value);

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <Paper
            sx={{
                width: 250,
                height: 250,
                borderRadius: '30px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                backgroundColor: isSelectionMade ? '#CDF2CA' : '#EFEFEF',
            }}
        >
            <img src={img_url} alt="Nombre d'adultes" style={{ width: `${width}` }} />
            <Typography variant='h6'>
                {text}
            </Typography>
            {customComponent === 'select' && (
                <FormControl sx={{ width: 175 }}>
                    <Select value={value} onChange={handleChange} sx={{ borderRadius: '20px' }}>
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                    </Select>
                </FormControl>
            )}
            {customComponent === 'select-velo' && (
                <FormControl sx={{ width: 175 }}>
                    <Select value={value} onChange={handleChange} sx={{ borderRadius: '20px' }}>
                        <MenuItem value={1}>1H</MenuItem>
                        <MenuItem value={2}>2H</MenuItem>
                        <MenuItem value={3}>3H</MenuItem>
                        <MenuItem value={4}>1J</MenuItem>
                        <MenuItem value={5}>2J</MenuItem>
                        <MenuItem value={6}>3J</MenuItem>
                        <MenuItem value={7}>4J</MenuItem>
                        <MenuItem value={8}>5J</MenuItem>
                        <MenuItem value={9}>6J</MenuItem>
                        <MenuItem value={10}>7J</MenuItem>
                    </Select>
                </FormControl>
            )}
            {customComponent === 'select-velo-carmor' && (
                <FormControl sx={{ width: 175 }}>
                    <Select value={value} onChange={handleChange} sx={{ borderRadius: '20px' }}>
                        <MenuItem value={1}>1/2J</MenuItem>
                        <MenuItem value={2}>1J</MenuItem>
                        <MenuItem value={3}>2J</MenuItem>
                        <MenuItem value={4}>3J</MenuItem>
                        <MenuItem value={5}>4J</MenuItem>
                        <MenuItem value={6}>5J</MenuItem>
                        <MenuItem value={7}>6J</MenuItem>
                        <MenuItem value={8}>7J</MenuItem>
                    </Select>
                </FormControl>
            )}
            {customComponent === 'datepicker' && (
                <DatePicker value={value} onChange={onChange} />
            )}
            {customComponent === 'timepicker' && (
                <TimePicker value={value} onChange={onChange} />
            )}
            {customComponent === 'datetimepicker' && (
                <DateTimePicker value={value} onChange={(datetime) => {
                    if(datetime) {
                        onChange(dayjs(datetime));
                    } else {
                        onchange(null);
                    }
                }} />
            )}
        </Paper>
    )
}

export default LoisirCard;