import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountBalanceRoundedIcon from "@material-ui/icons/AccountBalanceRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";
import HomeWorkRoundedIcon from "@material-ui/icons/HomeWorkRounded";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Button,
  IconButton,
  Divider,
  List,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withRouter } from "react-router-dom";

const drawerWidth = 240;

//Material-UI Formatting
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  accountText: {
    marginLeft: 10,
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 0,
      marginRight: 0,
    },
  },
  avatarButton: {
    color: "white",
    textTransform: "none",
  },
  headText: {
    textAlign: "left",
    marginLeft: 10,
    flex: 1,
    fontSize: 20,
    color: "#ffffff",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  menuItem: {
    "&:hover": {
      backgroundColor: "#d3d3d3",
    },
    "&:action": {
      backgroundColor: "#d3d3d3",
    },
  },
  drawerText: {
    fontWeight: "bold",
    textAlign: "center",
  },
}));

//Main Function
const Menu = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  //Movement of Drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //Menu Items 1
  const Itemlist = [
    {
      text: "Expenses",
      icon: <CreditCardRoundedIcon />,
      onClick: () => history.push("/expense"),
    },
    {
      text: "Savings",
      icon: <FavoriteRoundedIcon />,
      onClick: () => history.push("/savings"),
    },
    {
      text: "Possible Investments",
      icon: <HomeWorkRoundedIcon />,
      onClick: () => history.push("/invest"),
    },
    {
      text: "Loans",
      icon: <AccountBalanceRoundedIcon />,
      onClick: () => history.push("/loan"),
    },
  ];

  //Menu Items 2
  const statusItemlist = [
    {
      text: "Current Status",
      icon: <AccountBalanceWalletRoundedIcon />,
      onClick: () => history.push("/current"),
    },
    {
      text: "Past Status",
      icon: <AccountBalanceWalletRoundedIcon />,
      onClick: () => history.push("/past"),
    },
  ];

  return (
    <div className={classes.root}>
      {/* Displays Appbar for Menu */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Grid item xs={0} md={1} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" className={classes.headText}>
            Budget Allocator
          </Typography>

          {/* Displays User Button */}
          <Button
            className={classes.avatarButton}
            onClick={() => {
              history.push("/main");
            }}
          >
            <AccountCircle />
            <Typography className={classes.accountText} align="right">
              User
            </Typography>
          </Button>
          <Grid item xs={0} md={1} />
        </Toolbar>
      </AppBar>

      {/* Displays Menu Drawer */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography className={classes.drawerText}>
            Supriya's Budgeting
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {Itemlist.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={classes.menuItem}
              >
                {icon && <ListItemIcon> {icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {statusItemlist.map((item) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={classes.menuItem}
              >
                {icon && <ListItemIcon> {icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default withRouter(Menu);
