import { useReducer } from "react";
import { TYPES } from "../../actions/cartAction";
import {
    shoppingInitialState,
    shoppingReducer,
} from "../../reducers/productsList";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./ProductList.css";

const ProductList = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const { products, cart, count } = state;

    //const plus = (id) => dispatch({ type: TYPES.INCREMENT });
    //const minus = (id) => dispatch({ type: TYPES.DECREMENT });
    const addToCart = (id) => {
        //console.log(id);
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };
    const delFromCart = (id, all = false) => {
        //console.log(id, all);
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
        }
    };

    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART });
    };

    return (
        <div>
            <div className="box grid-responsive">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        props={product}
                        delFromCart={delFromCart}
                        addToCart={addToCart}
                        quantity={count}
                    />
                ))}
            </div>
            <article className="box">
                <button onClick={clearCart}>Limpiar Carrito</button>
                {cart.map((item, index) => (
                    <Cart key={index} props={item} delFromCart={delFromCart} />
                ))}
            </article>
        </div>
    );
};

export default ProductList;
