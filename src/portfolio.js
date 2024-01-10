import React from "react";
import img from "./Picsart_23-12-18_19-43-20-013.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import html3 from "./html5-logo-31816.png";
import bootstrap from "./pngegg.png";
import reactjs from "./pngegg (1).png";
import vscode from "./vscode.png";
import git from "./git.png";
import github from "./github.png";
import Resume from "./Shajith.k Resume.png";
import { GiHamburgerMenu } from "react-icons/gi";


function Portfolio(props) {

  

    return (
        <div>

            <div className="page1" id="p1">

                <nav class="navBarContainer">
                    <div class="companyName">
                        <p> PORTFOLIO </p>
                    </div>

                    <input type="checkbox" id="menu" class="inputMenu" />
                    <label for="menu" class="menuIcon"> <GiHamburgerMenu /> </label>

                    <div class="menuList">
                        <ul className="menu2">
                            <li><a className="menu3" href="#p1">HOME</a></li>
                            <li><a className="menu3" href="#p2">SKILLS</a></li>
                            <li><a className="menu3" href="#p3">EDUCATION</a></li>
                            <li><a className="menu3" href="#p4">PROJECTS</a></li>
                        </ul>
                    </div>
                </nav>


                <div className="intro">
                    <div className="intro1">
                        <h3>Hello, It's Me</h3>
                        <h1>SHAJITH .K</h1>
                        <h2>And I'm a <span> Frontend Developer</span></h2>
                        <div className="icon1">
                            <a className="icon" href="https://github.com/ShajithDEV"><FaGithub /></a>
                            <a className="icon" href="https://www.linkedin.com/in/shajith-k-9aa438262/"><FaLinkedin /></a>
                        </div >
                        <button><a className="click" download={Resume} href={Resume}>Download CV  </a></button>
                    </div>
                    <div>
                        <img src={img}></img>
                    </div>
                </div>
            </div>

            {/* 2nd page */}

            <div id="p2">
                <h1 className="topic">SKILLS</h1>

                <div className="page2" >

                    <div className="skills">
                        <div className=" program">
                            <h2>PROGRAMMING LANGUAGES</h2>
                            <img className=" html" src={html3}></img>
                        </div >
                        <div className=" fram">
                            <h2>FRAMWORKS</h2>
                            <img className=" boot" src={bootstrap}></img>
                            <img className=" react" src={reactjs}></img>
                        </div>
                        <div className="tools" >
                            <h2>TOOLS</h2>
                            <img className="vscode" src={vscode}></img>
                            <img className="git" src={git}></img>
                            <img className="github" src={github}></img>
                        </div>
                    </div>
                </div>
            </div>



            {/* 3rd page */}

            <div className="box" id="p3">

                <h1>EDUCATION</h1>
            </div>

            {/* 4th page */}

            <div className="web">


            </div>

            {/* 5th page */}

            <div>
                <div></div>
            </div>

        </div>
    )
}





export default Portfolio;