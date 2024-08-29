

import Image from 'next/image';
import logo from '../public/image/ladder_7.png';
import Link from 'next/link';


function Header(){

return(

	<header className="site_header" data-scroll-section>
		<div className="container">
			<div className="site_logo">
				<a href="/" title="Ladder 7">
					<Image width="122" height="80" src={logo} alt="Ladder 7" />
				</a>
			</div>
			<div className="header_menu">
				<ul className="navbar-links">
					<li className="navbar-dropdown">
						<Link href="/services" title="Services">
							Services <span className="submenu_arrow"><Image src="/image/down_arrow.svg" width={24} height={16} /></span>
						</Link>
						<div className="dropdown">
						<Link href="/financial-planning">Financial Planning</Link>
						<Link href="/life-planning">Life Planning</Link>
					
						</div>
						

						
					</li>
					<li  className="navbar-dropdown">
						<Link href="/resource" title="Resources">
							Resources <span className="submenu_arrow"><Image src="/image/down_arrow.svg" width={24} height={16}/></span>
						</Link>
						<div className="dropdown">
						<Link href="/blogs">Blogs</Link>
						<Link href="/infobites"> Infobites</Link>
						<Link href="/frequently-asked-questions">Frequently Asked Questions</Link>
					
						</div>
					</li>
					<li>
						<Link href="/about" title="About">
							About
						</Link>
					</li>
					<li>
						<Link href="/career" title="Careers">
							Careers <span className="badge">Hiring</span>
						</Link>
					</li>
					<li>
						<Link href="/review" title="Client Reviews">
							Client Reviews
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</header>

	









);
}

export default Header;
