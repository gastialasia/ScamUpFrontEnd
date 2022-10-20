import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Landing.module.css";
import { Grid, Card, Text } from "@nextui-org/react";
import { Image } from '@nextui-org/react'
import { Spacer } from '@nextui-org/react';

function LandingPage() {

    const router = useRouter();

    function handleEvent() {
        router.push("/search");
    }

    return (
        <div className={styles.landing}>
            
            <Grid.Container justify="center" direction="column" alignContent="center">
                <h2>Welcome to Scam Up!</h2>
                <h3>Your safe place on the Internet</h3>
            </Grid.Container>
            
            <Grid.Container gap={2} justify="space-around">
                <Spacer />
                <Grid xs={4}>
                    <p>
                        Scams can happen in a myriad of ways- via phishing emails,
                        social media, SMS messages on your mobile phone, fake tech
                        support phone calls, scareware and more. There are also new
                        scam tendencies around cryptocurrencies.
                        <br />
                        Our main goal is to decrease scam rates all around the world
                        gathering different tools which are currently available but difficult to use.
                    </p>
                 </Grid>
                 <Grid xs={4}>
                    <Image src="/assets/scam-img.png"></Image>
                 </Grid>
                 <Spacer />
            </Grid.Container>
            
            <div className={styles.centerBox}>
                <Button onClick={handleEvent} size="lg">Search for scams</Button>
            </div>
        </div>
    );
}

export default LandingPage;
