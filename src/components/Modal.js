import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Paper from '@material-ui/core/Paper'
import { Button, Grid, TextField } from '@material-ui/core';
import Axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const customStyles = {
  content : {
    top                   : '55%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border: '1px gray solid',
    width:'55%',
    padding:'0px',
  },
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
function MyModal(props){
  
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    
    const submit = ( ) => {
        if(newPass == '' || confirmPass == '')
            alert("Fields cannot be empty!")
        else if( newPass != confirmPass)
            alert("Passwords not Matched") 
        else
        {
            console.log(props.user.user_id, props.user.username, props.token)
            Axios.post("https://lotterycash.herokuapp.com/api/users/change-pass-admin",
                {
                    _id: props.user.user_id,
                    password: newPass,
                    username: props.user.username,
                },
                {
                    headers:{
                    'Authorization': props.token
                    }
                })
                .then(response =>
                    {
                        alert("Password Changed Successfully!")
                        props.setIsOpen(false)
                    }
                )
                .catch(err => 
                    {
                        alert(err)
                    }
                )
                
        }
    }

    return (
      <div>
        <Modal
          isOpen={props.isOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div
            style={{width:'100%', height:'530px', padding:'15px', backgroundColor:'white'}}>
            <Grid container >
                <h5 style={{ marginLeft: '10px', fontWeight:'bold'}} onClick={()=>props.setIsOpen(false)}>X</h5>
                <Table size="small" style={{backgroundColor:'white'}}>
                    <TableHead>
                    <TableRow style={{backgroundColor:'white', marginTop:'100px'}}>
                        <TableCell><h3>New Password</h3></TableCell>
                        <TableCell><h3>Confirm Password</h3></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow style={{backgroundColor:'white',zIndex:"1000", marginTop:'100px'}}>
                            <TableCell>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    onChange = {event => setNewPass(event.target.value)}
                                    value = {newPass}
                                    id="newPass"
                                    label="New Password"
                                    name="newPass"
                                />
                            </TableCell>
                    
                            <TableCell>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    onChange = {event => {setConfirmPass(event.target.value); }}
                                    value = {confirmPass}
                                    id="confirmPass"
                                    label="confirmPass"
                                    name="confirmPass"
                                />
                            </TableCell>
                            <TableCell>
                                <Button
                                    fullWidth
                                    onClick = {evt => {submit()}}
                                    variant="contained"
                                    color="primary"
                                >
                                    Change
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            
            </Grid>
          </div>
        </Modal>
      </div>
    );
}

export default MyModal