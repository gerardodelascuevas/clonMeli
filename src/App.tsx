
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import ProductList from './Components/ProductList';
import Detail from './Components/Detail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element = { <ProductList /> } />
        <Route path='/:product' element = { <Detail />} />
      </Routes>
    </div>
  );
}

export default App;
