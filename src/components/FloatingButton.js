import { Fab } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";

const FloatingButton = () => {
    const navigate = useNavigate();
    const handleFabClick = () => {
        navigate('/Infos locales')
    }

    return (
        <Fab variant="extended" onClick={handleFabClick} style={styles.fab}>
            <InfoIcon sx={{ mr: 1 }} />
            Infos locales
        </Fab>
    )
}

const styles = {
    fab: {
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        backgroundColor: '#E15D44',
        color: 'white'
    }
}

export default FloatingButton;