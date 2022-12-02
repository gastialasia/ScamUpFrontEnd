import { Card, Grid, Link, Text } from "@nextui-org/react";
import PrincingCard from "../components/PricingCard";
import { useContext } from 'react';
import AppContext from "../components/AppContext";


function PricingPage() {

    const context = useContext(AppContext);

    return (
        <div div style={{ padding: 15 }}>
            <Grid.Container justify="space-evenly" direction="column" alignContent="center">
          <h2 style={{ textAlign: 'center' }}>Pricing</h2>
            </Grid.Container>
            <Grid.Container justify="center" alignContent="" gap={4} wrap>
            <Grid>
                <PrincingCard planName="Free Plan" pricePerMonth="$0/month" features={{one:"✅   10 searches per month", two:"✅   Individual searches only"}} active="true" />
            </Grid>
            <Grid>
                <PrincingCard planName="Pro Plan" pricePerMonth="$10/month" features={{one:"✅   Unlimited searches per month", two:"✅   Search multiple types of information and get a reputation score"}} />
            </Grid>
            <Grid>
                <PrincingCard planName="Business Plan" pricePerMonth="$50/month" features={{one:"✅   Unlimited searches per month", two:"✅   Search multiple types of information and get a reputation score", three:"✅   Complete access to our API"}} />
            </Grid>
            </Grid.Container>
        </div>
       
    );
}

export default PricingPage;
