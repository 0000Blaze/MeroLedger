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
      paddingLeft: theme.spacing(3),
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
    marginLeft: theme.spacing(2),
    marginTop: -15,
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3),
      marginRight: theme.spacing(2),
      width: "100%",
    },
  },
}));

//Main Function
const SavingsScreen = (props) => {
  const { history } = props;
  //Sets value for savings
  const [amountAddedToSaving, addSaving] = useState("");
  const [amountSuntractedFromSaving, subtractSaving] = useState("");
  const [finalSaving, setSaving] = useState(
    amountAddedToSaving - amountSuntractedFromSaving
  );

  //Calculates saving
  function calculateSaving() {
    setSaving(amountAddedToSaving - amountSuntractedFromSaving);
  }

  //Handles the Dialog Box
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  //Date Formatting Options
  const DATE_OPTIONS = {
    year: "numeric",
    month: "short",
  };

  const clickEvent = () => {
    handleClickOpen();
    calculateSaving();
  };
  return (
    <main className={classes.content}>
      <div className={classes.drawerHeader} />
      <Box className={classes.content}>
        <Box className={classes.mainBox}>
          {/* Displays the top content */}
          <Typography className={classes.topContent}>
            Expected Saving for<span> </span>
            {new Date().toLocaleDateString("en-US", DATE_OPTIONS)} : Rs.
          </Typography>
          <Typography className={classes.topContent}>
            Money Remaining for<span> </span>
            {new Date().toLocaleDateString("en-US", DATE_OPTIONS)} : Rs.
          </Typography>
          <Typography className={classes.topContent}>
            Actual Saving for<span> </span>
            {new Date().toLocaleDateString("en-US", DATE_OPTIONS)} : Rs.{" "}
            {finalSaving}
          </Typography>
          <Divider className={classes.divider} />

          {/* Displays Addition Card Contents */}
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.captionText}>
                Add to Savings
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
                  value={amountAddedToSaving}
                  onChange={(e) => addSaving(+e.target.value)}
                  className={classes.contentBox}
                />
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.saveButton}
                onClick={calculateSaving}
              >
                Add
              </Button>
            </CardContent>
          </Card>

          {/* Displays Subtraction Card Contents */}
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.captionText}>
                Subtract from Savings
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
                  value={amountSuntractedFromSaving}
                  onChange={(e) => {
                    subtractSaving(+e.target.value);
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
                Subtract
              </Button>

              {/* Alert Dialog Box */}
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Update Expenses"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Make updates in the expenses section if you are going to
                    spend the amount.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    color="primary"
                    onClick={() => {
                      history.push("/expense");
                    }}
                  >
                    Go To Expenses
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

export default SavingsScreen;
