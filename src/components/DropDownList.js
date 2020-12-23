import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DropDown(props) {
  const classes = useStyles();
  
  const handleChange = (event) => {
    const name = event.target.name;
    props.setData( event.target.value );
  };

    var coutries = props.data.map(c=>{
      return <option value={c}>{c}</option>
    })

  return (
    <div>
      <FormControl style={{width:'200px'}}variant="outlined" className={classes.formControl}>
        <Select
          native
          
          value={props.value}
          onChange={handleChange}
          inputProps={{
            id: 'outlined-age-native-simple',
          }}
          style={{height:'50px'}}
        >
          {coutries}
        </Select>
      </FormControl>
    
    </div>
  );
}
