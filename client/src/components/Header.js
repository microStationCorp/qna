import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Badge,
  Drawer,
  CssBaseline,
  createMuiTheme,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import CreateIcon from "@material-ui/icons/Create";
import SideBar from "./SideBar";

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

export default function Header() {
  const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <CssBaseline />
      <HeaderElements toggler={setIsopen} />
      <Drawer anchor="left" open={isOpen} onClose={() => setIsopen(false)}>
        <SideBar />
      </Drawer>
    </>
  );
}

const HeaderElements = ({ toggler }) => {
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
              <MenuIcon fontSize="large" />
            </IconButton>
            <Typography variant="h3" className={classes.title}>
              QnA
            </Typography>
            <IconButton color="inherit">
              <CreateIcon fontSize="small" />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={3} color="error">
                <ChatBubbleOutlineIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={2} color="error">
                <NotificationsNoneOutlinedIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <ExitToAppOutlinedIcon fontSize="small" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
