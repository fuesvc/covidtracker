import { makeStyles } from '@material-ui/core/styles';

const useGlobalStyles = makeStyles(theme => ({
  growOne: {
    flexGrow: 1,
  },
  rootApp: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '4rem',
  },
  title: {
    fontFamily: 'IBM Plex Mono, monospace',
    fontSize: 24,
  },
}));

export default useGlobalStyles;