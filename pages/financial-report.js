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
            <div className="banner_content row pagebaner financial-health-section">
                <div className="col-md-5 text-start d-flex justify-content-around flex-column">
                    <h1 className="h1_title financial-health-title">Financial Health Report
                        </h1>
                        <h3 className="sub_title financial-health-sub_title">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>

                    <div className="banner_btn_wp financial-health-desktop-btn" >
                        <a href="#" className="sec_btn" title="Read More">
                            <div className="text-btn">Check Now </div>
                            <Image src="/image/right_arrow.svg" width={40} height={40} />
                        </a>
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4 position-relative slide1part2">
                    <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic">
                        <Image src="/image/financial-health.png" alt="" width={500} height={614}/>
                    </div>

                    <div className="financial-health-mobile-btn text-center">
                        <a href="#" className="sec_btn" title="Check Now">
                            <div className="text-btn">Check Now </div>
                            <Image src="/image/right_arrow.svg" className="financial-arrow-desktop" width={40} height={40} />
                            <Image src="/image/right_arrow.svg" className="financial-arrow-mobile" width={22} height={22} />
                        </a>
                    </div>

                    <div className="position-absolute savings-mobile-position" style={{ left: '-26%', bottom: '22%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1000">
                        <Image src="/image/savings-health.png" alt="Image 1" className="img-fluid savings-dekstop" width={284} height={231}/>
                        <Image src="/image/savings-health-mobile.png" alt="Image 1" className="img-fluid savings-mobile" width={200} height={150}/>
                    </div>
                    <div className="position-absolute goal-mobile-position" style={{ bottom: '30%', right: '-20%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000">
                        <Image src="/image/goal-health.png" alt="Image 2" className="img-fluid goal-health-dekstop" width={284} height={198}/>
                        <Image src="/image/goal-health-mobile.png" alt="Image 2" className="img-fluid goal-health-mobile" width={200} height={150}/>
                    </div>
                    <div className="position-absolute balance-mobile-position" style={{ top: '78%', left: '-30%' }} data-aos-easing="ease-out-cubic" data-aos="fade-right" data-aos-delay="1700" data-aos-duration="1000">
                        <Image src="/image/balance-health.png" alt="Image 3" className="img-fluid balance-dekstop" width={329} height={135}/>
                        <Image src="/image/balance-health-mobile.png" alt="Image 3" className="img-fluid balance-mobile" width={284} height={150}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
   <Footer/>
   
</div>
);
}

