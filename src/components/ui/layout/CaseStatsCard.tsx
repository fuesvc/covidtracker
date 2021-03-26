import React from 'react';
import CaseTable from './CaseTable';
import { StyledStats, StyledTitle } from './header-style';

const CaseStatsCard = (props: any) => {
  const { countries } = props;
  return (
    <StyledStats>
      <StyledTitle variant="h6">Live Cases</StyledTitle>
      <CaseTable countries={countries} />
    </StyledStats>
  );
}

export default CaseStatsCard;