import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
          <section className='footer' id='footer'>
        <div className='footer-top'>
            <div className='topp'>FOLLOE ME
            <div className='button f_flex center'>
                  <button className='btn_shadow'>
                   <a href=" https://mail.google.com/mail/u/0/"> <i class="fa-solid fa-envelope"></i> </a>      
                  </button>
                  <button className='btn_shadow'><a href="https://github.com/99monisha">
                  <i class="fa-brands fa-github"></i></a>
                  </button>
                  <button className='btn_shadow'>
                    <a href="https://www.linkedin.com/feed/"><i class='fab fa-linkedin-in'></i></a>
              </button>
                </div>
                  </div>

        </div>
        </section>
    </>
  )
}

export default Footer