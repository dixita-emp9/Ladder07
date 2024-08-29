import Header from "../components/Header"; 
import Footer from "../components/Footer";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Testimonial() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
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
                    </div>
                    
                    <div className="banner_content row pagebaner wizard-banner-section">
                        <div className="testimonial-section">
                            <h3 className="sub_title testimonial-subtitle text-center">Life Planning</h3>
                            <h1 className="h1_title testimonial-title text-center">Basic Liquidity/Emergency</h1>
                            
                            <div className="testimonial-grid mt-5">
                                    <div className="testimonial-item">
                                        <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic" data-aos-anchor="#banner">
                                            <Image src="/image/grid2.png" alt="Customer 1" className="testimonial-img-cls" width={280} height={200} />
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic" data-aos-anchor="#banner">
                                            <Image src="/image/grid5.png" alt="Customer 2" className="testimonial-img-cls" width={280} height={200} />
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic" data-aos-anchor="#banner">
                                            <Image src="/image/grid1.png" alt="Customer 3" className="testimonial-img-cls" width={280} height={200} />
                                        </div>

                                    </div>
                                    <div className="testimonial-item main-image">
                                        <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic" data-aos-anchor="#banner">
                                            <Image src="/image/grid7.png" alt="Main Customer" className="testimonial-img-cls" width={270} height={300} />
                                        </div>

                                    </div>
                                    <div className="testimonial-item">
                                        <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic" data-aos-anchor="#banner">
                                            <Image src="/image/main-image.png" alt="Customer 4" className="testimonial-img-cls" width={200} height={200} />
                                        </div>

                                    </div>
                                    <div className="testimonial-item">
                                        <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic" data-aos-anchor="#banner">
                                            <Image src="/image/grid3.png" alt="Customer 5" className="testimonial-img-cls" width={280} height={200} />
                                        </div>

                                    </div>
                                    <div className="testimonial-item">
                                        <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic" data-aos-anchor="#banner">
                                            <Image src="/image/grid6.png" alt="Customer 6" className="testimonial-img-cls" width={280} height={200} />
                                        </div>

                                    </div>

                            </div>
                            <div className="testimonial-grid-mobile mt-5">
                                <div className="top-mobile-div1">
                                    <div data-aos="clip-left" data-aos-delay="1000" data-aos-duration="500" data-aos-easing="ease-in-cubic" data-aos-anchor="#banner">
                                        <Image src="/image/top-image1_mobile.png" className="testimonial-mobile-image" width={350} height={220} />
                                    </div>
                                </div>
                                <div className="top-mobile-div2">
                                    <div className="top-img-2">
                                        <div data-aos="clip-left" data-aos-delay="1100" data-aos-duration="500" data-aos-easing="ease-in-cubic" data-aos-anchor="#banner">
                                            <Image src="/image/top-image2_mobile.png" className="testimonial-mobile-image" width={170} height={100} />
                                        </div>
                                    </div>
                                    <div className="top-img-3">
                                    <div data-aos="clip-left" data-aos-delay="1200" data-aos-duration="500" data-aos-easing="ease-in-cubic" data-aos-anchor="#banner">
                                            <Image src="/image/top-image3_mobile.png" className="testimonial-mobile-image" width={170} height={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner_btn_wp text-center check-btn-mobile">
                                <a href="#" className="sec_btn" title="Read More">
                                    <div className="text-btn">Check Now </div>
                                    <Image src="/image/right_arrow.svg" width={16} height={16} />
                                </a>
                            </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
           
            <Footer />
        </div>
    );
}
