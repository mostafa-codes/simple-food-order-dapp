import { useState } from 'react';
import { MdSort } from 'react-icons/md';
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { BsXLg } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import './Header.scss';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = (e: any) => {
    e.preventDefault();
    setIsActive(() => !isActive);
  };

  return (
    <div className="layout-header  ">
      <div className="container header-nav d-flex justify-content-between d-lg-none">
        <div
          className="wallet-account d-lg-none"
          style={{
            cursor: 'pointer',
          }}
          onClick={toggleNav}
        >
          {/* <SiEthereum /> */}

          <MdSort />
          {/* <span className="ms-2">{'balance'} ETH</span> */}
        </div>

        <div className="  me-0">
          <CiSearch className="me-3" />
        </div>
      </div>

      <div className={`mobile-nav ${isActive && 'mobile-nav-open'}`}>
        <div className="mobile-nav-inner d-flex flex-column p-3">
          {/* close nav */}
          <div className="top-close pt-2">
            <span onClick={toggleNav} className="close-wrapper me-2">
              <BsXLg />
            </span>
          </div>
          {/* profile */}
          <div className="nav-profile d-flex mt-5">
            <div className="profile">
              <img src={''} />
            </div>
            <div className="ms-2 my-auto profile-desc">
              <div className="profile-name">
                Lindsey Rhiel
                <img className="ms-1" src={'tick'} width={13} alt="" />
              </div>
              <div className="wallet-address">{'addressTrim'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
