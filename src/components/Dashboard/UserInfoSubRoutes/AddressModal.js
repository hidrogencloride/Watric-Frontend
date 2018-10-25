import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddressModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            address:"",
            city:"",
            state:"",
            country:"",
            postal_code:"",
            phone:""
        };
        this.toggle = this.toggle.bind(this);
    }

    onChange(e, field){
        let newObject = Object.assign({}, this.state);
        newObject[field] = e.target.value;
        console.log(newObject);
        this.setState(newObject);
    }

    returnClassName(field){
        if(this.state[field].length === 0){
            return "form-control is-invalid"
        }else{
            return "form-control is-valid"
        }
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <button style={{marginTop:10}} onClick={this.toggle} className={"btn btn-success"}>
                    <i className="far fa-plus-square"></i>
                    &nbsp; Add Address
                </button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Address</ModalHeader>
                    <ModalBody>
                        <div className={"form-group"}>
                            <label htmlFor={"the-address"} >Address:</label>
                            <input value={this.state.address}
                                onChange={(event)=>{this.onChange(event, "address")}}
                                id={"the-address"} className={this.returnClassName("address")} />
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"city"} >City:</label>
                            <input value={this.state.city}
                                onChange={(event)=>{this.onChange(event, "city")}}
                                id={"city"} className={this.returnClassName("city")} />
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"state"} >State:</label>
                            <input value={this.state.state}
                                onChange={(event)=>{this.onChange(event, "state")}}
                                id={"state"} className={this.returnClassName("state")} />
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"Country"} >Country:</label>
                            <input value={this.state.country}
                                onChange={(event)=>{this.onChange(event, "country")}}
                                id={"Country"} className={this.returnClassName("country")} />
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"p_code"} >Postal Code:</label>
                            <input value={this.state.postal_code}
                                onChange={(event)=>{this.onChange(event, "postal_code")}}
                                id={"p_code"} className={this.returnClassName("postal_code")} />
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"the-phone"} >Phone: </label>
                            <input value={this.state.phone}
                                onChange={(event)=>{this.onChange(event, "phone")}}
                                id={"the-phone"} className={this.returnClassName("phone")} />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>{this.props.submitAddress(this.state)}}>Add</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AddressModal;