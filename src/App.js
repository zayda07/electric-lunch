import "./App.css";
import ProductList from "./components/ProductsList/ProductList";
import Header from "./components/Layout/Header/Header";
import Categories from "./components/categories/Categories";
//import Footer from "./components/Layout/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Categories />
            <ProductList />
            {/*<Footer />*/}
        </div>
    );
}

export default App;
