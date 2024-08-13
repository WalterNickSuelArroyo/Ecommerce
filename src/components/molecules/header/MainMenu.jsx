import { Link } from "react-router-dom"

export const MainMenu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="productos">Productos</Link>
                </li>
            </ul>
        </nav>
    )
}
