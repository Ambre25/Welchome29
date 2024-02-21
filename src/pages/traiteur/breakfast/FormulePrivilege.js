import React from 'react'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'
import LoisirCard from '../../../components/LoisirCard'
import Menu from '../../../assets/menu.png'
import Baguette from '../../../assets/baguette.png'
import Tradition from '../../../assets/tradition.png'
import TraditionCereales from '../../../assets/tradition-cereales.png'
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

export default function FormulePrivilege() {

  const [formule, setFormule] = useState(0);
  const [baguette, setBaguette] = useState(0);
  const [tradition, setTradition] = useState(0);
  const [cereales, setCereales] = useState(0);
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
  
      const itemId = `Formuleprivilege-${dateString}-${timeString}`;

      const totalPrice = formule * 14.5;

      const totalQuantityBaguettes = baguette + tradition + cereales;
      const totalQuantityConfitureNutella = confiture + nutella;

      if (formule === 0) {
        setModalMessage("Veuillez sélectionner au moins 1 formule s'il vous plaît");
        setOpenModal(true);
        return;
    }

    if (totalQuantityBaguettes === 0) {
        setModalMessage("Veuillez choisir au moins un type de pain s'il vous plaît");
        setOpenModal(true);
        return;
    }

    if (totalQuantityBaguettes !== formule) {
      setModalMessage("Vous avez le droit à 1/2 baguette OU 1/2 tradition OU 1/2 tradition aux céréales par formule");
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
        type: 'traiteur-plus',
        name: 'Formule Privilège',
        quantity: formule,
        nb_baguette: baguette, 
        nb_tradition: tradition, 
        nb_cereales: cereales, 
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
            productName='Formule Privilège'
            title='FORMULE PRIVILEGE'
            description="La Formule Privilège est votre invitation à un petit-déjeuner de luxe. Sélectionnez votre préférence entre une demi-baguette, 
                        une demi-tradition ou une demi-tradition aux céréales, parfaite avec du Nutella ou de la confiture à la fraise. Votre formule 
                        comprend un croissant et un pain au chocolat frais, ainsi que 100gr de muesli au chocolat pour une touche gourmande. 
                        Deux carrés de beurre demi-sel et 25cl de jus d'orange frais pressé complètent cette offre exclusive, pour un début de journée privilégié." 
            showAddToCart={false}
            showTypo={false}
        />
        <Title text='COMMANDEZ VOS MENUS' />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '25px', flexWrap: 'wrap' }}>
        <LoisirCard text="Nombre de formules" img_url={Menu} width='50px' customComponent='select' value={formule} onChange={setFormule} />
            <LoisirCard text="1/2 Baguette" img_url={Baguette} width='50px' customComponent='select' value={baguette} onChange={setBaguette} />
            <LoisirCard text="1/2 Tradition" img_url={Tradition} width='50px' customComponent='select' value={tradition} onChange={setTradition} />
            <LoisirCard text="1/2 Trad céréales" img_url={TraditionCereales} width='50px' customComponent='select' value={cereales} onChange={setCereales} />
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
