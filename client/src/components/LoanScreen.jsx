import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  Box,
  Divider,
  TextField,
  InputAdornment,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
      paddingLeft: theme.spacing(18),
      paddingRight: theme.spacing(8),
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  topContent: {
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
  },
  saveButton: {
    marginLeft: "40%",
    width: 120,
    height: 40,
    marginTop: 15,
    marginBottom: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#E63946",
    "&:hover": {
      backgroundColor: "#91683f",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "28%",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "30%",
    },
  },
  divider: {
    height: 2,
    backgroundColor: "#000000",
    marginBottom: theme.spacing(2),
  },
  root: {
    maxWidth: "90%",
    marginLeft: "5%",
    marginTop: theme.spacing(5),
    backgroundColor: "#A8DADC",
    marginBottom: theme.spacing(5),
    position: "relative",
  },

  captionText: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: "bold",
  },

  mainContent: {
    fontWeight: "bold",
    margin: theme.spacing(8),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(4),
      fontSize: "0.90rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(5),
    },
  },
  contentBox: {
    marginLeft: theme.spacing(3),
    marginTop: -15,
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3),
      marginRight: theme.spacing(3),
      width: "100%",
    },
  },
}));

//Main Function
const LoanScreen = (props) => {
  const { history } = props;
  //Sets initial value for amount taken and given
  //Need a better way
  const [loanTaken, addLoanTaken] = useState("");
  const [loanGiven, addLoanGiven] = useState("");
  const [displayTaken, setAmountTaken] = useState("");
  const [displayGiven, setAmountGiven] = useState("");

  //Displays the amount
  function callSetTaken() {
    setAmountTaken(loanTaken);
  }
  function callSetGiven() {
    setAmountGiven(loanGiven);
  }
  const classes = useStyles();

  //Handles the Dialog Box
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const clickEvent = () => {
    handleClickOpen();
    callSetTaken();
  };

  //Date Formatting Options
  const DATE_OPTIONS = {
    year: "numeric",
    month: "short",
  };

  return (
    <main className={classes.content}>
      <div className={classes.drawerHeader} />
      <Box className={classes.content}>
        <Box className={classes.mainBox}>
          {/* Displays the top content */}
          <Typography className={classes.topContent}>
            Salary for<span> </span>
            {new Date().toLocaleDateString("en-US", DATE_OPTIONS)} : Rs.
          </Typography>
          <Typography className={classes.topContent}>
            Money Remaining for<span> </span>
            {new Date().toLocaleDateString("en-US", DATE_OPTIONS)} : Rs.
          </Typography>
          <Typography className={classes.topContent}>
            Loan Taken in<span> </span>
            {new Date().toLocaleDateString("en-US", DATE_OPTIONS)} : Rs.{" "}
            {displayTaken}
          </Typography>
          <Typography className={classes.topContent}>
            Loan Given in<span> </span>
            {new Date().toLocaleDateString("en-US", DATE_OPTIONS)} : Rs.{" "}
            {displayGiven}
          </Typography>
          <Divider className={classes.divider} />

          {/* Displays Loan Given Card Contents */}
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.captionText}>
                Loan Given
              </Typography>
              <Typography className={classes.mainContent}>
                AMOUNT :
                <TextField
                  label="Amount"
                  id="outlined-start-adornment"
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Rs. </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  value={loanGiven}
                  onChange={(e) => addLoanGiven(+e.target.value)}
                  className={classes.contentBox}
                />
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.saveButton}
                onClick={callSetGiven}
              >
                Save
              </Button>
            </CardContent>
          </Card>

          {/* Displays Loan Taken Card Contents */}
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.captionText}>
                Loan Taken
              </Typography>
              <Typography className={classes.mainContent}>
                AMOUNT :
                <TextField
                  label="Amount"
                  id="outlined-start-adornment"
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Rs. </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  value={loanTaken}
                  onChange={(e) => {
                    addLoanTaken(+e.target.value);
                  }}
                  className={classes.contentBox}
                />
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.saveButton}
                onClick={clickEvent}
              >
                Save
              </Button>
              {/* Alert Dialog Box */}
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Check Savings"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Check your savings before taking a loan
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    color="primary"
                    onClick={() => {
                      history.push("/savings");
                    }}
                  >
                    Go To Savings
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </main>
  );
};

export default LoanScreen;
