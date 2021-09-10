import React from "react";
import Product from "../Product/Product";
import productsList from "../../productsList";
import "./ProductList.css";

function ProductList() {
    return (
        <div className="box grid-responsive">
            {productsList.map((product) => (
                <Product props={product} key={product.id} />
            ))}
        </div>
    );
}

export default ProductList;
