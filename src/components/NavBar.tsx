import { SearchBox } from "./SearchBox"
import { useLocation } from "react-router-dom"

export const NavBar = () => {
    const location = useLocation();

    return (
        <nav>
            {
                location.pathname === "/" &&
                <SearchBox />
            }
        </nav>
    )
}