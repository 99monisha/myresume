import React from "react"
import "./Hero.css"
import hero from "../pic/moni.png"
import skill1 from "../pic/1.png"
import skill2 from "../pic/2.png"
import skill3 from "../pic/a2.png"
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
                 words={['Student Coder', ' Developer']}
                 loop
                 cursor cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={100} 
                  delaySpeed={1500} />
              </span>
            </h2>

            <p>lorem1h uh hiuh i hui hih uih j hxdd cdhgcu dich ducihduyhxgducdyuhdgy cdfycxfdgtx fdgtfxydtf xyf 
            </p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
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