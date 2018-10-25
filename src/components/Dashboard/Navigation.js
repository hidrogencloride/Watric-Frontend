import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';
import {Link} from 'react-router-dom';


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color={"dark"} dark expand={"md"}>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar >
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink ><i className="fa fa-shopping-cart"></i><Badge color="info" pill>0</Badge></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink > <i className="fas fa-user"></i> User: {this.props.email} </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink >Log Out</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}