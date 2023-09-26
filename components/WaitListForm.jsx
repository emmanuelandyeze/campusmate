// components/WaitlistForm.js

import React from 'react';

const WaitlistForm = () => {
	return (
		<div className="">
			<div className="container mx-auto">
				<div className="max-w-md mx-auto bg-white p-6 rounded-md">
					<h2 className="text-2xl font-semibold mb-4">
						Join the Waitlist
					</h2>
					<p className="text-gray-600 mb-4">
						Be the first to know when CampusMate becomes
						available. Sign up for our waitlist!
					</p>
					<div>
						<a
							href="https://getwaitlist.com/waitlist/10852"
							className="mb-6"
							target='blank'
						>
							<button
								type="submit"
								className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
							>
								Join Waitlist
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WaitlistForm;
