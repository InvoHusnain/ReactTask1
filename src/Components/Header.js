import React from 'react';
import '../Components/header.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import OFFShore from '../images/OFFShore.svg';
import Polygon from '../images/Polygon.svg';
import '@fontsource/poppins';
import {GiHamburgerMenu} from 'react-icons/gi';
import {BrowserRouter as Router,Link} from 'react-router-dom';

function Header(){
    return(
        <Container>
            {/* Main header Div */}
            <div className='header'>
            {/* <Grid container direction="row" justifyContent="flex-start" alignItems="center" xs={6}>
                
            </Grid> */}

            {/* Logo div */}
            <div className='header-logo'>
                <img src={OFFShore} className="" alt="logo" />
            </div>
            {/* Header-List */}
            <div className='header-content'>
                <div className='header-list'>
                <Router className='list-contain'>
                <Link className="list" to="/">Service 
                <span><img src={Polygon} alt="pic"/></span></Link>
                <Link className="list" to="/functional">About us
                <span><img src={Polygon} alt="pic"/></span></Link>
                <Link className="list" to="/services">News
                <span><img src={Polygon} alt="pic"/></span></Link>
                <Link className="list" to="/profile">Event list
                <span><img src={Polygon} alt="pic"/></span></Link>
                </Router>
                </div>
                <div className='header-btn'>
                    <Button className='btn' variant="contained">Get in Touch</Button>
                </div>
            </div>
            
            <div className='hamburger'>
                <a href='#'>
                    <GiHamburgerMenu/>
                </a>
            </div>
        </div>
        </Container>
    )
}

export default Header;