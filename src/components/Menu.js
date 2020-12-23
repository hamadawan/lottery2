import '../css/Menu.css'
import menubtnbg from '../images/menubtnbg.png'
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <div className='container-menu'>
        <div  style ={{ backgroundImage:`url(${menubtnbg})` }}
         className="menuHome"
         >
         <Link to="/home" style={{textDecoration:'none', color:'black'}}> 
            Home 
         </Link>  
        </div>
        <div  style ={{ backgroundImage:`url(${menubtnbg})`}}
         className="menu "
         >
           <Link to="/dividends" style={{ textAlign:'center',textDecoration:'none', color:'black'}}>
               LIVING ON DIVIDENDS
           </Link>
        </div>
        <div  style ={{backgroundImage:`url(${menubtnbg})` }}
         className="menu "
         >
           <Link to="/howtoplay" style={{textDecoration:'none', color:'black'}}>
               HOW TO PLAY ONLINE
           </Link>
        </div>
      </div>
      
  );
}
export default Menu;
