import * as React from 'react';
import { Collapse, Text, Input, Spacer, Container } from "@nextui-org/react";
import { Grid } from '@nextui-org/react';

function SearchPage() {

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
          <Input placeholder="Next UI" label='email' onChange={e=>console.log(e.target.value)} />
        </Collapse>
        <Collapse title="Phone number" expanded>
          <Text>
            Enter the phone number of the person below
          </Text>
        </Collapse>
        <Collapse title="Swift Code" expanded>
          <Text>
          Enter the swift code (international banking code) of the person below
          </Text>
        </Collapse>
        <Collapse title="Personal ID (KYC)" expanded>
          <Text>
          Enter submit the personal ID to do an exhaustive KYC analysis of the person you think is a scammer
          </Text>
        </Collapse>
    </Collapse.Group>
    </div>
  );
}

export default SearchPage;
