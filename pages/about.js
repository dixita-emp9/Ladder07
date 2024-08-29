import Header from "../components/Header"; 
import Footer from "../components/Footer";
import { useEffect } from "react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
	useEffect(() => {
		AOS.init({
		
		});
	  }, []);

  return (
<div >
 
<Header/>
	<section data-scroll-section className="main_banner about-banner-cls">
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
                            <div className="banner_content row pagebaner about-banner-content">
							<div className="col-md-4 position-relative slide1part2">
                                    <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic" className="about-img-mobile-cls">
                                        <Image src="/image/about-banner.png" alt="" width={450} height={614}/>
                                    </div>
									<div className="about-banner-btn-responsive mt-3 text-center">
                                        <a href="#" className="sec_btn" title="Read More">
                                            <div className="text-btn">Read More </div>
                                            <Image src="/image/right_arrow.svg" width={40} height={40} />
                                        </a>
                                    </div>
                                </div>
								<div className="col-md-2"></div>
                                <div className="col-md-6 tex-start d-flex justify-content-around flex-column">
                                      <h3 className="sub_title about-subtitle-cls">  About Us</h3>
                                    <h1 className="h1_title about-title-cls">You’ve come to a trusted financial planner
                                      </h1>

                                    <div className="banner_btn_wp about-banner-btn-desktop">
                                        <a href="#" className="sec_btn" title="Read More">
                                            <div className="text-btn">Read More </div>
                                            <Image src="/image/right_arrow.svg" width={40} height={40} />
                                        </a>
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

	<section data-scroll-section className="our_presence">
		<div className="container">
			<div className="our_presence_title text_center">
				<h2 className="h2_title">Our presence</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua</p>
			</div>

			<div className="contact_info_box">
				<div className="contact_info">
					<ul>
						<li>
							<div className="contact_info_icon">
								<Image src="/image/badge.svg" alt="Location" width={65} height={65}
                                />
							</div>
							<div className="contact_info_content">
								<a href="#"
									title="514/514, Skylark, Plot No. 63, Sector 11, Sakal Bhavan Road, CBD Belapur, Navi Mumbai, Maharashtra - 400614">514/514,
									Skylark, Plot No. 63, Sector 11, Sakal Bhavan Road, CBD
									Belapur, Navi Mumbai, Maharashtra - 400614</a>
							</div>
						</li>
						<li>
							<div className="contact_info_icon">
								<Image src="/image/badge.svg" alt="Location" width={65} height={65}/>
							</div>
							<div className="contact_info_content">
								<div className="">
									<a href="#" title="+91-98765 43210">+91-98765 43210</a>,
									<a href="#" title="+91-98765 43210">+91-98765 43210</a>
								</div>
								<div className="">
									<a href="#" title="+91-98765 43210">+91-98765 43210</a>,
									<a href="#" title="+91-98765 43210">+91-98765 43210</a>
								</div>
							</div>
						</li>
						<li>
							<div className="contact_info_icon">
								<Image src="/image/badge.svg" alt="Location" width={65} height={65}/>
							</div>
							<div className="contact_info_content">
								<a href="#" title="@Ladder&fa">@Ladder&fa</a>
							</div>
						</li>
						<li>
							<div className="contact_info_icon">
								<Image src="/image/badge.svg" alt="Location" width={65} height={65}/>
							</div>
							<div className="contact_info_content">
								<div className="">
									<a href="#" title="contact@ladder7.co.in">contact@ladder7.co.in</a>
								</div>
								<div className="">
									<a href="#" title="support@ladder7.co.in">support@ladder7.co.in</a>
								</div>
							</div>
						</li>
					</ul>
				</div>

				<div className="contact_map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0870496047737!2d73.03553297609643!3d19.015885453855244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c252cf46cfe9%3A0x62ffe99210c90ec0!2sSakal%20Bhavan%20Rd%2C%20CBD%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1720962590909!5m2!1sen!2sin"
						allowFullScreen="" loading="lazy"></iframe>
					<a href="#" className="sec_btn">
						Go Direction
						<Image src="/image/black_right_arrow.svg" width={25} height={25}/>
					</a>
				</div>
			</div>
		</div>
	</section>

	<section data-scroll-section className="management_service_sec">
		<div className="container">
			<div className="management_service_title text_center">
				<h2 className="h2_title">Our total wealth management service</h2>
			</div>

			<div className="management_service_slider">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className="management_service_box">
							<div className="management_service_img">
								<Image src="/image/workimg.jpg" alt="Management Service 1" width={274}
												height={154}/>
							</div>
							<h3 className="h3_title"><b className="h1_title outline_text">01</b> Life
								Planning</h3>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="management_service_box">
							<div className="management_service_img">
								<Image src="/image/workimg.jpg" alt="Management Service 1" width={274}
												height={154}/>
							</div>
							<h3 className="h3_title"><b className="h1_title outline_text">02</b>Financial Planning</h3>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="management_service_box">
							<div className="management_service_img">
								<Image src="/image/workimg.jpg" alt="Management Service 1" width={274}
												height={154}/>
							</div>
							<h3 className="h3_title"><b className="h1_title outline_text">03</b> Wealth Managemen</h3>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="management_service_box">
							<div className="management_service_img">
								<Image src="/image/workimg.jpg" alt="Management Service 1" width={274}
												height={154}/>
							</div>
							<h3 className="h3_title"><b className="h1_title outline_text">03</b> Wealth Managemen</h3>
						</div>
					</div>
				</div>
				<div className="swiper-pagination"></div>
			</div>
		</div>
	</section>

	<section data-scroll-section className="experience_sec">
		<div className="experience_shape">
			<Image src="/image/global_shape.png" className="experience_left_shape" width={787}
												height={814}/>
			<Image src="/image/global_shape.png" className="experience_right_shape" width={787}
												height={814}/>
		</div>
		<div className="container">
			<div className="experience_sec_title text_center">
				<h2 className="h2_title">
					A truly unique wealth management experience
				</h2>
			</div>

			<div className="experience_box_wp">
				<div className="experience_box">
					<Image src="/image/hand_holding.svg" width={65} height={65}/>
					<p>High-touch personalised service</p>
				</div>
				<div className="experience_box">
					<Image src="/image/meddle.svg" width={65} height={65}/>
					<p>High-touch personalised service</p>
				</div>
				<div className="experience_box">
					<Image src="/image/badge.svg" width={65} height={65}/>
					<p>High-touch personalised service</p>
				</div>
				<div className="experience_box">
					<Image src="/image/26_January.svg" width={65} height={65}/>
					<p>High-touch personalised service</p>
				</div>
				<div className="experience_box">
					<Image src="/image/spaceship.svg" width={65} height={65}/>
					<p>High-touch personalised service</p>
				</div>
				<div className="experience_box">
					<Image src="/image/hand_holding.svg" width={65} height={65}/>
					<p>High-touch personalised service</p>
				</div>
			</div>
		</div>
	</section>

	<section data-scroll-section className="financial_advisor">
		<div className="container">
			<div className="financial_advisor_title text_center">
				<h2 className="h2_title">Recognised as a Top Financial Advisor</h2>
			</div>

			<div className="financial_advisor_slider_wp">
				<div className="swiper financial_advisor_slider">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div className="financial_advisor_box">
								<p className="financial_advisor_box_label">Top Financial Advisor</p>
								<div className="financial_advisor_img">
									<Image src="/image/forbes.png" alt="Financial Advisor 1" width={164} height={164}/>
								</div>
								<div className="financial_advisor_box_content">
									<h3 className="h3_title">Forbes</h3>
									<p>Ranked as Top Wealth Management firm in Mumbai</p>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="financial_advisor_box">
								<p className="financial_advisor_box_label">Top Financial Advisor</p>
								<div className="financial_advisor_Image">
									<Image src="/image/forbes.png" alt="Financial Advisor 1" width={164} height={164}/>
								</div>
								<div className="financial_advisor_box_content">
									<h3 className="h3_title">Forbes</h3>
									<p>Ranked as Top Wealth Management firm in Mumbai</p>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="financial_advisor_box">
								<p className="financial_advisor_box_label">Top Financial Advisor</p>
								<div className="financial_advisor_img">
									<Image src="/image/forbes.png" alt="Financial Advisor 1" width={164} height={164}/>
								</div>
								<div className="financial_advisor_box_content">
									<h3 className="h3_title">Forbes</h3>
									<p>Ranked as Top Wealth Management firm in Mumbai</p>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="financial_advisor_box">
								<p className="financial_advisor_box_label">Top Financial Advisor</p>
								<div className="financial_advisor_img">
									<Image src="/image/forbes.png" alt="Financial Advisor 1" width={164} height={164}/>
								</div>
								<div className="financial_advisor_box_content">
									<h3 className="h3_title">Forbes</h3>
									<p>Ranked as Top Wealth Management firm in Mumbai</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="swiper_button">
					<button className="swiper-button-prev">
						<Image src="/image/black_right_arrow.svg" width={16} height={16}/>
					</button>
					<button className="swiper-button-next">
						<Image src="/image/black_right_arrow.svg" width={16} height={16}/>
					</button>
				</div>
			</div>
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