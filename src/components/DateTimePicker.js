import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { TextField } from '@mui/material'

dayjs.locale('fr');

export default function DateTimePicker({ value, onChange }) {

  const minDate = dayjs().add(1, 'day').startOf('day');

  const handleDateChange = (date) => {
    if(date) {
      onChange(dayjs(date));
    } else {
      onChange(null);
    }
  };

  // Ensure value is a Dayjs instance before passing it to DatePicker
  const dateValue = dayjs.isDayjs(value) ? value : dayjs(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='fr'>
        <MobileDateTimePicker 
          minDate={minDate} 
          inputFormat='DD/MM/YYYY' 
          value={dateValue ? dateValue.startOf('day') : null}
          onChange={handleDateChange}
          renderInput={(props) => <TextField {...props} />}
        />
    </LocalizationProvider>
  )
}
