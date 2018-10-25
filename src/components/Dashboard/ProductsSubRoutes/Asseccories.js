import React from 'react';
import images from '../../../images/asseccories'


export default class Asseccories extends React.Component{

    constructor(props){
        super(props);
    }

    toRender(){
        return(
            <div className={"row"}>
                {images.map((element, index)=>{
                    return(
                        <div key={10000000000 + index} className={"col-lg-3"}>
                            <div className={"card"}>
                                <img className={"card-img-top"} src={element.image}   />
                                <div className={"card-body"}>
                                    <h5>{element.p_name}</h5>
                                    <p>Price:{element.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    render(){
        let elements = this.toRender();
        return elements;
    }

}