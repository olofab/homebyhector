import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.col}>
                    <h4>Om Hector</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                        risus quis diam mattis pharetra. Quisque suscipit urna id orci
                        aliquam, eu laoreet nibh elementum.{" "}
                    </p>
                </div>
                <div className={styles.col}>
                    <h4>Kontakt</h4>
                    <p>
                        Email: info@hector.com <br />
                        Phone: 123-456-7890 <br />
                        Address: 123 Main Street, Anytown USA <br />
                    </p>
                </div>
                <div className={styles.col}>
                    <h4>Følg oss</h4>
                    <ul className={styles.socialLinks}>
                        <li>
                            <FaInstagram/>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;