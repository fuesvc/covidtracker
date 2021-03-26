import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import SunIcon from '@material-ui/icons/Brightness1Sharp';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fink from './Fink';
import fuesDarkSvg from '../static/fues-brand-dark.svg';
import fuesLightSvg from '../static/fues-brand.svg';

export default function TopNav(props: any) {
  const [lightMode, setLightMode] = useState(false);

  const useStyles = makeStyles(theme => ({
    root: {
    },
    bar: {
      backgroundColor: lightMode?'#f1f1f1':'#222222',
      color: lightMode?'#222222':'#f1f1f1',
    },
    links: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    grow: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      '& img': {
        marginRight: theme.spacing(1),
      }
    },
  }));

  const classes = useStyles();
  const toggleLightMode = () => {
    setLightMode(!!!lightMode);
  }
  const isMobile = useMediaQuery('(max-width:800px)');
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.grow}>
            <img src={lightMode? fuesLightSvg: fuesDarkSvg} width="64px" alt="fuesvc logo"/>
          </Typography>
          {!isMobile && (
            <Container className={classes.links}>
              <Fink
                name="about"
                login
                action={() => {}}
              />
              <Tooltip title="Toggle theme">
                <IconButton color="inherit" aria-label="menu" onClick={toggleLightMode}>
                  <SunIcon />
                </IconButton>
              </Tooltip>
            </Container>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}