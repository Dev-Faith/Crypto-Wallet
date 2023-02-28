import './header.css';
import { RiSettings5Fill } from 'react-icons/ri';
const Header = () => {
    return (<div className="header">
        <h1>COIN NODE</h1>
        <div className="header-setting-icon">
            <RiSettings5Fill/>
        </div>
    </div> );
}
 
export default Header;