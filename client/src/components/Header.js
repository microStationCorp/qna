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
  mdiAccountPlusOutline,
} from "@mdi/js";
import { Icon } from "@mdi/react";
import { connect } from "react-redux";
import { loginAction, logoutAction } from "../redux/actions/AuthAction";

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

function Header({ toggler, isAuthenticated, loginAction, logoutAction }) {
  return (
    <>
      <CssBaseline />
      <HeaderElements
        toggler={toggler}
        isLogin={isAuthenticated}
        login={loginAction}
        logout={logoutAction}
      />
    </>
  );
}

const HeaderElements = ({ toggler, isLogin, login, logout }) => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <AppBar position="static" color="secondary">
          <Toolbar style={{ paddingRight: "0px" }}>
            {isLogin ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className={classes.menuButton}
                onClick={() => toggler(true)}
              >
                <Icon path={mdiMenu} size={1.5} title="Menu" />
              </IconButton>
            ) : (
              <></>
            )}

            <Typography variant="h3" className={classes.title}>
              QnA
            </Typography>
            {isLogin ? (
              <>
                <IconButton color="inherit">
                  <Icon
                    path={mdiAccountQuestionOutline}
                    size={1}
                    title="new question"
                  />
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={3} color="error">
                    <Icon path={mdiMessageReplyText} size={1} title="reply" />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={2} color="error">
                    <Icon path={mdiBellOutline} size={1} title="notification" />
                  </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={logout}>
                  <Icon path={mdiLogout} size={1} title="logout" />
                </IconButton>
              </>
            ) : (
              <>
                <IconButton>
                  <Icon
                    path={mdiAccountPlusOutline}
                    title="register"
                    size={1}
                    color="white"
                  />
                </IconButton>
                <IconButton onClick={login}>
                  <Icon path={mdiLogin} title="login" size={1} color="white" />
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { loginAction, logoutAction })(Header);
