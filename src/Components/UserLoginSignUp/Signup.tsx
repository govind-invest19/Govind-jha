import React, { Fragment } from "react";

import {
  Button,
  FormControl,
  TextField,
  Grid,
  Container
} from "@material-ui/core";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import { Component } from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
function App() {
  return ( 
    <Container>
      <div className="App">
        <CreateDialog />
      </div>
    </Container>
  );
}

export default App;

class CreateDialog extends Component {
  state = {
    open: false
  };
  handler = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <Button onClick={this.handler}>Signup</Button>
        <Dialog aria-labelledby="form-dialog-title" open={open} onClose={this.handler} className="form_popup">
          
          <DialogContent>
            <Grid container>
              <Grid item xs={12} sm={6} id="content_side_userLS">
                <Grid>
                  {" "}
                  <h1>Signup</h1>
                  <p>
                    Invest with next-generation wealth building & investment
                    platform.
                  </p>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} className="formSection formClass">
                  <Grid>
                <form noValidate autoComplete="off">
                  <FormControl className="input_field" fullWidth>
                    <TextField id="standard-basic" label="Full Name" />
                  </FormControl>
                  <FormControl className="input_field" fullWidth>
                    <TextField
                      id="standard-basic"
                      label="Enter Email/Mobile Number"
                    />
                  </FormControl>
                  <FormControl className="input_field" fullWidth>
                    {" "}
                    <TextField id="standard-basic" label="Password" />
                  </FormControl>
                  <FormControl className="input_field" fullWidth>
                    {" "}
                    <Button variant="contained" className="FormBtn" color="primary">
                      {" "}
                      CONTINUE{" "}
                    </Button>
                  </FormControl>
                </form>
                <div className="socialLogin">
            <p>Already registered? <a href="#text-buttons" color="primary">Login Now</a></p>
            <FacebookIcon className="MuiRating-iconHover">asdasdas</FacebookIcon>
          </div>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
