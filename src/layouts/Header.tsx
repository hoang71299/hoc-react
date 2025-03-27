import { Link } from "react-router";
const Header = () => {
    return (
        <div>
            <ul>
            <Link to={'/'}>Home </Link>

                <li><a href="">About</a></li>
                <Link to={'/product'}>Product </Link>
            </ul>
        </div>
    );
};
export default Header;