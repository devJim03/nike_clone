import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        {/*max-container is a user defined style in index.css, justify between is justify content space between*/}
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <img src={headerLogo} alt='logo' width={130} height={29}/>
            </a>
            {/*max-lg hidden means on smaller screens its hidden aka only visible on desktop*/}
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'> {/*tldr max-lg means mobile devices*/}
            {/*dynamically map of each element in navlinks to create a li based of each link think for each link in navLinks make an li tag, key based off a unique property in links*/}
            {navLinks.map((links)=>(
                <li key={links.label}>
                    <a href={links.href} className='fonts-montserrat leading-normal text-lg text-slate-gray'>{links.label}</a>
                </li>
            ))}
            <li className='fonts-montserrat leading-normal text-lg text-slate-gray'>Sign In</li><li/>
            </ul>
            <div className='hidden max-lg:block'> {/*usually the hamburger menu is hidden for mobile devices its unhidden aka its block*/}
                <img src = {hamburger} width={25} height={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav