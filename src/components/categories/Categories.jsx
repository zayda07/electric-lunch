import HamburguerCategory from "../assets/images/sencilla.png";
import HotdogCategory from "../assets/images/hotdog_faltante.jpg";
import "./Categories.css";

function Categories({ filter }) {
    return (
        <div className="categoriesSection">
            <h2>Categorías</h2>
            <button
                className="HamburguerCategory"
                onClick={() => filter("hamburguesas")}
            >
                <img src={HamburguerCategory} alt="HamburguerCategory" />
                <p>Hamburguesas</p>
            </button>

            <button className="HotdogCategory" onClick={() => filter("perros")}>
                <img src={HotdogCategory} alt="HotdogCategory" />
                <p>Perros</p>
            </button>
        </div>
    );
}

export default Categories;
