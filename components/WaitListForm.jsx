// components/WaitlistForm.js

import React from 'react';

const WaitlistForm = () => {
	return (
		<div className="">
			<div className="container mx-auto">
				<div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
					<h2 className="text-2xl font-semibold mb-4">
						Join the Waitlist
					</h2>
					<p className="text-gray-600 mb-4">
						Be the first to know when CampusMate becomes
						available. Sign up for our waitlist!
					</p>
					<form>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-gray-700 font-semibold mb-2"
							>
								Email Address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Your email address"
								className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
								required
							/>
						</div>
						<div className="mb-6">
							<button
								type="submit"
								className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
							>
								Join Waitlist
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default WaitlistForm;
