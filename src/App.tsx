
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element = { <ProductList /> } />
      </Routes>
    </div>
  );
}

export default App;
