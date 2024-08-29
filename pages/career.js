import Header from "../components/Header"; 
import Footer from "../components/Footer";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



export default function FInancial() {

    useEffect(() => {
		AOS.init({
		
		});
	  }, []);

  return (
    <div >
      
	 


      
	  <Header />
 
        <section data-scroll-section className="main_banner career_banner">
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
                                {/* <svg className="animated_svg" data-scroll-section  viewBox="0 0 654 768" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.09">
                                <path d="M1022 619L198.328 619C197.663 619 197.183 618.363 197.367 617.724L421.01 -160" stroke="url(#paint0_diamond_26_94)" stroke-width="76" stroke-linecap="round"/>
                                <path d="M764 705L164.31 705C119.084 705 86.4594 661.672 98.9581 618.207L298.01 -74" stroke="url(#paint1_diamond_26_94)" stroke-width="48" stroke-linecap="round"/>
                                <path d="M919.5 759L139.548 759C69.684 759 19.3037 692.043 38.6574 624.913L224.01 -18.0001" stroke="url(#paint2_linear_26_94)" stroke-width="17" stroke-linecap="round"/>
                                </g>
                                <defs>
                                <radialGradient id="paint0_diamond_26_94" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(214.5 619) rotate(-47.5767) scale(1494.21 600.371)">
                                <stop stop-color="#7C5224"/>
                                <stop offset="1" stop-color="#7C5224" stop-opacity="0"/>
                                </radialGradient>
                                <radialGradient id="paint1_diamond_26_94" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(114.5 654.5) rotate(-33.0873) scale(909.481 805.574)">
                                <stop stop-color="#7C5224"/>
                                <stop offset="1" stop-color="#7C5224" stop-opacity="0"/>
                                </radialGradient>
                                <linearGradient id="paint2_linear_26_94" x1="69" y1="727.5" x2="340" y2="526.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7C5224"/>
                                <stop offset="1" stop-color="#7C5224" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                                </svg> */}

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
                            <div className="banner_content row pagebaner carrer-banner-cls">
                                <div className="col-md-5 tex-start d-flex justify-content-around flex-column">
                                    <h1 className="h1_title carrer-title">Climb the career ladder with us
                                      </h1>
                                      <h3 className="sub_title carrer-sub_title">  Finances has never been this interesting.</h3>

                                    <div className="career-banner-btn-desktop banner_btn_wp">
                                        <a href="#" className="sec_btn" title="Read More">
                                            <div className="text-btn">Read More </div>
                                            <Image src="/image/right_arrow.svg" width={16} height={16} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-4 position-relative slide1part2">
                                    <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic">
                                        <Image src="/image/career-banner.png" alt="" className="career-desktop" width={450} height={614}/>
                                    </div>
                                    <div className="career-banner-btn-responsive text-center">
                                        <a href="#" className="sec_btn" title="Read More">
                                            <div className="text-btn">Read More </div>
                                            <Image src="/image/right_arrow.svg" width={40} height={40} />
                                        </a>
                                    </div>
                                    <div className="position-absolute perc30-mobile-position" style={{ right: '-27%', top: '75%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1000">
                                        <Image src="/image/perc-30.png" alt="Image 1" className="img-fluid perc-30-desktop" width={284} height={217}/>
                                        <Image src="/image/30-mobile.png" alt="Image 1" className="img-fluid perc-30-mobile" width={250} height={140}/>
                                    </div>
                                    <div className="position-absolute salary-mobile-position" style={{ bottom: '60%', right: '-40%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000">
                                        <Image src="/image/salary.png" alt="Image 2" className="img-fluid salary-desktop" width={276} height={90}/>
                                        <Image src="/image/we-career-mobile.png" alt="Image 2" className="img-fluid salary-mobile" width={100} height={150}/>
                                    </div>
                                    <div className="position-absolute member-mobile-position" style={{ top: '86%', left: '-15%' }} data-aos-easing="ease-out-cubic" data-aos="fade-right" data-aos-delay="1700" data-aos-duration="1000">
                                        <Image src="/image/member.png" alt="Image 3" className="img-fluid member-desktop" width={264} height={90}/>
                                        <Image src="/image/member-150-mobile.png" alt="Image 3" className="img-fluid member-mobile" width={180} height={160}/>
                                    </div>
                                </div>
                            </div>
                        </div>
        </section>

        <section class="career_page_content text_center" data-scroll-section>
			<div class="container">
				<h2 class="h2_title fadeup-animation delay_0_2" data-scroll>Our total wealth management service</h2>
				<div class="fadeup-animation delay_0_4" data-scroll>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
				</div>

				<div class="fadeup-animation delay_0_6" data-scroll>
					<a href="#" class="sec_btn">
						What we do <img src="/image/right_arrow.svg" alt="Right Arrow" />
					</a>
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
          Life at Ladder7
        </h2>

        <div className="swiper life_sec_slider fadeup-animation delay_0_4" data-scroll>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="life_slider_box">
                <img
                  src="/image/life_slider_1.jpg"
                  alt="We have vibrant community"
                />
                <h2 className="h2_title">We have vibrant community</h2>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="life_slider_box">
                <img
                  src="/image/life_slider_1.jpg"
                  alt="We have vibrant community"
                />
                <h2 className="h2_title">We have vibrant community</h2>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="life_slider_box">
                <img
                  src="/image/life_slider_1.jpg"
                  alt="We have vibrant community"
                />
                <h2 className="h2_title">We have vibrant community</h2>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
    
    <section className="open_job_sec" data-scroll-section>
      <div className="container">
        <h2 className="h2_title text_center fadeup-animation delay_0_2" data-scroll>
          Open Jobs For You
        </h2>

        <div className="swiper open_job_slider fadeup-animation delay_0_4" data-scroll>
          <div className="swiper-wrapper">
            {[...Array(5)].map((_, index) => (
              <div className="swiper-slide" key={index}>
                <div className="open_job_box">
                  <a href="#" className="job_fav">
                    <img
                      src="/image/star.svg"
                      alt="Star"
                    />
                  </a>
                  <h4 className="h4_title">Knowledge Manager Senior Specialist</h4>
                  <div className="open_job_box_list">
                    <ul>
                      <li>
                        <div className="job_list_icon">
                          <img
                            src="/image/location_icon.svg"
                            alt="Location"
                           
                          />
                        </div>
                        <p>Mumbai</p>
                      </li>
                      <li>
                        <div className="job_list_icon">
                          <img
                            src="/image/people_icon.svg"
                            alt="People"
                           
                          />
                        </div>
                        <p>Operations</p>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="read_mode_rounded">
                    <img
                      src="/image/black_right_arrow.svg"
                      alt="Arrow"
                      width={25} // Specify appropriate width and height
                      height={25} // Specify appropriate width and height
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
                    
   <Footer/>
   
</div>
);
}





