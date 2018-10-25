import React from 'react'

class Login extends React.Component{

    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(){
        let userObject = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };
        if(userObject.email.length !== 0 && userObject.password.length !== 0){
            this.props.onLogin(userObject);
        }
    }


    render(){

        return(
            <div className={"row align-items-center"}>
            <div className="card col col-xs-12 col-md-4 offset-md-4 align-self-center">
                    <div className="card-body row" style={{ }}>
                        <div className={"col col-xs-6 offset-xs-3"} style={{padding:30}}>
                        <h3 className="card-title text-center">Login</h3>
                            {this.props.renderErrors()}
                        <div>
                            <div className={"form-group"}>
                                <label htmlFor={"email"}>Email:</label>
                                <input id="email" type={"email"} className={"form-control"} placeholder={"Email"}/>
                            </div>
                            <div className={"form-group"}>
                                <label htmlFor={"password"}>Password:</label>
                                <input id="password" className={"form-control"} type={"password"}  placeholder={"password"}/>
                            </div>
                            <button onClick={this.handleLogin.bind(this)} className={"btn btn-success"}>
                                Log In
                            </button>
                        </div>
                        <p>Don't Have an Account? <button onClick={this.props.onRedirect}
                                                           className={"btn btn-link"}>Register</button>
                        </p>
                        </div>
                    </div>
            </div>
            </div>
        )
    }

}

export default Login