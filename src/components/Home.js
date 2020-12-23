// import headerB from '../images/header.png'
// import lottery from '../images/lottery3.png'
// import menubtnbg from '../images/menubtnbg.png'
// import pages from '../images/pages.png'
// import pages2 from '../images/page-2.png'
// import dollar from '../images/dollar.png'
// import ball from '../images/ball1.png'
// import ball2 from '../images/ball2.png'
// import pencil from '../images/pencil.png'
import '../css/Home.css'

import megaImg from '../images/mega-mill.png'
import pick_6 from '../images/pick-62.png'
import power_ball from '../images/power-ball.png'

import cardbg from '../images/lottery-bg.png'
import cardbottombg from '../images/menubtnbg.png'
import header from '../images/header.png'

import Grid from '@material-ui/core/Grid';
import DropDown from './DropDownList';
import Button from '@material-ui/core/Button'
import { useEffect, useState } from 'react'
import Axios from 'axios'


const m = require('./Data')
const countriesData = m.countriesData
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function Home() {

    const [state, setState] = useState('Alabama');
    const [mega, setMega] = useState({});
    const [pick, setPick] = useState({});
    const [power, setPower] = useState({});
    
    useEffect(()=>{
        Axios.get('https://lotterycash.herokuapp.com/api/jackpot/mega'
          ).then(response =>  {
            setMega(response.data)    
          }).catch(err =>{
        });
    }, [])

    useEffect(()=>{
        Axios.get('https://lotterycash.herokuapp.com/api/jackpot/pick6'
          ).then(response =>  {
            setPick(response.data)    
          }).catch(err =>{
        });
    }, [])

    useEffect(()=>{
        Axios.get('https://lotterycash.herokuapp.com/api/jackpot/power'
          ).then(response =>  {
            setPower(response.data)    
          }).catch(err =>{
        });
    }, [])

    let today = new Date();
    let powerDate, megaDate, pickDate
    
    if([0,1,2,3].includes(today.getDay()))
    {
        console.log(today.getDay(),today.getHours()," if")

        if(today.getDay() == 3 && today.getHours()>=23)
        {
            powerDate = 'Saturday 10:59 PM ET'
        }
        else
            powerDate = 'Wednesday 10:59 PM ET'
    }
    else
    {
        console.log(today.getDay(),today.getHours()," else")
        if(today.getDay() == 6 && today.getHours()>=23)
        {
            powerDate = 'Wednesday 10:59 PM ET'
        }
        else
            powerDate = 'Saturday 10:59 PM ET'
    }
    
    if([6,0,1,2].includes(today.getDay()))
    {
        console.log(today.getDay(),today.getHours()," if")

        if(today.getDay() == 2 && today.getHours()>=23)
        {
            megaDate = 'Friday 10:59 PM ET'
        }
        else
            megaDate = 'Tuesday 10:59 PM ET'
    }
    else
    {
        console.log(today.getDay(),today.getHours()," else")
        if(today.getDay() == 5 && today.getHours()>=23)
        {
            megaDate = 'Tuesday 10:59 PM ET'
        }
        else
            megaDate = 'Friday 10:59 PM ET'
    }

    if([5,6,0,1].includes(today.getDay()))
    {
        console.log(today.getDay(),today.getHours()," if")

        if(today.getDay() == 1 && today.getHours()>=23)
        {
            pickDate = 'Thursday  07:59 PM ET'
        }
        else
            pickDate = 'Monday 07:59 PM ET'
    }
    else
    {
        console.log(today.getDay(),today.getHours()," else")
        if(today.getDay() == 4 && today.getHours()>=23)
        {
            pickDate = 'Monday 07:59 PM ET'
        }
        else
            pickDate = 'Thursday 07:59 PM ET'
    }

    let megaFederalTax, megaStateTax
    if(Object.keys(mega).length != 0)
    {
        megaFederalTax = calculateTaxFederal(mega.cashvalue)    
        megaStateTax = calculateTaxState(state,mega.cashvalue)
    }

    let pickFederalTax, pickStateTax
    if(Object.keys(pick).length != 0)
    {
        pickFederalTax = calculateTaxFederal(pick.cashvalue)    
        pickStateTax = calculateTaxState(state,pick.cashvalue)
    }

    let powerFederalTax, powerStateTax
    if(Object.keys(power).length != 0)
    {
        powerFederalTax = calculateTaxFederal(power.cashvalue)    
        powerStateTax = calculateTaxState(state,power.cashvalue)
    }
        
    return (
        <div>
            <Grid container style={{
                paddingTop:'50px',}
                }>
                <Grid item xs={12} sm={12} md={12}>
                    <div className='container'>
                        <div className="selected-state-btn" >
                            SELECTED STATE
                        </div>
                        <div className='dropdown'>
                            <DropDown data={countriesData} value={state} setData={setState} />    
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container style={{
                    paddingTop:'10px',
                    paddingBottom: '50px'}
                 }>
                <Grid item xs={12} sm={12} md={9}>
                    <Grid container>
                        <Grid item  xs={12} sm={4} md={4}>
                            <div className='main-cardHome' >
                            <div className='cardimg' style={{backgroundImage:`url(${power_ball})`}} >
                            </div>
                            <div className='cardbg' style={{backgroundImage:`url(${cardbg})`}}>
                                
                                <div className="textMega"> Power Ball</div>
                                <div className="text-gradient textPayout"> NEXT PAYOUT</div>
                                <div className="textAfter"> AFTER TAXS*</div>
                                <div className="textAmount"> {`$ ${Object.keys(power).length != 0 ?  formatCurrency(Math.round(power.cashvalue - (powerFederalTax + powerStateTax))) : 'N/A'}`} </div>
                                <div className='displayFlexCol'> 
                                    <div className="displayFlexRow itemCardHome">
                                        <div>Jackpot:</div>
                                        <div>{`$ ${Object.keys(power).length != 0 ?  formatCurrency(Math.round(power.jackpot)) : 'N/A'}`}</div>
                                    </div>
                                    <div className="displayFlexRow itemCardHome">
                                        <div>Cash Value:</div>
                                        <div>{`$ ${Object.keys(power).length != 0 ?  formatCurrency(Math.round(power.cashvalue)) : 'N/A'}`}</div>
                                    </div>
                                    <div className="displayFlexRow itemCardHome">
                                        <div>Federal Tax:</div>
                                        <div>{`$ ${Object.keys(power).length != 0 ?  formatCurrency(Math.round(powerFederalTax)) : 'N/A'}`}</div>
                                    </div>
                                    <div className="displayFlexRow itemCardHome">
                                        <div>State Tax:</div>
                                        <div>{`$ ${Object.keys(power).length != 0 ?  formatCurrency(Math.round(powerStateTax)) : 'N/A'}`}</div>
                                    </div>
                                </div>
                                <div className='textNext'> NEXT DRAWING</div>
                                    <div className='textDate'>
                                        {`${ powerDate }`}
                                    </div>
                                <div className="playbtn"> 
                                    <a href="https://apps.apple.com/us/app/jackpocket-lottery-app/id663046683" style={{textDecoration:'none', color:'white'}}> 
                                        PLAY NOW
                                    </a>
                                </div>
                            </div>
                            <div className='cardbottombg' style={{backgroundImage:`url(${cardbottombg})`}}>
                            </div>
                        </div>
                        </Grid>
                        <Grid item  xs={12} sm={4} md={4}>
                        <div className='main-cardHome' >
                            <div className='cardimg' style={{backgroundImage:`url(${megaImg})`}} >
                            </div>
                            <div className='cardbg' style={{backgroundImage:`url(${cardbg})`}}>
                                
                                <div className="textMega"> MEGA MILLIONS</div>
                                <div className="text-gradient textPayout"> NEXT PAYOUT</div>
                                <div className="textAfter"> AFTER TAXS*</div>
                                <div className="textAmount">{`$ ${Object.keys(mega).length != 0 ? formatCurrency(Math.round(mega.cashvalue - (megaFederalTax + megaStateTax))) : 'N/A'}`}</div>
                                <div className='displayFlexCol'> 
                                    <div className="displayFlexRow itemCardHome">
                                        <div>Jackpot:</div>
                                        <div>{`$ ${Object.keys(mega).length != 0 ?  formatCurrency(Math.round(mega.jackpot)) : 'N/A'}`}</div>
                                    </div>
                                    <div className="displayFlexRow itemCardHome">
                                        <div>Cash Value:</div>
                                        <div>{`$ ${Object.keys(mega).length != 0 ?  formatCurrency(Math.round(mega.cashvalue))  : 'N/A'}`}</div>
                                    </div>
                                    <div className="displayFlexRow itemCardHome">
                                        <div>Federal Tax:</div>
                                        <div>{`$ ${Object.keys(mega).length != 0 ?  formatCurrency(Math.round(megaFederalTax))  : 'N/A'}`}</div>
                                    </div>
                                    <div className="displayFlexRow itemCardHome">
                                        <div>State Tax:</div>
                                        <div>{`$ ${Object.keys(mega).length != 0 ?  formatCurrency(Math.round(megaStateTax))  : 'N/A'}`}</div>
                                    </div>
                                </div>
                                <div className='textNext'> NEXT DRAWING</div>
                                <div className='textDate'> 
                                    {`${ megaDate }`}
                                </div>
                                <div className="playbtn" >
                                    <a href="https://apps.apple.com/us/app/jackpocket-lottery-app/id663046683" style={{textDecoration:'none', color:'white'}}> 
                                        PLAY NOW
                                    </a>
                                </div>
                            </div>
                            <div className='cardbottombg' style={{backgroundImage:`url(${cardbottombg})`}}>
                            </div>
                        </div>
                        </Grid>
                        <Grid item  xs={12} sm={4} md={4}>
                        <div className='main-cardHome' >
                            <div className='cardimg' style={{backgroundImage:`url(${pick_6})`}} >
                            </div>
                            <div className='cardbg' style={{backgroundImage:`url(${cardbg})`}}>
                                
                                <div className="textMega"> Pick 6</div>
                                <div className="text-gradient textPayout"> NEXT PAYOUT</div>
                                <div className="textAfter"> AFTER TAXS*</div>
                                <div className="textAmount">{`$ ${Object.keys(pick).length != 0 ?  formatCurrency(Math.round(pick.cashvalue - (pickFederalTax + pickStateTax))) : 'N/A'}`}</div>
                                <div className='displayFlexCol'> 
                                    <div className="displayFlexRow itemCardHome">
                                        <div>Jackpot:</div>
                                        <div>{`$ ${Object.keys(pick).length != 0 ?  formatCurrency(Math.round(pick.jackpot)) : 'N/A'}`}</div>
                                    </div>
                                    <div className="displayFlexRow itemCardHome">
                                        <div>Cash Value:</div>
                                        <div>{`$ ${Object.keys(pick).length != 0 ?  formatCurrency(Math.round(pick.cashvalue)) : 'N/A'}`}</div>
                                    </div>
                                    <div className="displayFlexRow itemCardHome">
                                        <div>Federal Tax:</div>
                                        <div>{`$ ${Object.keys(pick).length != 0 ?  formatCurrency(Math.round(pickFederalTax)) : 'N/A'}`}</div>
                                    </div>
                                    <div className="displayFlexRow itemCardHome">
                                        <div>State Tax:</div>
                                        <div>{`$ ${Object.keys(pick).length != 0 ?  formatCurrency(Math.round(pickStateTax)) : 'N/A'}`}</div>
                                    </div>
                                </div>
                                <div className='textNext'> NEXT DRAWING</div>
                                <div className='textDate'> 
                                    {`${ pickDate }`}
                                </div>
                                <div className="playbtn"> 
                                    <a href="https://apps.apple.com/us/app/jackpocket-lottery-app/id663046683" style={{textDecoration:'none', color:'white'}}> 
                                        PLAY NOW
                                    </a>
                                </div>
                            </div>
                            <div className='cardbottombg' style={{backgroundImage:`url(${cardbottombg})`}}>
                            </div>
                        </div>
                        </Grid>                        
                   </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <div className='mainadd-card'>
                        <div className='cardaddbg' style={{backgroundImage:`url(${cardbg})`}}>
                        </div>
                        <div className='cardaddbottombg' style={{backgroundImage:`url(${cardbottombg})`}}>
                            
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container style={{
                    paddingTop:'20px',}
                }>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className='about-lottery'>
                            ABOUT LOTTERY CASH VALUE:
                        </div>
                        <div className="about-text">
                            Do you want to know how much of the advertised Powerball or Mega-Millions jackpot would really
                            arrive on your bank account if you win?
                            your bank account. The advertised Jackpot assumes that you will choose a annuity pay out,
                            which means you will get a certain $ value each year. This is not recommended and you will
                            discounts the total value paid out - and that is how the “Cash Value” is calculated.
                            Cash value is the amount that you will still have to tax - and on Federal and potentially state
                            level. After the calculation is done, what really arrives on your bank account is a fraction of
                            the advertised jackpot and is approximately 45%. Our example calculation is based on 
                        </div>
                    </Grid>
                </Grid>
        </div>
    );
}

function calculateTaxFederal(amount){
    
    var percent = getPercent(0,9699, 10.0, amount)
    if( percent == null )
        percent = getPercent(9700, 39474, 12.0, amount)
    if( percent == null )
        percent = getPercent(39475, 84199, 22.0, amount)
    if( percent == null )
        percent = getPercent(84200, 160724, 24.0, amount)
    if( percent == null )
        percent = getPercent(160725, 204099, 32.0, amount)
    if( percent == null )
        percent = getPercent(204100, 510299, 35.0, amount)
            
    if( percent == null )
        percent = getPercentSingle(510300 , 37.00, amount)    
    return (percent * amount)/100;        
}

function calculateTaxState(state, amount){

    switch(state)
    {
        case 'Alabama':
            var percent = getPercent(0,499, 2.00, amount)
            if( percent == null )
                percent = getPercent(500, 2999, 4.00, amount)    
            if( percent == null )
                percent = getPercentSingle(3000 , 5.00, amount)    
            
            return (percent * amount)/100;        
        
        case 'Alaska':
            return 0;        
        
        case 'Arizona':
            var percent = getPercent(0, 11046, 2.59, amount)
            if( percent == null )
                percent = getPercent(11047, 27613, 2.88, amount)    
            if( percent == null )
                percent = getPercent(27614, 55225, 3.36, amount)    
            if( percent == null )
                percent = getPercent(55226, 165673, 4.24, amount)    
            if( percent == null )
                percent = getPercentSingle(165674 , 4.54, amount)    
            return (percent * amount)/100; 
            
        case 'Arkansas':
            var percent = getPercent(0, 4499, 0.99, amount)
            if( percent == null )
                percent = getPercent(4500, 8899, 2.50, amount)    
            if( percent == null )
                percent = getPercent(8900, 13399, 3.50, amount)    
            if( percent == null )
                percent = getPercent(13400, 22199, 4.50, amount)    
            if( percent == null )
                percent = getPercent(22200, 37199, 5.00, amount)    
            if( percent == null )
                percent = getPercentSingle(37200 , 6.90, amount)    
            return (percent * amount)/100; 
        
        case 'California':
            var percent = getPercent(0, 8543, 1.00, amount)
            if( percent == null )
                percent = getPercent(8544, 20254, 2.00, amount)    
            if( percent == null )
                percent = getPercent(20255, 31968, 4.00, amount)    
            if( percent == null )
                percent = getPercent(31969, 44376, 6.00, amount)    
            if( percent == null )
                percent = getPercent(44377, 56084, 8.00, amount)    
            if( percent == null )
                percent = getPercent(56085, 286491, 9.30, amount)    
            if( percent == null )
                percent = getPercent(286492, 343787, 10.30, amount)    
            if( percent == null )
                percent = getPercent(343788, 572979, 11.30, amount)    
            if( percent == null )
                percent = getPercent(572980, 999999, 12.30, amount)    
            if( percent == null )
                percent = getPercentSingle(1000000 , 13.30, amount)    
            return (percent * amount)/100;
        
        case 'Colorado':
            return (4.63 * amount)/100;
        
        case 'Connecticut':
            var percent = getPercent(0, 9999, 3.00, amount)
            if( percent == null )
                percent = getPercent(10000, 49999, 5.00, amount)    
            if( percent == null )
                percent = getPercent(50000, 99999, 5.50, amount)    
            if( percent == null )
                percent = getPercent(100000, 199999, 6.00, amount)    
            if( percent == null )
                percent = getPercent(200000, 249999, 6.50, amount)    
            if( percent == null )
                percent = getPercent(250000, 499999, 6.90, amount)    
            if( percent == null )
                percent = getPercentSingle(500000 , 6.99, amount)    
            return (percent * amount)/100;
        
        case 'Delaware':
            var percent = getPercent(0, 1999, 2.00, amount)
            if( percent == null )
                percent = getPercent(2000, 4999, 2.20, amount)    
            if( percent == null )
                percent = getPercent(5000, 9999, 3.90, amount)    
            if( percent == null )
                percent = getPercent(10000, 19999, 4.80, amount)    
            if( percent == null )
                percent = getPercent(20000, 24999, 5.20, amount)    
            if( percent == null )
                percent = getPercent(25000, 59999, 5.55, amount)    
            if( percent == null )
                percent = getPercentSingle(60000 , 6.60, amount)    
            return (percent * amount)/100;
            
        case 'Florida':
            return 0;
        
        case 'Georgia':
            var percent = getPercent(0, 749, 1.00, amount)
            if( percent == null )
                percent = getPercent(750, 2249, 2.00, amount)    
            if( percent == null )
                percent = getPercent(2250, 3749, 3.00, amount)    
            if( percent == null )
                percent = getPercent(3750, 5249, 4.00, amount)    
            if( percent == null )
                percent = getPercent(5250, 6999, 5.00, amount)    
            if( percent == null )
                percent = getPercentSingle(7000 , 5.75, amount)    
            return (percent * amount)/100;
            
        case 'Hawaii':
            var percent = getPercent(0, 2399, 1.40, amount)
            if( percent == null )
                percent = getPercent(2400, 4799, 3.20, amount)    
            if( percent == null )
                percent = getPercent(4800, 9599, 5.50, amount)    
            if( percent == null )
                percent = getPercent(9600, 14399, 6.40, amount)    
            if( percent == null )
                percent = getPercent(14400, 19199, 6.80, amount)    
            if( percent == null )
                percent = getPercent(19200, 23999, 7.20, amount)    
            if( percent == null )
                percent = getPercent(24000, 35999, 7.60, amount)    
            if( percent == null )
                percent = getPercent(36000, 47999, 7.90, amount)    
            if( percent == null )
                percent = getPercent(48000, 149999, 8.25, amount)    
            if( percent == null )
                percent = getPercent(150000, 174999, 9.00, amount)    
            if( percent == null )
                percent = getPercent(175000, 199999, 10.00, amount)    
            if( percent == null )
                percent = getPercentSingle(200000 , 11.00, amount)    
            return (percent * amount)/100;
            
        case 'Idaho':
            var percent = getPercent(0, 1540, 1.13, amount)
            if( percent == null )
                percent = getPercent(1541, 3080, 3.13, amount)    
            if( percent == null )
                percent = getPercent(3081, 4621, 3.63, amount)    
            if( percent == null )
                percent = getPercent(4622, 6161, 4.63, amount)    
            if( percent == null )
                percent = getPercent(6162, 7702, 5.63, amount)    
            if( percent == null )
                percent = getPercent(7703, 11553, 6.63, amount)    
            if( percent == null )
                percent = getPercentSingle(11554 , 6.93, amount)    
            return (percent * amount)/100;
        
        case 'Illinois':
            return (4.95 * amount)/100;
        
        case 'Indiana':
            return (3.23 * amount)/100;
        
        case 'Iowa':
            var percent = getPercent(0, 1637, 0.33, amount)
            if( percent == null )
                percent = getPercent(1638, 3275, 0.67, amount)    
            if( percent == null )
                percent = getPercent(3276, 6551, 2.25, amount)    
            if( percent == null )
                percent = getPercent(6552, 14741, 4.14, amount)    
            if( percent == null )
                percent = getPercent(14742, 24569, 5.63, amount)    
            if( percent == null )
                percent = getPercent(24570, 32759, 5.96, amount)    
            if( percent == null )
                percent = getPercent(32760, 49139, 6.25, amount)    
            if( percent == null )
                percent = getPercent(49140, 73709, 7.44, amount)    
            if( percent == null )
                percent = getPercentSingle(73710 , 8.53, amount)    
            return (percent * amount)/100;
        
        case 'Kansas':
            var percent = getPercent(0, 2499, 2.00, amount)
            if( percent == null )
                percent = getPercent(2500, 14999, 3.10, amount)    
            if( percent == null )
                percent = getPercent(15000, 29999, 5.25, amount)    
            if( percent == null )
                percent = getPercentSingle(30000 , 5.70, amount)    
            return (percent * amount)/100;
        
        case 'Kentucky':
            return (5.00 * amount)/100;
        
        case 'Louisiana':
            var percent = getPercent(0, 12499, 2.00, amount)
            if( percent == null )
                percent = getPercent(12500, 49999, 4.00, amount)    
            if( percent == null )
                percent = getPercentSingle(50000 , 6.00, amount)    
            return (percent * amount)/100;
        
        case 'Kansas':
            var percent = getPercent(0, 21849, 5.80, amount)
            if( percent == null )
                percent = getPercent(21850, 51699, 6.75, amount)    
            if( percent == null )
                percent = getPercentSingle(51700, 7.15, amount)    
            return (percent * amount)/100;

        case 'Maryland':
            var percent = getPercent(0, 999, 2.00, amount)
            if( percent == null )
                percent = getPercent(1000, 1999, 3.00, amount)    
            if( percent == null )
                percent = getPercent(2000, 2999, 4.00, amount)    
            if( percent == null )
                percent = getPercent(3000, 99999, 4.75, amount)    
            if( percent == null )
                percent = getPercent(100000, 124999, 5.00, amount)    
            if( percent == null )
                percent = getPercent(125000, 149999, 5.25, amount)    
            if( percent == null )
                percent = getPercent(150000, 249999, 5.50, amount)    
            if( percent == null )
                percent = getPercentSingle(250000 , 5.75, amount)    
            return (percent * amount)/100;
        
        case 'Massachusetts':
            return (5.05 * amount)/100;
        
        case 'Michigan':
            return (4.25 * amount)/100;
        
        case 'Minnesota':
            var percent = getPercent(0, 26519, 5.35, amount)
            if( percent == null )
                percent = getPercent(26520, 87109, 7.05, amount)    
            if( percent == null )
                percent = getPercent(87110, 163889, 7.85, amount)    
            if( percent == null )
                percent = getPercentSingle(163890, 9.85, amount)    
            return (percent * amount)/100;
    
        case 'Mississippi':
            var percent = getPercent(0, 999, 2.00, amount)
            if( percent == null )
                percent = getPercent(1000, 4999, 3.00, amount)    
            if( percent == null )
                percent = getPercent(5000, 9999, 4.00, amount)    
            if( percent == null )
                percent = getPercentSingle(10000, 5.00, amount)    
            return (percent * amount)/100;
    
        case 'Missouri':
            var percent = getPercent(0, 1052, 1.50, amount)
            if( percent == null )
                percent = getPercent(1053, 2105, 2.00, amount)    
            if( percent == null )
                percent = getPercent(2106, 3158, 2.50, amount)    
            if( percent == null )
                percent = getPercent(3159, 4211, 3.00, amount)    
            if( percent == null )
                percent = getPercent(4212, 5264, 3.50, amount)    
            if( percent == null )
                percent = getPercent(5265, 6317, 4.00, amount)    
            if( percent == null )
                percent = getPercent(6318, 7370, 4.50, amount)    
            if( percent == null )
                percent = getPercent(7371, 8423, 5.00, amount)    
            
            if( percent == null )
                percent = getPercentSingle(8424, 5.40, amount)    
            return (percent * amount)/100;

        case 'Montana':
            var percent = getPercent(0, 3099, 1.00, amount)
            if( percent == null )
                percent = getPercent(3100, 5399, 2.00, amount)    
            if( percent == null )
                percent = getPercent(5400, 8199, 3.00, amount)    
            if( percent == null )
                percent = getPercent(8200, 11099, 4.00, amount)    
            if( percent == null )
                percent = getPercent(11100, 14299, 5.00, amount)    
            if( percent == null )
                percent = getPercent(14300, 18399, 6.00, amount)    
            
            if( percent == null )
                percent = getPercentSingle(18400, 6.90, amount)    
            return (percent * amount)/100;
        
        case 'Nebraska':
            var percent = getPercent(0, 3289, 2.46, amount)
            if( percent == null )
                percent = getPercent(3290, 19719, 3.51, amount)    
            if( percent == null )
                percent = getPercent(19720, 31779, 5.01, amount)    
            
            if( percent == null )
                percent = getPercentSingle(31780, 6.84, amount)    
            return (percent * amount)/100;

        case 'Nevada':
            return 0;
    
        case 'New Hampshire':
            return (5.00 * amount)/100;
        
        case 'New Jersey':
            var percent = getPercent(0, 19999, 1.40, amount)
            if( percent == null )
                percent = getPercent(20000, 34999, 1.75, amount)    
            if( percent == null )
                percent = getPercent(35000, 39999, 3.50, amount)    
            if( percent == null )
                percent = getPercent(40000, 74999, 5.53, amount)    
            if( percent == null )
                percent = getPercent(75000, 499999, 6.37, amount)    
            if( percent == null )
                percent = getPercent(500000, 4999999, 8.97, amount)    
            
            if( percent == null )
                percent = getPercentSingle(5000000, 10.75, amount)    
            return (percent * amount)/100;
    
        case 'New Mexico':
            var percent = getPercent(0, 5499, 1.70, amount)
            if( percent == null )
                percent = getPercent(5500, 10999, 3.20, amount)    
            if( percent == null )
                percent = getPercent(11000, 15999, 4.70, amount)    
            
            if( percent == null )
                percent = getPercentSingle(16000, 4.90, amount)    
            return (percent * amount)/100;
    
        case 'New York':
            var percent = getPercent(0, 8499, 4.00, amount)
            if( percent == null )
                percent = getPercent(8500, 11699, 4.50, amount)    
            if( percent == null )
                percent = getPercent(11700, 13899, 5.25, amount)    
            if( percent == null )
                percent = getPercent(13900, 21399, 5.90, amount)    
            if( percent == null )
                percent = getPercent(21400, 80649, 6.21, amount)    
            if( percent == null )
                percent = getPercent(80650, 215399, 6.49, amount)    
            if( percent == null )
                percent = getPercent(215400, 1077549, 6.85, amount)    
            
            if( percent == null )
                percent = getPercentSingle(1077550, 8.82, amount)    
            return (percent * amount)/100;
    
        case 'North Carolina':
            return (5.25 * amount)/100;    
    
        case 'North Dakota':
            var percent = getPercent(0, 39449, 1.10, amount)
            if( percent == null )
                percent = getPercent(39450, 95499, 2.04, amount)    
            if( percent == null )
                percent = getPercent(95500, 199249, 2.27, amount)    
            if( percent == null )
                percent = getPercent(199250, 433199, 2.64, amount)    
            
            if( percent == null )
                percent = getPercentSingle(433200, 2.90, amount)    
            return (percent * amount)/100;
    
        case 'Ohio':
            var percent = getPercent(0, 10849, 1.00, amount)
            if( percent == null )
                percent = getPercent(10850, 16299, 1.98, amount)    
            if( percent == null )
                percent = getPercent(16300, 21749, 2.75, amount)    
            if( percent == null )
                percent = getPercent(21750, 43499, 2.97, amount)    
            if( percent == null )
                percent = getPercent(43450, 86899, 3.47, amount)    
            if( percent == null )
                percent = getPercent(86900, 108699, 3.96, amount)    
            if( percent == null )
                percent = getPercent(108700, 217399, 4.60, amount)    
            
            if( percent == null )
                percent = getPercentSingle(217400, 5.00, amount)    
            return (percent * amount)/100;

        case 'Oregon':
            var percent = getPercent(0, 3549, 5.00, amount)
            if( percent == null )
                percent = getPercent(3550, 8899, 7.00, amount)    
            if( percent == null )
                percent = getPercent(8900, 124999, 9.00, amount)    
            
            if( percent == null )
                percent = getPercentSingle(125000, 9.90, amount)    
            return (percent * amount)/100;
    
        case 'Pennsylvania':
            return (3.07 * amount)/100;
        
        case 'Rhode Island':
            var percent = getPercent(0, 64049, 3.75, amount)
            if( percent == null )
                percent = getPercent(64050, 145599, 4.75, amount)    
            
            if( percent == null )
                percent = getPercentSingle(145600, 5.99, amount)    
            return (percent * amount)/100;
        
        case 'South Carolina':
            var percent = getPercent(0, 2449, 1.10, amount)
            if( percent == null )
                percent = getPercent(2450, 4899, 3.00, amount)    
            if( percent == null )
                percent = getPercent(4900, 7349, 4.00, amount)    
            if( percent == null )
                percent = getPercent(7350, 9799, 5.00, amount)    
            if( percent == null )
                percent = getPercent(9800, 12249, 6.00, amount)    
            
            if( percent == null )
                percent = getPercentSingle(12250, 7.00, amount)    
            return (percent * amount)/100;
        
        case 'South Dakota':
            return 0;
         
        case 'Tennessee':
            return (2.00 * amount)/100;
       
        case 'Texas':
            return 0;

        case 'Utah':
            return (4.95 * amount)/100;

        case 'Vermont':
            var percent = getPercent(0, 39599, 3.35, amount)
            if( percent == null )
                percent = getPercent(39600, 95899, 6.60, amount)    
            if( percent == null )
                percent = getPercent(95900, 200099, 7.60, amount)    
            
            if( percent == null )
                percent = getPercentSingle(200100, 8.75, amount)    
            return (percent * amount)/100;
        
        case 'Virginia':
            var percent = getPercent(0, 2999, 2.00, amount)
            if( percent == null )
                percent = getPercent(3000, 4999, 3.00, amount)    
            if( percent == null )
                percent = getPercent(5000, 16999, 5.00, amount)    
            
            if( percent == null )
                percent = getPercentSingle(17000, 5.75, amount)    
            return (percent * amount)/100;
        
        case 'Washington':
            return 0;
        
        case 'West Virginia':
            var percent = getPercent(0, 9999, 3.00, amount)
            if( percent == null )
                percent = getPercent(10000, 24999, 4.00, amount)    
            if( percent == null )
                percent = getPercent(25000, 39999, 4.50, amount)    
            if( percent == null )
                percent = getPercent(40000, 59999, 6.00, amount)    
            
            if( percent == null )
                percent = getPercentSingle(60000, 6.50, amount)    
            return (percent * amount)/100;
        
        case 'Wisconsin':
            var percent = getPercent(0, 11759, 4.00, amount)
            if( percent == null )
                percent = getPercent(11760, 23519, 5.84, amount)    
            if( percent == null )
                percent = getPercent(23520, 258949, 6.27, amount)    
            
            if( percent == null )
                percent = getPercentSingle(258950, 7.65, amount)    
            return (percent * amount)/100;
            
        case 'Wyoming':
            return 0;
        
        case 'District of Columbia':
            var percent = getPercent(0, 9999, 4.00, amount)
            if( percent == null )
                percent = getPercent(10000, 39999, 6.00, amount)    
            if( percent == null )
                percent = getPercent(40000, 59999, 6.50, amount)    
            if( percent == null )
                percent = getPercent(60000, 349999, 8.50, amount)    
            if( percent == null )
                percent = getPercent(350000, 999999, 8.75, amount)    
            
            if( percent == null )
                percent = getPercentSingle(1000000, 8.95, amount)    
            return (percent * amount)/100;
            
    }
}

function getPercent(min , max , percent ,amount )
{
    if(amount >= min && amount <= max)
        return percent;
    else
        return null;
}

function getPercentSingle(min , percent ,amount )
{
    if(amount >= min)
        return percent;
    else
        return null;
}

function formatCurrency(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export default Home;
