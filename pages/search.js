import * as React from 'react';
import { Collapse, Text, Input, Grid, Button } from "@nextui-org/react";

function SearchPage() {
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [code, setCode] = React.useState();
  const [KYC, setKYC] = React.useState();

  const [searchType, setSearchType] = React.useState('');
  const handleChange = (event) => {
    setSearchType(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div>
      <h2>Search for scammers</h2>
      <p>Expand the items below and enter the required information of the person you think is a scammer. It's not mandatory to fill all fields.</p>
        <Collapse.Group accordion={false} bordered css={{ margin: 50 }}>
        <Collapse title="Mail" expanded>
          <Text>
            Enter the email of the person below
          </Text>
          <Grid.Container gap={2} justify='space-between'>
            <Grid>
              <Input placeholder="email" label='email' status="primary" onChange={e=>setEmail(e.target.value)} />
            </Grid>
            <Grid>
              <Button bordered color="primary" auto onPress={e=>console.log(email)}>
                Search by email
              </Button>
            </Grid>
          </Grid.Container>
        </Collapse>
        <Collapse title="Phone number" expanded>
          <Text>
            Enter the phone number of the person below
          </Text>
          <Input placeholder="phone" label='phone' status="primary" onChange={e=>setPhone(e.target.value)} />
        </Collapse>
        <Collapse title="Swift Code" expanded>
          <Text>
          Enter the swift code (international banking code) of the person below
          </Text>
          <Input placeholder="swift code" label='swift code' status="primary" onChange={e=>setCode(e.target.value)} />
        </Collapse>
        <Collapse title="Personal ID (KYC)" expanded>
          <Text>
          Enter submit the personal ID to do an exhaustive KYC analysis of the person you think is a scammer
          </Text>
          <Input placeholder="Personal ID" label='Personal ID' status="primary" onChange={e=> {setKYC(e.target.value)}} />
        </Collapse>
    </Collapse.Group>
    </div>
  );
}

export default SearchPage;
