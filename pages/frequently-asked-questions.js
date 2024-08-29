import Header from "../components/Header"; 
import Footer from "../components/Footer";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



export default function Frequent() {

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
            <div className="banner_content row pagebaner frequently-banner-cls">
                <div className="col-md-5 position-relative slide1part2">
                    <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic">
                        <Image src="/image/frequently-banner.png" alt="" width={641} height={614}/>
                    </div>
                    <div className="banner_btn_wp search-mobile-cls">
                        <input type="search" className="sec_btn search-field-cls" placeholder="Search your questions"></input>
                    </div>
                    <div className="position-absolute money-mobile-position" style={{ left: '-12%', bottom: '43%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1000">
                        <Image src="/image/moneyplan.svg" alt="Image 1" className="img-fluid money-desktop" width={284} height={194} />
                        <Image src="/image/money-planning.png" alt="Image 1" className="img-fluid money-mobile" width={170} height={160} />
                    </div>
                    <div className="position-absolute retierment-mobile-position" style={{ bottom: '10%', right: '-16%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000">
                        <Image src="/image/retiermentplanning.svg" alt="Image 2" className="img-fluid retierment-desktop"  width={337} height={156} />
                        <Image src="/image/retierment-planning.png" alt="Image 2" className="img-fluid retierment-mobile"  width={170} height={160} />
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6 tex-start d-flex justify-content-around flex-column">
                    <h1 className="h1_title frequently-title-cls">Frequently Asked Questions
                        </h1>
                        <h3 className="sub_title frequently-sub_title-cls">  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed</h3>

                    <div className="banner_btn_wp search-desktop-cls fade-in">
                        <input type="search" className="sec_btn search-field-cls" placeholder="Search your questions"></input>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
   <Footer/>
   
</div>
);
}

