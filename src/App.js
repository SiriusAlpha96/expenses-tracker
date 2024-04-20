
import './App.css';
import Header from './component/Header';
import Balance from './component/Balance';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
      </div>
    </div>
  );
}

export default App;
