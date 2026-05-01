import { Component } from "react";
class Login extends Component  {
    render() {
        return (
            <div className="container mt-5">
                <h2 className="text-primary">Login</h2>
               <form className="p-4 bg-light rounded shadow">
                <input className="form-control mt-3" type="email" placeholder="Email"/>
                <input className="form-control mt-3" type="Password" placeholder="Password"/>

                <a href='login' className="btn btn-success m-2">Login</a>
                <a href='register' className="btn btn-success m-2">Register</a>
                {/* <a href='currencies' className="btn btn-success m-2">Currencies</a> */}
               </form>
            </div>
        )
    }
}

export default Login;