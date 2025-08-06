import React from 'react';

export default function aboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-freight font-medium text-gray-900 mb-6">
          About Me
        </h2>
        <p className="text-xl font-avenir font-book text-gray-600 mb-8">
          Hi, I'm [Your Name], a passionate developer and technology enthusiast. I love building impactful digital products and sharing knowledge with the community. This page is a brief introduction about me, my journey, and my vision for the future.
        </p>
        <div className="mt-8">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="About Me" className="mx-auto rounded-full w-40 h-40 object-cover shadow-lg" />
        </div>
      </div>
    </section>
  );
}
