import React, {useState, useEffect} from 'react'
import { Menu, Button, Icon, Header, Container, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DropDownButton = styled.div`


    background: transparent;
    padding: 1rem;
    margin: .5rem;
    color: lavender;
    transition: all 0.2s;
    border-radius: 10rem;
    transform: scale(0.8);

    &:hover{
        background: rgba(10,10,10, 0.3);
        color: white;
        transform: scale(1.02);
        cursor: pointer;



    }

    &:hover .iconhover{
        color: white;
    }

    &:active{
        background: rgba(10,10,10, 0.4);
    }
`;


export const NavBar = () => {

    const [currPage, setCurrPage] = useState('home');
    const [dropDown, setDropDown] = useState(false);
    const [openDropDownIcon, setOpenDropDownIcon] = useState(false);

    const toggleMenu = ()=>{
        setDropDown(!dropDown);
    }

    const toggleIcon = ()=>{
        setOpenDropDownIcon(!openDropDownIcon);
    }

    const toggleMenuOff = ()=>{
        setDropDown(false);
    }

    const toggleIconOff = ()=>{
        setOpenDropDownIcon(false);
    }

    return (
        <>
        <Menu borderless secondary className="bar-background d-flex align-items-center">
            <Menu.Item
            as={Link} to="/"
            name='home'
            onClick={(e, {name})=> {
                    setCurrPage(name);
                    toggleMenuOff();
                    toggleIconOff();
                }
            }
            className = "d-none d-sm-none d-md-flex align-items-center"
            >
                <img src="./images/AOH-Bug-White@2x.png"/>
                <Header as='h1' className = {currPage === 'home' ? "d-none d-sm-none d-md-flex my-auto" : "d-none d-sm-none d-md-flex my-auto"}>&nbsp;All of the house</Header>
            </Menu.Item>
            <Menu.Item
             as={Link} to="/"
            name='home'
            onClick={(e, {name})=> {
                setCurrPage(name);
                toggleMenuOff();
                toggleIconOff();
            }}
            className = "d-flex d-sm-flex d-md-none align-items-center"
            >
                <img src="./images/AOH-Bug-Brand.svg"/>
                <Header as='h1' className = {currPage === 'home' ? "d-none d-sm-none d-md-flex my-auto" : "d-none d-sm-none d-md-flex my-auto"}>&nbsp;All of the house</Header>
            </Menu.Item>
        <Menu.Item
          onClick={(e, {name})=> setCurrPage(name)}
         className = {currPage === 'taters' ? "active-text d-none d-sm-none d-md-flex" : "d-none d-sm-none d-md-flex"}
          
          as={Link} to="/taters"
          name='taters'
          active={currPage === 'taters'}
         
        >
            Taters
        </Menu.Item>
        <Menu.Item
          as={Link} to="/eventsat"
          name='Events'
          active={currPage === 'Events'}
          onClick={(e, {name})=> setCurrPage(name)}
          className = {currPage === 'Events' ? "active-text d-none d-sm-none d-md-flex" : "d-none d-sm-none d-md-flex"}
        >
            Events@
        </Menu.Item>
        <Menu.Item
          as={Link} to="/signin"
          name='signin'
          active={currPage === 'signin'}
          onClick={(e, {name})=> setCurrPage(name)}
          className = {currPage === 'signin' ? "active-text d-none d-sm-none d-md-flex" : "d-none d-sm-none d-md-flex"}
        />
        <Menu.Menu className= "d-none d-sm-none d-md-flex" style={{marginLeft: 'auto', marginRight:'2rem'}}>
            <Button as={Link} to="/signup" circular color="pink" animated>
                <Button.Content visible>Sign Up Free</Button.Content>
                <Button.Content hidden>
                    <Icon style={{fontSize: '1rem'}} name='arrow right' />
                </Button.Content>
            </Button>
        </Menu.Menu>
        <Menu.Menu className="d-flex d-sm-flex d-md-none" position='right'>
            <DropDownButton onClick ={()=>{
                toggleMenu();
                toggleIcon();
                }
            }>
                <Header as='h1' className="my-auto">  
                    { 
                        openDropDownIcon === true ? (
                            <Icon style={{color: 'lavender'}} name="close" className="iconhover"/> 
                        ) : (             
                            <Icon name="content" className="iconhover"/> )

                    }
                </Header>
            </DropDownButton>
        </Menu.Menu>
      </Menu>
    
        {   dropDown ? (

        <div className="d-flex d-sm-flex d-md-none flex-column text-center">
            <Link to="/taters"  onClick={()=>{toggleMenu(); toggleIconOff();}}>
            <Segment className="hoverDropDown" inverted attached='top'>taters</Segment>
            </Link>
            <Link to="/eventsat" onClick={()=>{toggleMenu(); toggleIconOff();}}>
            <Segment className="hoverDropDown" inverted attached>Event@</Segment>
            </Link>
            <Link to="/signin"  onClick={()=>{toggleMenu(); toggleIconOff();}}>
            <Segment className="hoverDropDown" inverted attached='bottom'>Sign In</Segment>
            </Link>
        </div>

        ) : (
            <>
            </>
        )


        }

      </>
    )
    
}
