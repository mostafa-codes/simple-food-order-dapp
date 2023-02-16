import { IoBagOutline, IoWalletOutline } from 'react-icons/io5';
import { RiHome3Line } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import './BottomBar.scss';

function BottomBar() {
  const location = useLocation();
  return (
    <div className="bottom-bar d-lg-none">
      <div className="container">
        <div className="bottom-bar__inner">
          <Link
            to="/"
            className={`bottom-bar__item ${
              location.pathname === '/' ? 'active' : ''
            } `}
          >
            <RiHome3Line />
          </Link>
          <Link
            to="/transactions"
            className={`bottom-bar__item ${
              location.pathname === '/transactions' ? 'active' : ''
            } `}
          >
            <IoWalletOutline />
          </Link>
          <Link
            to="/"
            className={`bottom-bar__item ${
              location.pathname === '/ds' ? 'active' : ''
            } `}
          >
            <IoBagOutline />
          </Link>
          <Link
            to="/"
            className={`bottom-bar__item ${
              location.pathname === '/ds' ? 'active' : ''
            } `}
          >
            <TbTruckDelivery />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
