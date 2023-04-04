import styles from "../styles/Home.module.css";

import { Link } from 'react-scroll';

import styled from "@emotion/styled";
import {Ingress, MenuItem} from "@/components/typography";

const ListElement = styled.li`
  border-bottom: 1px solid transparent;
  padding: 0 0.5rem 0 0.5rem;
  transition: border-bottom-color 0.3s ;
    :hover{
      border-bottom-color: var(--black);
    }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 2rem 0 2rem 0;
  width: 100%;
  list-style: none;
  justify-content: center;
  gap: 2rem;
  background: transparent;
  
`;

const MenuContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  transition: background-color 0.3s ease-in-out;
  background: transparent;
  color: var(--white);


  :hover li{
    color: var(--black)
  }
  
  :hover {
    color: #cccccc;
    background: var(--white);

  }
  
`;


export function HeaderMenu() {
    return (
        <Menu>
        <ListElement>
            <MenuItem>
                Hjem
            </MenuItem>
        </ListElement>
        <ListElement>
            <Link to="products" smooth={true} duration={500}>
            <MenuItem>
                Duftlys
            </MenuItem>
            </Link>

        </ListElement>
        <ListElement>
            <Link to="products" smooth={true} duration={500}>

            <MenuItem>
                Om lysene
            </MenuItem>
            </Link>

        </ListElement>
        <ListElement>
            <Link to="aboutus" smooth={true} duration={500}>

            <MenuItem>
                Om oss
            </MenuItem>
            </Link>

        </ListElement>
    </Menu>
)
}
export default function Header() {
    return (
        <MenuContainer>
                <a href={"/"} className={styles.headerLogo}>
                    Hector
                </a>
            <HeaderMenu/>
        </MenuContainer>
    );
}

export function TopHeader() {
    return (
        <header className={styles.header}>
            <Ingress>Hector tilbyr hjemmelagde duftlys laget av holdbar vegansk vegetabilisk voks, med et bredt utvalg av behagelige og naturlige dufter.</Ingress>
        </header>)
}
