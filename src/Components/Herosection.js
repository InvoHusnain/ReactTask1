import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import '@fontsource/poppins';
import '@fontsource/roboto';
import '../Components/Herosection.css';
import Mask from '../images/Mask.png';
import Vector from '../images/Vector.svg';
import Button from '@mui/material/Button';

function Herosection(){
    return(
        <Container>
            <Grid className='Star-blue' container spacing={2} columns={{xs: 6, sm: 6, md: 12, lg:12}}>
                <Grid item xs={6}>
                <div className='hero-content'>
                    <h1 className='blue'>Star-blue</h1>
                    <h1 className='company'>Company <span className='Offshore'>Offshore</span></h1>
                    <p>Comprehensive development service. </p>
                    <Button className='hero-btn' variant="contained">Download Quotes<span><img src={Vector} alt="arrow"/></span></Button>
                </div>
                </Grid>
                <Grid item xs={6}>
                <div className='hero-image'>
                    <img src={Mask} alt='background'/>
                </div>
                </Grid>
            </Grid>
        </Container>
    )
}


export default Herosection;