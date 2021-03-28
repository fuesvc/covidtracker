import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { StyledSelect, StyledMenuItem } from './locdropdown-style';

const LocDropdown = (props: any) => {
  const { country, countries, setCountry } = props;
  return (
    <FormControl>
      <StyledSelect
        value={country}
        onChange={(e: any) => { setCountry(e) }}
      >
        <StyledMenuItem value="worldwide">Worldwide</StyledMenuItem>
        {countries.map((country: any) => (
          <StyledMenuItem value={country.value}>{country.name}</StyledMenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
}

export default LocDropdown;