import * as React from 'react';
import { AppBar, Box, Dialog, IconButton, Slide, Toolbar, Typography } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TabIcon from '@mui/icons-material/Tab';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import HandshakeIcon from '@mui/icons-material/Handshake';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[800],
    },
    text: {
      primary: '#ffffff', // White text color
    },
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpenCgu = () => {
    setOpen(true);
  };

  const handleCloseCgu = () => {
    setOpen(false);
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/welchome29', '_blank'); // Opens Facebook in a new tab
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/welchome29/', '_blank'); // Opens Instagram in a new tab
  };

  const handlePartnerClick = () => {
    navigate('/Partenaires')
  };

  const handleCartClick = () => {
    navigate('/Panier');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            display: 'flex',
            justifyContent: 'center', // Center icons horizontally
            backgroundColor: theme.palette.primary.main, // Background color
            '& .MuiBottomNavigationAction-label': {
              color: theme.palette.text.primary, // Set text color to white
            },
            height: '75px',
          }}
        >
          <BottomNavigationAction
            label="CGU"
            icon={<TabIcon sx={{ color: '#ffffff' }} />} // Set icon color to white
            onClick={handleClickOpenCgu}
          />
          <Dialog
            fullScreen
            open={open}
            onClose={handleCloseCgu}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleCloseCgu}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  Conditions Générales d'Utilisation
                </Typography>
              </Toolbar>
            </AppBar>
            <div style={{ color: 'black', padding: '20px' }}>
            <Typography id='modal-modal-title' variant='h5' component='h2'>
              Article 1 : Objet
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Les présentes CGU ou Conditions Générales d’Utilisation encadrent juridiquement l’utilisation
              des services du site welchome29 (ci-après dénommé « welchome29.fr »).
              Constituant le contrat entre la société welchome29, l’Utilisateur, l’accès au site doit
              être précédé de l’acceptation de ces CGU. L’accès à cette plateforme signifie l’acceptation des présentes CGU.
            </Typography>
            <Typography id='modal-modal-title' variant='h5' component='h2' sx={{ mt: 2 }}>
              Article 2 : Mentions légales
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              L’édition du site welchome29 est assuré par la société Welchome inscrite au RCS sous le numéro
              451 432 228, dont le siège social est localisé au 7 rue de kergariou, 29600, Morlaix, France Métropolitaine.
              L’hébergeur du site welchome29.fr est la société OVH, sise au 2 rue Kellermann, 59053 Roubaix, France.
            </Typography>
            <Typography id='modal-modal-title' variant='h5' component='h2' sx={{ mt: 2 }}>
              Article 3 : Accès au site
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Le site welchome29 permet d'accéder gratuitement aux services suivants : vente de produits locaux, location de matériel,
              réservation d'excursions dans la région, diverses informations sur les commerces environnants et les activités.
              Le site est accessible gratuitement depuis n’importe où par tout utilisateur disposant d’un accès à Internet.
              Tous les frais nécessaires pour l’accès aux services (matériel informatique, connexion Internet…) sont à la charge de l’utilisateur.
              L’accès aux services dédiés aux membres s’effectue à l’aide d’un identifiant et d’un mot de passe.
              Pour des raisons de maintenance ou autres, l’accès au site peut être interrompu ou suspendu par l’éditeur sans préavis ni justification.
            </Typography>
            <Typography id='modal-modal-title' variant='h5' component='h2' sx={{ mt: 2 }}>
              Article 4 : Collecte des données
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Pour la création du compte de l’Utilisateur, la collecte des informations au moment de l’inscription sur le site
              est nécessaire et obligatoire. Conformément à la loi n°78-17 du 6 janvier relative à l’informatique, aux fichiers
              et aux libertés, la collecte et le traitement d’informations personnelles s’effectuent dans le respect de la vie privée.
              Suivant la loi Informatique et Libertés en date du 6 janvier 1978, articles 39 et 40, l’Utilisateur dispose du droit
              d’accéder, de rectifier, de supprimer et d’opposer ses données personnelles. L’exercice de ce droit s’effectue par
              le formulaire de contact.
            </Typography>
            <Typography id='modal-modal-title' variant='h5' component='h2' sx={{ mt: 2 }}>
              Article 5 : Propriété intellectuelle
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Les marques, logos ainsi que les contenus du site welchome29 (illustrations graphiques, textes…) sont protégés
              par le Code de la propriété intellectuelle et par le droit d’auteur.
              La reproduction et la copie des contenus par l’Utilisateur requièrent une autorisation préalable du site.
              Dans ce cas, toute utilisation à des usages commerciaux ou à des fins publicitaires est proscrite.
            </Typography>
            <Typography id='modal-modal-title' variant='h5' component='h2' sx={{ mt: 2 }}>
              Article 6 : Responsabilité
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Bien que les informations publiées sur le site soient réputées fiables, le site se réserve la faculté
              d’une non-garantie de la fiabilité des sources.
              Les informations diffusées sur le site welchome29 sont présentées à titre purement informatif et sont
              sans valeur contractuelle. En dépit des mises à jour régulières, la responsabilité du site ne peut être
              engagée en cas de modification des dispositions administratives et juridiques apparaissant après la publication.
              Il en est de même pour l’utilisation et l’interprétation des informations communiquées sur la plateforme.
              Le site décline toute responsabilité concernant les éventuels virus pouvant infecter le matériel informatique
              de l’Utilisateur après l’utilisation ou l’accès à ce site.
              Le site ne peut être tenu pour responsable en cas de force majeure ou du fait imprévisible et insurmontable d’un tiers.
              La garantie totale de la sécurité et la confidentialité des données n’est pas assurée par le site. Cependant,
              le site s’engage à mettre en œuvre toutes les méthodes requises pour le faire au mieux.
            </Typography>
            <Typography id='modal-modal-title' variant='h5' component='h2' sx={{ mt: 2 }}>
              Article 7 : Lien hypertextes
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Le site peut être constitué de liens hypertextes. En cliquant sur ces derniers, l’Utilisateur sortira de la plateforme.
              Cette dernière n’a pas de contrôle et ne peut pas être tenue responsable du contenu des pages web relatives à ces liens.
            </Typography>
            <Typography id='modal-modal-title' variant='h5' component='h2' sx={{ mt: 2 }}>
              Article 8 : Cookies
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Lors des visites sur le site, l’installation automatique d’un cookie sur le logiciel de navigation de l’Utilisateur peut survenir.
              Les cookies correspondent à de petits fichiers déposés temporairement sur le disque dur de l’ordinateur de l’Utilisateur.
              Ces cookies sont nécessaires pour assurer l’accessibilité et la navigation sur le site. Ces fichiers ne comportent
              pas d’informations personnelles et ne peuvent pas être utilisés pour l’identification d’une personne.
              L’information présente dans les cookies est utilisée pour améliorer les performances de navigation sur le site welchome29.fr.
              En naviguant sur le site, l’Utilisateur accepte les cookies. Leur désactivation peut s’effectuer via
              les paramètres du logiciel de navigation.
            </Typography>
            <Typography id='modal-modal-title' variant='h5' component='h2' sx={{ mt: 2 }}>
              Article 9 : Publication par l'Utilisateur
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Le site lapetiteperle permet aux membres de publier des commentaires.
              Dans ses publications, le membre est tenu de respecter les règles de la Netiquette ainsi que les règles de droit en vigueur.
              Le site dispose du droit d’exercer une modération à priori sur les publications et peut refuser leur mise en ligne
              sans avoir à fournir de justification.
              Le membre garde l’intégralité de ses droits de propriété intellectuelle. Toutefois, toute publication
              sur le site implique la délégation du droit non exclusif et gratuit à la société éditrice de représenter, reproduire,
              modifier, adapter, distribuer et diffuser la publication n’importe où et sur n’importe quel support pour la durée de la
              propriété intellectuelle. Cela peut se faire directement ou par l’intermédiaire d’un tiers autorisé. Cela concerne notamment
              le droit d’utilisation de la publication sur le web et sur les réseaux de téléphonie mobile.
              À chaque utilisation, l’éditeur s’engage à mentionner le nom du membre à proximité de la publication.
              L’Utilisateur est tenu responsable de tout contenu qu’il met en ligne. L’Utilisateur s’engage à ne pas publier
              de contenus susceptibles de porter atteinte aux intérêts de tierces personnes. Toutes procédures engagées en justice
              par un tiers lésé à l’encontre du site devront être prises en charge par l’Utilisateur.
              La suppression ou la modification par le site du contenu de l’Utilisateur peut s’effectuer à tout moment,
              pour n’importe quelle raison et sans préavis.
            </Typography>
            <Typography id='modal-modal-title' variant='h5' component='h2' sx={{ mt: 2 }}>
              Article 10 : Durée du contrat
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Le présent contrat est valable pour une durée indéterminée. Le début de l’utilisation des services du
              site marque l’application du contrat à l’égard de l’Utilisateur.
            </Typography>
            <Typography id='modal-modal-title' variant='h5' component='h2' sx={{ mt: 2 }}>
              Article 11 : Droit applicable et juridiction compétente
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Le présent contrat est soumis à la législation française. L’absence de résolution à l’amiable des cas de
              litige entre les parties implique le recours aux tribunaux français compétents pour régler le contentieux.
            </Typography>
            </div>
          </Dialog>
          <BottomNavigationAction
            label="Facebook"
            icon={<FacebookIcon sx={{ color: '#ffffff' }} />} // Set icon color to white
            onClick={handleFacebookClick}
          />
          <BottomNavigationAction
            label="Instagram"
            icon={<InstagramIcon sx={{ color: '#ffffff' }} />} // Set icon color to white
            onClick={handleInstagramClick}
          />
          <BottomNavigationAction
            label="Partenaires"
            icon={<HandshakeIcon sx={{ color: '#ffffff' }} />} // Set icon color to white
            onClick={handlePartnerClick}
          />
          <BottomNavigationAction
            label="Panier"
            icon={<ShoppingBagIcon sx={{ color: '#ffffff' }} />} // Set icon color to white
            onClick={handleCartClick}
          />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}
