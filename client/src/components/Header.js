import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Badge,
  CssBaseline,
  createMuiTheme,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {
  mdiLogin,
  mdiMenu,
  mdiAccountQuestionOutline,
  mdiMessageReplyText,
  mdiBellOutline,
  mdiLogout,
} from "@mdi/js";
import { Icon } from "@mdi/react";

const myTheme = createMuiTheme({
  palette: {
    secondary: {
      main: "#046E7F",
    },
    error: {
      main: "#CC2FB8",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({ toggler }) {
  let login = true;
  return (
    <>
      <CssBaseline />
      <HeaderElements toggler={toggler} isLogin={login} />
    </>
  );
}

const HeaderElements = ({ toggler, isLogin }) => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <AppBar position="static" color="secondary">
          <Toolbar style={{ paddingRight: "0px" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
              onClick={() => toggler(true)}
            >
              <Icon path={mdiMenu} size={2} />
            </IconButton>
            <Typography variant="h3" className={classes.title}>
              QnA
            </Typography>
            {isLogin ? (
              <>
                <IconButton color="inherit">
                  <Icon path={mdiAccountQuestionOutline} size={1} />
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={3} color="error">
                    <Icon path={mdiMessageReplyText} size={1} />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={2} color="error">
                    <Icon path={mdiBellOutline} size={1} />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Icon path={mdiLogout} size={1} />
                </IconButton>
              </>
            ) : (
              <IconButton>
                <Icon path={mdiLogin} title="login" size={1} color="white" />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
