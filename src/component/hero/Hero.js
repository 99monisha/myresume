import React from "react"
import "./Hero.css"
import hero from "../pic/moni.png"
import skill1 from "../pic/ds.png"
import skill2 from "../pic/cc.png"
import skill3 from "../pic/ww.png"
import { Typewriter } from "react-simple-typewriter"

const Hero = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Monisha Dolai</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                 words={['Student Coder','Developer']}
                 loop={5}
                 typeSpeed={70}
                 deleteSpeed={50}
                 delaySpeed={1000}
                  />
              </span>
            </h2>

            <p>I am a fresher,pursuing B.Tech in CSE. I like to Code, Design. I am an enthusiastic who loves 
              to take up new challenges and learn new skills. I love spreading knowledge and positivity
            </p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
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
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero