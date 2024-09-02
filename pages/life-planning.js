import Header from "../components/Header"; 
import Footer from "../components/Footer";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from "react";



export default function LIfe() {
    const videoRef = useRef(null);
	const [isVideoActive, setIsVideoActive] = useState(false);

	const handlePlayClick = () => {
	  setIsVideoActive(true);
	  videoRef.current.play();
	};
  
	const handleCloseClick = () => {
	  setIsVideoActive(false);
	  videoRef.current.pause();
	};



  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: 'Understand',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Analyse',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Strategies',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };


  
    useEffect(() => {
		AOS.init({
		
		});
	  }, []);

  return (
    <div >
      
	 


      
	  <Header />
 
        <section data-scroll-section className="main_banner life-planning-banner" id="banner">
            <div className="container">
                <div className="banner_shape">
                    <div className="animated_svg_wp banner_left_shape">
                        <svg className="animated_svg" data-scroll-section viewBox="0 0 1046 966" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.2">
                                <path d="M24 149L847.672 149C848.337 149 848.817 149.637 848.633 150.276L624.99 928" stroke="url(#paint0_diamond_2131_1987)" strokeLinecap="round" strokeWidth={76} />
                                <path d="M282 63H881.69C926.916 63 959.541 106.328 947.042 149.793L747.99 842" stroke="url(#paint1_diamond_2131_1987)" strokeWidth={48} strokeLinecap="round" />
                                <path d="M126.5 9H906.452C976.316 9 1026.7 75.9568 1007.34 143.087L821.99 786" stroke="url(#paint2_linear_2131_1987)" strokeWidth={17} strokeLinecap="round" />
                            </g>
                            <defs>
                                <radialGradient id="paint0_diamond_2131_1987" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(831.5 149) rotate(132.423) scale(1494.21 600.371)">
                                    <stop stopColor="#7C5224" />
                                    <stop offset="1" stopColor="#7C5224" stopOpacity={0} />
                                </radialGradient>
                                <radialGradient id="paint1_diamond_2131_1987" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(931.5 113.5) rotate(146.913) scale(909.481 805.574)">
                                    <stop stopColor="#7C5224" />
                                    <stop offset="1" stopColor="#7C5224" stopOpacity={0} />
                                </radialGradient>
                                <linearGradient id="paint2_linear_2131_1987" x1="977" y1="40.5" x2="706" y2="241.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7C5224" />
                                    <stop offset="1" stopColor="#7C5224" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="animated_svg_wp banner_right_shape">
                        <svg className="animated_svg" data-scroll-section viewBox="0 0 1046 966" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.2">
                                <path d="M24 149L847.672 149C848.337 149 848.817 149.637 848.633 150.276L624.99 928" stroke="url(#paint0_diamond_2131_1987)" strokeWidth={76} strokeLinecap="round" />
                                <path d="M282 63H881.69C926.916 63 959.541 106.328 947.042 149.793L747.99 842" stroke="url(#paint1_diamond_2131_1987)" strokeWidth={48} strokeLinecap="round" />
                                <path d="M126.5 9H906.452C976.316 9 1026.7 75.9568 1007.34 143.087L821.99 786" stroke="url(#paint2_linear_2131_1987)" strokeWidth={17} strokeLinecap="round" />
                            </g>
                            <defs>
                                <radialGradient id="paint0_diamond_2131_1987" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(831.5 149) rotate(132.423) scale(1494.21 600.371)">
                                    <stop stopColor="#7C5224" />
                                    <stop offset="1" stopColor="#7C5224" stopOpacity={0} />
                                </radialGradient>
                                <radialGradient id="paint1_diamond_2131_1987" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(931.5 113.5) rotate(146.913) scale(909.481 805.574)">
                                    <stop stopColor="#7C5224" />
                                    <stop offset="1" stopColor="#7C5224" stopOpacity={0} />
                                </radialGradient>
                                <linearGradient id="paint2_linear_2131_1987" x1="977" y1="40.5" x2="706" y2="241.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7C5224" />
                                    <stop offset="1" stopColor="#7C5224" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="banner_content row life-plannnig-cls">
                    <div className="row text-center heading-top-cls">
                        <h3 className="sub_title life-planning-sub-title">Wealth management</h3>
                        <h1 className="h1_title life-planning-h1_title">Lorem ipsum dolor sit amet, consectetur</h1>
                        
                    </div>
                    {/* <div className="col-md-2"></div> */}
                    <div className="row position-relative slide1part2 life-slider-cls">
                        <div className="col-md-4 life-plan-cls">
                            <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic" className=" life-img-cls" data-aos-anchor="#banner">
                                <img src="/image/wealth1.png" alt=""/>
                            </div>
                            <div className="position-absolute col-md-6 position-cstm-cls position-cstm-mobile-cls position-cstm-mobile-cls1" style={{ bottom: '10%', right: '50%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1000" data-aos-anchor="#banner">
                                <img src="/image/wealth1-card.png" alt="Image 1" className="img-fluid planning-desktoop" />
                                <img src="/image/planing-card2-mobile.png" alt="Image 1" className="img-fluid planning-mobile" />
                            </div>
                        </div>
                        <div className="col-md-4 life-plan-cls">
                            <div className=" life-img-cls life-scnd-img" data-aos="clip-left" data-aos-delay="1100" data-aos-duration="500" data-aos-anchor="#banner" data-aos-easing="ease-in-cubic">
                                <img src="/image/wealth2.png" alt="" />
                            </div>
                            <div className="position-absolute col-md-6 position-cstm-cls position-cstm-understand-cls" style={{ right: '0%', bottom: '78%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000" data-aos-anchor="#banner">
                                <img src="/image/wealth2-card.png" alt="Image 2" className="img-fluid planning-desktoop" />
                                <img src="/image/planing-card1-mobile.png" alt="Image 2" className="img-fluid planning-mobile" />
                            </div>


                        </div>
                        <div className="col-md-4 life-plan-cls">
                            <div data-aos="clip-left" data-aos-delay="1200" data-aos-duration="500" data-aos-easing="ease-in-cubic" className=" life-img-cls" data-aos-anchor="#banner">
                                <img src="/image/wealth3.png" alt=""/>
                            </div>
                            <div className="position-absolute col-md-6 position-cstm-cls position-cstm-mobile-cls position-cstm-mobile-cls2" style={{ bottom: '16%', left:'52%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1700" data-aos-duration="1000" data-aos-anchor="#banner">
                                <img src="/image/wealth3-card.png" alt="Image 3" className="img-fluid planning-desktoop" />
                                <img src="/image/planing-card3-mobile.png" alt="Image 3" className="img-fluid planning-mobile" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        
        <section className="expert_book_sec" data-scroll-section>
            <div className="container">
                <div className="swiper expert_book_slider fadeup-animation delay_0_2" data-scroll>
                <img src="/image/finances_banner_shape.png" alt="" className="expert_book_box_shape" />
                
                
                   
                    <div className="expert_book_box">
                        <div className="expert_book_left">
                        <h2 className="h2_title">What is Life Planning ?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                        </div>
                        <div className="expert_book_right">
                        <div className="expert_book_list">
                            <img src="/image/lyf_plan-img.png" alt="Badge" />
                        </div>
                        </div>
                    </div>
   
                </div>
            </div>
        </section>

        <section className="life_sec" data-scroll-section>
          <div className="life_sec_shape fadeup-animation delay_0_2" data-scroll>
            <img
              src="/image/life_sec_shape.png"
              alt=""
              data-scroll
              data-scroll-speed="3"
            />
          </div>

          <div className="container">
            <h2 className="h2_title text_center fadeup-animation delay_0_2" data-scroll>
            Experiencing these <br className="responsive-br" /> challenges? You need a<br className="responsive-br" /> life plan !
            </h2>

            <div className="swiper life_sec_slider fadeup-animation delay_0_4" data-scroll>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="life_slider_box">
                    <img
                      src="/image/life_slider_1.jpg"
                      alt="We have vibrant community"
                      className="need-plan-desktop"
                    />
                    <img
                      src="/image/need-life-plan-mobile.png"
                      alt="We have vibrant community"
                      className="need-plan-mobile"
                    />
                    <h2 className="h2_title">We have vibrant community</h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="life_slider_box">
                    <img
                      src="/image/life_slider_1.jpg"
                      alt="We have vibrant community"
                      className="need-plan-desktop"
                    />
                    <img
                      src="/image/need-life-plan-mobile.png"
                      alt="We have vibrant community"
                      className="need-plan-mobile"
                    />
                    <h2 className="h2_title">We have vibrant community</h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="life_slider_box">
                    <img
                      src="/image/life_slider_1.jpg"
                      alt="We have vibrant community"
                      className="need-plan-desktop"
                    />
                    <img
                      src="/image/need-life-plan-mobile.png"
                      alt="We have vibrant community"
                      className="need-plan-mobile"
                    />
                    <h2 className="h2_title">We have vibrant community</h2>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <section className="life-planning-help" data-scroll-section>
          <div className="container">
            <div className="planning-help-content fadeup-animation delay_0_2" data-scroll>
              <h2>How does Life<br className="responsive-br" /> Planning help?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="zigzag zigzag-left"></div>
            <div className="zigzag zigzag-right"></div>
          </div>
        </section>

        <section id="meet_sec" data-scroll-section>
	        <div className={`meet_sec ${isVideoActive ? "video_active" : ""}`}>
			<div class="video_container"  style={{
          clipPath: isVideoActive
            ? "circle(100% at 50% 50%)"
: "circle(18% at 50% 50%)",}}>
				<video id="video1"  ref={videoRef} preload autoplay muted playsinline loop>
				<source src="/image/video.mp4" type="video/mp4" />
				</video>

				<button class="meet_member_close_btn" onClick={handleCloseClick}>
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
						<path fill="currentColor"
							d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4" />
					</svg>
				</button>

			</div>
			<div class="container">
				<div class="meet_sec_main">
					<div class="meet_member">

						<button class="meet_member_play_btn" onClick={handlePlayClick}><img src="/image/play_icon.svg" /></button>

						
					</div>


					<div class="meet_member_text outline_text">
						<span class="h1_title outline_text">Listen from our experts Listen from our experts Listen from our experts</span>
						<span class="h1_title outline_text">Listen from our experts Listen from our experts Listen from our experts</span>
						<span class="h1_title outline_text">Listen from our experts Listen from our experts Listen from our experts</span>
						<span class="h1_title outline_text">Listen from our experts Listen from our experts Listen from our experts</span>
						<span class="h1_title outline_text">Listen from our experts Listen from our experts Listen from our experts</span>
					</div>
                    <div class="meet_member_text1 outline_text">
						<span class="h1_title outline_text">Listen from our experts Listen from our experts Listen from our experts</span>
						<span class="h1_title outline_text">Listen from our experts Listen from our experts Listen from our experts</span>
						<span class="h1_title outline_text">Listen from our experts Listen from our experts Listen from our experts</span>
						<span class="h1_title outline_text">Listen from our experts Listen from our experts Listen from our experts</span>
						<span class="h1_title outline_text">Listen from our experts Listen from our experts Listen from our experts</span>
					</div>
				</div>
			</div>
          </div>
        </section>

        
        <section className="life-planning-sec-cls" data-scroll-section>
          <div className="container">
            <div className="life-planning-section">
              <div className="content">
                <h1 className="h1_title life-plan-title">Is life planning really for everyone?</h1>
                <p className="sub_title life-plan-sub-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="our_timeline" data-scroll-section>
          <div class="container">
          <div class="our_timeline_title text_center fadeup-animation delay_0_2" data-scroll>
            <div className="timeline-div"><h2 class="h2_title">Our Life Planning Process</h2></div>

            {/* <div className="vertical-line-cls"></div> */}

            <div className="swiper-pagination timeline-pagination">
              <div className="swiper-button-prev timeline-next"> <img src="image/next-arrow-clr.png" alt="Back" /></div>
              <div className="swiper-button-next timeline-prev"> <img src="image/back-arror-clr.png" alt="Back" /></div>
            </div>

          </div>
            <div class="our_timeline_slider fadeup-animation delay_0_4" data-scroll>
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="our_timeline_box">
                    <span class="our_timeline_dot"></span>
                    <h3 class="h1_title">Understand</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="our_timeline_box">
                    <span class="our_timeline_dot"></span>
                    <h3 class="h1_title">Analyse</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="our_timeline_box">
                    <span class="our_timeline_dot"></span>
                    <h3 class="h1_title">Strategies</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="our_timeline_box">
                    <span class="our_timeline_dot"></span>
                    <h3 class="h1_title">Analyse</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="our_timeline_box">
                    <span class="our_timeline_dot"></span>
                    <h3 class="h1_title">Strategies</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
		    </section>


        {/* contact form */}
	  <section className="management_sec about_management_sec" data-scroll-section>
      <div className="container">
        <div className="management_sec_title text_center">
          <h1 className="h2_title fadeup-animation delay_0_2" data-scroll>
            Take the first step to securing your financial future.
          </h1>
          <div className="fadeup-animation delay_0_4" data-scroll>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <form className="contact_form fadeup-animation delay_0_6" data-scroll>
          <h6>Schedule your free consultation</h6>
          <div className="form_input_2">
            <div className="form_input_wp">
              <input className="form_input" type="text" placeholder="First Name*" required />
            </div>
            <div className="form_input_wp">
              <input className="form_input" type="text" placeholder="Last Name*" required />
            </div>
          </div>
          <div className="form_input_2">
            <div className="form_input_wp">
              <input className="form_input" type="number" placeholder="Mobile*" required />
            </div>
            <div className="form_input_wp">
              <input className="form_input" type="email" placeholder="Email*" required />
            </div>
          </div>

          <div className="form_input_wp form_element">
            <select className="form_input">
              <option value="When Would you are planning to retire ?" selected>
                When Would you are planning to retire ?
              </option>
              <option value="saab">Select 1</option>
              <option value="mercedes">Select 1</option>
              <option value="audi">Select 1</option>
            </select>
            <Image src="/image/black_right_arrow.svg" width={20} height={20} alt="Arrow" />
          </div>

          <div className="form_input_wp form_element">
            <select className="form_input">
              <option value="When Would you are planning to retire ?" selected>
                Total Investable Assets (Including company retirement plan)
              </option>
              <option value="saab">Select 1</option>
              <option value="mercedes">Select 1</option>
              <option value="audi">Select 1</option>
            </select>
            <Image src="/image/black_right_arrow.svg" width={20} height={20} alt="Arrow" />
          </div>

          <div className="checkbox_input_wp">
            <input type="checkbox" name="term" id="term" />
            <label htmlFor="term">
              By clicking the above button, you agree to our Terms of Service and confirm that you have read and
              understood our Privacy Policy
            </label>
          </div>

          <div className="form_submit">
            <button className="sec_btn" type="button">
              Submit
              <Image src="/image/right_arrow.svg" width={20} height={20} alt="Arrow" />
            </button>
          </div>
        </form>
      </div>
      <div className="management_bg">
        <Image src="/image/management_bg.jpg" alt="Management Background" layout="fill" objectFit="cover" />
      </div>
    </section>


    <section data-scroll-section className="cta_sec">
		<div className="container">
			<div className="cta_sec_wp">
				<div className="cta_left_content">
					<h2 className="h2_title">
						Schedule a meeting today!
					</h2>
					<p>Our expert team of financial advisors is always ready to help you. Book a consultation now!</p>
					<a href="#" className="sec_btn">
					<div className="text-btn"> Schedule Now  </div>	 <Image src="/image/right_arrow.svg" width={16} height={16}/>
					</a>
				</div>

				<div className="cta_right_content">
					<Image src="/image/cta_img.png" alt="cta Image"  width={872}
												height={511}/>
				</div>
			</div>
		</div>
	  </section>
     

   <Footer/>
   
</div>
);
}

