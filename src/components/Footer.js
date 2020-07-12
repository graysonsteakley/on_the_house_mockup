import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`

width: 100%;
padding: 2rem;
display: flex;
justify-content: space-around;
background: #333;
min-height: 30vh;
align-items:center;




`;


export const Footer = () => {
    return (
        <>
        <FooterContainer className="text-center">
            <div className="text-card-panel flex-row justify-content-center">
                <div class="box-3 mx-3">
                    <div class="btn-container btn-three">
                        <span>Contact</span>
                    </div>
                </div>

                <div class="mx-3 box-3">
                    <div class="btn-container btn-three">
                        <span>Legal</span>
                    </div>
                </div>
            </div>
            <div className="mid-divider"></div>
            <div className="text-card-panel flex-row">
                <div class="icon icon-fill-fa"><i class="fa fa-facebook-square"></i></div>
                <div class="icon icon-fill-tw"><i class="fa fa-twitter"></i></div>
                <div class="icon icon-fill-li"><i class="fa fa-linkedin"></i></div>
                <div class="icon icon-fill-insta"><i class="fa fa-instagram"></i></div>
            </div>
        </FooterContainer>
         <FooterContainer className="text-center align-items-start">
            
             <p className="lead" style={{color: '#999'}}>© 2020 Copyright All of the House, Inc. All rights reserved. Various trademarks held by their respective owners.</p>
         </FooterContainer>
         </>
    )
}
