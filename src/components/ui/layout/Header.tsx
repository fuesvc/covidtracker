import React from 'react';
// import clsx from 'clsx';
import LocDropdown from '../forms/LocDropdown';
import { StyledHeader, StyledTitle } from './header-style';

const Header = (props: any) => {
  const { country, countries, setCountry } = props;
  return (
    <StyledHeader>
      <StyledTitle variant="h6">COVID-19 Tracker</StyledTitle>
      <LocDropdown country={country} countries={countries} setCountry={setCountry} />
    </StyledHeader>
  );
}

export default Header;