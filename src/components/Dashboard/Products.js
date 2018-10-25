import React from 'react';
import {Link} from "react-router-dom";
import {
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'
import {Route} from 'react-router-dom';
import stickers from '../../images/asseccories/stickers.jpeg';
import Asseccories from './ProductsSubRoutes/Asseccories'

class Products extends React.Component{
    constructor(props){
        super(props);
        this.getActive = this.getActive.bind(this);
    }

    getActive(to_verify){
        let urlPart = window.location.href.split('#')[1].split("/")[3];
        if (urlPart){
            return to_verify === urlPart
        }else{
            return false
        }
    }

    render(){
        return(
            <div>
                <div className={"info-area card"}>
                    <div className={"row"}>
                        <div className={'col-xs-12'} style={{paddingLeft:10}}>
                            <h2>Products:</h2>
                        </div>
                    </div>
                    <div className={"row"} style={{marginTop: 10}}>
                        <div className={"col-sm-12 col-xs-12"}>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink tag={Link} to={"/dashboard/products/all"}
                                             active={this.getActive("all")}>All</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to={"/dashboard/products/accessories"}
                                             active={this.getActive("accessories")}> Accessories</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                    <div className={"row"}>

                        <div className={"col-lg-8 col-xs-8 col-md-8 col-sm-8 offset-lg-2"} style={{marginTop:15}}>
                            <div className="input-group mb-3" >
                                <input  type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-search"></i></span>
                                    </div>
                            </div>
                        </div>

                    </div>

                        <Route exact path={"/dashboard/products/accessories"} component={Asseccories}/>

                </div>
            </div>
        )
    }
}

export default Products