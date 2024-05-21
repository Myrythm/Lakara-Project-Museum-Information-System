import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterComp = () => {
    return (
        <FooterContainer>
            <div className="footer-middle text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>TENTANG</h4>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>KONTAK</h4>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>KEBIJAKAN PRIVASI</h4>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>COOKIES</h4>
                        </div>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default FooterComp;

const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--mainDark);
        padding: 3rem 0;
        color: var(--mainWhite);
    }
    .footer-bottom {
        padding-top: 3rem;
        text-align: center;
    }
    h4 {
        margin-bottom: 0.1rem;
        font-size: 0.9rem;
    }
    .text-xs-center {
        text-align: center;
    }
    .col-md-3, .col-sm-6 {
        margin-bottom: 0.1rem;
    }
`;
