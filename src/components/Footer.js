import { Grid } from '@material-ui/core';
import '../css/Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className="displayCol" style={{width:'100%'}}>
        <div className='bannerbg'></div>
        <Grid container className="displayRow" >
            <Grid item xs={12} sm={12} md={12} className="displayCol" style={{padding:'10px',fontSize:"24px",fontWeight:'600',alignItems:'flex-start'}}>
                <div>
                    <Link to="/contactus" style={{textDecoration:'none', color:'black'}}> 
                        Contact Us
                    </Link>
                </div>
                <div>
                    <Link to="/privacy" style={{textDecoration:'none', color:'black'}}> 
                        Privacy Policy
                    </Link>
                </div>
                <div>
                    <Link to="/cookiespolicy" style={{textDecoration:'none', color:'black'}}> 
                        Cookie Policy
                    </Link>
                </div>
            </Grid>

            <Grid container className="displayRow">
                <Grid item xs={12} sm={5} md={5} className="displayCol company-address">
                    <div style={{marginTop:'30px'}}>© Versicolor LLC, New Jersey, USA</div>
                </Grid>
                <Grid item xs={12} sm={7} md={7} style={{minWidth:'100px',padding:'10px',fontSize:"15px",fontWeight:'500',alignItems:'flex-start'}}>
                    <div style={{textAlign:'justify'}}>
                        DISCLAIMER: Any calculations displayed are not be understood as a tax advice, or any exact guaranteed tax information and serve only
                        professional to get an exact calculation for your case the purpose of
                        illustrating an example estimate of potential income. It does not reflect state and ferderal tax rates, does not take into account any
                        additional income, deduction or other tax profile income. Please contact a certified tax professional to get an exact calculation for your case
                    </div>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default Footer;
