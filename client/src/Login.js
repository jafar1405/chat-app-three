import React from 'react';
import './Login.css';

function Login(props){

    const login = (e) => {
        e.preventDefault()
        props.handleLogin(e.target.username.value)
    }
    return(
        <div className="signin">
            <form className="form-signin" onSubmit={login}>
                {/* <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/> */}
                <h1 className="h3 mb-3 font-weight-normal text-center">Sign In</h1>
                <label className="sr-only">Email address</label>
                <input type="text" id="username"  className="form-control" placeholder="Enter You Name" required=""/>
                {/* <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div> */}
                <br/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted text-center">© 2018-2019</p>
            </form>
        </div>
    )
}

export default Login;