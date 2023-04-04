import styles from "../../styles/Home.module.css";
import headerStyles from "./Header.module.css"
import { Link } from 'react-scroll';
import {Ingress, MenuItem} from "@/components/typography";

export function HeaderMenu() {
    return (
        <nav className={headerStyles.menu}>
            <li>
                <MenuItem>
                    Hjem
                </MenuItem>
            </li>
            <li>
                <Link to="products" smooth={true} duration={500}>
                    <MenuItem>
                        Duftlys
                    </MenuItem>
                </Link>

            </li>
            <li>
                <Link to="products" smooth={true} duration={500}>

                    <MenuItem>
                        Om lysene
                    </MenuItem>
                </Link>

            </li>
            <li>
                <Link to="aboutus" smooth={true} duration={500}>

                    <MenuItem>
                        Om oss
                    </MenuItem>
                </Link>

            </li>
        </nav>
    )
}
export default function Header() {
    return (
        <div className={headerStyles.container}>
            <a href={"/"} className={styles.headerLogo}>
                Hector
            </a>
            <HeaderMenu/>
        </div>
    );
}

export function TopHeader() {
    return (
        <header className={styles.header}>
            <Ingress>Hector tilbyr hjemmelagde duftlys laget av holdbar vegansk vegetabilisk voks, med et bredt utvalg av behagelige og naturlige dufter.</Ingress>
        </header>)
}