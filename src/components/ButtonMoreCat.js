// BOUTTON VOIR PLUS DE PRODUITS

import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonMoreCat = ({ bgCat, link }) => {

    const navigate = useNavigate();

    function handleLinkFdm() {
        navigate(`/${link}`)
    }

    return (
        <div style={{ width: 'fit-content', margin: '0 auto' }}>
            <Button
                variant='contained'
                style={{
                    marginTop: '-25px',
                    background: bgCat,
                    borderRadius: '40px',
                    paddingLeft: '50px',
                    paddingRight: '50px',
                    paddingTop: '15px',
                    paddingBottom: '15px'
                }}
                onClick={() => handleLinkFdm()}
            >
                Voir plus de produits
            </Button>
        </div>
    )
}

export default ButtonMoreCat;