import React from 'react';

export default function aboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mt-8">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="About Me" className="mx-auto rounded-full w-45 h-40 object-cover shadow-lg" />
        </div>
        <h2 className="text-4xl lg:text-5xl font-freight font-medium text-gray-900 mb-6">
          About Me
        </h2>
        <p className="text-xl font-avenir font-book text-gray-600 mb-8">
          Hi, I'm [Your Name], a passionate developer and technology enthusiast. I love building impactful digital products and sharing knowledge with the community. This page is a brief introduction about me, my journey, and my vision for the future.
        </p>  
      </div>
      <div className='max-w-5xl mx-auto px-1 sm:px-6 lg:px-1'> 
        <h1 className='text-3xl lg:text-4xl font-freight font-medium text-gray-900 mb-6'>
          Our Story
        </h1>
        <p className='text-xl font-avenir font-book text-gray-600 mb-8'>
          AB Lincoln & Company (Reliquix Private Limited) was founded in November 2024 by Mr. Pratheep Abraham — not as a planned venture, but through a serendipitous moment that sparked a new consulting journey.
        </p>
        <p className='text-xl font-avenir font-book text-gray-600 mb-8'>
          Already a successful entrepreneur, Mr. Pratheep Abraham is the Founder of Japag Regulatory Solutions, a global regulatory compliance consulting firm that serves top retailers, manufacturers in the fragrance and home fragrance industry worldwide. With years of experience building scalable, system-driven companies, consulting wasn’t new to him — but helping MSMEs build operational maturity from scratch? That’s where a new path began.
        </p>
        <p className='text-xl font-avenir font-book text-gray-600 mb-8'>
            During a business forum, a fellow entrepreneur asked him the secret behind Japag’s early and global success. Mr. Pratheep revealed the simple truth: “From Day 1, Japag was built with systems — job roles, SOPs, KPIs, and contracts — even before hiring the first employee.”
        </p>
        <p className='text-xl font-avenir font-book text-gray-600 mb-8'>    
            Astonished, the friend confessed, “My 10-year-old company doesn’t feel 10 years old — there are no systems, no structure, and everything still depends on me.” That conversation led to Mr. Pratheep’s first blueprint for organizational design, beginning with R&R and KPIs. It worked — and word spread fast.
        </p>
        <p className='text-xl font-avenir font-book text-gray-600 mb-8'>
            What began as a favour quickly evolved into a movement. Inquiries poured in from business owners across sectors — manufacturing, services, retail, pest control, medical furnishings, and more. The pattern was clear: MSMEs were stuck in the loop of daily firefighting, unable to grow due to lack of systems and over-dependence on founders.
        </p>
        <p className='text-xl font-avenir font-book text-gray-600 mb-8'>
            And thus, A B Lincoln & Company was born — with a mission to systemize MSMEs for scalable and sustainable growth. Under the strategic leadership of Mr. Pratheep and a capable implementation team of Senior Consultants, Business Analysts, Client Associates, we now help businesses build clarity, accountability, and performance — one system at a time.
        </p>
      </div>
    </section>
  );
}
