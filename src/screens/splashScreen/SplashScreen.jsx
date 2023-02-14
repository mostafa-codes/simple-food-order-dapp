import dish from '../../assets/dish.png';
import metamask from '../../assets/metamask.png';
import wallet2 from '../../assets/wallet2.png';
import wallet3 from '../../assets/wallet3.png';
import wallet4 from '../../assets/wallet4.png';
import './SplashScreen.scss';

function SplashScreen() {
  return (
    <div className="splash-screen">
      <div
        className="inner-wrapper 
        d-flex flex-column"
      >
        <div className="img-wrapper   d-flex">
          <img className="d-block m-auto" src={dish} />
        </div>
        <div
          className="h-100 mx-auto splash-content
          container d-flex flex-column"
        >
          <h2>Order Food</h2>
          <div className="my-3 splash-line"></div>
          <h2>Pay Crypto</h2>
          <div className="wallets">
            <img src={metamask} />
            <img src={wallet2} />
            <img src={wallet3} />
            <img src={wallet4} />
          </div>
          <button
            className="w-100 btn 
            primary-button mt-auto"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
