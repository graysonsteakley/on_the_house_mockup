import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`

width: 100%;
display: flex;
justify-content: space-around;
background: #101523;
min-height: 30vh;
align-items:center;


@media only screen and (max-width: 760px) {

    flex-direction: column;

}



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
            <div className="border-dark border-right d-none d-sm-none d-md-flex" style={{minHeight: '30vh'}}></div>
            <div className="text-card-panel2">
               <a href="https://facebook.com" target="_blank">
                <div class="icon icon-fill-fa"><i class="fa fa-facebook-square"></i></div>
               </a>
               <a href="https://twitter.com" target="_blank">
                <div class="icon icon-fill-tw"><i class="fa fa-twitter"></i></div>
               </a>
               <a href="https://linkedin.com" target="_blank"> 
                <div class="icon icon-fill-li"><i class="fa fa-linkedin"></i></div>
               </a>
               <a href="https://instagram.com" target="_blank"> 
                <div class="icon icon-fill-insta"><i class="fa fa-instagram"></i></div>
               </a>
            </div>
        </FooterContainer>
         <FooterContainer className="text-center border-dark border-top align-items-center mt-neg-3 pb-5">
             <img src="./images/AOH-Bug-White@2x.png" style={{width:'65px'}} alt="LOGO-with red dot"/>
             <p className="lead align-item-start" style={{color: '#999'}}>© 2020 Copyright All of the House, Inc. All rights reserved. Various trademarks held by their respective owners.</p>
         </FooterContainer>
         </>
    )
}
