import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { StyledCard, StyledText } from './infobox-style';

const InfoBox = (props: any) => {
  const { title, cases, total, active, isRed, onClick } = props;
  return (
    <StyledCard
      onClick={onClick}
      className={active? 'active': undefined}
    >
      <CardContent>
        <StyledText color="textSecondary" gutterBottom>{title}</StyledText>
        <StyledText color="textSecondary" gutterBottom className={isRed? 'alert': 'success'}>{cases}</StyledText>
        <StyledText color="textSecondary" gutterBottom>{total} Total</StyledText>
      </CardContent>
    </StyledCard>
  );
}

export default InfoBox;