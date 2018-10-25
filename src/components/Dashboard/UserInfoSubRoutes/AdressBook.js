import React from 'react';
import { connect } from 'react-redux';
import { addAddress, sendRequest, endLoad , setUser} from "../../../actions";
import AddressModal from  './AddressModal';
import {Redirect} from 'react-router-dom';
//Reusable Address Book Component
class AddressBook extends React.Component{
    constructor(props){
        super(props);
        super(props);
        this.state ={
            shouldRedirect:false,
            addresses : this.props.addressBook
        };
        this.renderAddresses = this.renderAddresses.bind(this);
    }

    componentDidMount(){
        this.setState({
            addresses : this.props.addresses
        })
    }

    renderAddresses(){
        return this.props.addressBook.map((element, index)=>{
            console.log(element.id)
            return (
                <div key={100000 + index} style={{marginTop:10}}
                     className={"card col-lg-3 col-md-3 col-sm-4 col-xs-12 text-center"}>
                    <div className={"card-body"}>
                        <i className="fas fa-envelope"></i>
                        <p>{element.address}</p>
                    <p>{element.city + " " + element.state + ", " +element.country}</p>
                    <br />
                    </div>
                    <div className={"card-footer"}>
                    <button onClick={()=>{
                        this.deleteAddress(element.id)
                    }}
                        className={"btn btn-danger"}> <i className="fas fa-trash-alt"></i> &nbsp; Delete</button>
                    </div>
                </div>
            )
        });

    }

    deleteAddress(id) {
        this.props.sendRequest();
        let addressId = {
            id:id
        };
        fetch('http://localhost:5000/auth/delete-address', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify(addressId)
        }).then(response => {
            return response.json()
        }).then(response => {
            if (response.status === 'success') {
                this.props.setUser(response.data);
                this.props.endLoad();
                alert(response.message)
            } else if (response.status === 'fail') {
                this.props.endLoad();
                alert(response.message);
            }
        }).catch(e => {
            alert(e);
        })
    }
    submitAddress(addressObject){
        this.props.sendRequest();
        fetch('http://localhost:5000/auth/add-address',{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                "Authorization": "Bearer "+localStorage.getItem("jwt"),
            },
            body:JSON.stringify(addressObject)
        }).then(request=>{
            return request.json()
        }).then(request=>{
            if(request.status === "success"){
                alert(request.message);
                this.props.setUser(request.data);
                this.props.endLoad();
            }else{
                alert(request.message);
                this.props.endLoad();
            }
        })

    }

    render(){
        try {
            let elements = this.renderAddresses();
            return (
                <div className={"col-xs-12"}>
                    <div className={"row"}>
                        <div className={"offset-2 col-xs-4 "}>
                            <AddressModal submitAddress={(addressObject) => {
                                this.submitAddress(addressObject)
                            }}/>
                        </div>
                    </div>
                    <div style={{padding:10}} className={"row"}>
                        {elements}
                    </div>
                </div>
            )
        }catch(e){
            console.log(e);
            return (
                <Redirect to={"/"}/>
            )
        }
    }
}

const mapStateToProps = state => ({
    addressBook: state.auth.user.addresses
});

const mapDispatchToProps = {
    add: addAddress,
    sendRequest: sendRequest,
    endLoad: endLoad,
    setUser: setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressBook)