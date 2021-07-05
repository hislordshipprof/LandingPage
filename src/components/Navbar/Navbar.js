import React,{useState,useEffect} from 'react'
import { FaTimes,FaBars  } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Nav,NavbarContainer,NavLogo,NavIcon,MenuIcon,NavMenu,NavLinks,NavItem, NavBtnLink,NavItemBtn} from './Navbar.elements'
import {Button} from '../../globalStyles'

const Navbar = () => {
    
    const [click, setClick]= useState(false);

    const [button, setButton]=useState(true);
     
    const showButton=() =>{
        if(window.innerWidth <= 960){
            setButton(false);

        }
        else {
            setButton(true);
        }
    };

    useEffect(() =>{
        showButton();
    },[]);
    const handleClick=()=>setClick(!click)
   

    return (
        <>
        <IconContext.Provider value={{color:'blue' }}>
            <Nav>
       <NavbarContainer>
            <NavLogo to='/'>
                <NavIcon />
                 Hislordship
            </NavLogo>
            <MenuIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MenuIcon>
            <NavMenu onClick={handleClick} click={click}>
            <NavItem>
                <NavLinks to='/'>
                    Home
                </NavLinks>
            </NavItem>

              <NavItem>
                <NavLinks to='/services'>
                    Services
                </NavLinks>
            </NavItem>

              <NavItem>
                <NavLinks to='/portfolio'>
                   Portfolio
                </NavLinks>
            </NavItem>
            <NavItemBtn>
                {button ?(
                    <NavBtnLink to='/signup'>
                        <Button primary>Sign-Up</Button>
                    </NavBtnLink>
                ) : (
                    <NavBtnLink to='/signup'>
                        <Button fontBig primary>

                        </Button>
                    </NavBtnLink>
                )}
            </NavItemBtn>
            </NavMenu>
            
       </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
