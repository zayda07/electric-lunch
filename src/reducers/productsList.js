import { TYPES } from "../actions/cartAction";
import HamburguesaMonster from "../components/assets/images/hamburguesaMonster.png";
import DarkNigh from "../components/assets/images/darkNight.png";
import Argentina from "../components/assets/images/argentina.png";
import Tino from "../components/assets/images/tino.png";
import RedHot from "../components/assets/images/redHot.png";
import DobleCarne from "../components/assets/images/hamburguesa_faltante.webp";
import PolloCrunchy from "../components/assets/images/polloCrunchy.png";
import TocinetaCheddar from "../components/assets/images/tocinetaCheddar.png";
import PolloSalteado from "../components/assets/images/polloSalteado.png";
import Golden from "../components/assets/images/golden.png";
import Mexicana from "../components/assets/images/mexicana.png";
import Vegetariana from "../components/assets/images/hamburguesa_faltante.webp";
import Sencilla from "../components/assets/images/sencilla.png";
import PerroOrale from "../components/assets/images/hotdog_faltante.jpg";
import PerroElectric from "../components/assets/images/perroElectric.png";
import PerroTocineta from "../components/assets/images/hotdog_faltante.jpg";
import MiniPepito from "../components/assets/images/miniPepito.png";
import PerroSencillo from "../components/assets/images/hotdog_faltante.jpg";

export const shoppingInitialState = {
    products: [
        {
            id: 1,
            image: HamburguesaMonster,
            category: "Hamburguesas",
            title: "Hamburguesa monster",
            description:
                "Pan negro, 2 carnes de res de 150 gr, 1 milanesa de pollo, aro de cebolla tempura, 2 tocineta, queso, alioli, tomate, papa chip, salsa cheddar",
            price: 22000,
        },
        {
            id: 2,
            image: DarkNigh,
            category: "Hamburguesas",
            title: "Dark night",
            description:
                "Pan negro, milanesa de pollo, carne 150 gr, aros de cebolla tempura, queso, alioli, tomate, papa chip",
            price: 16000,
        },
        {
            id: 3,
            image: Argentina,
            category: "Hamburguesas",
            title: "Argentina",
            description:
                "Pan verde, chorizo argentino, tocineta, carne 150gr, cebolla grille, queso, alioli, tomate, papa chip",
            price: 15000,
        },
        {
            id: 4,
            image: Tino,
            category: "Hamburguesas",
            title: "Tino",
            description:
                "Pan negro, aborrajado tuleño, carne 150 gr, chorizo ya tu sabes, salsa BBQ, queso del parma, queso, alioli, papa chip",
            price: 15000,
        },
        {
            id: 5,
            image: RedHot,
            category: "Hamburguesas",
            title: "Red Hot",
            description:
                "Pan rojo, platano maduro, tocineta, jalapeños, queso, cebolla grille, carne 150 gr, alioli, tomate, papa chip",
            price: 12000,
        },
        {
            id: 6,
            image: DobleCarne,
            category: "Hamburguesas",
            title: "Doble carne",
            description:
                "Pan brioche, 2 carnes 150 gr, queso, cebolla grille alioli, tomate, papa chip",
            price: 14000,
        },
        {
            id: 7,
            image: PolloCrunchy,
            category: "Hamburguesas",
            title: "Pollo Crunchy",
            description:
                "Pan brioche, milanesa de pollo, pollo desmechado, queso, cebolla grille alioli, tomate, papa chip",
            price: 12000,
        },
        {
            id: 8,
            image: TocinetaCheddar,
            category: "Hamburguesas",
            title: "Tocineta cheddar",
            description:
                "Pan brioche, tocineta, salsa de cheddar,  carne 150 gr, queso, cebolla grille alioli, tomate, papa chip",
            price: 11000,
        },
        {
            id: 9,
            image: PolloSalteado,
            category: "Hamburguesas",
            title: "Pollo salteado",
            description:
                "Pan brioche, carne 150 gr, queso, pollo desmechado, cebolla grille alioli, tomate, papa chip",
            price: 11000,
        },
        {
            id: 10,
            image: Golden,
            category: "Hamburguesas",
            title: "Golden",
            description:
                "Pan brioche, carne 150 gr, rodaja piña, golden asada, queso, cebolla grille alioli, tomate, papa chip",
            price: 11000,
        },
        {
            id: 11,
            image: Mexicana,
            category: "Hamburguesas",
            title: "Mexicana",
            description:
                "Pan brioche, carne 150 gr, guacamole, jalapeños, queso, cebolla grille alioli, tomate, papa chip",
            price: 11000,
        },
        {
            id: 12,
            image: Vegetariana,
            category: "Hamburguesas",
            title: "Vegetariana",
            description:
                "Pan verde, piña asada, champiñones salteados, queso, cebolla grille alioli, tomate, papa chip",
            price: 11000,
        },
        {
            id: 13,
            image: Sencilla,
            category: "Hamburguesas",
            title: "Sencilla",
            description:
                "Pan verde, piña asada, champiñones salteados, queso, cebolla grille alioli, tomate, papa chip",
            price: 10000,
        },

        {
            id: 14,
            image: PerroOrale,
            category: "Perros",
            title: "Perro orale",
            description:
                "Pan brioche, guacamole, nachos, tocineta en cuadritos, salchicha americana, queso fundido, papita chip, papas rusticas",
            price: 13000,
        },
        {
            id: 15,
            image: PerroElectric,
            category: "Perros",
            title: "Perro electric",
            description:
                "Pan brioche, pollo, champiñones, tocineta, salsa cheddar, salchicha americana, queso fundido, papita chip",
            price: 9000,
        },
        {
            id: 16,
            image: PerroTocineta,
            category: "Perros",
            title: "Perro tocineta",
            description:
                "Pan brioche, tocineta, salsa cheddar, salchicha americana, queso fundido, papita chip",
            price: 8000,
        },
        {
            id: 17,
            image: MiniPepito,
            category: "Perros",
            title: "Mini pepito",
            description:
                "Pan brioche, pollo, carne, chorizo, salsa cheddar, queso fundido, papita chip",
            price: 8000,
        },
        {
            id: 18,
            image: PerroSencillo,
            category: "Perros",
            title: "Perro sencillo",
            description:
                "Pan brioche, salchicha americana, queso fundido, papita chip",
            price: 6000,
        },
    ],

    cart: [],
    count: [],
};

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.COUNT: {
            let newCount = state.count;
            return newCount;
        }
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(
                (product) => product.id === action.payload
            );
            //console.log(newItem);

            let itemInCart = state.cart.find((item) => item.id === newItem.id);

            return itemInCart
                ? {
                      ...state,
                      cart: state.cart.map((item) =>
                          item.id === newItem.id
                              ? { ...item, quantity: item.quantity + 1 }
                              : item
                      ),
                  }
                : {
                      ...state,
                      cart: [...state.cart, { ...newItem, quantity: 1 }],
                  };
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find(
                (item) => item.id === action.payload
            );

            return itemToDelete.quantity > 1
                ? {
                      ...state,
                      cart: state.cart.map((item) =>
                          item.id === action.payload
                              ? { ...item, quantity: item.quantity - 1 }
                              : item
                      ),
                  }
                : {
                      ...state,
                      cart: state.cart.filter(
                          (item) => item.id !== action.payload
                      ),
                  };
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case TYPES.CLEAR_CART:
            return shoppingInitialState;
        default:
            return state;
    }
}
