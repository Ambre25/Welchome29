import React from 'react'
import SkeletonArticleBlog from '../../components/SkeletonArticleBlog'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function ConcertJamesDigger() {
  return (
    <>
      <SkeletonArticleBlog 
        title='Concert de James Digger à Morlaix' 
        subtitle='Le Vendredi soir 24 Novembre - Bar le Ty Coz Morlaix'
        img_url='https://i.ibb.co/9HdSZbZ/james-digger.jpg'
        text={
          <>
            James Digger, un Beatmaker talentueux, est reconnu pour ses collaborations avec des artistes de renom, tant 
            français qu'américains, tels qu'Oxmo Puccino, Assassin, Passi, Masta Ace et Souffrance, pour n'en nommer 
            que quelques-uns. Depuis 2020, il a lancé deux vinyles intitulés BADABOOMBAP 1 et 2. 
            Malheureusement pour les amateurs de vinyles, ces deux éditions sont épuisées, bien qu'elles soient toujours 
            disponibles en streaming.<br /><br />

            Originaire de Bretagne, James Digger s'est passionné pour le rap lors d'un voyage à New York au début des années 
            2000. Membre de plusieurs groupes, il a également travaillé sur ses propres beats. En 2009, il a sorti son premier 
            album "BabyTraxx is James Digger", collaborant avec 25 artistes américains, et atteignant plus de 50 000 ventes en ligne.<br /><br />

            Avant 2020, James a officié comme compositeur et arrangeur pour divers artistes tels que Dooz Kawa et l'uZine. C'est en 
            2020 qu'il a choisi de célébrer le rap "Boom Bap" en lançant son vinyle Badaboombap, une édition limitée qui s'est vendue 
            en seulement trois mois. Le concept de Badaboombap est de mélanger des morceaux en anglais et en français, faisant appel 
            à des MC's renommés ou émergents. En 2022, il a récidivé avec Badaboombap Vol.2 (Modulor Records), épuisant 500 exemplaires 
            en à peine 4 mois.<br /><br />

            Avec Spotify, James a amassé des centaines de milliers d'écoutes. Récemment, il est revenu à ses premiers amours en se 
            remettant aux platines, offrant des sets DJ 100% vinyle. Sans ordinateurs ni playlists prédéfinies, il offre une 
            expérience de mixage pure et authentique.
          </>
        }
        icon1={<ConfirmationNumberIcon sx={{ color: 'grey' }} />}
        textIcon1='Gratuit'
        icon2={<QueryBuilderIcon sx={{ color: 'grey' }} />}
        textIcon2='Vendredi 24 Novembre 2023 : soir'
        icon3={<PeopleAltIcon sx={{ color: 'grey' }} />}
        textIcon3='Âge : Tout public'
        icon4={<LocationOnIcon sx={{ color: 'grey' }} />}
        textIcon4='Bar le Ty Coz - Morlaix'
      />
    </>
  )
}
