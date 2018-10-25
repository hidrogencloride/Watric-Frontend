
import React from 'react'
const Spinner = () => {

    return (<div className={"row align-items-center"}>
        <div className="card col col-xs-12 col-md-6 offset-md-3 align-self-center">

                <div style={{marginRight:'auto', marginLeft:'auto', marginTop:'100'}} >
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

        </div>
    </div>)

};

export default Spinner;