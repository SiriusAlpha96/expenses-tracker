
import './App.css';
import Header from './component/Header';
import Balance from './component/Balance';
import IncomeExpenses from './component/IncomeExpenses';
import TransactionList from './component/TransactionList';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
