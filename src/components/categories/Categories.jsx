import HamburguerCategory from "../assets/images/sencilla.png";
import HotdogCategory from "../assets/images/hotdog_faltante.jpg";
import "./Categories.css";
function Header() {
    return (
        <div className="categoriesSection">
            <h2>Categorías</h2>
            <div className="HamburguerCategory">
                <img src={HamburguerCategory} alt="HamburguerCategory" />
                <p>Hamburguesas</p>
            </div>
            <div className="HotdogCategory">
                <img src={HotdogCategory} alt="HotdogCategory" />
                <p>Perros</p>
            </div>
        </div>
    );
}

export default Header;
