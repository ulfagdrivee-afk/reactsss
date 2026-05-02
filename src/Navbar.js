import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/login">Login</Link>
    <Link className="navbar-brand" to="/register">Register</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {/* <Link className="nav-link active" aria-current="page" to="/Transactions">Transactions</Link> */}
        
        <Link className="nav-link" to="/transactions">Transactions</Link>
        <Link className="nav-link" to="/categories">Categories</Link>
        <Link className="nav-link" to="/wallets">Wallets</Link>
        <Link className="nav-link" to="/user">User</Link>
        <Link className="nav-link" to="/currencies">Currencies</Link>
        {/* <link class="nav-link disabled" aria-disabled="true">Disabled</link> */}
      </div>
    </div>
  </div>
</nav>
    )
//  <a href="/" className='btn btn-primary m-2'>Login</a>
//  <a href="/register" className='btn btn-primary m-2'>Register</a>
//   <a href="/user" className='btn btn-primary m-2'>User</a> 
//   <a href="/currencies" className='btn btn-primary m-2'>Currencies</a> 
//   <a href="/wallets" className='btn btn-primary m-2'>Wallets</a> 
//   <a href="/categories" className='btn btn-primary m-2'>Categories</a> 
//   <a href="/transactions" className='btn btn-primary m-2'>Transactions</a> 

{/* <Link to="/login" className="nav-link">Login</Link>
<Link to="/register" className="nav-link">Register</Link>
<Link to="/user" className="nav-link">User</Link>
<Link to="/wallets" className="nav-link">Wallets</Link>
<Link to="/transactions" className="nav-link">Transactions</Link>
<Link to="/currencies" className="nav-link">Currencies</Link>
<Link to="/categories" className="nav-link">Categories</Link> */}
    
}

export default Navbar;

