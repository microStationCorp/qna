import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Badge,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ paddingRight: "0px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography variant="h3" className={classes.title}>
            QnA
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={3}>
              <ChatBubbleOutlineIcon fontSize="small" />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={2}>
              <NotificationsNoneOutlinedIcon fontSize="small" />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <ExitToAppOutlinedIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
