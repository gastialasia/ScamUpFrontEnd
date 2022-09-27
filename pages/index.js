import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "../styles/Landing.module.css";

function LandingPage() {
    const router = useRouter();

    function handleEvent() {
        router.push("/search");
    }

    return (
        <div className={styles.landing}>
            <h1>Welcome to Scam Up!</h1>
            <div className={styles.leftBox}>
                <h2>Your safe place on the Internet</h2>
                <p>
                Scams can happen in a myriad of ways- via phishing emails, social media, SMS messages on your mobile phone, fake tech support phone calls, scareware and more. There are also new scam tendencies around cryptocurrencies.
                <br/>
Our main goal is to decrease scam rates all around the world gathering different tools which are currently avaible but are difficult to use. Please contact us for more info.
                </p>
            </div>
            <div className={styles.rightBox}>
                <img src="https://www.cisco.com/c/es_mx/products/security/what-is-it-security/jcr:content/Grid/category_atl_42d8/layout-category-atl/anchor_info_670b.img.jpg/1632852157417.jpg"></img>
            </div>
            <div className={styles.centerBox}>
                <Button variant="contained" onClick={handleEvent} size="large">
                    Search for scams
                </Button>
            </div>
        </div>
    );
}

export default LandingPage;
