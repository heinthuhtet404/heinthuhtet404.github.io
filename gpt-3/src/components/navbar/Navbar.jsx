import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../assects/logo.svg'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='App'>
      <div className='App__m'>
        <div className='App__mom__navbar'>
            <img className='App__mom__navbar-logo' src={Logo} alt="logo" />
            <div className='App__mom__navbar-menu'>
                <a href="#Home">Home</a>
                <a href="#gpt3">What is GPT?</a>
                <a href="#OpenAI">Open AI</a>
                <a href="#CaseStudies">Case Studies</a>
                <a href="#Library">Library</a>
            </div>
            <div className='App__mom__navbar-sign'>
                <a href="#signin">Sign in</a>
                <button>Sign up</button>
            </div>
            <div className='App__mom__navbar-menu-ic'>
                {toggleMenu 
                ? <RiCloseLine size={27} color="#fff" onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line size={27} color="#fff" onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className='App__mom__navbar-menumom scale-up-center'>
                        <div className='App__mom__navbar-menu-dad'>
                            <div className='App__mom__navbar-menu twomenu'>
                                <a href="#home">Home</a>
                                <a href="#WhatisGPT?">What is GPT?</a>
                                <a href="#OpenAI">Open AI</a>
                                <a href="#CaseStudies">Case Studies</a>
                                <a href="#Library">Library</a>
                            </div>
                            <div className='App__mom__navbar-sign two'>
                                <a href="#signin">Sign in</a>
                                <button>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
