import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from "axios";

import Login from './Login';
import Register from './Register';
import Currencies from './Currencies';
import Transactions from './Transactions';
import Categories from './Categories';
import Wallets from './Wallets';
import User from './User';
import NoPage from './NoPage';

function App() {

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("token");
      alert("Logout berhasil");
      window.location.href = "/login";

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App"> {/* ✅ INI YANG KURANG */}

      <BrowserRouter>
        <input type="checkbox" id="check"/>
        <label for ="check" class="menu-burger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div class="nav-menu">
          <li><a href="login">Login</a></li>
          <li><a href="register">Register</a></li>
          <li><a href="user">User</a></li>
          <li><a href="currencies">Currencies</a></li>
          <li><a href="wallets">Wallets</a></li>
          <li><a href="categories">Categories</a></li>
          <li><a href="transactions">Transactions</a></li>
          <button onClick={handleLogout} className='m-2'>
                Logout
              </button>
        </div>

              
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/' element={<Register />} />
          <Route path='register' element={<Register />} />
          <Route path='user' element={<User />} />
          <Route path='currencies' element={<Currencies />} />
          <Route path='wallets' element={<Wallets />} />
          <Route path='categories' element={<Categories />} />
          <Route path='transactions' element={<Transactions />} />
          <Route path='*' element={<NoPage />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;