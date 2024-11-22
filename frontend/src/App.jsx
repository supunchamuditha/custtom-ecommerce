import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';

import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <main className='main'>
        <>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/about' element={<About/>} />

          </Routes>
        </>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
