import React, { useState } from "react";
//import { Box, Grid } from "@material-ui/core";
import "./Product.css";

function Product({ props }) {
    //const images = `${imagen + props.image}`;
    //console.log(images);
    const [contador, setContador] = useState(0);

    const plus = () => setContador(contador + 1);
    const minus = () => setContador(contador - 1);

    if (contador < 0) {
        setContador(0);
    }
    return (
        <div className="productSection">
            <div className="img">
                <img src={props.image} alt={props.image} />
            </div>
            <div className="content">
                <div className="text">
                    <h2>{props.title}</h2>
                    <p className="description">{props.description}</p>
                    <p className="price">{`$ ${props.price}`}</p>
                </div>
                <div className="button">
                    <button className="minus" onClick={minus}>
                        -
                    </button>
                    <button className="number">{contador}</button>
                    <button className="plus" onClick={plus}>
                        +
                    </button>
                    <button className="cart">cart</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
