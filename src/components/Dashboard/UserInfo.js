import React from 'react';
import GenericUser from '../../images/generic-user.png';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Route, Link} from 'react-router-dom';
import AccountOptions from './UserInfoSubRoutes/AccountOptions';
import AddressBook from './UserInfoSubRoutes/AdressBook';


const LinkComp = (to, text) => {
    return (
        <Link to={to}>{text}</Link>
    )
};


class UserInfo extends React.Component{

    constructor(){
        super();
        this.state ={
            0:false,
            1:false
        }
    }

    changeState(field){
        let toChange = Object.assign({}, this.state);
        toChange[field]?toChange[field]= true :toChange[field] = !toChange[field];
        field === 0?toChange[field+1] = false:toChange[field - 1] = false;
        this.setState(toChange);
    }

    render() {
        return (
            <div className={"info-area card"}>
                <div className={"row"}>
                    <div className={"col-xs-12 col-sm-4 col-md-3"}>
                        <img src={GenericUser} className={"img img-responsive"}/>
                    </div>
                    <div className={"col-xs-12 col-sm-8 col-md-9"} id={"email-name"}>
                        <h4>Name:{this.props.user.name}</h4>
                        <h4>Email:{this.props.user.email}</h4>
                    </div>
                </div>
                <div className={"row"} style={{marginTop: 10}}>
                    <div className={"col-sm-12 col-xs-12"}>
                        <Nav tabs>
                            <NavItem>
                                <NavLink  active={this.state[0]?true:null} onClick={()=>{this.changeState(0)}}
                                         tag={Link} to={'/dashboard/my-info/options'}>Account Options</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink active={this.state[1]?true:null}
                                         onClick={()=>{this.changeState(1)}}
                                         tag={Link} to={'/dashboard/my-info/address-book'} >Address Book</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </div>
                <div >
                    <Route path={"/dashboard/my-info/options"} component={AccountOptions}/>
                    <Route path={"/dashboard/my-info/address-book"} component={AddressBook} />
                </div>
            </div>
        )
    }
}

export default UserInfo