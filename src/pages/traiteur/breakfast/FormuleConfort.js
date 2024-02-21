import React from 'react'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'
import LoisirCard from '../../../components/LoisirCard'
import Menu from '../../../assets/menu.png'
import Croissant from '../../../assets/croissant.png'
import PainChocolat from '../../../assets/pain-chocolat.png'
import Confiture from '../../../assets/confiture.png'
import Nutella from '../../../assets/pot-de-confiture.png'
import Title from '../../../components/Title'
import DateIcon from '../../../assets/calendar.png'
import HourIcon from '../../../assets/hour.png'
import { Button } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../components/CartContext'
import dayjs from 'dayjs'
import { Timestamp } from 'firebase/firestore'
import InfoModal from '../../../components/InfoModal'

export default function FormuleConfort() {

  const [formule, setFormule] = useState(0);
  const [croissant, setCroissant] = useState(0);
  const [painChoc, setPainChoc] = useState(0);
  const [confiture, setConfiture] = useState(0);
  const [nutella, setNutella] = useState(0);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const { addToCart } = useContext(CartContext);

  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const handleCloseModal = () => {
    setOpenModal(false);
  }

  const handleAddToCart = () => {
      const jsDate = date instanceof Date ? date : new Date(date);
      const jsTime = time instanceof Date ? time : new Date(time);
  
      const dateString = dayjs(jsDate).format('YYYY-MM-DDTHH:mm:ss');
      const timeString = jsTime.toTimeString().split(' ')[0];
  
      const itemId = `Formuleconfort-${dateString}-${timeString}`;

      const totalPrice = formule * 9.5;

      const totalQuantityCroissantPainChoc = croissant + painChoc;
      const totalQuantityConfitureNutella = confiture + nutella;

      if (formule === 0) {
        setModalMessage("Veuillez sélectionner au moins 1 formule s'il vous plaît");
        setOpenModal(true);
        return;
    }

    if (totalQuantityCroissantPainChoc === 0) {
        setModalMessage("Veuillez choisir au moins un croissant ou un pain au chocolat s'il vous plaît");
        setOpenModal(true);
        return;
    }

    if (totalQuantityCroissantPainChoc !== formule) {
      setModalMessage("Vous avez le droit à 1 croissant OU 1 pain chocolat par formule");
      setOpenModal(true);
      return;
    }

    if (totalQuantityConfitureNutella === 0) {
      setModalMessage("Veuillez choisir au moins une portion de confiture ou de nutella s'il vous plaît");
      setOpenModal(true);
      return;
    }

    if (totalQuantityConfitureNutella !== formule) {
      setModalMessage("Vous avez le droit à 1 portion de confiture OU 1 portion de nutella par formule");
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
  
      addToCart({
        id: itemId,
        type: 'traiteur',
        name: 'Formule Confort',
        quantity: formule,
        nb_croissant: croissant, 
        nb_pain_choc: painChoc, 
        nb_confiture: confiture,
        nb_nutella: nutella,
        date_traiteur: Timestamp.fromDate(jsDate),
        heure_traiteur: Timestamp.fromDate(jsTime),
        totalPrice: totalPrice,
      });
  };

  return (
    <>
        <BannerAnimate tween1="LIVRAISON OFFERTE À PARTIR DE 2 FORMULES COMMANDÉES" tween2='DÉCOUVREZ NOS PRODUITS LOCAUX' />
        <BodyPage>
        <ProductDetails 
            productName='Formule Confort'
            title='FORMULE CONFORT'
            description="Commencez votre journée en douceur avec notre Formule Confort Petit-Déjeuner. Cette formule comprend une demi-baguette croustillante, 
                        à savourer avec du Nutella ou de la confiture, accompagnée d'un croissant moelleux ou d'un pain au chocolat délicieux. Deux carrés de beurre demi-sel 
                        bretons ajouteront une saveur authentique. Pour un éveil revigorant, dégustez vos 25cl de jus d'orange frais pressé. Livré directement à votre porte, 
                        notre Formule Confort rend votre petit-déjeuner aussi facile qu'exquis." 
            showAddToCart={false}
            showTypo={false}
        />
        <Title text='COMMANDEZ VOS MENUS' />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '25px', flexWrap: 'wrap' }}>
            <LoisirCard text="Nombre de formules" img_url={Menu} width='50px' customComponent='select' value={formule} onChange={setFormule} />
            <LoisirCard text="Croissants" img_url={Croissant} width='50px' customComponent='select' value={croissant} onChange={setCroissant} />
            <LoisirCard text="Pains au chocolat" img_url={PainChocolat} width='50px' customComponent='select' value={painChoc} onChange={setPainChoc} />
            <LoisirCard text="Confiture" img_url={Confiture} width='50px' customComponent='select' value={confiture} onChange={setConfiture} />
            <LoisirCard text="Nutella" img_url={Nutella} width='50px' customComponent='select' value={nutella} onChange={setNutella} />
            <LoisirCard text="Date" img_url={DateIcon} width='40px' customComponent='datepicker' value={date} onChange={setDate} />
            <LoisirCard text="Heure" img_url={HourIcon} width='40px' customComponent='timepicker' value={time} onChange={setTime} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant='contained'
            sx={{
              bgcolor: blueGrey[900],
              color: 'white',
              paddingY: '1rem',
              marginTop: '25px',
              width: 250,
              marginBottom: '25px'
            }}
            onClick={handleAddToCart}
          >
            Ajouter au panier
          </Button>
        </div>
      </BodyPage>
      <InfoModal open={openModal} onClose={handleCloseModal} message={modalMessage} />
    </>
  )
}
