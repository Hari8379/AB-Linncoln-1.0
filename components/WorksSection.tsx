
'use client';

export default function WorksSection() {
  const projects = [
    {
      image: 'https://readdy.ai/api/search-image?query=E-commerce%20mobile%20app%20interface%20design%20with%20shopping%20cart%20and%20product%20listings%2C%20clean%20modern%20UI%20design%20with%20navy%20blue%20color%20scheme%2C%20professional%20mobile%20application%20mockup%2C%20online%20shopping%20platform&width=400&height=300&seq=work-001&orientation=landscape',
      title: 'E-Commerce Platform',
      category: 'Mobile App Development',
      description: 'A comprehensive e-commerce solution with advanced features and seamless user experience.'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Healthcare%20management%20system%20dashboard%20with%20patient%20data%20and%20medical%20charts%2C%20clean%20professional%20interface%20design%2C%20medical%20software%20application%2C%20hospital%20management%20platform&width=400&height=300&seq=work-002&orientation=landscape',
      title: 'Healthcare Management System',
      category: 'Web Development',
      description: 'Digital transformation for healthcare providers with patient management and analytics.'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Financial%20analytics%20dashboard%20with%20charts%20and%20graphs%2C%20modern%20fintech%20application%20interface%2C%20data%20visualization%20and%20reporting%20tools%2C%20professional%20business%20intelligence%20platform&width=400&height=300&seq=work-003&orientation=landscape',
      title: 'Financial Analytics Dashboard',
      category: 'Data Analytics',
      description: 'Real-time financial data visualization and reporting platform for investment firms.'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Smart%20home%20automation%20app%20interface%20with%20IoT%20device%20controls%2C%20modern%20smart%20home%20dashboard%2C%20home%20automation%20system%20mobile%20app%2C%20connected%20device%20management&width=400&height=300&seq=work-004&orientation=landscape',
      title: 'Smart Home Automation',
      category: 'IoT Solutions',
      description: 'Intelligent home automation system with voice control and energy management.'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Educational%20learning%20platform%20interface%20with%20online%20courses%20and%20student%20dashboard%2C%20e-learning%20management%20system%2C%20digital%20education%20platform%20with%20clean%20modern%20design&width=400&height=300&seq=work-005&orientation=landscape',
      title: 'Learning Management System',
      category: 'Education Technology',
      description: 'Interactive online learning platform with advanced assessment and tracking features.'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Restaurant%20management%20system%20with%20order%20processing%20and%20inventory%20tracking%2C%20food%20service%20application%20interface%2C%20restaurant%20POS%20system%20with%20modern%20design&width=400&height=300&seq=work-006&orientation=landscape',
      title: 'Restaurant Management Suite',
      category: 'Business Solutions',
      description: 'Complete restaurant management solution with POS, inventory, and customer management.'
    }
  ];

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-freight font-bold text-gray-900 mb-6">
            Our Recent Works
          </h2>
          <p className="text-xl font-avenir text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in delivering innovative technology solutions across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <i className="ri-external-link-line text-[#202b5e] text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-avenir text-[#202b5e] font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-freight font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="font-avenir text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#202b5e] text-white px-8 py-4 rounded-lg text-lg font-avenir font-semibold hover:bg-[#3a4587] transition-colors whitespace-nowrap cursor-pointer" suppressHydrationWarning={true}>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
