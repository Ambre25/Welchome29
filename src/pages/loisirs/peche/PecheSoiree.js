import React from 'react'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import mainBg from '../../../assets/bg-peche-soiree.jpg'
import Title from '../../../components/Title'
import LoisirCard from '../../../components/LoisirCard'
import AdulteIcon from '../../../assets/child.png'
import ChildIcon from '../../../assets/adulte.png'
import DateIcon from '../../../assets/calendar.png'
import { Button } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import TablePecheSoiree from '../../../components/TablePecheSoiree'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../components/CartContext'
import InfoModal from '../../../components/InfoModal'

export default function PecheSoiree() {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [date, setDate] = useState(null);

    const { addToCart } = useContext(CartContext);

    const [openModal, setOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleAddToCart = () => {
        const jsDate = date instanceof Date ? date : new Date(date);
    
        const dateString = jsDate.toISOString().split('T')[0];
    
        const itemId = `Peche-soiree-${dateString}`;

        const totalQuantity = adults + children;

        if (totalQuantity === 0) {
            setModalMessage("Veuillez entrer un nombre de personnes supérieur à 0 s'il vous plaît");
            setOpenModal(true);
            return;
        }

        if (!date) {
            setModalMessage("Veuillez choisir une date s'il vous plaît");
            setOpenModal(true);
            return;
        }

        const totalPrice = adults * 160 + children * 160;
    
        addToCart({
          id: itemId,
          typr: 'peche',
          name: 'Sortie pêche en soirée',
          adults,
          children,
          date_peche: jsDate,
          quantity: totalQuantity,
          totalPrice: totalPrice,
        });
      };

  return (
    <>
        <LoisirsNavBar />
        <img src={mainBg} alt='Île de Batz' style={{ maxWidth: '100%', height: '100%', margin: 0, padding: 0 }} />
        <div style={{ marginTop: '25px' }}>
            <Title text="RÉSERVATION SORTIE PÊCHE EN SOIRÉE" />
        </div>
        <div style={{ marginTop: '25px' }}>
            <TablePecheSoiree />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '25px', flexWrap: 'wrap' }}>
            <LoisirCard text="Nombre d'adultes" img_url={AdulteIcon} width='50px' customComponent='select' value={adults} onChange={setAdults} />
            <LoisirCard text="Nombre d'enfants" img_url={ChildIcon} width='40px' customComponent='select' value={children} onChange={setChildren} />
            <LoisirCard text="Date" img_url={DateIcon} width='40px' customComponent='datepicker' value={date} onChange={setDate} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                  variant='contained'
                  sx={{
                      bgcolor: blueGrey[900],
                      color: 'white',
                      paddingY: '1rem',
                      marginTop: '50px',
                      width: 250,
                      marginBottom: '125px'
                  }}
                  onClick={handleAddToCart}
              >
                  Ajouter au panier
              </Button>
        </div>
        <InfoModal open={openModal} onClose={handleCloseModal} message={modalMessage} />
    </>
  )
}