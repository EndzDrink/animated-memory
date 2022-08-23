import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <>
            <footer>
                <p>Andy <span>Mthembu</span></p>
                <p><em> For more HTML, CSS, JavaScript, jQuery, Bootstrap, REACT, Python, Django, Wagtail and Tailwind  projects - please click on the links below: </em></p>
                <div class="social">
                    <a href="https://www.facebook.com/andysernzo"><i class="fa fa-facebook"></i></a>
                    <a href="https://www.codepen.io/EndzMeet"><i class="fa fa-codepen"></i></a>
                    <a href="https://twitter.com/Scovovic"><i class="fa fa-twitter-square"></i></a>
                    <a href="https://github.com/EndzDrink"><i class="fa fa-github-square"></i></a>
                    <a href="mailto:https://www.SirnzoMthembu@outlook.com"><i class="fa fa-envelope"></i></a>
                </div>
                <p class="end">Andy Mthembu &copy; CopyRight 2022</p>
            </footer>
            </>
        );
    }
}

export default Footer;