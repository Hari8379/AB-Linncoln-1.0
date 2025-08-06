
'use client';

export default function StatsSection() {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: 'ri-trophy-line' },
    { number: '98%', label: 'Client Satisfaction', icon: 'ri-heart-line' },
    { number: '15+', label: 'Years Experience', icon: 'ri-time-line' }
  ];

  return (
    <section className="py-16 bg-[#202b5e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-white text-2xl`}></i>
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl text-[#c9d4e9]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
