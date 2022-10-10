import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import {
  FormControl,
  TextField,
  MenuItem,
  FormControlLabel,
  InputLabel,
  Select
} from "@mui/material";

function SearchPage() {
  const [searchType, setSearchType] = React.useState('');
  const handleChange = (event) => {
    setSearchType(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div>
      <h1>Search Page</h1>
      <p>Expand the items below and enter the required information to search for scams. It's not mandatory to fill all fields</p>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Mail Search</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Enter the email to check its reputation 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Phone search</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Enter the phone number to check its reputation 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Swift Code search</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Enter the Swift Code (banking code) of the account to check its reputation
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Know your customer (KYC)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Upload the personal ID of the person to check if it's tagged as dangerous
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Button variant="contained">Search</Button>
    </div>
  );
}

export default SearchPage;
