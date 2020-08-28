import React from "react";
import {
  Typography,
  makeStyles,
  Box,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";

//Material-UI Formatting
const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(25),
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(15),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
      paddingTop: theme.spacing(2),
      alignItems: "center",
    },
  },
  dateButton: {
    backgroundColor: "#000000",
    textTransform: "none",
    marginBottom: theme.spacing(2),
    borderRadius: 0,
  },
  date: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  mainBox: {
    marginTop: theme.spacing(3),
  },
  topContent: {
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
  },
  root: {
    maxWidth: "80%",
    marginLeft: "10%",
    backgroundColor: "#A8DADC",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      marginLeft: 0,
    },
  },
  captionText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 20,
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: "bold",
  },
}));

//Main Function
const PastScreen = () => {
  const classes = useStyles();

  //Data for Varied Months
  function createData(months) {
    return { months };
  }

  const rows = [createData(1), createData(2), createData(3)];

  //Subtracting months
  function addMonths(date, months) {
    date.setMonth(date.getMonth() - months);
    return date;
  }

  //Date Formatting Options
  const DATE_OPTIONS = {
    year: "numeric",
    month: "long",
  };

  return (
    <main className={classes.content}>
      <div className={classes.drawerHeader} />
      {rows.map((row) => (
        <Box className={classes.content}>
          {/* Displays Date */}
          <Button variant="outlined" disabled className={classes.dateButton}>
            <Typography className={classes.date}>
              {addMonths(new Date(), row.months).toLocaleDateString(
                "en-US",
                DATE_OPTIONS
              )}
            </Typography>
          </Button>

          {/* Displays Card Contents */}
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.captionText}>
                Past Status
              </Typography>
              <Typography className={classes.topContent}>
                Salary : Rs.
              </Typography>
              <Typography className={classes.topContent}>
                Monthly Expense : Rs.
              </Typography>
              <Typography className={classes.topContent}>
                Savings : Rs.
              </Typography>
              <Typography className={classes.topContent}>
                Money Invested : Rs.
              </Typography>
              <Typography className={classes.topContent}>
                Loan Taken : Rs.
              </Typography>
              <Typography className={classes.topContent}>
                Loan Given : Rs.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </main>
  );
};

export default PastScreen;
