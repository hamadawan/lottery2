import React , {useEffect, useState}from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import DatePicker from 'react-date-picker';
import DropDown from './DropDownList';


export default function AddJackpot(props) {

  const [ jackpotsData , setJackpotsData ] = useState([]);
  
  const [ jackpot , setJackpot ] = useState(0);
  const [ cashValue , setCashValue ] = useState(0);
  const [ nextDrawing , setNextDrawing  ]= useState(new Date());
  const [ type , setType ] = useState("");


  var types = ['','mega','pick6','powerball']

  useEffect(()=>{
    
    Axios.get('https://lotterycash.herokuapp.com/api/jackpot/',
          {
            headers:{
              'Authorization': props.token
            }
          }
          ).then(response =>  {
            setJackpotsData(response.data)    
          }).catch(err =>{
              alert(err.message)
        });
  },[jackpotsData])


  const updateJackpot = () => {

    if( type == "" || jackpot<=0 || cashValue <=0 )
    {
      alert("Values cannot not be zero or empty!")
      return;
    }
  
    Axios.post('https://lotterycash.herokuapp.com/api/jackpot/add-jackpot',
    // Axios.post('https://lottery-cash.herokuapp.com/api/jackpot/add-jackpot',
          {
            type: type,
            jackpot: jackpot,
            cashvalue: cashValue,
          },
          {
            headers:{
              'Authorization': props.token
            }
          }
          ).then(response =>  {
            
              setJackpotsData([...jackpotsData])
              alert("Jackpot Updated!")
              setJackpot(''); 
              setCashValue(''); 
              setType('')  
           
            }).catch(err =>{
              alert(err.message)
        });
  } 

  return (
    <React.Fragment>
      <Title><h2>Update Jackpot</h2></Title>
      <Table size="small" style={{backgroundColor:'white'}}>
        <TableHead>
          <TableRow style={{backgroundColor:'white'}}>
            <TableCell><h3>Type</h3></TableCell>
            <TableCell><h3>Jackpot</h3></TableCell>
            <TableCell><h3>Cash Value</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow style={{backgroundColor:'white'}}>
              <TableCell>
                <DropDown  data={types} value={type} setData={setType} />
              </TableCell>
          
              <TableCell>
                <TextField
                  variant="outlined"
                  margin="normal"
                  onChange = {event => setJackpot(event.target.value)}
                  value = {jackpot}
                  type="Number"
                  id="Jackpot"
                  name="Jackpot"
              />
              </TableCell>
          
              <TableCell>
                <TextField
                  variant="outlined"
                  margin="normal"
                  type="Number"
                  onChange = {event => {setCashValue(event.target.value); }}
                  value = {cashValue}
                  id="cashvalue"
                  name="cashvalue"
              />
              </TableCell>
              <TableCell>
                <Button
                  // type="submit"
                  fullWidth
                  onClick = {evt => {
                    // addUser({firstName: jackpot,lastName: cashValue,username: nextDrawing,password,token});
                    updateJackpot()
                  }}
                  variant="contained"
                  color="primary"
                >
                  Update
                </Button>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    
      <Title><h2>Jackpots History</h2></Title>
      <Table>
        <TableHead>
          <TableRow style={{backgroundColor:'white'}}>
            <TableCell><h3>Update Date</h3></TableCell>
            <TableCell><h3>Type</h3></TableCell>
            <TableCell><h3>Jackpot</h3></TableCell>
            <TableCell><h3>Cash Value</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jackpotsData.map((row) => {
              return <TableRow key={row._id}>
                <TableCell>{(row.createdAt)? row.createdAt.split(":")[0].slice(0,-3) : ''}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.jackpot}</TableCell>
                <TableCell>{row.cashvalue}</TableCell>
              </TableRow>
          })}
        </TableBody>
      </Table>
    
    </React.Fragment>
  );
}