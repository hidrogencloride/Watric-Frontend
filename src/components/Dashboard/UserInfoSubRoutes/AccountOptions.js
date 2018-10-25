import React from 'react';

class Options extends React.Component{

    render(){
        return(<div className={"row"} style={{padding:10}}>
            <div className={"btn btn-primary col-xs-4 col-sm-4 offset-sm-2 offset-xs-2"}>Change Password</div>
            <div className={"btn btn-info col-xs-4 col-sm-4 "}>Change Email</div>
        </div>);
    }

}

export default Options;