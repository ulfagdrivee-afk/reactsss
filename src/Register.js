import { Component } from "react";
class Register extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h2 className="text-primary">Register</h2>
                <form className="p-4 bg-light rounded shadow">
                    <input className="form-control mb-3" type="text" placeholder="Name"/>
                    <input className="form-control mb-3" type="email" placeholder="Email"/>
                    <input className="form-control mb-3" type="password" placeholder="Password"/>

                    <a href="register" className="btn btn-success m-2">Register</a>
                    <a href="login" className="btn btn-success m-2">Login</a>
                </form>
            </div>
        )
    }
}

export default Register;