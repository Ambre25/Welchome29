import { Avatar, Box, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Blog() {
    const navigate = useNavigate();

    const handleClickPecheAPied27102023 = () => {
        navigate('/Pêche à pied à Carantec 27102023')
    }

    const handleClickForetMacroAlgues06102023 = () => {
        navigate('/Découverte forêt de macro-algues à Roscoff 06102023')
    }

    const handleClickConcertJamesDigger = () => {
        navigate('/Concert James Digger 24112023')
    }

    const handleClickHorairesCallot = () => {
        window.open('https://www.ville-carantec.com/wp-content/uploads/2022/12/11_Novembre-2023.pdf')
    }

    const handleClickGuidePeche = () => {
        window.open('https://www.finistere.gouv.fr/contenu/telechargement/37702/277633/file/Tableau+tailles+2020.pdf')
    }

    const handleClickMorlaixArtsTour = () => {
        window.open('https://www.morlaix-communaute.bzh/layout/set/print/layout/set/print/layout/set/print/layout/set/print/layout/set/print/layout/set/print/layout/set/print/layout/set/print/layout/set/print/layout/set/print/community/showPDF/289895/3124410/version/2/file/MXC-MAT-BROCHURE-A6-2023.pdf')
    }

    const handleClickCarnetVoyage2023 = () => {
        window.open('https://www.baiedemorlaix.bzh/wp-content/uploads/2023/06/carnet-de-voyage-baie-de-morlaix-2023-bd-web.pdf')
    }

    const handleClickCarteTouristique = () => {
        window.open('https://www.baiedemorlaix.bzh/wp-content/uploads/2022/03/carte-touristique-baie-de-morlaix-2022-bd-2.pdf')
    }

    const handleClickAgendaVacances2023 = () => {
        window.open('https://www.baiedemorlaix.bzh/wp-content/uploads/2023/06/agenda-vacances-ete-2023-baie-de-morlaix.pdf')
    }
  return (
    <>
    <Container maxWidth='lg' sx={{ paddingTop: '24px', marginTop: '50px' }}>
        <Typography variant='h4' sx={{ fontWeight: 800, paddingBottom: '24px' }}>
            Évènements
        </Typography>
        <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card 
                    sx={{ 
                        maxWidth: '100%', 
                        borderRadius: '15px', 
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', 
                        height: 500, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between',
                        cursor: 'pointer'
                    }}
                    onClick={handleClickPecheAPied27102023}
                >
                      <CardMedia
                          sx={{ height: 240 }}
                          image="https://i.ibb.co/WxRGnvF/peche-pied-finistere.jpg"
                          title="pêche à pied"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              Pêche à pied à Carantec le Vendredi 27 Octobre
                          </Typography>
                          <Typography variant="body2" color="text.secondary" component='p'>
                            Bottes aux pieds, épuisette à la main et ciré sur le dos, partez à l’assaut des rochers...
                          </Typography>
                      </CardContent>
                      <CardActions sx={{ display: 'flex', margin: '0 10px' }}>
                          <Box sx={{ display: 'flex' }}>
                            <Avatar src='https://i.ibb.co/m5YnYw7/as.png' />
                            <Box sx={{ ml: '16px' }}>
                                <Typography variant='subtitle2' component='p'>
                                    Aymeric S.
                                </Typography>
                                <Typography variant='subtitle2' color='textSecondary' component='p'>
                                    Le 29 Sept, 2023
                                </Typography>
                            </Box>
                          </Box>
                      </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                    maxWidth: '100%', 
                    borderRadius: '15px', 
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', 
                    height: 500, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                    }}
                    onClick={handleClickForetMacroAlgues06102023}
                >
                      <CardMedia
                          sx={{ height: 240 }}
                          image="https://i.ibb.co/fHccXjs/1.jpg"
                          title="Forêt de macro-algues"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              À la découverte des forêts de macro-algues à Roscoff le Vendredi 6 Octobre
                          </Typography>
                          <Typography variant="body2" color="text.secondary" component='p'>
                            Bottes aux pieds, épuisette à la main et ciré sur le dos, partez à l’assaut des rochers...
                          </Typography>
                      </CardContent>
                      <CardActions sx={{ display: 'flex', margin: '0 10px' }}>
                          <Box sx={{ display: 'flex' }}>
                            <Avatar src='https://i.ibb.co/yYdvGpb/jc.png' />
                            <Box sx={{ ml: '16px' }}>
                                <Typography variant='subtitle2' component='p'>
                                    Julien C.
                                </Typography>
                                <Typography variant='subtitle2' color='textSecondary' component='p'>
                                    Le 27 Sept, 2023
                                </Typography>
                            </Box>
                          </Box>
                      </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                    maxWidth: '100%', 
                    borderRadius: '15px', 
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', 
                    height: 500, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                    }}
                    onClick={handleClickConcertJamesDigger}
                >
                      <CardMedia
                          sx={{ height: 240 }}
                          image="https://i.ibb.co/9HdSZbZ/james-digger.jpg"
                          title="Concert de James Digger"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              Concert de James Digger à Morlaix le 24 Novembre
                          </Typography>
                          <Typography variant="body2" color="text.secondary" component='p'>
                            Dans le cadre du Festival Culture Bar-Bars...
                          </Typography>
                      </CardContent>
                      <CardActions sx={{ display: 'flex', margin: '0 10px' }}>
                          <Box sx={{ display: 'flex' }}>
                            <Avatar src='https://i.ibb.co/yYdvGpb/jc.png' />
                            <Box sx={{ ml: '16px' }}>
                                <Typography variant='subtitle2' component='p'>
                                    Julien C.
                                </Typography>
                                <Typography variant='subtitle2' color='textSecondary' component='p'>
                                    Le 25 Sept, 2023
                                </Typography>
                            </Box>
                          </Box>
                      </CardActions>
                </Card>
              </Grid>
        </Grid>
    </Container>
    <Container maxWidth='lg' sx={{ paddingTop: '24px', marginTop: '50px' }}>
    <Typography variant='h4' sx={{ fontWeight: 800, paddingBottom: '24px' }}>
        Infos locales
    </Typography>
    <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card 
                sx={{ 
                    maxWidth: '100%', 
                    borderRadius: '15px', 
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', 
                    height: 500, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                }}
                onClick={handleClickHorairesCallot}
            >
                  <CardMedia
                      sx={{ height: 240 }}
                      image="https://i.ibb.co/8zgH0GG/P4090612-1030x771.jpg"
                      title="horaires de passage île Callot à Carantec"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          Horaires de passage à l'île Callot à Carantec
                      </Typography>
                      <Typography variant="body2" color="text.secondary" component='p'>
                        Téléchargez ici tous les horaires de passage vers l'île Callot pour le mois en cours...
                      </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', margin: '0 10px' }}>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar src='https://i.ibb.co/yYdvGpb/jc.png' />
                        <Box sx={{ ml: '16px' }}>
                            <Typography variant='subtitle2' component='p'>
                                Julien C.
                            </Typography>
                            <Typography variant='subtitle2' color='textSecondary' component='p'>
                                Le 02 Fev, 2023
                            </Typography>
                        </Box>
                      </Box>
                  </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card 
            sx={{ 
                maxWidth: '100%', 
                borderRadius: '15px', 
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', 
                height: 500, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                cursor: 'pointer'
                }}
            onClick={handleClickGuidePeche}
            >
                  <CardMedia
                      sx={{ height: 240 }}
                      image="https://i.ibb.co/4JJfGbf/P28428342-D4865558-G.webp"
                      title="Guide de la pêche à pied"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          Guide de la pêche à pied dans la baie de Morlaix
                      </Typography>
                      <Typography variant="body2" color="text.secondary" component='p'>
                        Téléchargez ici la réglementation pour la pêche à pied, tailles, quantités...
                      </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', margin: '0 10px' }}>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar src='https://i.ibb.co/m5YnYw7/as.png' />
                        <Box sx={{ ml: '16px' }}>
                            <Typography variant='subtitle2' component='p'>
                                Aymeric S.
                            </Typography>
                            <Typography variant='subtitle2' color='textSecondary' component='p'>
                                Le 14 Mars, 2023
                            </Typography>
                        </Box>
                      </Box>
                  </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card 
            sx={{ 
                maxWidth: '100%', 
                borderRadius: '15px', 
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', 
                height: 500, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                cursor: 'pointer'
                }}
                onClick={handleClickMorlaixArtsTour}
            >
                  <CardMedia
                      sx={{ height: 240 }}
                      image="https://i.ibb.co/RQzFP00/petition-img-184449-fr.jpg"
                      title="Morlaix Art tour"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          Morlaix Arts Tour - Graffitis et Street-Art
                      </Typography>
                      <Typography variant="body2" color="text.secondary" component='p'>
                        Visitez Morlaix et découvrez des fresques époustouflantes, suivez notre guide...
                      </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', margin: '0 10px' }}>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar src='https://i.ibb.co/yYdvGpb/jc.png' />
                        <Box sx={{ ml: '16px' }}>
                            <Typography variant='subtitle2' component='p'>
                                Julien C.
                            </Typography>
                            <Typography variant='subtitle2' color='textSecondary' component='p'>
                                Le 17 Juil, 2023
                            </Typography>
                        </Box>
                      </Box>
                  </CardActions>
            </Card>
          </Grid>
    </Grid>
</Container>
<Container maxWidth='lg' sx={{ paddingTop: '24px', marginBottom: '125px', marginTop: '50px' }}>
    <Typography variant='h4' sx={{ fontWeight: 800, paddingBottom: '24px' }}>
        Brochures
    </Typography>
    <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card 
                sx={{ 
                    maxWidth: '100%', 
                    borderRadius: '15px', 
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', 
                    height: 500, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                }}
            onClick={handleClickCarnetVoyage2023}
            >
                  <CardMedia
                      sx={{ height: 240 }}
                      image="https://i.ibb.co/KNxBytV/1686560328712.jpg"
                      title="Carnet de voyage Baie de Morlaix"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          Carnet de voyage Baie de Morlaix 2023
                      </Typography>
                      <Typography variant="body2" color="text.secondary" component='p'>
                        Cliquez pour découvrir tous les trésors de la Baie de Morlaix...
                      </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', margin: '0 10px' }}>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar src='https://i.ibb.co/yYdvGpb/jc.png' />
                        <Box sx={{ ml: '16px' }}>
                            <Typography variant='subtitle2' component='p'>
                                Julien C.
                            </Typography>
                            <Typography variant='subtitle2' color='textSecondary' component='p'>
                                Le 01 Juin, 2023
                            </Typography>
                        </Box>
                      </Box>
                  </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card 
            sx={{ 
                maxWidth: '100%', 
                borderRadius: '15px', 
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', 
                height: 500, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                cursor: 'pointer'
                }}
            onClick={handleClickCarteTouristique}
            >
                  <CardMedia
                      sx={{ height: 240 }}
                      image="https://i.ibb.co/v1f7SDQ/Capture-d-cran-2023-10-11-101252.png"
                      title="Carte touristique de la Baie de Morlaix"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Carte touristique de la Baie de Morlaix
                      </Typography>
                      <Typography variant="body2" color="text.secondary" component='p'>
                        Cliquez pour télécharger la carte touristique afin de vivre de belles expériences en Baie de Morlaix...
                      </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', margin: '0 10px' }}>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar src='https://i.ibb.co/m5YnYw7/as.png' />
                        <Box sx={{ ml: '16px' }}>
                            <Typography variant='subtitle2' component='p'>
                                Aymeric S.
                            </Typography>
                            <Typography variant='subtitle2' color='textSecondary' component='p'>
                                Le 3 Juin, 2023
                            </Typography>
                        </Box>
                      </Box>
                  </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card 
            sx={{ 
                maxWidth: '100%', 
                borderRadius: '15px', 
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', 
                height: 500, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                cursor: 'pointer',
                }}
            onClick={handleClickAgendaVacances2023}
            >
                  <CardMedia
                      sx={{ height: 240 }}
                      image="https://i.ibb.co/sHvS0Pg/agenda.png"
                      title="Agenda de vos vacances"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          L'agenda de vos vacances de l'été 2023
                      </Typography>
                      <Typography variant="body2" color="text.secondary" component='p'>
                        Téléchargez votre compagnon indispensable de la saison estivale à Morlaix
                      </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', margin: '0 10px' }}>
                      <Box sx={{ display: 'flex' }}>
                        <Avatar src='https://i.ibb.co/yYdvGpb/jc.png' />
                        <Box sx={{ ml: '16px' }}>
                            <Typography variant='subtitle2' component='p'>
                                Julien C.
                            </Typography>
                            <Typography variant='subtitle2' color='textSecondary' component='p'>
                                Le 17 Avr, 2023
                            </Typography>
                        </Box>
                      </Box>
                  </CardActions>
            </Card>
          </Grid>
    </Grid>
</Container>
</>
  )
}