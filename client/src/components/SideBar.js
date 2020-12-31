import {
  Divider,
  List,
  ListItem,
  makeStyles,
  Typography,
  IconButton,
} from "@material-ui/core";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: 250,
    background: "linear-gradient(to left,#046E7F,#066271)",
  },
  title: {
    flexGrow: 1,
    color: "white",
    padding: "20px 0px",
  },
});

export default function SideBar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography variant="h5" className={classes.title} align="center">
          Hi, Sujan Mondal
        </Typography>
        <Divider />
        <List>
          <ListItem>
            <IconButton>
              <DashboardOutlinedIcon />
            </IconButton>
            <Typography>dashboard</Typography>
          </ListItem>
        </List>
      </div>
    </>
  );
}
