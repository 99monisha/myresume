import React from 'react'
import './Header.css'

const header = () => {
  return (
    <>
    <header className='header'>
     <div className='container d-flex'>
         <div className='logo'>
             <img src='' alt=''/>
         </div>
 
         <div className='navlink'>
             <ul className='link f_flex uppercase'>
                 <li><a href='#home'>home</a></li>
                 <li><a href='#features'>features</a></li>
                 <li><a href='protfolio'>protfolio</a></li>
                 <li><a href='#resume'>resume</a></li>
                 <li><a href='#clients'>clients</a></li>
                 <li><a href='#blog'>blog</a></li>
                 <li><a href='#contact'>contact</a></li>
                 <li><button className='home-btn'>BUY NOW</button></li>
 
             </ul>
 
             <button className='toggle'>
                 <i className='fas fa-times'></i>
             </button>
         </div>
     </div>
    </header>
    
    </>
  )
}

export default header