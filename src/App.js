import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart'
import CartDisplay from './Components/CartDisplay';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Cart/>} />
          <Route path="/CartDisplay" element={<CartDisplay/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
