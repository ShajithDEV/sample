import React from "react";
import { FaGithub } from "react-icons/fa";



function Box(boxs) {
    return (
    
        <div className="website" >
            <a href={boxs.link}>
            <div className="web1">
                <div className="web2">
                    <div className="web3">
                        <img className="net" src={boxs.photo}></img>
                    </div>
                    <div className="web4">
                        <h2>{boxs.head}</h2>
                        <img className="logo1" src={boxs.image} />
                    </div>
                </div>

                <div className="web5">
                    <p>{boxs.para}</p>
                    <a className="icon3" href="https://github.com/ShajithDEV"><FaGithub /></a>
                </div>

            </div>
            </a>
        </div>
    )

}
export default Box;