import {Link} from "react-router-dom";
import Home from "../Home";
import Faq from "../faq";

function Header({title, subtitle}) {
  return (
    <div className='header'>
    <div className='container1'>
    <div id='title'>
      <Link className='navTitle' to='/'>{title}</Link>
      
    </div>

      <nav className='navbar'>
        <Link className='nav' to='/Projects'>Projects</Link>
        <Link className='nav' to='/Wiki'>Wiki</Link>
        <Link className='nav' to='/Faq'>FAQ</Link>
      </nav>


    </div>

        <div className='subtitle'>
            <h2>{subtitle}</h2>
        </div>
    </div>
  );
}
export default Header;