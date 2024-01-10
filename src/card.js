import React from "react";
import { PiStudentBold } from "react-icons/pi";

function Card(props) {
    console.log(props)
    return (
        <div >

            <div className="page3" >
                
                <div className="study1">
                    <div>
                        <PiStudentBold className="icon2" />
                        <div className="year">{props.year}</div>
                    </div>
                    <div>
                        <h2>{props.study}</h2>
                        <p>{props.about}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;