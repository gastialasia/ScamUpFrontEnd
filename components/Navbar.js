import React from "react";
import Link from "next/link";

import styles from "../styles/Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <h1 className="site-title">Scam Up</h1>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/pricing'>
                        <a>Pricing</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href='/login'>
                        <a>Login</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
