import React, { Fragment } from "react";

import {
  Button,
  FormControl,
  TextField,
  Grid,
  List,
  ListItem,
  ListItemText,
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
        <CreateDialogLogin />
      </div>
    </Container>
  );
}

export default App;

class CreateDialogLogin extends Component {
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
        <Button onClick={this.handler}>Login</Button>
        <Dialog aria-labelledby="form-dialog-title" open={open} onClose={this.handler} className="form_popup">
          
          <DialogContent>
            <Grid container>
              <Grid item xs={12} sm={6} id="content_side_userLS">
                <Grid>
                  {" "}
                  <h1>Login</h1>
                  <p>Simplified Stock <br/>Investments Like <br/>Never Before</p>
                  <List >
                        <ListItem>
                        <ListItemText primary="Invest across multiple asset classes." />
                        </ListItem>
                        <ListItem>
                        <ListItemText primary="Manage your own personalized portfolio." />
                        </ListItem>
                        <ListItem>
                        <ListItemText primary="Build wealth with experts’stock recommendations." />
                        </ListItem>
                    </List>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} className="formSection formClass">
                  <Grid>
                <form noValidate autoComplete="off">
                  <FormControl className="input_field" fullWidth>
                    <TextField id="standard-basic" type="tel"  label="Enter Email/Mobile Number" />
                  </FormControl>
                  <FormControl className="input_field" fullWidth>
                    {" "}
                    <Button variant="contained" className="FormBtn" color="primary">
                      {" "}
                      Next{" "}
                    </Button>
                  </FormControl>
                </form>
                <div className="socialLogin">
            <p>New to invest19?  <a href="#text-buttons" color="primary">Sign Up</a>   |   Or Login using </p>
            <FacebookIcon className="MuiRating-iconHover"></FacebookIcon>
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
