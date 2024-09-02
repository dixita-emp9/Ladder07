import Header from "../components/Header"; 
import Footer from "../components/Footer";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";



export default function FInancial() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const steps = [
        "How many months' worth of expenses have you saved for emergencies or currently have in your bank account?",
        "How many months' worth of expenses have you saved for emergencies or currently have in your bank account?",
        "How many months' worth of expenses have you saved for emergencies or currently have in your bank account?",
        "How many months' worth of expenses have you saved for emergencies or currently have in your bank account?",
        "How many months' worth of expenses have you saved for emergencies or currently have in your bank account?",
        "How many months' worth of expenses have you saved for emergencies or currently have in your bank account?"
    ];


    const formConfig = [
        {
            step: 1,
            options: [
                { value: 'less_than_month', label: 'Less than 1 month' },
                { value: '1_3_months', label: '1-3 months' },
                { value: '3_6_months', label: '3-6 months' },
                { value: 'more_than_6_months', label: 'More than 6 months' }
            ],
            default: 'less_than_month'
        },
        {
            step: 2,
            options: [
                { value: 'less_than_month', label: 'Less than 2 month' },
                { value: '1_4_months', label: '1-4 months' },
                { value: '2_6_months', label: '2-6 months' },
                { value: 'more_than_7_months', label: 'More than 7 months' }
            ],
            default: 'less_than_month'
        },
        {
            step: 3,
            options: [
                { value: 'less_than_month', label: 'Less than 3 month' },
                { value: '1_5_months', label: '1-5 months' },
                { value: '3_5_months', label: '3-5 months' },
                { value: 'more_than_8_months', label: 'More than 8 months' }
            ],
            default: 'less_than_month'
        },
        {
            step: 4,
            options: [
                { value: 'less_than_month', label: 'Less than 4 month' },
                { value: '1_3_months', label: '1-3 months' },
                { value: '3_6_months', label: '3-6 months' },
                { value: 'more_than_9_months', label: 'More than 9 months' }
            ],
            default: 'less_than_month'
        },
        {
            step: 5,
            options: [
                { value: 'less_than_month', label: 'Less than 5 month' },
                { value: '1_3_months', label: '1-3 months' },
                { value: '3_6_months', label: '3-6 months' },
                { value: 'more_than_10_months', label: 'More than 10 months' }
            ],
            default: 'less_than_month'
        },
        {
            step: 6,
            options: [
                { value: 'less_than_month', label: 'Less than 6 month' },
                { value: '1_3_months', label: '1-3 months' },
                { value: '3_6_months', label: '3-6 months' },
                { value: 'more_than_11_months', label: 'More than 11 months' }
            ],
            default: 'less_than_month'
        },
    ];

    const handleSelectOption = (value, step) => {
        setSelectedOptions(prev => ({
            ...prev,
            [step]: value
        }));
    };

    const showWizardStep = (step) => {
        setCurrentStep(step);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Optionally, handle form submission logic here
        setFormSubmitted(true);
    };

    const getButtonClass = (step, value) => (
        selectedOptions[step] === value ? 'wizard-option-btn selected' : 'wizard-option-btn'
    );

    useEffect(() => {
		AOS.init({
		
		});
        const defaults = formConfig.reduce((acc, { step, default: defaultValue }) => {
            return { ...acc, [step]: defaultValue };
        }, {});
        setSelectedOptions(defaults);
	  }, []);

  return (
    <div >
      
	 


      
	<Header />
 
    <section data-scroll-section className="main_banner financial-report-sec">
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

    <section data-scroll-section className="wizard-form-section">
        <div className="container">

            <div className="wizard-container ">
                <div className="wizard-header">
                    <div className="wizard-steps">
                        <h1 className="h2_title fadeup-animation delay_0_2" data-scroll>Basic Liquidity/<br/>Emergency</h1>
                    </div>
                    <div className="steps-indicator fadeup-animation delay_0_4" data-scroll>
                        {steps.map((_, index) => (
                            <span
                                key={index}
                                className={`step ${currentStep === index + 1 ? 'active' : ''}`}
                                onClick={() => showWizardStep(index + 1)}
                            >
                                {index + 1}
                            </span>
                        ))}
                    </div>
                </div>

                {!formSubmitted ? (
                    <form id="wizardForm" onSubmit={handleSubmit} className="fadeup-animation delay_0_6" data-scroll>
                        {formConfig.map(({ step, options, default: defaultOption  }) => (
                            <div
                                key={step}
                                className="wizard-step-section"
                                style={{ display: currentStep === step ? 'block' : 'none' }}
                            >
                                <div className="wizard-question-section">
                                    <h2 className="outline_text">{`0${step}`}</h2>
                                    <p>{steps[step - 1]}</p>
                                    <div className="wizard-form-options">
                                        {options.map(({ value, label }, idx) => (
                                            <button
                                                key={value}
                                                type="button"
                                                className={getButtonClass(step, value)}
                                                onClick={() => handleSelectOption(value, step)}
                                            >
                                                <span className="wizard-option-label outline_text"><b>{String.fromCharCode(65 + idx)}</b></span><span>{label}</span>
                                                
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="wizard-btn-flex">
                                {step > 1 && (
                                    <div className="wizard-prev-flex"><button type="button" className="wizard-prev-btn" onClick={() => showWizardStep(step - 1)}><span className="arrow-image arrow-prev-img"><div className="prev-img-cls"><img src="/image/back-arrow-svg.svg" width={30} height={30} alt="Next" className="arrow-image" /></div></span>Back</button></div>
                                )}
                                {step < formConfig.length ? (
                                    <div className="wizard-next-flex"><button type="button" className="wizard-next-btn" onClick={() => showWizardStep(step + 1)}><span>Next</span> <span className="arrow-image"><div className="prev-img-cls"><img src="/image/right_arrow.svg" width={30} height={30} alt="Next" className="arrow-image" /></div></span></button></div>
                                ) : (
                                    <button type="submit" className="wizard-next-btn submit-btn-cls">Submit</button>
                                )}
                                </div>
                            </div>
                        ))}
                    </form>
                ) : (
                    <div className="success-message" style={{ display: formSubmitted ? 'block' : 'none' }} id="successMessage">
                        <p>Form submitted successfully! Thank you for your response.</p>
                    </div>
                )}
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

