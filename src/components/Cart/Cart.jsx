import React from "react";
//import { Link } from "react-router-dom";

function Cart({ props, delFromCart }) {
    let { id, title, price, quantity } = props;
    return (
        <div className="cartSection">
            <h2>Su pedido:</h2>
            <h4>{title}</h4>
            <h5>
                ${price} x {quantity} = ${price * quantity}
            </h5>
            <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
            <br />
            <button onClick={() => delFromCart(id, true)}>
                Eliminar Todos
            </button>
            <br />
            <br />
        </div>
    );
}
export default Cart;
