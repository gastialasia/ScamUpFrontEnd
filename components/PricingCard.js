import { width } from "@mui/system";
import { Card, Grid, Link, Text, Badge, Button } from "@nextui-org/react";
import { Api } from "../api/api";
import * as React from "react";
import { useRouter } from 'next/router';
import NextLink from "next/link";
import { useEffect } from "react";

export default function PrincingCard({ planName, pricePerMonth, features, isCurrent, comingSoon, hasButton, buttonText }) {


  const [paymentLink, setPaymentLink] = React.useState("");
  const [firstRequest, setFirstRequest] = React.useState(true);

  const router = useRouter();

  async function getPaymentLink() {
    const res = await Api.getPaymentLink()
    setPaymentLink(res.init_point)
  }

  useEffect(() => {
    if(firstRequest){
      getPaymentLink()
      setFirstRequest(false);
    }
  },[firstRequest]);

  function goToPayment(){
    router.push(paymentLink)
  }
  
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
            alignContent="center">
              {hasButton ? (<Button onPress={goToPayment}>{buttonText}</Button>) : <></>}
              {isCurrent ? <Text color="primary" size={18}> Current plan </Text> : <></>}
              {comingSoon ? <Text color="grey" size={18}> Coming soon </Text> : <></>}
          </Grid.Container>
        </Card.Footer>
      </Card>
    </div>
  );
}