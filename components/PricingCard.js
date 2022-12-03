import { width } from "@mui/system";
import { Card, Grid, Link, Text, Badge, Button } from "@nextui-org/react";

export default function PrincingCard({ planName, pricePerMonth, features, showButton, rightText, rightTextColor }) {
  return (
    <div>
      <Card isHoverable css={{ p: "$6", height: "300px", width: "400px" }}>
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
          <Grid.Container
            justify="center"
            alignContent="center"
          >
            {showButton ? (<Button>Purchase plan</Button>) : <div></div>}
            <Text color={rightTextColor} size={18} >
              {rightText}
            </Text>
          </Grid.Container>
        </Card.Footer>
      </Card>
    </div>
  );
}