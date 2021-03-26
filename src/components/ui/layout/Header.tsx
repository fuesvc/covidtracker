import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useGlobalStyles from '../../styles/useGlobalStyles';

const headerStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 16,
  }
}));

const Header = () => {

  const classes = headerStyles();
  const globalClasses = useGlobalStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={globalClasses.title}>COVID-19 Tracker</Typography>
    </div>
  );
}

export default Header;