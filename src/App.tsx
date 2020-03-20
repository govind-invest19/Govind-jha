import React from 'react';
import logo from './logo.svg';
import './style.scss';
import {Button, FormControl, TextField, Grid, Container} from '@material-ui/core';
import CreateDialog from './Components/UserLoginSignUp/Signup';
import CreateDialogLogin from './Components/UserLoginSignUp/Login';
import { Icon } from '@material-ui/core';
import PersonList from './Components/PersonList';


function App() {
  return (
    <Container>
    <div className="App">
      <CreateDialog/>
      <CreateDialogLogin/>
      <PersonList/>
    </div>
    </Container>   
  );
}

export default App;
