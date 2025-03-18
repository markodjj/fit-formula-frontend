import React from "react";
import { Link } from 'react-router-dom';
import NavMenu from "../components/NavMenu/NavMenu"
import './Footer.scss'
import navListData from "../data/navListData"

const Footer = () => {

    return (
        <div className="footer">
            <div className="ad">
                <h1>Naruci Svoj Plan Ishrane</h1>
                <button>Naruci</button>
            </div>
            
            <div>
                Linkovi
                <ul>
                    <li>Plan Ishrane</li>
                    <li>Tablica Kalorija</li>
                    <li>Artikli</li>
                    <li>Uporedi</li>
                </ul>
                
            </div>
            <div>
                Kontakti
                <ul>
                    <li>fitformula@gmail.com</li>
                    <li>fitformula.stefan</li>
                    <li>fit.formula.stefan</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Footer;