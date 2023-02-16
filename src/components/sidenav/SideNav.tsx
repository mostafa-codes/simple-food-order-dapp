import { IoBagOutline, IoWalletOutline } from 'react-icons/io5';
import { RiHome3Line } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import './SideNav.scss';

function SideNav() {
  const location = useLocation();
  return (
    <div className="side-nav d-none d-lg-block">
      <Link
        to="/"
        className={`side-nav-item ${
          location.pathname === '/' ? 'active' : ''
        } `}
      >
        <RiHome3Line />
        <span className="name">Home</span>
      </Link>
      <Link
        to="/transactions"
        className={`side-nav-item ${
          location.pathname === '/transactions' ? 'active' : ''
        } `}
      >
        <IoWalletOutline />
        <span className="name">Transactions</span>
      </Link>
      <Link
        to="/"
        className={`side-nav-item ${
          location.pathname === '/ds' ? 'active' : ''
        } `}
      >
        <IoBagOutline />
        <span className="name">Cart</span>
      </Link>
      <Link
        to="/"
        className={`side-nav-item ${
          location.pathname === '/ds' ? 'active' : ''
        } `}
      >
        <TbTruckDelivery />
        <span className="name">Your Delivery</span>
      </Link>
    </div>
  );
}

export default SideNav;
