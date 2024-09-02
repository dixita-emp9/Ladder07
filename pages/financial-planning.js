import Header from "../components/Header"; 
import Footer from "../components/Footer";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from "react";



export default function FInancialReport() {

    useEffect(() => {
		AOS.init({
		
		});
	  }, []);

    // const activeTab = useRef('tab1');
    const [activeTab, setActiveTab] = useState('tab1'); // Default tab ID
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };
    const tabs = [
      { id: 'A', text: 'Lorem Ipsum dolor sit amet' },
      { id: 'B', text: 'Lorem Ipsum dolor sit amet' },
      { id: 'C', text: 'Lorem Ipsum dolor sit amet' },
      { id: 'D', text: 'Lorem Ipsum dolor sit amet' },
      { id: 'E', text: 'Lorem Ipsum dolor sit amet' },
      { id: 'F', text: 'Lorem Ipsum dolor sit amet' },
    ];
  return (
    <div >
      
	 


      
	<Header />
 
    <section data-scroll-section className="main_banner">
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
            <div className="banner_content row pagebaner financial-plan-section">
                <div className="col-md-5 text-start d-flex justify-content-around flex-column">
                    <h3 className="sub_title financial-plan-sub_title">  Financial Planning</h3>
                    <h1 className="h1_title financial-plan-title">Lorem ipsum dolor sit amet, consectetur </h1>
                    <h3 className="sub_title banner_btn_wp financial-plan-sub_title">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet</h3>

                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5 position-relative slide1part2 d-flex flex-wrap justify-content-center align-items-center financial-grid">
                    <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic">
                        {/* <Image src="/image/financial-image1.png" alt="" width={500} height={614}/> */}
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="position-absolute position-relative-financial-report position-relative-financial-report1" style={{ left: '0', bottom: '22%' }} data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic">
                                <Image src="/image/financial-image3.png" alt="Image 1" className="img-fluid savings-dekstop" width={270} height={340}/>
                                <Image src="/image/financial-image3.png" alt="Image 1" className="img-fluid savings-mobile" width={130} height={130}/>
                            </div>
                            <div className="position-absolute analyse1-mobile-position" style={{ left: '-13%', bottom: '28%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1000">
                                <Image src="/image/analyse1.png" alt="Image 1" className="img-fluid savings-dekstop" width={200} height={231}/>
                                <Image src="/image/understand.png" alt="Image 1" className="img-fluid savings-mobile" width={150} height={150}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="position-absolute position-relative-financial-report position-relative-financial-report2" style={{ top: '82%', left: '0' }} data-aos="clip-left" data-aos-delay="1100" data-aos-duration="500" data-aos-easing="ease-in-cubic">
                                <Image src="/image/financial-image2.png" alt="Image 3" className="img-fluid balance-dekstop" width={270} height={340}/>
                                <Image src="/image/financial-image2.png" alt="Image 3" className="img-fluid balance-mobile" width={130} height={130}/>
                            </div>
                            <div className="position-absolute analyse2-mobile-position" style={{ bottom: '-30%', right: '35%',zIndex: '1' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000">
                                <Image src="/image/understand.png" alt="Image 1" className="img-fluid savings-dekstop" width={200} height={231}/>
                                <Image src="/image/analyse1.png" alt="Image 1" className="img-fluid savings-mobile" width={170} height={150}/>
                            </div>
                        </div>
                    </div>
                    <div className="row big-img-cls">
                        <div className="position-absolute position-relative-financial-report position-relative-financial-report3" style={{ }} data-aos="clip-left" data-aos-delay="1200" data-aos-duration="500" data-aos-easing="ease-in-cubic">
                            <Image src="/image/financial-image1.png" alt="Image 2" className="img-fluid goal-plan-dekstop" width={330} height={480}/>
                            <Image src="/image/financial-image1.png" alt="Image 2" className="img-fluid goal-plan-mobile" width={150} height={150}/>
                        </div>
                        <div className="position-absolute understand-mobile-position" style={{ top: '85%', left: '90%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1700" data-aos-duration="1000">
                            <Image src="/image/analyse2.png" alt="Image 1" className="img-fluid savings-dekstop" width={200} height={231}/>
                            <Image src="/image/analyse2.png" alt="Image 1" className="img-fluid savings-mobile" width={150} height={150}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="help_you_sec" data-scroll-section>
      <div className="container">
          <h1 className="help-title-mobile">How we help you?</h1>
        <div className="help_you_box fadeup-animation delay_0_6" data-scroll>
          <div className="help_you_box_left">
            <div className="help_you_tab">
              <ul>
                <li
                  className={activeTab === 'tab1' ? 'help_you_tab_active' : ''}
                  onClick={() => handleTabClick('tab1')}
                  data-tab="tab1"
                >
                  <span>What is financial Planning</span>
                  <span className="read_mode_rounded">
                    <img
                      src="/image/next-arrow-clr.png"
                      alt="What is financial Planning"
                    />
                  </span>
                </li>
                <li
                  className={activeTab === 'tab2' ? 'help_you_tab_active' : ''}
                  onClick={() => handleTabClick('tab2')}
                  data-tab="tab2"
                >
                 <span> Who is financial advisor?</span>
                  <span className="read_mode_rounded">
                    <img
                      src="/image/next-arrow-clr.png"
                      alt="Who is financial advisor?"
                    />
                  </span>
                </li>
                <li
                  className={activeTab === 'tab3' ? 'help_you_tab_active' : ''}
                  onClick={() => handleTabClick('tab3')}
                  data-tab="tab3"
                >
                  <span>Who needs financial Advice</span>
                  <span className="read_mode_rounded">
                    <img
                      src="/image/next-arrow-clr.png"
                      alt="Who needs financial Advice"
                    />
                  </span>
                </li>
                <li
                  className={activeTab === 'tab4' ? 'help_you_tab_active' : ''}
                  onClick={() => handleTabClick('tab4')}
                  data-tab="tab4"
                >
                  <span>Why pay fees for financial Advice</span>
                  <span className="read_mode_rounded">
                    <img
                      src="/image/next-arrow-clr.png"
                      alt="Why pay fees for financial Advice"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="help_you_box_right">
            {activeTab === 'tab1' && (
              <div className="help_you_tab_content help_you_tab_content_active">
                <img
                  src="/image/financial-planning-help.png"
                  alt="What is financial Planning"
                />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  1
                </p>
              </div>
            )}
            {activeTab === 'tab2' && (
              <div className="help_you_tab_content help_you_tab_content_active">
                <img
                  src="/image/financial-planning-help.png"
                  alt="Who is financial advisor?"
                />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  2
                </p>
              </div>
            )}
            {activeTab === 'tab3' && (
              <div className="help_you_tab_content help_you_tab_content_active">
                <img
                  src="/image/financial-planning-help.png"
                  alt="Who needs financial Advice"
                />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                3
                </p>
              </div>
            )}
            {activeTab === 'tab4' && (
              <div className="help_you_tab_content help_you_tab_content_active">
                <img
                  src="/image/financial-planning-help.png"
                  alt="Why pay fees for financial Advice"
                />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  4
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

    <section data-scroll-section className="aspect-financial-section">
      <div className="container">
        <div className="">
          <div className="aspect-financial-planning">
            <h2 className="h1_title text-center aspect_heading">Aspects of Financial Planning</h2>
            <p className="sub_title text-center aspect_sub_title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br className="responsive-br" /> tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="aspect-img-div financial-desktop-cls"><img src="/image/aspect-financial.png" alt="cta Image" /></div>

          <div className="financial-planning-container-responsive">
            <ul className="financial-planning-list">
              {tabs.map((tab) => (
                <li key={tab.id} className="financial-planning-item">
                  <div className="tab-id outline_text">{tab.id}</div>
                  <span className="tab-text">{tab.text}</span>
                  <span className="read_mode_rounded">
                    <a href=""><img
                      src="/image/next-arrow-clr.png"
                      alt={tab.text}
                    />
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>


      
      </div>
    </section>

    <section data-scroll-section className="benefits_management_service_sec  fi">
      <div className="container">
        <div className="management_service_title text_center">
          <h2 className="h2_title benefits-heading-title">Benefits of Financial Planning</h2>
          <p className="sub_title benefits-sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="benefits_management_service_slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="management_service_box">
                
                <h3 className="h3_title"><b className="h1_title outline_text">01</b> </h3>
                <h2 className="benefits-title">Benefit one</h2>
                  <p className="sub_title benedfits-para-cls">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="management_service_box">
                
                <h3 className="h3_title"><b className="h1_title outline_text">02</b></h3>
                <h2 className="benefits-title">Benefit two</h2>
                <p className="sub_title benedfits-para-cls">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="management_service_box">
                
                <h3 className="h3_title"><b className="h1_title outline_text">03</b> </h3>
                <h2 className="benefits-title">Benefit three</h2>
                <p className="sub_title benedfits-para-cls">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="management_service_box">
                
                <h3 className="h3_title"><b className="h1_title outline_text">04</b> </h3>
                <h2 className="benefits-title">Benefit four</h2>
                <p className="sub_title benedfits-para-cls">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>

      <section className="our_timeline financial-planning-timeline"  data-scroll-section >
      <div class="container">
        <div class="our_timeline_slider fadeup-animation delay_0_4" >
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

      <section className="management_sec about_management_sec financial-planning-form" data-scroll-section>
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

      <section data-scroll-section className="cta_sec financial-planning-cta">
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

