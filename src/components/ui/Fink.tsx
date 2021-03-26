import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Fink = (props: any) => {
  const { name, login, filled, action, routeTo, ...rest } = props;

  

  const useStyles = makeStyles((theme) => ({
    root: {
  
    },
    link: {
      fontFamily: "IBM Plex Mono",
      textTransform: 'uppercase',
      fontSize: '14px',
      fontWeight: 700,
      color: filled? '#333333': "inherit",
      textDecoration: 'none',
    },
  }));
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Button
        variant={login? "outlined": filled? "contained": ""} 
        color="inherit"
        size="small"
        className={classes.link}
        onClick={() => action != null ? action(): console.log('foo')}
        {...rest}
      >
        {name}
      </Button>
    </div>
    );
  }
  
  export default Fink;