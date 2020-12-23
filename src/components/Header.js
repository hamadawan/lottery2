import '../css/Header.css'
import headerB from '../images/header.png'
import lottery from '../images/lottery3.png'
import pages from '../images/pages.png'
import pages2 from '../images/page-2.png'
import dollar from '../images/dollar.png'
import ball from '../images/ball1.png'
import ball2 from '../images/ball2.png'
import ball_2 from '../images/2-ball.png'
import pencil from '../images/pencil.png'
import coin from '../images/coin.png'



function Header() {
  return (
    <div>
      <div style={{
        height: '150px',
        width:'100%',
        position:'relative'
      }}>
      <img style ={{width:'100%',zIndex:"-10",height:'485%',position:'relative', marginTop:'-48px'}} src={headerB} />
      </div>
      <div className='branding'>
        <img src={lottery} style ={{width:'70%',maxWidth:'400px', marginTop:'10px',height:'60px'}}/>
        <h1 className="text-gradient" 
          className="cash-value"
          >
          CASH VALUE 
        </h1>
      </div>
      <div  style ={{
            width:'9%', height:'18%' ,backgroundImage:`url(${ball})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            maxWidth:"100px",
            maxHeight:"100px",
            
            position:'absolute', top:'-10px', left:'53%'
            
         }}
         className='none'
         >
      </div>
      <div  style ={{
            width:'20%', height:'20%' ,backgroundImage:`url(${pages})`,
            backgroundSize:'cover',
            maxWidth:"200px",
            maxHeight:'150px',
            backgroundRepeat:'no-repeat',
            position:'absolute', top:'40px', left:'45%'
            
         }}
         className='none'
         >
      </div>
      <div  style ={{
            width:'20%', height:'25%' ,backgroundImage:`url(${pages2})`,
            backgroundSize:'cover',
            maxWidth:"200px",
            maxHeight:"150px",
            
            backgroundRepeat:'no-repeat',
            position:'absolute', top:'-10px', left:'25%'
            
         }}
         className='none'

         >
      </div>
      <div  style ={{
            width:'30%', height:'35%' ,backgroundImage:`url(${dollar})`,
            backgroundSize:'cover',
            maxWidth:"450px",
            maxHeight:"210px",
            
            backgroundRepeat:'no-repeat',
            position:'absolute', top:'-40px', left:'55%'
            
         }}
         className='none'
         >
      </div>
      <div  style ={{
            width:'30%', height:'35%' ,backgroundImage:`url(${dollar})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            maxWidth:"450px",
            maxHeight:"210px",
            
            position:'absolute', top:'-40px', left:'62%'
            
         }}
         className='none'
         >
      </div>
      <div  style ={{
            width:'30%', height:'35%' ,backgroundImage:`url(${dollar})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            maxWidth:"450px",
            position:'absolute', top:'-40px', left:'69%',
            maxHeight:"210px",
            
         }}
         className='none'
         >
      </div>
      
      <div  style ={{
            width:'9%', height:'18%' ,backgroundImage:`url(${ball2})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            maxWidth:"100px",
            maxHeight:"100px",
            
            position:'absolute', top:'90px', left:'53%'
            
         }}
         className='none'

         >
      </div>
      <div  style ={{
            width:'15%', height:'30%' ,backgroundImage:`url(${ball_2})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            maxWidth:"160px",
            maxHeight:"160px",
            
            position:'absolute', top:'20px', left:'30%',
            
         }}
         className='none'

         >
      </div>
      <div  style ={{
            width:'6%', height:'12%' ,backgroundImage:`url(${pencil})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            position:'absolute', top:'-15px', left:'27%',
            maxHeight:"50px",
            
         }}
         
         className='none'
         >
      </div>
      <div  style ={{
            width:'10%', height:'20%' ,backgroundImage:`url(${coin})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            position:'absolute', top:'-35px', left:'33%',
            maxHeight:"100px",
              
         }}
         className='none'
         
         >
      </div>

      <div  style ={{
            width:'12.5%', height:'25%' ,backgroundImage:`url(${coin})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            position:'absolute', top:'20px', left:'23%',
            maxHeight:"100px",
            
         }}
         className='none'

         >
      </div>
      
      <div  style ={{
            backgroundImage:`url(${pages2})`
         }}
         className='page_small'
         >
      </div>
      <div  style ={{
            backgroundImage:`url(${dollar})`
         }}
         className='dollar_small'
         >
      </div>
      <div  style ={{
            backgroundImage:`url(${ball_2})`
         }}
         className='ball_small'
         >
      </div>
      <div  style ={{
            width:'60px', height:'50px' ,backgroundImage:`url(${pencil})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            position:'absolute', top:'25px', left:'45%',
            
         }}
         
         >
      </div>
    </div>
  );
}

export default Header;
