import styles from "../../styles/Home.module.css";
import headerStyles from "./Header.module.css"
import { Link } from 'react-scroll';
import {Ingress, MenuItem, Title} from "@/components/typography";

export function HeaderMenu() {
    return (
        <nav className={headerStyles.menu}>
            <li>
                <MenuItem>
                    Home
                </MenuItem>
            </li>
            <li>
                <Link to="products" smooth={true} duration={500}>
                    <MenuItem>
                        Products
                    </MenuItem>
                </Link>

            </li>
            <li>
                <Link to="aboutus" smooth={true} duration={500}>
                    <MenuItem>
                        About us
                    </MenuItem>
                </Link>

            </li>
        </nav>
    )
}
export default function Header() {
    return (
        <div className={headerStyles.container}>
            <Title style={styles.headerLogo}>
                the hektor company
            </Title>
            <HeaderMenu/>
        </div>
    );
}

export function TopHeader() {
    return (
        <header className={styles.header}>
            <Ingress>Scented candles made of 100% vegetable wax from rapeseed.</Ingress>
        </header>)
}