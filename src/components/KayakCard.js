// LOISIRS ACCORDIONS

import { Accordion, AccordionDetails, AccordionSummary, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
import { blueGrey } from '@mui/material/colors'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import { Timestamp } from 'firebase/firestore'
import InfoModal from './InfoModal'

const KayakCard = ({ title, textNumber, color, textDate, durationOptions, itemName }) => {

  const [number, setNumber] = useState(1);
  const [duration, setDuration] = useState(1);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  
  const { addToCart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    const prices = {
      'Kayak 1 place': { 1: 22, 2: 33, 3: 42, 6: 60 },
      'Kayak 2 places': { 1: 30, 2: 47, 3: 59, 6: 70 },
      'Paddle 1 place': { 1: 22, 2: 33, 3: 42 },
      'Paddle 2 places': { 1: 30, 2: 47, 3: 59 },
      'Paddle 4 places': { 1: 53, 2: 80 },
      'Catamaran 1 place': { 1: 60, 2: 90, 3: 115 },
      'Catamaran sport': { 1: 66, 2: 105, 3: 125 },
      'Dériveur': { 1: 40, 2: 65, 3: 80 },
      'Planche à voile école': { 1: 30, 2: 47, 3: 60 },
      'Planche à voile monofilm': { 1: 38, 2: 60, 3: 75 },
      'Trimaran': { 1: 260 },
    };

    if (itemName === 'Trimaran') {
      const trimaranPricePerDay = prices[itemName][1];
      const totalPrice = number * trimaranPricePerDay;
      return totalPrice;
    }

    const pricePerHour = prices[itemName][Number(duration)];
    const totalPrice = number * pricePerHour;
    return totalPrice;
  };

  const handleChangenumber = (event) => {
    setNumber(Number(event.target.value));
  }

  const handleChangeDuration = (event) => {
    setDuration(Number(event.target.value));
  }

  const handleAddToCart = () => {

    if (!date && !time) {
      setModalMessage("Veuillez choisir une date et une heure s'il vous plaît");
      setOpenModal(true);
      return;
    }
  
    if (!date) {
      setModalMessage("Veuillez choisir une date s'il vous plaît");
      setOpenModal(true);
      return;
    }
  
    if (!time) {
      setModalMessage("Veuillez choisir une heure s'il vous plaît");
      setOpenModal(true);
      return;
    }

    const jsDate = date instanceof Date ? date : new Date(date);
    const jsTime = time instanceof Date ? time : new Date(time);

    const dateString = jsDate.toISOString().split('T')[0];
    const timeString = jsTime.toTimeString().split(' ')[0];

    const itemId = `${itemName}-${dateString}-${timeString}`; 
    const totalPrice = calculateTotalPrice();

    const item = {
      id: itemId,
      type: 'sport nautique',
      title,
      quantity: number,
      date: Timestamp.fromDate(jsDate),
      time: Timestamp.fromDate(jsTime),
      duration,
      name: itemName,
      totalPrice,
    }

    addToCart(item);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  }
 
  return (
    <>
      <Accordion sx={{ maxWidth: 350, backgroundColor: `${color}` }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panella-content'
          id='panella-header'
        >
          <Typography variant='h6'>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Typography>
            <strong>{textNumber}</strong>
          </Typography>
          <FormControl sx={{ width: 300 }}>
            <InputLabel>nombre</InputLabel>
            <Select value={number} label='nombre' onChange={handleChangenumber}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
          </FormControl>
          <Typography>
            <strong>{textDate}</strong>
          </Typography>
          <div style={{ width: 300 }}>
            <DatePicker value={date} onChange={setDate} />
          </div>
          <Typography>
            <strong>À partir de quelle heure ?</strong>
          </Typography>
          <div style={{ width: 300 }}>
            <TimePicker value={time} onChange={setTime} />
          </div>
          {durationOptions && durationOptions.length > 0 && (
            <>
              <Typography>
                <strong>Indiquez la durée de location souhaitée</strong>
              </Typography>
              <FormControl sx={{ width: 300 }}>
                <InputLabel>durée</InputLabel>
                <Select value={duration} label='nombre' onChange={handleChangeDuration}>
                  {durationOptions && durationOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}
          <Button 
            variant='contained' 
            sx={{ 
              bgcolor: blueGrey[900], 
              color: 'white', 
              paddingY: '0.8rem',
              width: 300 
            }}
            onClick={handleAddToCart}
          >
            Ajouter au panier
          </Button>
        </AccordionDetails>
      </Accordion>
      <InfoModal open={openModal} onClose={handleCloseModal} message={modalMessage} />
    </>
  );
};

export default KayakCard;