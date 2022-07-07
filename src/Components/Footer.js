import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Footerlogo from '../images/FooterLogo.svg';
import '../Components/footer.css';
import Social from '../images/social networks.svg';

function Footer(){
    return(
        <div className="footer">
            <Container>
                <div className="footer-area">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <img src={Footerlogo}/>
                        </div>
                        <div className="footer-para">
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <div>
                        <h3>Services</h3>
                            <ul>
                                <li>Ui/Ux Design</li>
                                <li>FrontEnd Deverlop</li>
                                <li>Wordpress Building</li>
                                <li>Auto bot</li>
                            </ul>
                        </div>

                        <div>
                        <h3>Contact</h3>
                            <ul>
                                <li>99 88 99 66 99</li>
                                <li>ui4free@gmail.com</li>
                            </ul>
                        </div>

                        <div>
                        <h3>Information</h3>
                            <ul>
                                <li>Cookies</li>
                                <li>Team</li>
                                <li>FAQ</li>
                                <li>Sale</li>
                                <li>Affilate</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="footer-copyright">
                <Container>
                    <div className="footer-info">
                        <div>
                            <p>© ui4free.com 2022</p>
                        </div>
                        <div>
                            <img src={Social}/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer;