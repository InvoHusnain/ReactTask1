import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../Components/contact.css';

function Contact (){
    return(
        <div className='contact-contain'>
            <Container>
                <Grid>
                    <Grid className='contact-content' item justifyContent='center' alignItems='center'>
                        <h2>Contact us for a quotes</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <Button className='contact-btn'>Get Now</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Contact;