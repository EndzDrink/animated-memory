import React from "react";

class Header extends React.Component{
    render(){
        return(
            <>
            <header>
                <h2 class="logo"><span>iLAWU</span>IT</h2>
                    <ul>
                        <li>
                            <a href="/Home">Home</a>
                        </li>
                        <li><a href="/About">About</a></li>
                        <li><a href="Services">Services</a></li>
                        <li><a href="Skills">Skills</a></li>
                        <li><a href="Contact">Contact</a></li>
                    </ul>
                       
            </header>
            </>
        );
    }
}

export default Header;