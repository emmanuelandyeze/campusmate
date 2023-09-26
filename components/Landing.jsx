import React from 'react'
import WaitlistForm from './WaitListForm';


function Landing() {
  return (
		<section className=" text-black py-16 px-4 sm:px-3">
			<div className="max-w-5xl mx-auto text-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-4 leading-10 md:leading-14 sm:leading-relaxed">
					Your Companion. Simplify Your Student Life.
				</h1>
				<p className="text-xl sm:text-2xl mb-8 w-full md:w-3/4 mx-auto leading-7 md:leading-relaxed">
					Effortless Scheduling, Task Management,
					Collaboration, and Note-Taking Redefined.
					{/* All-in-One Solution for University Success. */}
				</p>
				<div className="flex justify-center">
					<WaitlistForm />
				</div>
			</div>
		</section>
	);
}

export default Landing