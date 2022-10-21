import { Card, Grid, Link, Text } from "@nextui-org/react";

export default function PrincingCard( {planName, pricePerMonth, features, active }) {
    return (
        <div>
        <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
            {planName}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{pricePerMonth}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
        {features.one}
        </Text>
        <Text>
        {features.two}
        </Text>
        <Text>
        {features.three}
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link 
          icon
          color="primary"
          target="_blank"
        >
          Select plan
        </Link>
      </Card.Footer>
    </Card>
        </div>
    );
}