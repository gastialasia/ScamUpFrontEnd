import { Card, Grid, Link, Text, Col, Row } from "@nextui-org/react";
import PrincingCard from "../components/PricingCard";
import { useContext } from 'react';
import AppContext from "../components/AppContext";


function PricingPage() {

    const context = useContext(AppContext);

    return (
        <div div style={{ padding: 15 }}>
            <Col>
                <Text h2>Pricing</Text>
                <Grid.Container justify="center" gap={2} fluid>
                    <Grid xs={12} sm={6} md={4} lg={4}>
                        <PrincingCard planName="Free Plan" pricePerMonth="$0/month" features={{one:"✅   10 searches per month", two:"✅   Individual searches only"}} rightText="Current plan" rightTextColor="primary" />
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={4}>
                        <PrincingCard planName="Pro Plan" pricePerMonth="$10/month" features={{one:"✅   Unlimited searches per month", two:"✅   Search multiple types of information and get a reputation score"}} showButton = {true} />
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={4}>
                        <PrincingCard planName="Business Plan" pricePerMonth="$50/month" features={{one:"✅   Unlimited searches per month", two:"✅   Search multiple types of information and get a reputation score", three:"✅   Complete access to our API"}} rightText="Coming soon" rightTextColor="grey" />
                    </Grid>
                </Grid.Container>
            </Col>
        </div>
    );
}

export default PricingPage;
