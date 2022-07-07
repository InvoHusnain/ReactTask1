import { useState } from "react";
import "../Components/Navbar.css";
import Polygon from '../images/Polygon.svg';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Logo from '../images/OFFShore.svg';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <Container>
        <nav className="navigation">
      <a href="/" className="brand-name">
        <img src={Logo}/>
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 30"
          fill="white"
        >
          <path
            fillRule=""
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul className='main-list-div'>
          <li>
            <a className= 'list' href="#">Service 
                <span><img src={Polygon} alt="pic"/></span></a>
          </li>
          <li>
            <a className= 'list' href="#">About us
                <span><img src={Polygon} alt="pic"/></span></a>
          </li>
          <li>
            <a className= 'list' href="#">News
                <span><img src={Polygon} alt="pic"/></span></a>
          </li>
          <li>
            <a className= 'list' href="#">Event list
                <span><img src={Polygon} alt="pic"/></span></a>
          </li>
          <a href="#">
                <button className="btn">Get in touch</button>
          </a>
        </ul>
      </div>
    </nav>
    </Container>
  );
}
