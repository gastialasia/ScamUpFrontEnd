import { Card, Grid, Link, Text, Col, Row } from "@nextui-org/react";
import PrincingCard from "../components/PricingCard";
import { useContext } from 'react';
import AppContext from "../components/AppContext";
import * as React from "react"
import { useEffect } from "react";
import { Api } from "../api/api";


function PricingPage() {

    const [paymentLink, setPaymentLink] = React.useState("");
    const [firstRequest, setFirstRequest] = React.useState(true);

    const context = useContext(AppContext);

    async function getPaymentLink() {
        const res = await Api.getPaymentLink()
        setPaymentLink(res.init_point)
      }
    
      useEffect(() => {
        if (context.tokenContext) {
            console.log("entro");
            getPaymentLink()
        }
      },[context.tokenContext]);

    return (
        <div div style={{ padding: 12 }}>
            <Grid.Container justify="center" direction="column" alignContent="center">
                <h2 style={{ textAlign: 'center' }}>Pricing</h2>
                <p>This are the available plans</p>
            </Grid.Container>
            <div style={{ padding: 15 }}>
                <Grid.Container justify="center" gap={2} fluid>
                    <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
                        <PrincingCard
                            planName="Free Plan"
                            pricePerMonth="$0/month"
                            features={{ one: "✅   10 searches per month", two: "✅   Can only access to indivual searches, our custom score is not free :)" }}
                            rightText="Current plan"
                            rightTextColor="primary"
                            isCurrent={context.roleContext === 0 && context.tokenContext}
                            comingSoon={false}
                            hasButton={context.roleContext !== 0 && context.tokenContext}
                            buttonText="Restore plan" />
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
                        <PrincingCard
                            planName="Premium Plan"
                            pricePerMonth="$10/month"
                            features={{
                                one: "✅   Unlimited searches per month",
                                two: "✅   Search multiple types of information and get a reputation score"
                            }}
                            isCurrent={context.roleContext === 1 && context.tokenContext}
                            comingSoon={false}
                            hasButton={context.roleContext !== 1 && context.tokenContext}
                            buttonText="Purchase plan" 
                            link = {paymentLink}
                            />
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
                        <PrincingCard
                            planName="Business Plan"
                            pricePerMonth="$50/month"
                            features={{
                                one: "✅   Unlimited searches per month",
                                two: "✅   Search multiple types of information and get a reputation score",
                                three: "✅   Complete access to our API"
                            }}
                            isCurrent={false}
                            comingSoon={true}
                            hasButton={false} />
                    </Grid>
                </Grid.Container>
            </div>
        </div>
    );
}

export default PricingPage;
