import React from 'react'
import Login from './Login'
import Register from './Register'
import Spinner from './Spinner'
import { connect } from 'react-redux'
import {endLoad, sendRequest, logInSuccess, logInFail} from '../../actions'
import { Redirect } from 'react-router-dom'
import Logo from '../../images/test.jpg'
import AppStyle from '../css/App.css'


class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showLogin:true,
            errors: "",
            shouldRedirect: false
        };
        this.toggleShow = this.toggleShow.bind(this);
        this.onLogInRequest = this.onLogInRequest.bind(this);
        this.toRender = this.toRender.bind(this);
    }

    // After mounting set background image
    componentDidMount(){
        if(localStorage.getItem("jwt")){
            this.setState({
                shouldRedirect: true
            })
        }else{
            let body = document.getElementsByName('body');
            body.backgroundImage = "url('../../images/Backsplash.png')";
            body.backgroundRepeat = 'no-repeat, no-repeat';
            body.backgroundSize = 'cover'
        }
    }

    // Before unmounting clear the background
    componentWillUnmount(){
        let body = document.getElementsByName('body');
    }

    onLogInRequest(userObject){
        this.props.onRequest();
        fetch('http://localhost:5000/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userObject)
            }
        ).then(response => {
            return response.json();
        }).then(newObject => {
            console.log(newObject);
            if (newObject.status === "fail"){
                this.props.endLoad();
                alert(newObject.message)
            }else if(newObject.status === "success"){
                this.props.endLoad();
                window.localStorage.setItem('jwt', newObject.auth_token);
                this.setState({
                    shouldRedirect: true
                });
            }
        }).catch(e => {
            console.log(e);
        });

    }

    onRegisterRequest(userObject){
        this.props.onRequest();
        fetch('http://localhost:5000/auth/register',
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(userObject)
            }).then(response => {
                return response.json();
            }).then(response =>{
                if(response.status === "success"){
                    this.props.endLoad();
                    window.localStorage.setItem('jwt', response.auth_token);
                    this.setState({
                        shouldRedirect: true
                    });
                }else if(response.status === "fail"){
                    this.props.endLoad();
                    alert(response.message)
                }
            }).catch(e=>{
                console.log(e);
            })
    }

    toggleShow(){
        console.log("inside");
        this.setState({
            showLogin:!this.state.showLogin
        })
    }

    renderErrors(){

           if(this.state.errors) {
               return( <div className={'alert alert-danger'}>
                            {this.state.errors}
                        </div>)
           }else{
               return <div></div>
           }

    }

    toRender(){
        if(this.state.shouldRedirect){
            return <Redirect to={"/dashboard/my-info"} />
        }
        else if(this.props.isFetching){
            return Spinner();
        }else{
            return this.state.showLogin?<Login renderErrors={()=>{this.renderErrors()}}
                                               onLogin = {(user)=>this.onLogInRequest(user)} onRedirect = {()=>{this.toggleShow()}}/>
                :<Register  renderErrors={()=>{this.renderErrors()}}
                            onRegister = {(userObject)=>{this.onRegisterRequest(userObject)}}
                            errors={this.state.errors} onRedirect={()=>{this.toggleShow()}} />
        }
    }

    render(){
        let elements = this.toRender();
        return(
            <div className={"back"}>
            <div style={{marginTop:100,}} className={"container-fluid"}>
                <div className={"row"}>
                    <div style={{marginRight:'auto',marginLeft:'auto', marginTop:-200, marginBottom:-75}}>
                        <img className={"img img-responsive"} src={Logo} />
                    </div>
                </div>
                {elements}
            </div>
            </div>
        )
    }

}

const mapDispatchToProps = {
    onRequest: sendRequest,
    onLoginSuccess: logInSuccess,
    onLoginFail: logInFail,
    endLoad: endLoad
};

const mapStateToProps = (state) => {
    return{
        isFetching: state.auth.isFetching
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);