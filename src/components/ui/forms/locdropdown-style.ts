import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Theme from '../../styles/theme';

export const StyledSelect = styled(Select)`
  color: ${Theme.layout.light0Gray};
  font: 14px ${Theme.fonts.base};
`;

export const StyledMenuItem = styled(MenuItem)`
  font: 14px ${Theme.fonts.base};
`;