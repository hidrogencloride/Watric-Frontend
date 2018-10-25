import React from 'react'
import Navigation from './Navigation' ;
import {sendRequest, endLoad, setUser} from "../../actions";
import Dashboard from '../css/Dashboard.css';
import Sidebar from './Sidebar'
import Footer from './footer'
import {Route, Redirect} from 'react-router-dom';
import UserInfo from './UserInfo'
import {connect} from 'react-redux';
import Spinner from '../LoginRegister/Spinner';
import Products from './Products'

class Index extends React.Component{

    constructor(props){
        super(props);
        this.state={
            shouldRedirect: false,
            loggedIn: {
                name:'Loading',
                email:'Loading',
                purchases:'Loading'
            }
        };
        this.toRenderInContent = this.toRenderInContent.bind(this);

    }

    componentDidMount(){
        this.props.sendRequest();
        fetch('http://localhost:5000/auth/status', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('jwt')
            }
        }).then(response=>{
            return response.json();
        }).then(response=>{
            if(response.status === 'success'){
                console.log(response);
                this.props.setUser(response.data);
                console.log(this.props.user);
                this.props.endLoad();
                this.setState({
                    loggedIn:this.props.user
                });
            }else{
                alert(response.message);
                localStorage.removeItem('jwt');
                this.props.endLoad();
                this.setState({
                    shouldRedirect: true
                })
            }
        })
    }

    toRenderInContent(){
        if(this.props.isFetching){
            return (
                <Spinner/>
            )
        }else {
            return (
                <div className={"col-xs-12"}>
                    <Route path={"/dashboard/my-info"} render={
                        ()=>{ return <UserInfo user={this.props.user}/> }
                    }/>
                    <Route path={"/dashboard/products"} component={Products}/>
                </div>
            )
        }
    }

    render(){
        // if should redirect go back to login page
        let elements = this.toRenderInContent();
        console.log(this.state);
        return (
            <div style={{height:'100%'}}>
            {!this.state.shouldRedirect?(<div style={{height:'100%'}}>
                            <div style={{height:'100%'}} className={"row"}>

                                <div className={"col col-md-3 col-lg-2 col-sm-3"}>
                                    <Sidebar />
                                </div>

                                <div style={{height:'100%'}} className={"col col-md-9 col-lg-10 col-sm-9"}>
                                    <div className={"row"}>
                                        <div className={"col col-xs-12"}>
                                            <Navigation email={this.state.loggedIn.email} />
                                        </div>
                                    </div>
                                    <div className={"row content"}>
                                        <div style={{width:'100%'}} className={"col-xs-12"}>
                                            {elements}
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>):<Redirect to={"/"}/>}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    isFetching: state.auth.isFetching,
    user: state.auth.user
});

const mapDispatchToProps = {
     sendRequest: sendRequest,
     endLoad: endLoad,
     setUser: setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Index)