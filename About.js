import React from "react";

class About extends React.Component{
    render(){
        return(
            <section class="about">
                <div class="main">
                    <img src="img/19029607_10208433168619398_6321635691613708982_n.png" alt="" />
                        <div class="about-text">
                        <h1>About Me</h1>
                        <h5><span class="dark">we</span>b Developer <span>and Designer</span></h5>
                        <h5><span class="dark">Front-</span>end/<span> Full-stack Development</span></h5>
                        <p> <span class="dark">I am a Langu</span>age Practitioner by qualifications transitioning <span class="dark">into Web Dev</span>elopment. 
                            After spending more than eight years <span class="dark">in the field of</span> linguistics 
                            I have noticed that my interest was <span class="dark">in computer</span>s and how they process data into useful <span class="dark">informat</span>ion. 
                            I then decided to follow my curiosity and enrolled in IT, programming to be specific. This is where I learned that computers use languages to 
                            communicate, and my curiosity grow from that moment.
                            
                        </p>
                    <button type="button" action="return" href="/personal_web_portfolio.html">Go Back</button>
                        </div>
                </div>
            </section>
        )
    }
}

export default About;