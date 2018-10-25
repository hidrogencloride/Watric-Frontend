import React from 'react'

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            name:'',
            username:'',
            password:'',
            error:''
        }
    }

    onChange(e, field){
        let newObject = Object.assign({}, this.state);
        newObject[field] = e.target.value;
        console.log(newObject);
        this.setState(newObject);
    }

    handleRegister(){
        let userObject = {
            email: this.state.email,
            name: this.state.name,
            username: this.state.username,
            password: this.state.password
        };
        this.props.onRegister(userObject);
    }

    returnClassName(field){
        if(this.state[field].length === 0){
            return "is-invalid"
        }else{
            return "is-valid"
        }
    }

    render(){
        let errors = this.props.renderErrors();
        return(
            <div className={"row"}>
            <div className="card col col-xs-12 col-md-4 offset-md-4 align-self-center" style={{ minWidth: '500px', marginBottom:50}}>
                <div className="card-body row" >
                    <div className={"col col-xs-6 offset-xs-3"} style={{padding:30}}>
                    <h3 className="card-title text-center">Register</h3>
                    {errors}
                    <div className={"needs-validation"}>
                        <div className={"form-group"}>
                            <label htmlFor={"email"} >Email:</label>
                            <input
                                onChange={(event) => {this.onChange(event, "email")}}
                                value={this.state.email}
                                id="email" type={"email"}
                                className={"form-control "+this.returnClassName("email")}
                                placeholder={"Email"} required/>
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"full_name"}>Full Name:</label>
                            <input
                                onChange={(event) => {this.onChange(event, "name")}}
                                value={this.state.name}
                                id="full_name" type={"text"} className={"form-control "+this.returnClassName("name")}
                                placeholder={"Full Name"}/>
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"username"}>User Name:</label>
                            <input
                                onChange={(event) => {this.onChange(event, "username")}}
                                value={this.state.username}
                                id="username" type={"text"} className={"form-control "+this.returnClassName("username")}
                                placeholder={"User Name"}/>
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"password"}>Password:</label>
                            <input
                                onChange={(event)=>{this.onChange(event, "password")}}
                                value={this.state.password}
                                id="password" className={"form-control "+this.returnClassName("password")}
                                type={"password"} placeholder={"Password"}/>
                        </div>
                        <button  onClick={()=>{this.handleRegister()}} className={"btn btn-success"}>
                            Register
                        </button>
                    </div>
                    <p>
                        Already Have Account? <button onClick={this.props.onRedirect}
                                                      className={"btn btn-link"}>Log In</button>
                    </p>
                    </div>
                </div>
            </div>
            </div>)
    }
}

export default Register