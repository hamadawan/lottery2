import cardbg from '../images/lottery-bg.png'
import cardbottombg from '../images/menubtnbg.png'
import playing from '../images/playing-the-lottery-online.png'
import jackpot from '../images/jackpotlogo.png'
import screen11 from '../images/screen11.png'
import screen22 from '../images/screen22.png'
import screen33 from '../images/screen33.png'

import Grid from '@material-ui/core/Grid';
import '../css/HowToPlay.css'

function HowToPlay() {
    
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if(newWindow!=null)newWindow.focus();
        if (newWindow) newWindow.opener = null
    }

  return (
    <div>
    <Grid container style={{
          paddingTop:'50px',}
    }>
        <Grid item xs={12} sm={12} md={12}>
            <div className="playing" style={{backgroundImage:`url(${playing})`}}>
            </div>
        </Grid>
    </Grid>
    <Grid container style={{
          paddingTop:'10px',
          paddingBottom: '50px'}
    }>
        <Grid item xs={12} sm={12} md={9}>
            <Grid container>
                <Grid item xs={12} sm={5} md={5}>
                    <div className="how-to-play-text">
                        The best and easiest way is via an online APP.
                        New Jersey found a way to act as an “Agent”
                        In any state, customers who choose to claim their winnings by mail should take several steps
                        - Save a copy of the completed claim form
                        It is completely legal and available in these 9 states:
                        Winnings of under $600 are credited straight
                        to players’ accounts while prizes greater
                        than that prompt Jackpocket to securely transfer
                        $600 and under certain amounts to be claimed
                        by mail to further enhance the convenience
                        of playing with Jackpocket.
                    </div>
                </Grid>
                <Grid item xs={12} sm={7} md={7}>
                    <div onClick={()=>openInNewTab('https://apps.apple.com/us/app/jackpocket-lottery-app/id663046683')} className="jackpotlogo" style={{backgroundImage:`url(${jackpot})`, padding:'10px'}}>
                    </div>
                </Grid>                
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} className="how-to-play-text">
                    <div style={{overflowX:"auto"}}>
                    <table>
                        <tr>
                            <td >Arkansas</td>
                            <td >Colorado</td>
                            <td >Minnesota</td>
                            <td >New Hampshire</td>
                            <td >New Jersey</td>
                            <td >Ohio</td>
                            <td >Oregon</td>
                            <td >Texas</td>
                            <td >Washington DC</td>
                        </tr>
                        <tr>
                            <td >Powerball</td>
                            <td >Powerball</td>
                            <td >Powerball</td>
                            <td >Powerball</td>
                            <td >Powerball</td>
                            <td >Powerball</td>
                            <td >Powerball</td>
                            <td >Two Step</td>
                            <td >Powerball</td>
                        </tr>
                        <tr>
                            <td  >Natural State Jackpot</td>
                            <td >Pick 3</td>
                            <td >Northstar Cash</td>
                            <td >Pick 4</td>
                            <td >Pick 6 Lotto</td>
                            <td >Pick 5</td>
                            <td >Pick 4</td>
                            <td >Powerball</td>
                            <td >Mega Millions</td>
                        </tr>
                        <tr>
                            <td >Mega Millions</td>
                            <td >Mega Millions</td>
                            <td >Mega Millions</td>
                            <td >Pick 3</td>
                            <td >Pick 4</td>
                            <td >Pick 4</td>
                            <td >Oregon&rsquo;s Game Megabucks</td>
                            <td >Pick 3</td>
                            <td >Lucky For Life</td>
                        </tr>
                        <tr>
                            <td >Lucky For Life</td>
                            <td >Lucky For Life</td>
                            <td >Lucky For Life</td>
                            <td >Megabucks Plus</td>
                            <td >Pick 3</td>
                            <td >Pick 3</td>
                            <td >Mega Millions</td>
                            <td >Mega Millions</td>
                            <td >DC 5</td>
                        </tr>
                        <tr>
                            <td >Cash 4</td>
                            <td >Cash 5</td>
                            <td >Lotto America</td>
                            <td >Mega Millions</td>
                            <td >Mega Millions</td>
                            <td >Mega Millions</td>
                            <td></td>
                            <td >Lotto Texas</td>
                            <td >DC 3</td>
                        </tr>
                        <tr>
                            <td >Cash 3</td>
                            <td ></td>
                            <td >Gopher 5</td>
                            <td >Lucky For life</td>
                            <td >Jersey Cash 5</td>
                            <td >Lucky For Life</td>
                            <td></td>
                            <td >Daily 4</td>
                            <td >DC 2</td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td></td>
                            <td >Daily 3</td>
                            <td >Gimme 5</td>
                            <td >Cash 4 Life</td>
                            <td >Classic Lotto</td>
                            <td></td>
                            <td>All or Nothing</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td >Cash 5</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} className="how-to-play-text">
                    <div>
                    In any state, customers who choose to claim their winnings by mail should take several steps
                    to protect their tickets:

                    </div>
                </Grid>
            </Grid>
            <Grid container>
                <Grid container xs={12} sm={12} md={12} className="how-to-play-text">
                    <Grid item xs={12} sm={4} md={4}>
                        <div className="screen" style={{backgroundImage:`url(${screen11})`}}></div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className="screen" style={{backgroundImage:`url(${screen22})`}}></div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className="screen" style={{backgroundImage:`url(${screen33})`}}></div>
                    </Grid>
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
        <Grid item xs={12} sm={12} md={12} className="displayCol">
            <div  onClick={()=>openInNewTab('https://apps.apple.com/us/app/jackpocket-lottery-app/id663046683')} className="playbtn" style={{marginBottom:"30px"}}>
                PLAY NOW
            </div>
        </Grid>
    </Grid>

</div>
  );
}

export default HowToPlay;
