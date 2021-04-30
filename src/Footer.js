import React, { Component } from 'react';
import styled from 'styled-components'

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column 1*/}
                        <div className="col-md-3 col-sm-6">
                            <span> Copyright &copy; Screw the Review {new Date().getFullYear()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainColor);
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
}

`;