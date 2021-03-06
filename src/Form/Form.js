import React, { Component } from "react";
import "./Form.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { geolocated } from "react-geolocated";

class Form extends React.Component {
  state = {
    open: false,
    coords: []
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
      coords: this.state.coords
    });
  };

  handleClose = () => {
    this.setState({ open: false });
    console.log("this is the state", this.state);
  };

  render() {
    return (
      <div className="contactButton">
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          onClick={this.handleClickOpen}
        >
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" />
          <DialogContent>
            <DialogContentText>Report Marine Debris</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField margin="dense" id="lat" label="Latitude" fullWidth />
            <TextField margin="dense" id="long" label="Longitude" fullWidth />

            <TextField margin="dense" id="message" label="Message" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: null,
  watchPosition: true
})(Form);
