import React from 'react'
import { Container, Header, Button, Embed } from 'semantic-ui-react'
import {NavBar} from './NavBar'
import styled from 'styled-components'
import {FadeInLeft, FadeInRight, FadeInSection} from '../utils/FadeInSection'
import ScrollInNav from '../utils/ScrollInNav'
import ScrollUp from '../utils/ScrollUp'
import {DarkNavBar} from './DarkNavBar'

const DemoContainer = styled.div`

    display: flex;
    min-height: 75vh;
    justify-content: center;
    text-align: center;
    align-items: center;

`;

const WhiteContainer = styled.div`

    min-height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-top: -4.2rem;

`;




const ButtonContainer = styled.div`

    min-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: #fff;


`;

const TwoColContainer = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 760px) {
    
        flex-direction: column;

    }

`;

const TextSection = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

`;

const BlackContainer = styled.div`

    background: black;
    width: 100%;
    min-height: 50vh;
    color: lavender;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10%;

    >h1{
        font-size: 3rem!important;
        font-weight: bold;
    }

`;

export const Cobbler = () => {
    return (
        <>
        <div className="container-fluid background-img-Cobbler mx-0 px-0">
        <FadeInRight>
        <div className= "background-img-height text-center" style={{background:"transparent"}}>
            
            <div className="d-none d-sm-none d-md-block text-card-panel"></div>
            <div className="text-card-panel">
            <p className="lead lavender">
            YOUR AFFORDABLE CURBSIDE PICKUP SOLUTION
            </p>
            <Header className="d-none d-sm-none d-md-block" as="h1" style={{fontSize: '3.5rem'}}>
                Cobbler
                <span style={{fontSize:'1rem',display:'inline-block',transform:'translateY(-1rem)'}}>®&nbsp;&nbsp;</span>
                 helps you build closer relationships with your customers.
            </Header>
            <Header className="d-block d-sm-block d-md-none" as="h1" style={{fontSize: '2.5rem'}}>
                Cobbler
                <span style={{fontSize:'1rem',display:'inline-block',transform:'translateY(-1rem)'}}>®&nbsp;&nbsp;</span>
                 helps you build closer relationships with your customers.
            </Header>
            </div>



        </div>
        </FadeInRight>
        </div>

        <WhiteContainer className="text-center p-4">
            <FadeInSection>
            <Header color="black" style={{fontSize: '3rem', marginBottom:'5rem'}} as="h1">
            Cobbler<span style={{fontSize:'1rem',display:'inline-block',transform:'translateY(-1rem)'}}>®</span>&nbsp; is a curbside pickup platform built by the industry for the industry.
            </Header>
            </FadeInSection>
            <TwoColContainer>
                <FadeInRight>
                <TextSection>
                    <Header color="black" as="h1">
                    Take back your customers
                    </Header>
                    <p className="lead black">
                    Cobbler removes the barriers that delivery companies place between you and your customers.
                    </p>
                    <Button href="/" color="red">
                        Schedule a Demo&nbsp; <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                    </Button>
                </TextSection>
                </FadeInRight>
                <div className="img-card-panel text-fade-left">
                <FadeInLeft>
                        <div className="img-card-container">
                            <img src="./images/GettyImages-660307462-sm-1920.jpg" alt="Worker Holding laptop"/>
                        </div>
                </FadeInLeft>
                </div>
            </TwoColContainer>
        </WhiteContainer>


        <WhiteContainer className="text-center p-4">
   
            <TwoColContainer>
               
                    <div className="img-card-panel text-fade-left">
                    <FadeInLeft>
                            <div className="img-card-container">
                                <img src="./images/GettyImages-1175938162-sm.jpg" alt="Worker Holding laptop"/>
                            </div>
                    </FadeInLeft>
                 </div>
            
            
                <FadeInRight>
                <TextSection>
                    <Header as="h3" className="active-color">No Contracts. No Recurring Fees.</Header>
                    <Header color="black" as="h1">
                    Securing your margins
                    </Header>
                    <p className="lead black">
                    People just like you built Cobbler, and we understand the challenges of the industry. That’s why we developed a set of tools priced to protect your margins with no monthly contracts or monthly recurring fees.                    </p>

                </TextSection>
                </FadeInRight>
            
            </TwoColContainer>
        </WhiteContainer>

        <WhiteContainer className="text-center p-4">
   
            <TwoColContainer>
            
                <FadeInLeft>
                <TextSection>
                    <Header as="h3" className="active-color">Leveling the playing field</Header>
                    <Header color="black" as="h1">
                    Fair stakes
                    </Header>
                    <p className="lead black">
                    You spoke and we listened. You’re tired of being charged high commissions for curbside pickup. Cobbler charges an ultra-low 2.1% + 5¢ credit card processing fee. That’s it!
                    </p>
                </TextSection>
                </FadeInLeft>
            
                <div className="img-card-panel text-fade-left">
                    <FadeInRight>
                            <div className="img-card-container">
                                <img src="./images/GettyImages-910714982-sm-1920.jpg" alt="Worker Holding laptop"/>
                            </div>
                    </FadeInRight>
                 </div>

            </TwoColContainer>
        </WhiteContainer>


        <WhiteContainer className="text-center p-4">
   
            <TwoColContainer>
                
                    <div className="img-card-panel text-fade-left">
                    <FadeInLeft>
                            <div  className="img-card-container">
                                <img  src="./images/Thai-House-To-Go-sm.jpg" alt="Worker Holding laptop"/>
                            </div>
                    </FadeInLeft>
                    </div>
            
            
                <FadeInRight>
                <TextSection>
                    <Header as="h3" className="active-color">You're in control</Header>
                    <Header color="black" as="h1">
                    Fees on your court
                    </Header>
                    <p className="lead black">
                    Cobbler believes in putting the service fees in the hands of the restaurant. Cobbler provides an opt-in convenience fee that can be applied to each guest purchase if needed.
                    </p>
                    <Button href="/" color="red">
                        Schedule a Demo&nbsp; <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                    </Button>
                </TextSection>
                </FadeInRight>
            
            </TwoColContainer>
            <ButtonContainer className="mt-4">
                <Button className="" style={{fontSize: '2rem'}} href="/" color="red">
                            Got Questions  <i class="fa fa-question-circle" aria-hidden="true"></i>
                </Button>
            </ButtonContainer>
        </WhiteContainer>

        <div className="white-container" style={{height:'auto', minHeight:'0'}}>
            <Embed
                color="red"
                style={{width:'100%'}}
                id='409928867'
                placeholder='/images/iStock-868935172-sm.jpg'
                source='vimeo'
            />
        </div>

        <BlackContainer className="text-center">
            <FadeInSection>
            <Header as="h1">It's Your Dream. Keep It.</Header>
            <p className="lead white">We recognize that you are the backbone of our communities. During these uncertain times and after things return to normal — we are here to help you keep your dream alive.</p>
            </FadeInSection>
        </BlackContainer>


        <DemoContainer>
        <div className="background-img-demo">
        <FadeInSection>
        <Header as="h1" style={{color:"white", fontSize: "3rem"}}>Curbside pickup on your terms </Header>
                <p className="lead lavender mt-2">No monthly contracts. No recurring fees.</p>
                <div className="btn-group mt-5">

                    <div className="center">
                        <button className="btn">
                            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                            </svg>
                            <span>Schedule a demo  <i class="fa fa-calendar-check-o" aria-hidden="true"></i></span>
                        </button>
                    </div>
                </div>
            </FadeInSection>
        </div>
        </DemoContainer>
        <ScrollInNav scrollInHeight={610}>
            <DarkNavBar/>
        </ScrollInNav>
        <ScrollUp scrollInHeight={1000}>
            <a href="#">
            <i style={{fontSize:'3rem'}} class="lavender scale-icon fa fa-angle-up" aria-hidden="true"></i>
            </a>
        </ScrollUp>
        </>
    )
}