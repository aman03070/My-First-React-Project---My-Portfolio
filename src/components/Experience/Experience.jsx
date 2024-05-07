import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div>
      <section class="experience background2">
    <div class="container">
      <div class="heading center">
        <div class="heading_top flex">
          <div class="line"></div>
          <div class="line line2"></div>
          <i class="fas fa-circle"></i>
          <h3> Employment & Education</h3>
        </div>
        <div class="heading_bottom">
          <h2><span>My Experience Journey </span></h2>
        </div>
      </div>


      <div class="content flex">
        <div class="left">
          <img src="./assets/images/about1.png" alt=""></img>
        </div>
        <div class="right">
          <div class="timeline">
            <div class="line">
            </div>
            <div class="content content-1">
              <section>
                <i class="icon fas fa-briefcase">
                <img src="./assets/images/portfolio.png" alt="" />
                </i>
                <div class="details">
                  <span> Present</span>
                  <h3>Learner</h3>
                </div>
                <p> I am learner and want to continue to be learner with new things in the filed of technology , soft skills, and Many more.</p>
              </section>
            </div>

            <div class="content content-1">
              <section>
                <i class="icon fas fa-graduation-cap">
                <img src="./assets/images/software-engineer.png" alt="" />
                </i>

                <div class="details">
                  <span> 2022 - Present</span>
                  <h3>Web Development/ Freelancer</h3>
                </div>
                <p> Since my first year of graduate studies, I delved into the world of freelancing, specifically focusing on website design. It all began with projects for clients, where I honed my skills in creating visually appealing and functional websites. Notably, I had the opportunity to showcase my expertise by crafting a professional portfolio for my assistant professor at the university. </p>
              </section>
            </div>

            <div class="content content-1">
              <section>
                <i class="icon fas fa-book-open">
                <img src="./assets/images/graduated.png" alt="" />
                </i>
                <div class="details">
                  <span> 2022 - 2025</span>
                  <h3>BCA / GLA University</h3>
                </div>
                <p>Continuing my academic journey, I am currently pursuing my undergraduate studies in Bachelor of Computer Applications (BCA) at GLA University.</p>
              </section>
            </div>

            <div class="content content-1">
              <section>
                <i class="icon fab fa-acquisitions-incorporated">
                <img src="./assets/images/open-book.png" alt="" />
                </i>
                <div class="details">
                  <span> 2020 - 2022</span>
                  <h3>Senior School / CBSE </h3>
                </div>
                <p>I completed my senior school education at LPS Lucknow, where I earned an admirable overall percentage of 72.2%.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      </div>
  </section>
    </div>
  )
}

export default Experience
