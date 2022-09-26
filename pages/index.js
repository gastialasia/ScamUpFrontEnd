import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from '../styles/Landing.module.css'

function LandingPage() {
	
    const router = useRouter();

    function handleEvent() {
        router.push("/search");
    }

    return (
        <div className={styles.landing}>
            <h1>Welcome to Scam Up!</h1>
            <h2>Your safe place on the Internet</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button variant='contained' onClick={handleEvent}>
                Search for scams
            </Button>
        </div>
    );
}

export default LandingPage;
