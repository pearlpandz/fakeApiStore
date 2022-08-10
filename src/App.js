import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation';
import Homepage from './pages/home';
import ProductList from './pages/productList';
import ProductDetail from './pages/productDetail';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' index element={<Homepage />} />
          <Route path='/category/:category' index element={<ProductList  />} />
          <Route path='/product/:productId' index element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
