import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Theme from '../../styles/theme';

export const StyledHeader = styled.div`
  padding: 24px;
  height: 20vh;
  padding-top: 100px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitle = styled(Typography)`
  font: 28px ${Theme.fonts.base};
`;

export const StyledStats = styled.div`
  padding: 24px;
  height: 20vh;
  padding-top: 112px;
`;