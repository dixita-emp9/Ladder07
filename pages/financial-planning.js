import Header from "../components/Header"; 
import Footer from "../components/Footer";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



export default function FInancialReport() {

    useEffect(() => {
		AOS.init({
		
		});
	  }, []);

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

    <section className="help_you_sec">
      <div className="container">
        <div className="help_you_box fadeup-animation delay_0_6" data-scroll>
          <div className="help_you_box_left">
            <h2 className="h2_title">How we help you</h2>
            <div className="help_you_tab">
              <ul>
                <li
                  className={activeTab === "tab1" ? "active" : ""}
                  onClick={() => handleTabClick("tab1")}
                >
                  Registered investment advisors
                  <span className="read_mode_rounded">
                    <img src="./assets/image/black_right_arrow.svg" alt="" />
                  </span>
                </li>
                <li
                  className={activeTab === "tab2" ? "active" : ""}
                  onClick={() => handleTabClick("tab2")}
                >
                  Professional team members
                  <span className="read_mode_rounded">
                    <img src="./assets/image/black_right_arrow.svg" alt="" />
                  </span>
                </li>
                <li
                  className={activeTab === "tab3" ? "active" : ""}
                  onClick={() => handleTabClick("tab3")}
                >
                  Best advice delivery
                  <span className="read_mode_rounded">
                    <img src="./assets/image/black_right_arrow.svg" alt="" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="help_you_box_right">
            {activeTab === "tab1" && (
              <div className="help_you_tab_content" id="tab1">
                <img src="./assets/image/help_you_tab_img_1.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="help_you_tab_content" id="tab2">
                <img src="./assets/image/help_you_tab_img_1.png" alt="" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo natus sed sint tempore at temporibus harum ab,
                  numquam laborum autem!
                </p>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="help_you_tab_content" id="tab3">
                <img src="./assets/image/help_you_tab_img_1.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores omnis eaque earum consequuntur laboriosam ex?
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

   <Footer/>
   
</div>
);
}

