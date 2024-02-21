import React from 'react'
import SkeletonArticleBlog from '../../components/SkeletonArticleBlog'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
import GradingIcon from '@mui/icons-material/Grading'
import TranslateIcon from '@mui/icons-material/Translate'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function ForetMacroAlgues06102023() {
  return (
    <>
      <SkeletonArticleBlog 
        title='À la découverte des forêts de macro-algues dans le port de Roscoff' 
        subtitle='Le Vendredi 6 Octobre - de 9h15 à 16h30'
        img_url='https://i.ibb.co/fHccXjs/1.jpg'
        text={
          <>
            Le CNRS invite le grand public à explorer ses installations, y compris ses laboratoires, observatoires et autres 
            centres de recherche répartis en France métropolitaine. Grâce à ces "Visites insolites", plus de 1200 curieux auront 
            l'opportunité de s'immerger dans l'univers de la recherche scientifique et de s'entretenir directement avec des 
            experts du domaine.<br /><br /><br /><br />

            Si vous êtes intéressé, inscrivez-vous entre le 30 août et le 20 septembre 2023. Le processus de sélection comprend 
            la réponse à trois questions scientifiques. Les heureux élus, choisis au hasard parmi les réponses correctes, intégreront 
            des groupes d'au maximum dix personnes.<br /><br />

            La Station biologique de Roscoff, qui relève du CNRS et de la Sorbonne Université, est un établissement dédié à la 
            recherche et à la formation en biologie marine et écologie.<br /><br />

            Découvrez une richesse biologique insoupçonnée sous les pontons flottants !<br /><br />

            Lors de cette aventure, des experts en écologie marine de la Station biologique de Roscoff vous guideront. Après une 
            introduction aux méthodologies et aux objectifs de leurs études sur la diversité biologique sous-marine, vous vous rendrez 
            au port de plaisance de Roscoff pour réaliser des échantillonnages.<br /><br />

            À la pause déjeuner, vous serez conviés au restaurant "Le Gulf Stream" de la station, où vous pourrez échanger avec les 
            chercheurs. Ensuite, au labo, vous analyserez de près vos échantillons pour déterminer les différentes espèces qui peuplent 
            ces milieux et saisir l'importance de préserver et restaurer ces écosystèmes riches en biodiversité.<br /><br />

            <i><strong>Inscriptions terminées pour cet évènement.</strong></i>
          </>
        }
        icon1={<ConfirmationNumberIcon sx={{ color: 'grey' }} />}
        textIcon1='Gratuit'
        icon2={<QueryBuilderIcon sx={{ color: 'grey' }} />}
        textIcon2='Vendredi 6 Octobre 2023 : 9:15 - 16h30'
        icon3={<GradingIcon sx={{ color: 'grey' }} />}
        textIcon3='Réservation avant le jeudi 5 Octobre 2023'
        icon4={<TranslateIcon sx={{ color: 'grey' }} />}
        textIcon4='Français'
        icon5={<PeopleAltIcon sx={{ color: 'grey' }} />}
        textIcon5='Âge : Tout public'
        icon6={<LocationOnIcon sx={{ color: 'grey' }} />}
        textIcon6='Port de Roscoff'
      />
    </>
  )
}
