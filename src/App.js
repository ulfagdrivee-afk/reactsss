import './App.css';
import { BrowserRouter, Route, Routes } 
from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Currencies from './Currencies';
import Transactions from './Transactions';
import Categories from './Categories';
import Wallets from './Wallets';
import User from './User';
import NoPage from './NoPage';
// import Navbar from './Navbar';
function App() {
  return (
    <div className="App">

      

      <BrowserRouter>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
<a href="/" className='btn btn-primary '>Login</a>
 <a href="/register" className='btn btn-primary m-2'>Register</a>
  <a href="/user" className='btn btn-primary m-2'>User</a> 
  <a href="/currencies" className='btn btn-primary m-2'>Currencies</a> 
  <a href="/wallets" className='btn btn-primary m-2'>Wallets</a> 
  <a href="/categories" className='btn btn-primary m-2'>Categories</a> 
  <a href="/transactions" className='btn btn-primary m-2'>Transactions</a> 
  </div>
</nav>
      
            <Routes>


        <Route path='/' element={<Login/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='user' element={<User/>}/>
        <Route path='currencies' element={<Currencies/>}/>
          <Route path='wallets' element={<Wallets/>}/> 
            <Route path='categories' element={<Categories/>}/>
            <Route path='transactions' element={<Transactions/>}/>
          <Route path='*' element={<NoPage/>}/>
      </Routes>
      
    
      </BrowserRouter>
    </div>
  );
}

export default App;

