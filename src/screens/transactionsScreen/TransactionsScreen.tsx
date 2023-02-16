import transactions from '../../assets/transactions.svg';
import './TransactionsScreen.scss';

function TransactionsScreen() {
  const notConnected = (
    <div className="wallet-not-connected d-flex">
      <div className="m-auto mt-5 inner-transactions">
        <img
          style={{ width: '250px' }}
          src={transactions}
          alt="list of transactions"
        />
        <p className="text-white text-center">
          You can see the list of your transactions here. First use this button
          to connect your wallet.
        </p>
        <button className="btn primary-button">Connect Wallet</button>
      </div>
    </div>
  );

  return (
    <div className="transactions-screen">
      <div className="container">{notConnected}</div>
    </div>
  );
}

export default TransactionsScreen;
