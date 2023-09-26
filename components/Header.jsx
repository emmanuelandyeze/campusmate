// components/Navbar.js

import Link from 'next/link';

const Header = () => {
	return (
		<nav className="bg-white py-4 px-2 md:px-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						{/* Logo */}
						<div>
							<Link href="/">
								<p className="text-black text-3xl font-bold mr-5">
									CampusMate
								</p>
							</Link>
						</div>

						{/* Navigation Links */}
						<ul className="space-x-4 hidden md:flex items-center">
							<li>
								<Link href="/features">
									<p className="text-black hover:text-blue-400">
										Features
									</p>
								</Link>
							</li>
							<li>
								<Link href="/pricing">
									<p className="text-black hover:text-blue-400">
										Pricing
									</p>
								</Link>
							</li>
							<li>
								<Link href="/contact">
									<p className="text-black hover:text-blue-400">
										Contact
									</p>
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<ul className="flex space-x-4">
							<button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-80 transition duration-300 ease-in-out">
								Join waitlist
							</button>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
