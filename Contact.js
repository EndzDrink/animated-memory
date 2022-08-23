import React from "react";

class Contact extends React.Component{
    render(){
        return(
        <section class="contact">
            <div class="content3">
                <h2>Contact</h2>
                <p>We have experienced web designers who are standing by to assist you to put out the best version of yourself and your brand using the latest technologies and strategies which will enable you to stand out as the leader in your area of expertise. 
                </p>
            </div>
            <div class="container3">
                <div class="contactInfo">
                    <div class="box3">
                        <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div class="text3">
                            <h3>Address</h3>
                            <p>30 Acutt Street,<br/> Durban,<br/> 4001</p>
                        </div>
                    </div>
                    <div class="box3">
                        <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                        <div class="text3">
                            <h3>Call</h3>
                            <p>073-255-4298</p>
                        </div>
                    </div>
                        <div class="box3">
                            <div class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                            <div class="text3">
                                <h3>Email</h3>
                                <p>SirnzoMthembu@outlook.com</p>
                            </div>
                        </div>
                    </div>
                <div class="contactForm">
                    <form>
                        <h2>Send Message</h2>
                            <div class="inputBox">
                                <input type="text3" name="" required="required"/>
                                <span>Full Name</span>
                            </div>
                        <div class="inputBox">
                            <input type="tex3t" name="" required="required"/>
                            <span>Email</span>
                        </div>
                    <div class="inputBox">
                        <textarea required="required"></textarea>
                        <span>Type you massage</span>
                    </div>
                        <div class="inputBox">
                            <input type="submit" name="" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        
        )
    }
}

export default Contact;