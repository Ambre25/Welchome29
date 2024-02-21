import React from 'react'
import WavesIcon from '@mui/icons-material/Waves'
import LocalBarIcon from '@mui/icons-material/LocalBar'
import WineBarIcon from '@mui/icons-material/WineBar'
import BakeryDiningIcon from '@mui/icons-material/BakeryDining'
import GrassIcon from '@mui/icons-material/Grass'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'
import KayakingIcon from '@mui/icons-material/Kayaking'
import PhishingIcon from '@mui/icons-material/Phishing'
import HikingIcon from '@mui/icons-material/Hiking'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import TableBarIcon from '@mui/icons-material/TableBar'
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'

export const handleCatIcon = (category) => {
    switch (category) {
        case 'fdm':
            return <WavesIcon />;
        case 'apero':
            return <LocalBarIcon />;
        case 'vins':
            return <WineBarIcon />;
        case 'ptitdej':
            return <BakeryDiningIcon />;
        case 'fel':
            return <GrassIcon />;
        case 'velo':
            return <DirectionsBikeIcon />;
        case 'sportnautique':
            return <KayakingIcon />;
        case 'peche':
            return <PhishingIcon />;
        case 'visite':
            return <HikingIcon />;
        case 'bienetre':
            return <SelfImprovementIcon />;
        case 'address':
            return <TableBarIcon />;
        case 'breakfast':
            return <FreeBreakfastIcon />;
        case 'takeaway':
            return <RestaurantMenuIcon />;
        default:
            return null;
    }
};
