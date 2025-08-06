
'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and goals.'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your business operations.'
    },
    {
      icon: 'ri-database-2-line',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and BI solutions.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving cyber threats.'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'IT Consulting',
      description: 'Strategic technology consulting to align your IT infrastructure with business objectives.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-freight font-medium text-gray-900 mb-6">
            Why Choose Our Services
          </h2>
          <p className="text-xl font-avenir font-book text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#f5f7fa] p-8 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-[#6fa8dc]/20 rounded-2xl flex items-center justify-center mb-6">
                <i className={`${service.icon} text-[#202b5e] text-2xl`}></i>
              </div>
              <h3 className="text-xl font-freight font-medium text-gray-900 mb-4">{service.title}</h3>
              <p className="font-avenir font-book text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
