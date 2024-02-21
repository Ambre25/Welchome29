import { LocalizationProvider, MobileTimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import React from 'react'

export default function TimePicker({ value, onChange }) {

  const defaultTime = dayjs().hour(9).minute(0).second(0);
  const minTime = defaultTime.subtract(1, 'second');
  const maxTime = dayjs().hour(17).minute(0);

  const handleTimeChange = (time) => {
    if(time) {
      onChange(dayjs(time));
    } else {
      onChange(null);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileTimePicker  
          ampm={false} 
          minTime={minTime} 
          maxTime={maxTime} 
          value={value ? value.toDate() : null} 
          onChange={handleTimeChange}
        />
    </LocalizationProvider>
  )
}
