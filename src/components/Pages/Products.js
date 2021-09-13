import React, { useState } from "react";
import { shoppingInitialState } from "../../reducers/productsList.js";
import ProductList from "../ProductsList/ProductList";
import Categories from "../categories/Categories";

/*const allCategories = [
    "All",
    ...new Set(ProductsList.map((item) => item.category)),
];*/

//console.log(allCategories);

function Products() {
    const [productList, setProductList] = useState(
        shoppingInitialState.products
    );
    //const [categories, setcategories] = useState(allCategories);
    const filter = (filters) => {
        if (filters === "hamburguesas") {
            const filterHamburguer = productList.filter((product) =>
                product.category.includes("Hamburguesas")
            );
            setProductList(filterHamburguer);
        } else if (filters === "perros") {
            const filterPerros = productList.filter((product) =>
                product.category.includes("Perros")
            );
            setProductList(filterPerros);
        } else {
            const filterHamburguer = productList.filter((product) =>
                product.category.includes("Hamburguesas")
            );
            setProductList(filterHamburguer);
        }
    };
    return (
        <div className="Products">
            <Categories filter={filter} />
            <ProductList products={ProductList} />
        </div>
    );
}

export default Products;
