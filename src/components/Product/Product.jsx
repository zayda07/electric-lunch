import React, { useState } from "react";
//import { Box, Grid } from "@material-ui/core";
import "./Product.css";

function Product({ props, addToCart, quantity }) {
    //const images = `${imagen + props.image}`;
    //console.log(images);
    const [count, setCount] = useState(0);

    const plus = () => setCount(count + 1);
    const minus = () => setCount(count - 1);

    if (count < 0) {
        setCount(0);
    }

    return (
        <div className="productSection">
            <div className="img">
                <img src={props.image} alt={props.title} />
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
                    <button className="number">{(quantity = [count])}</button>
                    <button className="plus" onClick={plus}>
                        +
                    </button>
                    <button
                        className="cart"
                        onClick={() => addToCart(props.id)}
                    >
                        cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
