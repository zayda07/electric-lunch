import React from "react";
import ImageHeader from "../../assets/images/hamburguesa_faltante.webp";
import Logo from "../../assets/images/logo.png";
import "./Header.css";
function Header() {
    return (
        <div className="headerSection">
            <div className="imageHeader">
                <img src={ImageHeader} alt={"ImageHeader"} />
            </div>
            <div className="logo">
                <img src={Logo} alt={"Logo"} />
            </div>
            <div className="information">
                <h2 className="storeName">Electric Lunch</h2>
                <p className="direction">
                    Diagonal 146 # 128-02 Local 2-11 Centro Comercial Hato Chico
                </p>
                <span>Abierto</span>
                <p className="attention">12m - 9 pm Miercoles a Domingo</p>
            </div>
        </div>
    );
}

export default Header;
