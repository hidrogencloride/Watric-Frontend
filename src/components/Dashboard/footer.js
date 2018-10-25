import React from 'react';

const footer = () => {
    return (
        <div className={"container-fluid footer"}>
            <div className={"row"}>
                <div className={"col-sm-3 offset-sm-2"}>
                    <a>About Us</a>
                </div>
                <div className={"col-sm-3"}>
                    <a>Donate</a>
                </div>
                <div className={"col-sm-3"}>
                    <a>Meet the Team</a>
                </div>
            </div>
        </div>
    )
};

export default footer