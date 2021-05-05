import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <h5> Please fill out the contact form below to let us know what you think about Screw the Review! </h5>
                <form name="contact" netlify>
                    <p>
                        <label>Name <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Email <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>

        );
    }
}

export default Contact;
