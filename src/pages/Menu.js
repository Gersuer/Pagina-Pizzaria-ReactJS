import { products } from "../data/Products"
import '../styles/Menu.css'
import { Link } from "react-router-dom"
const Menu = () => {
    return (
        <div className="menu">
            {products.map((item, key) => (
                <Link  key={key}>
                    <div className="itemContainer">
                        <img className="pizzaImg" src={item.imagem} alt="Sabor" />
                        <p>{item.sabor}</p>
                        <p>{item.preco}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Menu