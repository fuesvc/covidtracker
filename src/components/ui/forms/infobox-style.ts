import styled from 'styled-components';
// import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Theme from '../../styles/theme';

export const StyledCard = styled(Card)`
  background-color: ${Theme.layout.dark1Gray};
  min-width: 144px;
  margin: 24px 12px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledText = styled(Typography)`
  color: ${Theme.layout.light0Gray};
  font: 15px ${Theme.fonts.base};
  &.alert {
    color: ${Theme.layout.alertRed};
  }
  &.success {
    color: ${Theme.layout.successGreen};
  }
`;
