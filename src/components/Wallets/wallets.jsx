import './wallets.css'
import { RiSettings5Fill } from 'react-icons/ri';
import Footer from "../../components/footer/footer";

const Wallets = () => {
  return (
    <div className="wallet">
    <h1 className="wallet text">Connect Wallet</h1>
    <p>Open protocol for connecting Wallets to Dapps</p>
    <div classNme="wallet-crypto-image">
    <img src="/Image/brd.jpg" alt="BRD wallet" />
    <img src="/Image/Coinbaselogo_Supplied_250x250-2.png" alt="BRD wallet" />
    <img src="/Image/saitama.png" alt="saitama wallet" />
    <img src="/Image/terra.png" alt="terra wallet" />
    <img src="/Image/phantom.jpeg" alt="phantom wallet" />
    <img src="/Image/cosmos.png" alt="Cosmos wallet" />
    <img src="/Image/exodus.png" alt="exodous wallet" />
    
    </div>
      
    </div>
  )
}

export default Wallets;

