import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import '@fontsource/poppins';
import '../Components/cards.css';

function Cards(){
    return(
        
        <Container>
            <Grid justifyContent="center" alignItems="center" container spacing={3} columns={{ xs: 4, sm: 8, md: 10, lg: 12 }}>
                <Grid item xs={6}>
                <div className='offshore-card'>
                    <h3>What is offshore development?</h3>
                    <p>Offshore development is a method of ordering from an overseas company to develop a system or software. Using this form, customers can not only save on recruitment and development costs, but also quickly find a source of high-quality engineers.</p>
                </div>
                </Grid>
                <Grid item xs={6}>
                <div className='Star-blue-card'>
                    <h3>Star-blue will help you solve your problem!</h3>
                    <p>
                        <li>Reduce development costs. -Adopted during system development</li>
                        <li>️Lack of engineers</li>
                        <li>️️No software development experience</li>
                        <li>️️️I just want to hire an engineer in a short time</li>
                    </p>
                </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cards;