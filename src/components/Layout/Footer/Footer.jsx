import React from "react";
import "./Footer.css";
//import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <div className="footerSection">
            <div>
                <a href="#/cart">
                    Carrito{" "}
                    {props.countCartItems ? (
                        <button className="badge">
                            {props.countCartItems}
                        </button>
                    ) : (
                        ""
                    )}
                </a>
            </div>
            <p>Total:</p>
        </div>
    );
}

export default Footer;
