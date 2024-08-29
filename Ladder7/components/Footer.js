

import Image from 'next/image';
import logo from '../public/image/ladder_7.png';
import Link from 'next/link';


function Footer(){

return(

	<footer className="site_footer" data-scroll-section >
		{/* <div className="footer_shape">
			<Image src="/image/global_shape.png" className="footer_left_shape"  width={24} height={16}/>
			<Image src="/image/global_shape.png" className="footer_right_shape"  width={24} height={16} />
		</div> */}

		<div className="footer_shape">
				<div className="animated_svg_wp footer_left_shape">
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
								<stop offset="1" stopColor="#7C5224" stopOpacity="0" />
							</radialGradient>
							<radialGradient id="paint1_diamond_2131_1987" cx="0" cy="0" r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(931.5 113.5) rotate(146.913) scale(909.481 805.574)">
								<stop stopColor="#7C5224" />
								<stop offset="1" stopColor="#7C5224" stopOpacity="0" />
							</radialGradient>
							<linearGradient id="paint2_linear_2131_1987" x1="977" y1="40.5" x2="706" y2="241.5"
								gradientUnits="userSpaceOnUse">
								<stop stopColor="#7C5224" />
								<stop offset="1" stopColor="#7C5224" stopOpacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="animated_svg_wp footer_right_shape">
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
								<stop offset="1" stopColor="#7C5224" stopOpacity="0" />
							</radialGradient>
							<radialGradient id="paint1_diamond_2131_1987" cx="0" cy="0" r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(931.5 113.5) rotate(146.913) scale(909.481 805.574)">
								<stop stopColor="#7C5224" />
								<stop offset="1" stopColor="#7C5224" stopOpacity="0" />
							</radialGradient>
							<linearGradient id="paint2_linear_2131_1987" x1="977" y1="40.5" x2="706" y2="241.5"
								gradientUnits="userSpaceOnUse">
								<stop stopColor="#7C5224" />
								<stop offset="1" stopColor="#7C5224" stopOpacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</div>
		</div>


		<div className="container">
			<div className="site_footer_top">
				<div className="site_footer_about_wp">
					<div className="site_footer_about">
						<a href="#" className="logo">
							<Image src={logo} alt="Ladder 7"/>
						</a>
						<p>We’re fee-only, conflict-free SEBI
							Registered financial advisor. Come to
							us for your success planned.</p>

						<div className="footer_social">
							<ul>
								<li>
									<a href="#">
										<svg width="11" height="20" viewBox="0 0 11 20" fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M8.51 3.32003H10.39V0.14003C9.47975 0.045377 8.56516 -0.00135428 7.65 2.98641e-05C4.93 2.98641e-05 3.07 1.66003 3.07 4.70003V7.32003H0V10.88H3.07V20H6.75V10.88H9.81L10.27 7.32003H6.75V5.05003C6.75 4.00003 7.03 3.32003 8.51 3.32003Z"
												fill="#524633" />
										</svg>
									</a>
								</li>
								<li>
									<a href="#">
										<svg width="18" height="16" viewBox="0 0 18 16" fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M0 1.85859C0 1.31985 0.202708 0.87541 0.608108 0.525253C1.01351 0.175079 1.54055 0 2.18919 0C2.82626 0 3.34169 0.17238 3.73552 0.517172C4.14092 0.872727 4.34363 1.33602 4.34363 1.90707C4.34363 2.42424 4.14672 2.85521 3.7529 3.2C3.3475 3.55556 2.81467 3.73333 2.15444 3.73333H2.13707C1.49999 3.73333 0.984562 3.55556 0.590734 3.2C0.196905 2.84444 0 2.3973 0 1.85859ZM0.225869 16V5.20404H4.08301V16H0.225869ZM6.22008 16H10.0772V9.97172C10.0772 9.5946 10.1236 9.30369 10.2162 9.09899C10.3784 8.73265 10.6245 8.42288 10.9546 8.1697C11.2847 7.91649 11.6988 7.7899 12.1969 7.7899C13.4942 7.7899 14.1429 8.60336 14.1429 10.2303V16H18V9.8101C18 8.21548 17.5946 7.00606 16.7838 6.18182C15.973 5.35758 14.9016 4.94545 13.5695 4.94545C12.0753 4.94545 10.9112 5.54343 10.0772 6.73939V6.77172H10.0598L10.0772 6.73939V5.20404H6.22008C6.24324 5.54882 6.25483 6.62086 6.25483 8.4202C6.25483 10.2195 6.24324 12.7461 6.22008 16Z"
												fill="#524633" />
										</svg>

									</a>
								</li>
								<li>
									<a href="#">
										<svg width="16" height="14" viewBox="0 0 16 14" fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M12.6009 0H15.0544L9.69433 5.93026L16 14H11.0627L7.19565 9.10574L2.77085 14H0.315951L6.04903 7.65692L0 0H5.06261L8.55809 4.47354L12.6009 0ZM11.7399 12.5785H13.0993L4.32391 1.34687H2.86504L11.7399 12.5785Z"
												fill="#524633" />
										</svg>

									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="footer_menu">
					<h5>Why Ladder7 ?</h5>

					<ul>
						<li>
							<a href="#">
								<Image src="/image/right_arrow.svg" alt="arrow" width={24} height={16}/>
								SEBI Registered Investment Advisor
							</a>
						</li>
						<li>
							<a href="#">
								<Image src="/image/right_arrow.svg" alt="arrow" width={24} height={16}/>
								Feduciary Standards
							</a>
						</li>
						<li>
							<a href="#">
								<Image src="/image/right_arrow.svg" alt="arrow" width={24} height={16}/>
								Your personal CFOs
							</a>
						</li>
						<li>
							<a href="#">
								<Image src="/image/right_arrow.svg" alt="arrow" width={24} height={16}/>
								Clarity and Peace of Mind
							</a>
						</li>
					</ul>
				</div>

				<div className="footer_menu">
					<h5>Interesting Reads</h5>

					<ul>
						<li>
							<a href="#">
								<Image src="/image/right_arrow.svg" alt="arrow" width={24} height={16}/>
								Choosing the Best Financial Advisor
							</a>
						</li>
						<li>
							<a href="#">
								<Image src="/image/right_arrow.svg" alt="arrow" width={24} height={16}/>
								The Virtues called Ethics and Integrity
							</a>
						</li>
						<li>
							<a href="#">
								<Image src="/image/right_arrow.svg" alt="arrow" width={24} height={16}/>
								The Non-Financial Aspects in Retirement
							</a>
						</li>
						<li>
							<a href="#">
								<Image src="/image/right_arrow.svg" alt="arrow" width={24} height={16}/>
								Is Your Advisor A Fiduciary For Name Sake
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="site_footer_bottom">
				<div className="site_footer_copyright">
					<p>© 2024 Ladder7 Wealth Partners Pvt. Ltd. All rights reserved.</p>

					<ul>
						<li>
							<a href="#" title="Privacy Policy">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" title="Terms of service">
								Terms of service
							</a>
						</li>
						<li>
							<a href="#" title="Cookies Settings">
								Cookies Settings
							</a>
						</li>
					</ul>
				</div>

				<div className="site_footer_bottom_content">
					<p>Disclaimer: Investment or Recruitment Fraud</p>
					<p>Investment or recruitment fraud happens through unsolicited emails, text messages, phone calls
						and similar unsolicited communication, claiming to have job offers from Ladder 7 or request
						investment into Ladder7. These are not legitimate. The fraudsters use fake websites and fake
						email addresses with our company’s names, brands, or logos as part of the fraud. This is done
						without Ladder7’s involvement, approval, or permission. The goal is for the fraudster to obtain
						your personal information or money.</p>
				</div>

				<div className="site_footer_bottom_partner">
					<h3 className="h3_title">Your financial wellness simplified</h3>

					<div className="site_footer_bottom_partner_list_wp">
						<div className="site_footer_bottom_partner_list">
							<p>Finance Partner</p>
							<ul>
								<li>
									<Image src="/image/j_p_morgan.png" alt="j p morgan" width={136} height={30}/>
								</li>
								<li>
									<Image src="/image/icici.png" alt="icici" width={136} height={30}/>
								</li>
							</ul>
						</div>

						<div className="site_footer_bottom_partner_list">
							<p>Certified By:</p>
							<ul>
								<li>
									<Image src="/image/cbi.png" alt="cbi" width={36} height={34}/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		</div>
	</footer>








);

}

export default Footer;
