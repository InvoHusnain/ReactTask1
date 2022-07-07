import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import '../Components/development.css';

function Development(){
    return(
        <div className='dev'>
            <Container>
                <Grid container columns={{xs: 6, sm: 6, md: 12}}>
                    <Grid item xs={6}>
                        <div className='dev-content'>
                            <h1><span className='star-dev'>Star-blue offers offshore services</span> <br/> in many development areas</h1>
                            <p>As an important partner of our customers, we support everything from design to development, operation, and maintenance of various systems.</p>
                        </div>
                    </Grid>
                    <Grid item xs={6} columnGap={5}>
                        <div className='dev-cards'>
                        <div className='system-blockchain'>
                            <div className='system'>
                                <h2>System</h2>
                            </div>
                            <div className='blockchain'>
                                <h2>Blockchain</h2>
                            </div>
                        </div>
                        <div className='app-ai'>
                            <div className='app'>
                                <h2>Application</h2>
                            </div>
                            <div className='ai'>
                                <h2>AI</h2>
                            </div>
                        </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Development;