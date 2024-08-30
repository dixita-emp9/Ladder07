import Header from "../components/Header"; 

import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Footer from "../components/Footer";
import { useEffect, useState, useRef } from 'react';
import HomeSlider from "../components/HomeSlider";


export default function Home() {
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
	
	useEffect(() => {
		AOS.init({
		
		});
	  }, []);
  return (
    <div >
      
	 


      
	  <Header />


	  
	

	{/* <section data-scroll-section className="ss">
		
			

			<div className="hero-slider">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
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
                            <div className="banner_content row">
                                <div className="col-md-5 tex-start">
                                    <h3 className="sub_title">Finances has never been this interesting.</h3>
                                    <h1 className="h1_title">Engage With a New Generation</h1>
                                    <div className="banner_btn_wp">
                                        <a href="#" className="sec_btn" title="Read More">
                                            <div className="text-btn">Read More </div>
                                            <Image src="/image/right_arrow.svg" width={16} height={16} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-5 position-relative slide1part2">
                                    <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic">
                                        <img src="/image/homeslide1.svg" alt="" />
                                    </div>
                                    <div className="position-absolute" style={{ right: '-24%', bottom: '49%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1000">
                                        <img src="/image/life.svg" alt="Image 1" className="img-fluid" />
                                    </div>
                                    <div className="position-absolute" style={{ bottom: '-8%', right: '5%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000">
                                        <img src="/image/planning.svg" alt="Image 2" className="img-fluid" />
                                    </div>
                                    <div className="position-absolute" style={{ top: '30%', left: '-25%' }} data-aos-easing="ease-out-cubic" data-aos="fade-right" data-aos-delay="1700" data-aos-duration="1000">
                                        <img src="/image/wealth.svg" alt="Image 3" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
					</div>
					<div className="swiper-slide">
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
                            <div className="banner_content row pagebaner">
                                <div className="col-md-6 tex-start d-flex justify-content-around flex-column">
                                    <h1 className="h1_title ">Climb the career ladder with us
                                      </h1>
                                      <h3 className="sub_title">  Finances has never been this interesting.</h3>

                                    <div className="banner_btn_wp">
                                        <a href="#" className="sec_btn" title="Read More">
                                            <div className="text-btn">Check Now </div>
                                            <Image src="/image/right_arrow.svg" width={16} height={16} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-5 position-relative slide1part2">
                                    <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic">
                                        <Image src="/image/heroperson2.svg" alt="" width={418} height={543}/>
                                    </div>
                                    
                                    <div className="position-absolute" style={{ bottom: '3%', right: '-16%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000">
                                        <Image src="/image/hero2secondslice.svg" alt="Image 2" className="img-fluid"  width={284} height={217} />
                                    </div>
                                    <div className="position-absolute" style={{ bottom: '47%', right: '-19%' }} data-aos-easing="ease-out-cubic" data-aos="fade-right" data-aos-delay="1700" data-aos-duration="1000">
                                        <Image src="/image/hero2we.svg" alt="Image 3" className="img-fluid"   width={276} height={90}/>
                                    </div>
                                    <div className="position-absolute" style={{ top: '81%', left: '-8%' }} data-aos-easing="ease-out-cubic" data-aos="fade-right" data-aos-delay="1700" data-aos-duration="1000">
                                        <Image src="/image/hero2slice3.svg" alt="Image 3" className="img-fluid"  width={264} height={90}/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
					</div>
					<div className="swiper-slide">
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
                            <div className="banner_content row pagebaner">
                                <div className="col-md-5 tex-start d-flex justify-content-around flex-column">
                                    <h1 className="h1_title">Life Planning
                                      </h1>
                                      <h3 className="sub_title">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>

                                    <div className="banner_btn_wp">
                                        <a href="#" className="sec_btn" title="Read More">
                                            <div className="text-btn">Check Now </div>
                                            <Image src="/image/right_arrow.svg" width={16} height={16} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-4 position-relative slide1part2">
                                    <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic">
                                        <Image src="/image/heroperson3.svg" alt="" width={450} height={614}/>
                                    </div>
                                   
                                    <div className="position-absolute" style={{ bottom: '36%', right: '-29%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000">
                                        <Image src="/image/understand.svg" alt="Image 2" className="img-fluid" width={249} height={272}/>
                                    </div>
                                    <div className="position-absolute" style={{ top: '83%', left: '-30%' }} data-aos-easing="ease-out-cubic" data-aos="fade-right" data-aos-delay="1700" data-aos-duration="1000">
                                        <Image src="/image/analyze.svg" alt="Image 3" className="img-fluid" width={404} height={134}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
					</div>
				
				</div>

				<div className="swiper-pagination"></div>
			</div>
		
	</section> */}


{/* <HomeSlider/> */}


	<section data-scroll-section className="main_banner" >
			<div className="container">
				<div className="banner_shape">
					<div className="animated_svg_wp banner_left_shape">
						<svg className="animated_svg" data-scroll-section viewBox="0 0 1046 966" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g opacity="0.2">
								<path d="M24 149L847.672 149C848.337 149 848.817 149.637 848.633 150.276L624.99 928"
									stroke="url(#paint0_diamond_2131_1987)" strokeLinecap="round" strokeWidth={76}  />
								<path d="M282 63H881.69C926.916 63 959.541 106.328 947.042 149.793L747.99 842"
									stroke="url(#paint1_diamond_2131_1987)" strokeWidth={48} strokeLinecap="round" />
								<path d="M126.5 9H906.452C976.316 9 1026.7 75.9568 1007.34 143.087L821.99 786"
									stroke="url(#paint2_linear_2131_1987)" strokeWidth={17} strokeLinecap="round" />
							</g>
							<defs>
								<radialGradient id="paint0_diamond_2131_1987" cx="0" cy="0" r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(831.5 149) rotate(132.423) scale(1494.21 600.371)">
									<stop stopColor="#7C5224" />
									<stop offset="1" stopColor="#7C5224"  stopOpacity={0} />
								</radialGradient>
								<radialGradient id="paint1_diamond_2131_1987" cx="0" cy="0" r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(931.5 113.5) rotate(146.913) scale(909.481 805.574)">
									<stop stopColor="#7C5224" />
									<stop offset="1" stopColor="#7C5224"  stopOpacity={0} />
								</radialGradient>
								<linearGradient id="paint2_linear_2131_1987" x1="977" y1="40.5" x2="706" y2="241.5"
									gradientUnits="userSpaceOnUse">
									<stop stopColor="#7C5224" />
									<stop offset="1" stopColor="#7C5224"  stopOpacity={0} />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className="animated_svg_wp banner_right_shape">
						<svg className="animated_svg" data-scroll-section viewBox="0 0 1046 966" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g opacity="0.2">
								<path d="M24 149L847.672 149C848.337 149 848.817 149.637 848.633 150.276L624.99 928"
									stroke="url(#paint0_diamond_2131_1987)" strokeWidth={76} strokeLinecap="round" />
								<path d="M282 63H881.69C926.916 63 959.541 106.328 947.042 149.793L747.99 842"
									stroke="url(#paint1_diamond_2131_1987)" strokeWidth={48} strokeLinecap="round" />
								<path d="M126.5 9H906.452C976.316 9 1026.7 75.9568 1007.34 143.087L821.99 786"
									stroke="url(#paint2_linear_2131_1987)" strokeWidth={17} strokeLinecap="round" />
							</g>
							<defs>
								<radialGradient id="paint0_diamond_2131_1987" cx="0" cy="0" r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(831.5 149) rotate(132.423) scale(1494.21 600.371)">
									<stop stopColor="#7C5224" />
									<stop offset="1" stopColor="#7C5224"  stopOpacity={0}/>
								</radialGradient>
								<radialGradient id="paint1_diamond_2131_1987" cx="0" cy="0" r="1"
									gradientUnits="userSpaceOnUse"
									gradientTransform="translate(931.5 113.5) rotate(146.913) scale(909.481 805.574)">
									<stop stopColor="#7C5224" />
									<stop offset="1" stopColor="#7C5224"  stopOpacity={0} />
								</radialGradient>
								<linearGradient id="paint2_linear_2131_1987" x1="977" y1="40.5" x2="706" y2="241.5"
									gradientUnits="userSpaceOnUse">
									<stop stopColor="#7C5224" />
									<stop offset="1" stopColor="#7C5224"  stopOpacity={0} />
								</linearGradient>
							</defs>
						</svg>
					</div>
				</div>
				<div className="banner_content row ">

						<div className="col-md-5 tex-start">
							<h3 className="sub_title home_sub_title">Finances has never been this interesting.</h3>
							<h1 className="h1_title home-page-title">Engage With a New Generation</h1>
							
							<div className="banner_btn_wp home-btn-cls-desktop">
								<a href="#" className="sec_btn" title="Read More"><div className="text-btn">Read More </div> <Image
									src="/image/right_arrow.svg" width={16} height={16} />
								</a>
							</div>
						</div>
						<div className="col-md-2" ></div>
							<div className="col-md-5 position-relative slide1part2"   >
								<div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic" className="home-banner-img-cls">
								<img src="/image/homeslide1.svg" alt=""   />
								</div>	
								<div className="position-absolute position-wealth-cls" style={{ right: '-24%', bottom: '55%' }} data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1000" >
									<img src="/image/wealth.png" alt="Image 1" className="img-fluid home-card-desktop-cls" />
									<img src="/image/home-card-mobile2.png" alt="Image 1" className="img-fluid home-card-mobile-cls" />
								</div>
								<div className="position-absolute position-planning-cls" style={{ bottom: '0%', top:'80%', right: '25%' }} data-aos-easing="ease-out-cubic"  data-aos="fade-left" data-aos-delay="1600" data-aos-duration="1000">
									<img src="/image/planning.png" alt="Image 2" className="img-fluid home-card-desktop-cls" width={250} height={150} />
									<img src="/image/home-card-mobile3.png" alt="Image 2" className="img-fluid home-card-mobile-cls"  />
								</div>
								<div className="position-absolute position-financial-cls" style={{ top: '25%', left: '-21%' }}  data-aos-easing="ease-out-cubic" data-aos="fade-right" data-aos-delay="1700" data-aos-duration="1000">
									<img src="/image/financial.png" alt="Image 3" className="img-fluid home-card-desktop-cls" width={280} height={150}/>
									<img src="/image/home-card-mobile1.png" alt="Image 3" className="img-fluid home-card-mobile-cls" />
								</div>
							</div>

							<div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic" className="home-btn-cls-mobile">
								<a href="#" className="sec_btn" title="Read More"><div className="text-btn">Read More </div> <Image
									src="/image/right_arrow.svg" width={16} height={16} />
								</a>
							</div>
				</div>
			</div>
			
	</section>


	
	
	<section data-scroll-section className="our_work">
		<div className="our_work_title text_center">
			<h2 className="h2_title">We work only in your best interest</h2>
		</div>
		<div className="swiper work_tab">
			<div className="swiper-wrapper">
				<div className="swiper-slide">
					<div className="work_tab_box work_tab_active">
						<div className="work_tab_box_title">
							<h3 className="h3_title"><span className="h1_title outline_text">01</span> <b>Life Planning</b>
							</h3>
						</div>

						<div className="work_tab_box_content">
							<div>
								<div className="work_tab_main_content">
									<div className="work_tab_box_img">
										<Image src="/image/workimg.jpg" alt="Life Planning" width={540}
													height={592} />
									</div>
									<div className="work_tab_box_text">
										<h4 className="h1_title outline_text">01</h4>
										<h3 className="h3_title">Life Planning</h3>
										<ul>
											<li>
												<Image src="/image/right_arrow.svg" alt="Arrow" width={16}
													height={16} />

												Pointer One
											</li>
											<li>
												<Image src="/image/right_arrow.svg" alt="Arrow" width={16}
													height={16} />

												Pointer One
											</li>
											<li>
												<Image src="/image/right_arrow.svg" alt="Arrow" width={16}
													height={16} />

												Pointer One
											</li>
										</ul>

										<a href="#" className="sec_btn" title="Read More"><div className="text-btn">Read More </div> <Image
												src="/image/right_arrow.svg"  width={16}
												height={16} /></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="work_tab_box">
						<div className="work_tab_box_title">
							<h3 className="h3_title"><span className="h1_title outline_text">02</span> <b>Financial
									Planning</b></h3>
						</div>

						<div className="work_tab_box_content">
							<div>
							<div className="work_tab_main_content">
								<div className="work_tab_box_img">
									<Image src="/image/workimg.png" alt="Life Planning" width={540}
												height={592} />
								</div>
								<div className="work_tab_box_text">
									<h4 className="h1_title outline_text">02</h4>
									<h3 className="h3_title">Financial Planning</h3>
									<ul>
										<li>
											<Image src="/image/right_arrow.svg" alt="Arrow" width={16}
												height={16} />

											Pointer One
										</li>
										<li>
											<Image src="/image/right_arrow.svg" alt="Arrow" width={16}
												height={16} />

											Pointer One
										</li>
										<li>
											<Image src="/image/right_arrow.svg" alt="Arrow" width={16}
												height={16}/>

											Pointer One
										</li>
									</ul>

									<a href="#" className="sec_btn" title="Read More"><div className="text-btn">Read More </div> <Image
											src="/image/right_arrow.svg" width={16}
											height={16}/></a>
								</div>
								</div>
							</div>
						</div>
					</div>
					<div className="work_tab_box">
						<div className="work_tab_box_title">
							<h3 className="h3_title"><span className="h1_title outline_text">01</span> <b>Life Planning</b>
							</h3>
						</div>

						<div className="work_tab_box_content">
							<div>
							<div className="work_tab_main_content">
								<div className="work_tab_box_img">
									<Image src="/image/workimg.jpg" alt="Life Planning"  width={550}
												height={550} />
								</div>
								<div className="work_tab_box_text">
									<h4 className="h1_title outline_text">02</h4>
									<h3 className="h3_title">Financial Planning</h3>
									<ul>
										<li>
											<Image src="/image/right_arrow.svg" alt="Arrow"  width={16}
												height={16}  />

											Pointer One
										</li>
										<li>
											<Image src="/image/right_arrow.svg" alt="Arrow"  width={16}
												height={16}  />

											Pointer One
										</li>
										<li>
											<Image src="/image/right_arrow.svg" alt="Arrow"  width={16}
												height={16}  />

											Pointer One
										</li>
									</ul>

									<a href="#" className="sec_btn" title="Read More"><div className="text-btn">Read More </div><Image
											src="/image/right_arrow.svg"   width={16}
											height={16}  /></a>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="swiper-scrollbar"></div>
		</div>
	</section>

	{/* <section data-scroll-section className="compliance">
		<div className="container">
			<div className="compliance_title text_center">
				<h2 className="h2_title">Compliance Section</h2>
				<p>Complaints data, Investor Charter & Grievance Resolution Process</p>
			</div>
		</div>
		<div className="compliance_wp">
		<div className="compliance_wp fadeup-animation delay_0_8" data-scroll>
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<div class="compliance_box">
					<div class="compliance_box_icon">
						<img src="/image/black_right_arrow.svg" alt="Compliance Icon" />
					</div>
					<div class="compliance_box_content">
						<img src="/image/complaints.png" alt="complaints" />
						<h3 class="h2_title">Complaints Data</h3>
						<p>In line with SEBI compliance, a complete breakup of complaints against our firm are
							detailed
							here.</p>
					</div>
				</div>
			</div>
			<div class="swiper-slide">
				<div class="compliance_box">
					<div class="compliance_box_icon">
						<img src="/image/black_right_arrow.svg" alt="Compliance Icon" />
					</div>
					<div class="compliance_box_content">
						<img src="/image/complaints.png" alt="complaints" />
						<h3 class="h2_title">Investor Charter</h3>
						<p>In line with SEBI compliance, a complete breakup of complaints against our firm are
							detailed
							here.</p>
					</div>
				</div>
			</div>
			<div class="swiper-slide">
				<div class="compliance_box">
					<div class="compliance_box_icon">
						<img src="/image/black_right_arrow.svg" alt="Compliance Icon" />
					</div>
					<div class="compliance_box_content">
						<img src="/image/complaints.png" alt="complaints" />
						<h3 class="h2_title">Grievance Resolution</h3>
						<p>In line with SEBI compliance, a complete breakup of complaints against our firm are
							detailed
							here.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="swiper-pagination"></div>
		</div>
		</div>
	</section> */}

<section data-scroll-section className="compliance">
		<div className="container">
			<div className="compliance_title text_center">
				<h2 className="h2_title">Compliance Section</h2>
				<p>Complaints data, Investor Charter & Grievance Resolution Process</p>
			</div>
		</div>
		<div className="compliance_wp">
			<div className="compliance_box">
				<div className="compliance_box_icon">
					<Image src="/image/black_right_arrow.svg" alt="Compliance Icon"  width={16}
												height={16}  />
				</div>
				<div className="compliance_box_content">
					<Image src="/image/complaints.png" alt="complaints"  width={1189}
												height={266}  />
					<h3 className="h2_title">Complaints Data</h3>
					<p>In line with SEBI compliance, a complete breakup of complaints against our firm are detailed
						here.</p>
				</div>
			</div>
			<div className="compliance_box">
				<div className="compliance_box_icon">
					<Image src="/image/black_right_arrow.svg" alt="Compliance Icon"  width={16}
												height={16}  />
				</div>
				<div className="compliance_box_content">
					<Image src="/image/complaints.png" alt="complaints"  width={1189}
												height={266} />
					<h3 className="h2_title">Investor Charter</h3>
					<p>In line with SEBI compliance, a complete breakup of complaints against our firm are detailed
						here.</p>
				</div>
			</div>
			<div className="compliance_box">
				<div className="compliance_box_icon">
					<Image src="/image/black_right_arrow.svg" alt="Compliance Icon"  width={16}
												height={16} />
				</div>
				<div className="compliance_box_content">
					<Image src="/image/complaints.png" alt="complaints"  width={1189}
												height={266}  />
					<h3 className="h2_title">Grievance Resolution</h3>
					<p>In line with SEBI compliance, a complete breakup of complaints against our firm are detailed
						here.</p>
				</div>
			</div>
		</div>
	</section>

	<section data-scroll-section className="home_clients">
		<div className="container">
			<div className="home_clients_title text_center">
				<h2 className="h2_title">Why Ladder7 stood out for <span className="gradient_title">1000+ Clients</span></h2>
			</div>

			<div className="home_clients_slider">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className="home_clients_box">
							<div className="home_clients_box_img">
								<Image src="/image/workimg.jpg" alt="Client"  width={1274}
												height={601}  />
							</div>

							<div className="home_clients_box_content">
								<span className="h1_title outline_text">01</span>
								<h3 className="h3_title">SEBI Registered Investment Advisors</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="home_clients_box">
							<div className="home_clients_box_img">
								<Image src="/image/workimg.jpg" alt="Client"  width={1274}
												height={601}  />
							</div>

							<div className="home_clients_box_content">
								<span className="h1_title outline_text">01</span>
								<h3 className="h3_title">SEBI Registered Investment Advisors</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="home_clients_box">
							<div className="home_clients_box_img">
								<Image src="/image/workimg.jpg" alt="Client"  width={1274}
												height={601}  />
							</div>

							<div className="home_clients_box_content">
								<span className="h1_title outline_text">01</span>
								<h3 className="h3_title">SEBI Registered Investment Advisors</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="home_clients_box">
							<div className="home_clients_box_img">
								<Image src="/image/workimg.jpg" alt="Client"  width={1274}
												height={601}  />
							</div>

							<div className="home_clients_box_content">
								<span className="h1_title outline_text">01</span>
								<h3 className="h3_title">SEBI Registered Investment Advisors</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="swiper-pagination"></div>
			</div>
		</div>
	</section>

	<section data-scroll-section className="our_number_sec">
		<div className="container">
			<div className="our_number_title text_center">
				<h2 className="h2_title">What our number says</h2>
			</div>

			<div className="our_number_slider">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className="our_number_slide number_slide_active">
							<Image src="/image/money_img.svg" alt="Number"  width={201}
												height={148} />
							<div className="our_number_content">
								<h3 className="h1_title outline_text">500M+</h3>
								<p>invested successfully</p>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="our_number_slide">
							<Image src="/image/money_img.svg" alt="Number"  width={201}
												height={148} />
							<div className="our_number_content">
								<h3 className="h1_title outline_text">12+</h3>
								<p>Years of experience</p>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="our_number_slide">
							<Image src="/image/money_img.svg" alt="Number"  width={201}
												height={148} />
							<div className="our_number_content">
								<h3 className="h1_title outline_text">149+</h3>
								<p>cities across globe</p>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="our_number_slide">
							<Image src="/image/money_img.svg" alt="Number"  width={201}
												height={148} />
							<div className="our_number_content">
								<h3 className="h1_title outline_text">800</h3>
								<p>cities across globe</p>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="our_number_slide">
							<Image src="/image/money_img.svg" alt="Number"  width={201}
												height={148} />
							<div className="our_number_content">
								<h3 className="h1_title outline_text">100K+</h3>
								<p>Years of experience</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section data-scroll-section className="clarity_sec">
		<div className="container">
			<div className="clarity_box">
				<Image src="/image/clarity_shape.svg" alt="Clarity" className="clarity_shape"  width={787}
												height={814} />
				<div className="clarity_box_content">
					<h2 className="h2_title">Come to us to get clarity and peace of mind</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.</p>
					<a href="#" className="sec_btn" title="Learn More"><div className="text-btn">Learn More </div> <Image
							src="/image/right_arrow.svg"  width={25}
							height={25}  /></a>
				</div>
				<div className="clarity_slider_wp">
					<div className="clarity_slider_col clarity_slider_1">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="clarity_slider_Image">
									<Image src="/image/people_1.jpg" alt="people_1" width={300}
												height={450}  />
								</div>
							</div>
							<div className="swiper-slide">
								<div className="clarity_slider_Image">
									<Image src="/image/people_1.jpg" alt="people_1"  width={300}
												height={450} />
								</div>
							</div>
							<div className="swiper-slide">
								<div className="clarity_slider_Image">
									<Image src="/image/people_1.jpg" alt="people_1"  width={300}
												height={450} />
								</div>
							</div>
							<div className="swiper-slide">
								<div className="clarity_slider_Image">
									<Image src="/image/people_1.jpg" alt="people_1"  width={300}
												height={450} />
								</div>
							</div>
							<div className="swiper-slide">
								<div className="clarity_slider_Image">
									<Image src="/image/people_1.jpg" alt="people_1"   width={300}
												height={450} />
								</div>
							</div>
						</div>
					</div>
					<div className="clarity_slider_col clarity_slider_2">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="clarity_slider_Image">
									<Image src="/image/people_1.jpg" alt="people_1"   width={300}
												height={450} />
								</div>
							</div>
							<div className="swiper-slide">
								<div className="clarity_slider_Image">
									<Image src="/image/people_1.jpg" alt="people_1"  width={300}
												height={450} />
								</div>
							</div>
							<div className="swiper-slide">
								<div className="clarity_slider_Image">
									<Image src="/image/people_1.jpg" alt="people_1"   width={300}
												height={450} />
								</div>
							</div>
							<div className="swiper-slide">
								<div className="clarity_slider_Image">
									<Image src="/image/people_1.jpg" alt="people_1"  width={300}
												height={450} />
								</div>
							</div>
							<div className="swiper-slide">
								<div className="clarity_slider_Image">
									<Image src="/image/people_1.jpg" alt="people_1"   width={300}
												height={450} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section  id="meet_sec" data-scroll-section>
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

						<div class="member_info" data-scroll data-scroll-speed="1.5">
							<a href="#" class="h4_title">Meet <img src="/image/right_arrow.svg" /></a>
							<h4 class="h4_title">Suresh Sadagopan</h4>
							<p>Managing Director, Ladder 7</p>
						</div>
					</div>


					<div class="meet_member_text">
						<span class="h1_title outline_text">ladder 7</span>
						<span class="h1_title outline_text">ladder 7</span>
						<span class="h1_title">ladder 7</span>
						<span class="h1_title outline_text">ladder 7</span>
						<span class="h1_title outline_text">ladder 7</span>
					</div>
				</div>
			</div>
			</div>
		</section>

	<section data-scroll-section className="testimonials_sec">
		{/* <div className="testimonials_shape">
			<Image src="/image/global_shape.png" className="testimonials_left_shape"  width={787}
												height={814} />
			<Image src="/image/global_shape.png" className="testimonials_right_shape"  width={787}
												height={814} />
		</div> */}

			<div className="testimonials_shape">
				<div className="animated_svg_wp testimonials_left_shape">
					<svg className="animated_svg" viewBox="0 0 1046 966" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.2">
							<path d="M24 149L847.672 149C848.337 149 848.817 149.637 848.633 150.276L624.99 928"
								stroke="url(#paint0_diamond_2131_1987)" strokeWidth={76} strokeLinecap="round" />
							<path d="M282 63H881.69C926.916 63 959.541 106.328 947.042 149.793L747.99 842"
								stroke="url(#paint1_diamond_2131_1987)" strokeWidth={48} strokeLinecap="round" />
							<path d="M126.5 9H906.452C976.316 9 1026.7 75.9568 1007.34 143.087L821.99 786"
								stroke="url(#paint2_linear_2131_1987)" strokeWidth={17} strokeLinecap="round" />
						</g>
						<defs>
							<radialGradient id="paint0_diamond_2131_1987" cx="0" cy="0" r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(831.5 149) rotate(132.423) scale(1494.21 600.371)">
								<stop stopColor="#7C5224" />
								<stop offset="1" stopColor="#7C5224" stopOpacity={0}/>
							</radialGradient>
							<radialGradient id="paint1_diamond_2131_1987" cx="0" cy="0" r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(931.5 113.5) rotate(146.913) scale(909.481 805.574)">
								<stop stopColor="#7C5224" />
								<stop offset="1" stopColor="#7C5224"  stopOpacity={0} />
							</radialGradient>
							<linearGradient id="paint2_linear_2131_1987" x1="977" y1="40.5" x2="706" y2="241.5"
								gradientUnits="userSpaceOnUse">
								<stop stopColor="#7C5224" />
								<stop offset="1" stopColor="#7C5224"  stopOpacity={0} />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="animated_svg_wp testimonials_right_shape">
					<svg className="animated_svg" viewBox="0 0 1046 966" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.2">
							<path d="M24 149L847.672 149C848.337 149 848.817 149.637 848.633 150.276L624.99 928"
								stroke="url(#paint0_diamond_2131_1987)" strokeWidth={76} strokeLinecap="round" />
							<path d="M282 63H881.69C926.916 63 959.541 106.328 947.042 149.793L747.99 842"
								stroke="url(#paint1_diamond_2131_1987)" strokeWidth={48} strokeLinecap="round" />
							<path d="M126.5 9H906.452C976.316 9 1026.7 75.9568 1007.34 143.087L821.99 786"
								stroke="url(#paint2_linear_2131_1987)" strokeWidth={17} strokeLinecap="round" />
						</g>
						<defs>
							<radialGradient id="paint0_diamond_2131_1987" cx="0" cy="0" r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(831.5 149) rotate(132.423) scale(1494.21 600.371)">
								<stop stopColor="#7C5224" />
								<stop offset="1" stopColor="#7C5224"  stopOpacity={0} />
							</radialGradient>
							<radialGradient id="paint1_diamond_2131_1987" cx="0" cy="0" r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(931.5 113.5) rotate(146.913) scale(909.481 805.574)">
								<stop stopColor="#7C5224" />
								<stop offset="1" stopColor="#7C5224"  stopOpacity={0} />
							</radialGradient>
							<linearGradient id="paint2_linear_2131_1987" x1="977" y1="40.5" x2="706" y2="241.5"
								gradientUnits="userSpaceOnUse">
								<stop stopColor="#7C5224" />
								<stop offset="1" stopColor="#7C5224"  stopOpacity={0} />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</div>
			
		<div className="container">
			<div className="testimonials_sec_title text_center">
				<h2 className="h2_title">What our customer is saying about us</h2>
			</div>

			<div className="swiper testimonials_slider">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className="testimonials_slide">
							<div className="testimonials_Image">
								<Image src="/image/tesimonials_1.png" alt="People 1"  width={314} height={314} />
								<div class="testimonials_author_info for_mob">
									<p>Mr. Alon Musk</p>
									<h6>CEO of Tesla Motors</h6>
								</div>
							</div>
							<div className="testimonials_content">
								<div className="testimonials_author_info for_des">
									<p>Mr. Alon Musk</p>
									<h6>CEO of Tesla Motors</h6>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
								</p>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="testimonials_slide">
							<div className="testimonials_Image">
								<Image src="/image/tesimonials_1.png" alt="People 1"  width={314} height={314}  />
								<div class="testimonials_author_info for_mob">
									<p>Mr. Alon Musk</p>
									<h6>CEO of Tesla Motors</h6>
								</div>
							</div>
							<div className="testimonials_content">
								<div className="testimonials_author_info for_des">
									<p>Mr. Alon Musk</p>
									<h6>CEO of Tesla Motors</h6>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="swiper_button">
					<button className="swiper-button-prev">
						<Image src="/image/black_right_arrow.svg"  width={16}
												height={16} />
					</button>
					<button className="swiper-button-next">
						<Image src="/image/black_right_arrow.svg"  width={16}
												height={16} />
					</button>
				</div>
			</div>
		</div>
	</section>

	<section data-scroll-section className="card_sec">
		<div className="container">
			<div className="card_box_wp">
				<div className="card_box" data-scroll>
					<div className="card_title">
						<h2 className="h2_title"><span>01</span> Blogs</h2>
						<button type="button" className="card_read_more">
							<Image src="/image/black_right_arrow.svg"  width={16}
												height={16} />
							</button>
					</div>

					<div className="card_content">
						<div>
							<div className="card_top_content">
								<div className="card_top_content_left">
									<p className="h3_title">Lorem ipsum dolor sit amet,consecteur adispicing elit, sed do
										eiusmood tempror</p>
									<a href="#" className="sec_btn outline_btn" title="Published by author">
										Published by author
									</a>
								</div>
								<div className="card_top_content_right">
									<div className="swiper card_top_content_right_slider">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<Image src="/image/card_slider_1.png" alt="Card Slider 1"  width={173}
												height={173} />
											</div>
											<div className="swiper-slide">
												<Image src="/image/card_slider_2.png" alt="Card Slider 2"  width={173}
												height={173} />
											</div>

											<div className="swiper-slide">
												<Image src="/image/card_slider_3.png" alt="Card Slider 3"  width={173}
												height={173} />
											</div>
											<div className="swiper-slide">
												<Image src="/image/card_slider_1.png" alt="Card Slider 1"  width={173}
												height={173} />
											</div>
											<div className="swiper-slide">
												<Image src="/image/card_slider_2.png" alt="Card Slider 2"  width={173}
												height={173} />
											</div>

											<div className="swiper-slide">
												<Image src="/image/card_slider_3.png" alt="Card Slider 3"  width={173}
												height={173}  />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card_bottom_content">
								<div className="card_bottom_content_left">
									<div className="card_bottom_content_left_Image">
										<Image src="/image/blog_img_1.png" alt="Blog Image 1" width={432}
												height={243} />
									</div>

									<div className="card_blog_info">
										<p>Feb 15, 2024 <span>2 min Read</span></p>
										<a href="#" class="sec_btn outline_btn sm_btn" title="Published by author">
											Published by author
										</a>
									</div>
								</div>
								<div className="card_bottom_content_right">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									</p>

									<a href="#" className="sec_btn" title="Read">
									<div className="text-btn"> Read  </div>
									 <Image
											src="/image/right_arrow.svg"  width={16}
											height={16}  /></a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="card_box" data-scroll>
					<div className="card_title">
						<h2 className="h2_title"><span>02</span> Podcasts</h2>
						<button type="button" className="card_read_more">
							<Image src="/image/black_right_arrow.svg"  width={16}
												height={16} />
							</button>
					</div>

					<div className="card_content">
						<div>
							<div className="card_top_content">
								<div className="card_top_content_left">
									<p className="h3_title">Lorem ipsum dolor sit amet,consecteur adispicing elit, sed do
										eiusmood tempror</p>
									<a href="#" className="sec_btn outline_btn" title="Published by author">
										Published by author
									</a>
								</div>
								<div className="card_top_content_right">
									<div className="swiper card_top_content_right_slider">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<Image src="/image/card_slider_1.png" alt="Card Slider 1"  width={173}
												height={173} />
											</div>
											<div className="swiper-slide">
												<Image src="/image/card_slider_2.png" alt="Card Slider 2"  width={173}
												height={173} />
											</div>

											<div className="swiper-slide">
												<Image src="/image/card_slider_3.png" alt="Card Slider 3"  width={173}
												height={173} />
											</div>
											<div className="swiper-slide">
												<Image src="/image/card_slider_1.png" alt="Card Slider 1"  width={173}
												height={173} />
											</div>
											<div className="swiper-slide">
												<Image src="/image/card_slider_2.png" alt="Card Slider 2"  width={173}
												height={173} />
											</div>

											<div className="swiper-slide">
												<Image src="/image/card_slider_3.png" alt="Card Slider 3"  width={173}
												height={173} />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card_bottom_content">
								<div className="card_bottom_content_left">
									<div className="card_bottom_content_left_Image">
										<Image src="/image/blog_img_1.png" alt="Blog Image 1" width={432}
												height={243} />
									</div>

									<div className="card_blog_info">
										<p>Feb 15, 2024 <span>2 min Read</span></p>
										<a href="#" class="sec_btn outline_btn sm_btn" title="Published by author">
											Published by author
										</a>
									</div>
								</div>
								<div className="card_bottom_content_right">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									</p>

									<a href="#" className="sec_btn" title="Read"><div className="text-btn"> Read  </div> <Image
											src="/image/right_arrow.svg"  width={16}
											height={16} /></a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="card_box" data-scroll>
					<div className="card_title">
						<h2 className="h2_title"><span>03</span> Events</h2>
						<button type="button" className="card_read_more">
							<Image src="/image/black_right_arrow.svg"   width={16}
												height={16} />
							</button>
					</div>

					<div className="card_content">
						<div>
							<div className="card_top_content">
								<div className="card_top_content_left">
									<p className="h3_title">Lorem ipsum dolor sit amet,consecteur adispicing elit, sed do
										eiusmood tempror</p>
									<a href="#" className="sec_btn outline_btn" title="Published by author">
										Published by author
									</a>
								</div>
								<div className="card_top_content_right">
									<div className="swiper card_top_content_right_slider">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<Image src="/image/card_slider_1.png" alt="Card Slider 1" width={173}
												height={173} />
											</div>
											<div className="swiper-slide">
												<Image src="/image/card_slider_2.png" alt="Card Slider 2"  width={173}
												height={173} />
											</div>

											<div className="swiper-slide">
												<Image src="/image/card_slider_3.png" alt="Card Slider 3"  width={173}
												height={173} />
											</div>
											<div className="swiper-slide">
												<Image src="/image/card_slider_1.png" alt="Card Slider 1"  width={173}
												height={173}  />
											</div>
											<div className="swiper-slide">
												<Image src="/image/card_slider_2.png" alt="Card Slider 2"  width={173}
												height={173} />
											</div>

											<div className="swiper-slide">
												<Image src="/image/card_slider_3.png" alt="Card Slider 3"  width={173}
												height={173} />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card_bottom_content">
								<div className="card_bottom_content_left">
									<div className="card_bottom_content_left_Image">
										<Image src="/image/blog_img_1.png" alt="Blog Image 1" width={432}
												height={243} />
									</div>

									<div className="card_blog_info">
										<p>Feb 15, 2024 <span>2 min Read</span></p>
										<a href="#" class="sec_btn outline_btn sm_btn" title="Published by author">
											Published by author
										</a>
									</div>
								</div>
								<div className="card_bottom_content_right">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									</p>

									<a href="#" className="sec_btn" title="Read"><div className="text-btn"> Read  </div> <Image
											src="/image/right_arrow.svg"  width={16}
											height={16} /></a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="card_box  active_card_box" data-scroll>
					<div className="card_title">
						<h2 className="h2_title"><span>04</span> Articles</h2>
						<button type="button" className="card_read_more">
							<Image src="/image/black_right_arrow.svg"  width={16}
												height={16} />
							</button>
					</div>

					<div className="card_content">
						<div>
							<div className="card_top_content">
								<div className="card_top_content_left">
									<p className="h3_title">Lorem ipsum dolor sit amet,consecteur adispicing elit, sed do
										eiusmood tempror</p>
									<a href="#" className="sec_btn outline_btn" title="Published by author">
										Published by author
									</a>
								</div>
								<div className="card_top_content_right">
									<div className="swiper card_top_content_right_slider">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<Image src="/image/card_slider_1.png" alt="Card Slider 1"  width={173}
												height={173} />
											</div>
											<div className="swiper-slide">
												<Image src="/image/card_slider_2.png" alt="Card Slider 2"  width={173}
												height={173} />
											</div>

											<div className="swiper-slide">
												<Image src="/image/card_slider_3.png" alt="Card Slider 3"  width={173}
												height={173} />
											</div>
											<div className="swiper-slide">
												<Image src="/image/card_slider_1.png" alt="Card Slider 1"  width={173}
												height={173} />
											</div>
											<div className="swiper-slide">
												<Image src="/image/card_slider_2.png" alt="Card Slider 2"  width={173}
												height={173} />
											</div>

											<div className="swiper-slide">
												<Image src="/image/card_slider_3.png" alt="Card Slider 3"  width={173}
												height={173} />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card_bottom_content">
								<div className="card_bottom_content_left">
									<div className="card_bottom_content_left_Image">
										<Image src="/image/blog_img_1.png" alt="Blog Image 1"  width={432}
												height={243} />
									</div>

									<div className="card_blog_info">
										<p>Feb 15, 2024 <span>2 min Read</span></p>
										<a href="#" class="sec_btn outline_btn sm_btn" title="Published by author">
											Published by author
										</a>
									</div>
								</div>
								<div className="card_bottom_content_right">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									</p>

									<a href="#" className="sec_btn" title="Read"><div className="text-btn"> Read  </div> <Image
											src="/image/right_arrow.svg"  width={16}
											height={16} /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section data-scroll-section className="management_sec">
		<div className="container">
			<div className="management_sec_title text_center">
				<h2 className="h2_title">A Truly Unique Wealth Management Experience</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua.</p>
			</div>

			<form className="contact_form">
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
					<select className="form_input" defaultValue="When Would you are planning to retire ?">
						<option value="When Would you are planning to retire ?" >When Would you are planning to
							retire ?
						</option>
						<option value="saab">Select 1</option>
						<option value="mercedes">Select 1</option>
						<option value="audi">Select 1</option>
					</select>

					<Image src="/image/black_right_arrow.svg" width={16} height={16} />
				</div>

				<div className="form_input_wp form_element">
					<select className="form_input" defaultValue="When Would you are planning to retire ?">
						<option value="When Would you are planning to retire ?" >Total Investable Assets
							(Including company retirement plan)
						</option>
						<option value="saab">Select 1</option>
						<option value="mercedes">Select 1</option>
						<option value="audi">Select 1</option>
					</select>

					<Image src="/image/black_right_arrow.svg" width={16} height={16}  />
				</div>

				<div className="checkbox_input_wp">
					<input type="checkbox" name="term" id="trem"/>
					<label htmlFor="trem">By clicking the above button, you agree to our Terms of Service and confirm that
						you have read and understood our Privacy Policy</label>
				</div>

				<div className="form_submit">
					<button className="sec_btn" type="button">
						 <div className="text-btn"> Submit  </div> 
						<Image src="/image/right_arrow.svg" width={25} height={25} />
					</button>
				</div>
			</form>
		</div>
		<div className="management_bg">
			<Image src="/image/management_bg.jpg" alt="management" width={1880} height={1348} />
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
						<div className="text-btn">Schedule Now  </div><Image src="/image/right_arrow.svg"  width={25}
												height={25} />
					</a>
				</div>

				<div className="cta_right_content">
					<Image src="/image/cta_img.png" alt="cta Image"  width={872} height={511} className="for_des"/>
					<Image src="/image/cta_mob_img.png" alt="cta Image"  width={872} height={511} className="for_mob"/>
				</div>
			</div>
		</div>
	</section>
	<Footer/>	
     


	 

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel"   width={16}
												height={16} />
        </a>
      </footer> */}



    </div>
  );
}
