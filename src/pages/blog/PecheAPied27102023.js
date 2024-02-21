import React from 'react'
import SkeletonArticleBlog from '../../components/SkeletonArticleBlog'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
import GradingIcon from '@mui/icons-material/Grading'
import TranslateIcon from '@mui/icons-material/Translate'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function PecheAPied27102023() {
  return (
    <>
      <SkeletonArticleBlog 
        title='Pêche à pied à Carantec' 
        subtitle='Le Vendredi 27 Octobre - de 10h30 à 12h30'
        img_url='https://i.ibb.co/nfVh3hx/Carantec2013-MG-2502-800x450-acf-cropped.webp'
        text={
          <>
            Chaussé de bottes, armé d'une épuisette et revêtu de votre ciré, embarquez pour une aventure rocheuse où vous 
            découvrirez une faune fascinante qui vit selon les mouvements des marées.<br /><br />
            
            Rejoignez-nous à 10h30 au port de Carantec, à l'entrée de la route de Callot.<br />
            Si possible, amenez votre épuisette et votre seau.<br /><br />

            Inscription nécessaire au 02 98 78 45 69 ou à afqp29@gmail.com.
          </>
        }
        icon1={<ConfirmationNumberIcon sx={{ color: 'grey' }} />}
        textIcon1='5€/personne, 10€/famille, 3€/adhérent, 2€/6-12ans'
        icon2={<QueryBuilderIcon sx={{ color: 'grey' }} />}
        textIcon2='Vendredi 27 Octobre 2023 : 10:30 - 12h30'
        icon3={<GradingIcon sx={{ color: 'grey' }} />}
        textIcon3='Réservation avant le jeudi 26 Octobre 2023'
        icon4={<TranslateIcon sx={{ color: 'grey' }} />}
        textIcon4='Français'
        icon5={<PeopleAltIcon sx={{ color: 'grey' }} />}
        textIcon5='Âge : Tout public'
        icon6={<LocationOnIcon sx={{ color: 'grey' }} />}
        textIcon6='Port de Carantec'
      />
    </>
  )
}
