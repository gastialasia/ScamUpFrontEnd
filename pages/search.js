import * as React from 'react';

import {
  FormControl,
  TextField,
  MenuItem,
  FormControlLabel,
  InputLabel,
  Select,
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

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">searchType</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchType}
          label="searchType"
          onChange={handleChange}
        >
          <MenuItem value={'Email'}>Email</MenuItem>
          <MenuItem value={'Phone'}>Phone</MenuItem>
          <MenuItem value={'Swift code'}>Swift Code</MenuItem>
          <MenuItem value={'KYC (Know Your Customer)'}>KYC (Know Your Customer)</MenuItem>
        </Select>
      </FormControl>

      <TextField fullWidth label="Search" id="fullWidth" />
    </div>
  );
}

export default SearchPage;
