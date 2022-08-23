import React from "react";

class Home extends React.Component{
    render() {
            return(
                <>
                <div class="hero">
                    <div class="content">
                        <h4><span>H</span>ello, <span>M</span>y <span>n</span>ame <span>i</span>s </h4>
                        <h1>Andy <span>Mthembu</span></h1>
                        <h3>I am a Full-stack Web Developer.</h3>
                        <a href="/" class="btn">Download Resume</a>
                    </div>
                </div>
                <div class="service">
                        <div class="title">
                            <h2>Services</h2>
                        </div>
                        <div class="box">
                            <div class="card">
                                <i class="fa fa-bars"></i>
                                <h5>Web Development</h5>
                                <div class="pra">
                                    <p>Every website should be built with two primary goals: Firstly, it should work across all devices. Secondly, it needs to be as fast as possible</p>
                                    <p>
                                        <a class="button" href="/">Read More</a>
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <i class="fa fa-user"></i>
                                <h5>User</h5>
                                <div class="pra">
                                    <p>User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users.</p>
                                    <p>
                                        <a class="button" href="/">Read More</a>
                                    </p>
                                </div>

                            </div>

                            <div class="card">
                                <i class="fa fa-bell"></i>
                                <h5>Website up-date</h5>
                                <div class="pra">
                                    <p>iLAWUIT is a leading web design and development company. With an aim to publish hundreds of new websites each year.</p>
                                    <p >
                                        <a class="button" href="/">Read More</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div><div class="contact-me">
                        <p>Let me help you with your website</p>
                        <a class="button-two" href="/">Hire Me</a>
                    </div>
                    </>
            );
    }
}

export default Home;