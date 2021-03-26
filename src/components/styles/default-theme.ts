export interface DefaultTheme {
  layout: {
    backgroundColor: string;
    sidebarColor: string;
    primaryColor: string;
    linkColor: string;
    dark2Gray: string;
    dark1Gray: string;
    dark0Gray: string;
    light2Gray: string;
    light1Gray: string;
    light0Gray: string;
  };
  fonts: {
    base: string;
    buttonSize: string;
    headerSize: string;
    size: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  components: {
    container: {
      padding: string;
    }
    header: {
      height: string;
      background: string;
    };
  };
}