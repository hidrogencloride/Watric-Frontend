import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import Logo from '../../images/watric-rect.jpg'
class Sidebar extends React.Component {



    render() {
        return (
            <div className={"sidebar links"}>
                <Nav vertical>
                    <NavItem style={{marginTop:10}}>
                        <img src={Logo} className={"img img-responsive"} />
                    </NavItem>
                    <NavItem style={{marginTop:10}}>
                        <NavLink tag={Link} to={"/dashboard/my-info"}><i className="fas fa-address-card sidebar-icon"></i>
                            User Info</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <i className="fas fa-money-bill sidebar-icon"></i>
                            Purchases</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/dashboard/products"}>
                            <i className="fas fa-barcode sidebar-icon" ></i>
                            Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <i className="fas fa-newspaper sidebar-icon"></i>
                            News</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

export default Sidebar