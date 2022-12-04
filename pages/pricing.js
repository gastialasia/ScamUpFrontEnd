import { Card, Grid, Link, Text, Col, Row } from "@nextui-org/react";
import PrincingCard from "../components/PricingCard";
import { useContext } from 'react';
import AppContext from "../components/AppContext";


function PricingPage() {

    const context = useContext(AppContext);

    return (
        <div div style={{ padding: 12 }}>
            <Grid.Container justify="center" direction="column" alignContent="center">
                <h2 style={{ textAlign: 'center' }}>Pricing</h2>
                <p>This are the available plans</p>
            </Grid.Container>
            <div style={{ padding: 15 }}>
                <Grid.Container justify="center" gap={2} fluid>
                    <Grid xs={12} sm={6} md={4} lg={3}>
                        <PrincingCard planName="Free Plan" pricePerMonth="$0/month" features={{one:"✅   10 searches per month", two:"✅   Individual searches only"}} rightText="Current plan" rightTextColor="primary" />
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={3}>
                        <PrincingCard planName="Pro Plan" pricePerMonth="$10/month" features={{one:"✅   Unlimited searches per month", two:"✅   Search multiple types of information and get a reputation score"}} showButton = {true} />
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={3}>
                        <PrincingCard planName="Business Plan" pricePerMonth="$50/month" features={{one:"✅   Unlimited searches per month", two:"✅   Search multiple types of information and get a reputation score", three:"✅   Complete access to our API"}} rightText="Coming soon" rightTextColor="grey" />
                    </Grid>
                </Grid.Container>
            </div>
        </div>
    );
}

export default PricingPage;
