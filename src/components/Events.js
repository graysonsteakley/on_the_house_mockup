import React from 'react'
import { Container, Header, Button, Embed } from 'semantic-ui-react'
import {NavBar} from './NavBar'
import styled from 'styled-components'
import {FadeInLeft, FadeInRight, FadeInSection} from '../utils/FadeInSection'
import ScrollInNav from '../utils/ScrollInNav'
import ScrollUp from '../utils/ScrollUp'
import {DarkNavBar} from './DarkNavBar'
import { Link } from 'react-router-dom'

const WhiteContainer = styled.div`

    min-height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-top: -4.2rem;
    width: 100vw;
    padding: 0;

`;

const GreyContainer = styled.div`

    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
    width: 100vw;
    line-height: 1.5;

`;



const TwoColContainer = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 760px) {
    
        flex-direction: column;

    }

`;

const ImgContainer = styled.div`

    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
`;

const TextSection = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    img{
        width: 100%!important;
    }

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

export const Events = () => {
    return (
        <>
        <div style={{margin:'0',padding:'0'}} className="container-fluid background-img-events mx-0 px-0">
            
            <FadeInRight>
                <div className= "background-img-height text-center" style={{background:"transparent"}}>
                    
                        <div style={{width:'100%'}} className="text-card-panel mx-5">
                        <p className="lead active-color">
                        YOUR EVENT MANAGEMENT PLATFORM
                        </p>
                        <Header className="d-none d-sm-none d-md-block" as="h1" style={{fontSize: '3.5rem'}}>
                            Events@
                            <span style={{fontSize:'1rem',display:'inline-block',transform:'translateY(-1rem)'}}>®&nbsp;&nbsp;</span>
                            is your free event planning solution putting the features you need every day at your fingertips. 
                        </Header>
                        <Header className="d-block d-sm-block d-md-none" as="h1" style={{fontSize: '2.5rem'}}>
                            Taters
                            <span style={{fontSize:'1rem',display:'inline-block',transform:'translateY(-1rem)'}}>®&nbsp;&nbsp;</span>
                            helps you build stronger relationships with your customers.
                        </Header>
                         
                </div>
                </div>
            </FadeInRight>
        
        </div>

        <WhiteContainer className="text-center p-4">
    
        
            
              
                <TextSection>
                <FadeInLeft>
                    <Header color="black" as="h1">
                    Book more events. Streamline planning. Thrill your guests.
                    </Header>
                    <Header as="h3" className="active-color">Events@ is always free for venues.</Header>
                    <Button as={Link} to="/signup" color="red">
                        Get Started&nbsp; <i class="fa fa-sign-out " aria-hidden="true"></i>
                    </Button>
                    </FadeInLeft>
                </TextSection>
                
            
           

           
        </WhiteContainer>


        <GreyContainer>
           <TextSection className="mx-5 px-5 text-center">
                <FadeInLeft>
                <Header className="d-none d-sm-none d-md-block black text-center" as="h1" style={{fontSize: '3.5rem'}}>
                Event organizers want simplicity. You want efficiency. Events@
                    <span style={{fontSize:'1rem',display:'inline-block',transform:'translateY(-1rem)'}}>®&nbsp;&nbsp;</span>
                    &nbsp;delivers.
                </Header>
                    <p className="lead black">
                    Events@ is an event management platform that helps venues of any size book more events—faster. 
                    As anyone that manages events knows, no one person can work 24/7. Events@ puts an end to cobbled together event management solutions or solutions that are overbuilt and complicated. Events@ reduces coordinator fatigue and ensures a quick response to your customers on every aspect of booking and staging an event.
                    </p>

                </FadeInLeft>
                <div style={{width:'100%', minHeight:'5vh'}} className="my-5">

                </div>
                <FadeInRight>
                    <ImgContainer>
                        <img src="./images/Automated-Engagement.jpg" alt="Automated-Engagement"/>
                    </ImgContainer>
                </FadeInRight>
                </TextSection>
                <div style={{width:'100%', minHeight:'20vh'}} className="my-5">

                </div>
        </GreyContainer>


        <GreyContainer>
           <TextSection className="mx-5 px-5 text-center">
                <FadeInLeft>
                <Header className="d-none d-sm-none d-md-block black text-center" as="h1" style={{fontSize: '3.5rem'}}>
                Who Uses Events@
                    <span style={{fontSize:'1rem',display:'inline-block',transform:'translateY(-1rem)'}}>®&nbsp;&nbsp;</span>
                    
                </Header>
                    <p className="lead black">
                    Events@ is an event management platform that helps venues of any size book more events—faster. 
                    As anyone that manages events knows, no one person can work 24/7. Events@ puts an end to cobbled together event management solutions or solutions that are overbuilt and complicated. Events@ reduces coordinator fatigue and ensures a quick response to your customers on every aspect of booking and staging an event.
                    </p>

                </FadeInLeft>

                </TextSection>
              
        </GreyContainer>


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