import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Button from "@mui/material/Button";
import '../Components/document.css';


function Document(){
    return(
        <Container>
            <div className="doc-contain">
            <Grid>
                <Item className="doc-head">
                    <h2>Document Download-Quotation Contact</h2>
                </Item>
            </Grid>
            <Grid justifyContent="center" alignItems="center" container spacing={3} columns={{ xs: 4, sm: 6, md: 12, lg: 12 }}>
                <Grid item xs={6}>
                <div className='down-card'>
                    <h2>Document</h2>
                    <p>See company introduction / case study /</p>
                    <Button className="down-btn">Download</Button>
                </div>
                </Grid>
                <Grid item xs={6}>
                <div className='quotation-card'>
                    <h2>Quotation</h2>
                    <p>Contact information</p>
                    <Button className="quotation-btn">Download</Button>
                </div>
                </Grid>
            </Grid>
            </div>
        </Container>
    )
}

export default Document;