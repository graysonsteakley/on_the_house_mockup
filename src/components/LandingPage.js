import React from 'react'
import { Container, Header, Button, Icon, Embed } from 'semantic-ui-react'
import ScrollInNav from '../utils/ScrollInNav'
import ScrollUp from '../utils/ScrollUp'
import {DarkNavBar} from './DarkNavBar'
import {FadeInSection, FadeInLeft, FadeInRight} from '../utils/FadeInSection'

import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



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


export const LandingPage = () => {
    return (
        <>
        <div className="container-fluid background-img px-0">
        <Container className ="d-flex background-img-height text-center flex-column align-items-center justify-content-center">
            <FadeInSection>
            <Header as="h1" style={{color:"white", fontSize: "4rem"}}> 
                Helping 
                <Typed
                className="typed"
                strings={[
                    'you',
                    'restaurants',
                    'hotels',
                    'museums',
                    'venues',
                    'food trucks',
                    'breweries']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
                &nbsp;succeed is why we exist.
            </Header>
            </FadeInSection>
            <div className="my-3"></div>
        
            <p className="lavender">
                Helping you build better relationships with your customers and improve your margins.
            </p>
         
            <Button className="mt-3" as={Link} to="/signup" style={{width:'50%', backgroundColor:'rgba(218, 31, 87, 0.8)'}} circular animated="vertical">
                <Button.Content visible>Create a free account</Button.Content>
                <Button.Content hidden>
                    <Icon style={{fontSize:"1.5rem"}}name='arrow right' />
                </Button.Content>
            </Button>
            <p className="lead small-text mt-1 lavender">
            (100% free to get started. No credit card required)
            </p>
        </Container>
        </div>
        <ScrollInNav scrollInHeight={610}>
            <DarkNavBar/>
        </ScrollInNav>
        <div className="container-fluid white-container">
       
            <div className="text-card-panel text-center">
                <FadeInRight>
                <Header as="h3" style={{color:'white'}}>Online Ordering Platform</Header>
                <Header as="h1" className="black">Cobbler<span style={{fontSize:'1rem', display:'inline-block',transform:'translateY(-1rem)'}}>®</span> to go. Curbside pickup on your terms</Header>
                <p className="lead">Own the relationship with your customers with ease.</p>
                
                <div className="btn-group">
                
                    <div className="center">
                        <button className="btn">
                            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                            </svg>
                            <span>Learn More</span>
                        </button>
                    </div>
                    
                    <div className="center mobile-scale-btn">
                        <button className="btn">
                            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                            </svg>
                            <span>Start Now</span>
                        </button>
                    </div>
                </div>
                </FadeInRight>
            </div>
            
            <div className="img-card-panel text-fade-left">
            <FadeInLeft>
                    <div className="img-card-container">
                        <img src="./images/GettyImages-525498662_ipad-sm-1920.jpg" alt="Worker Holding laptop"/>
                    </div>
            </FadeInLeft>
            </div>
        </div>

        <div  className="container-fluid white-container blackbcg">
            
            <div className="img-card-panel text-fade-left">
                <FadeInLeft>
                    <div className="img-card-container">
                        <img src="./images/iStock-868935172-sm.jpg" alt="Worker Holding laptop"/>
                    </div>
                </FadeInLeft>
            </div>
            
            <div className="text-card-panel text-center">
                <FadeInRight>
                <Header as="h3" className="active-color">Event Management Platform</Header>
                <Header as="h1" className="lavender">jamboree@<span style={{fontSize:'1rem',display:'inline-block',transform:'translateY(-1rem)'}}>®</span> makes planning simple</Header>
                <p className="lead lightgrey">jamboree@ is your event planning solution, putting the features you need to manage your upcoming events at your fingertips.</p>
                <div className="btn-group">

                    <div className="center">
                        <button className="btn">
                            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                            </svg>
                            <span>Learn More</span>
                        </button>
                    </div>
                    
                    <div className="center mobile-scale-btn">
                        <button className="btn">
                            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                            </svg>
                            <span>Start Now</span>
                        </button>
                    </div>
                </div>
                </FadeInRight>
            </div>

        </div>

        <div className="white-container" style={{height:'auto', minHeight:'0'}}>
            <Embed
                style={{width:'100%'}}
                id='409928867'
                placeholder='/images/iStock-868935172-sm.jpg'
                source='vimeo'
            />
        </div>

        <BlackContainer className="text-center">
            <FadeInSection>
            <Header as="h1">It's Your Dream, to keep.</Header>
            <p className="lead white">We recognize that you are the backbone of our communities. During these uncertain times and after things return to normal — we are here to support you and keep your dreams alive.</p>
            </FadeInSection>
        </BlackContainer>
        
        <div className="background-img-questions text-center p-5">
        <FadeInSection>
        <Header as="h1" style={{color:"white", fontSize: "3rem"}}>Cobbler and jamboree@ are free products helping
              <Typed
                className="typed"
                strings={[
                    'restaurants',
                    'hotels',
                    'museums',
                    'venues',
                    'food trucks',
                    'breweries']}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop >
                <input style={{fontSize: '3rem'}}type="text"/>
            </Typed>
        &nbsp;keep their margins.</Header>
                <p className="lead lavender mt-2">There’s no commitment, contracts, pressure, or obligation.</p>
                <div className="btn-group mt-5">

                    <div className="center">
                        <button className="btn">
                            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                            </svg>
                            <span>Got Questions <i class="fa fa-question-circle" aria-hidden="true"></i></span>
                        </button>
                    </div>
                </div>
            </FadeInSection>
        </div>

        <ScrollUp scrollInHeight={1000}>
            <a href="#">
            <i style={{fontSize:'3rem'}} class="lavender scale-icon fa fa-angle-up" aria-hidden="true"></i>
            </a>
        </ScrollUp>

        <BlackContainer className="text-center">
            <FadeInSection>
            <Header as="h1">Food for Thought</Header>
            <p className="lead white">“People will forget what you said. They will forget what you did.
            But they will never forget how you made them feel.”</p>
            </FadeInSection>
        </BlackContainer>
       
        </>
    )
}
