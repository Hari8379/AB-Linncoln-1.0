
'use client';
import Link from 'next/link';

export default function NewsSection() {
  const articles = [
    {
      image: 'https://readdy.ai/api/search-image?query=Artificial%20intelligence%20and%20machine%20learning%20technology%20concept%20with%20digital%20brain%20and%20neural%20networks%2C%20futuristic%20AI%20technology%20illustration%2C%20modern%20tech%20innovation%2C%20navy%20blue%20and%20white%20color%20scheme&width=400&height=250&seq=news-001&orientation=landscape',
      title: 'Why Most Businesses Struggle to Grow — And How Management Systems Quietly Fix That',
      excerpt: 'business consultant in India, management consulting company, SOP consultant, KPI consultant, SME business growth, business systems, employee management, organizational process, startup scalability',
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Cloud%20computing%20infrastructure%20with%20servers%20and%20data%20centers%2C%20modern%20cloud%20technology%20concept%2C%20digital%20transformation%20and%20scalability%2C%20professional%20tech%20illustration&width=400&height=250&seq=news-002&orientation=landscape',
      title: 'The Hidden Reason Most MSMEs Don’t Grow — No Management Systems',
      excerpt: 'In the vibrant ecosystem of Indian business, MSMEs and SMEs form the backbone of economic activity. They innovate, create jobs, and contribute significantly to GDP. But while thousands of these businesses are launched every year, only a small fraction ever scale beyond a certain size.',
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Cybersecurity%20protection%20concept%20with%20shield%20and%20lock%20icons%2C%20digital%20security%20and%20data%20protection%20illustration%2C%20network%20security%20technology%2C%20professional%20security%20design&width=400&height=250&seq=news-003&orientation=landscape',
      title: 'Everyday Business Errors That Cost You Growth (And How to Stop Them)',
      excerpt: 'In the fast-paced world of MSMEs and startups, growth is often hindered not by external threats — but by everyday internal errors. These recurring issues may seem small, but they silently erode your profits, delay your scaling, and frustrate your team. So, what’s holding you back?',
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20development%20and%20user%20experience%20design%2C%20smartphone%20interface%20mockups%20and%20UX%20design%20process%2C%20mobile%20technology%20and%20app%20development%20concept&width=400&height=250&seq=news-004&orientation=landscape',
      title: 'Everyday Business Errors That Cost You Growth (And How to Stop Them)',
      excerpt: 'Small business mistakes don’t always come with alarms.They often feel like “part of the process” — missed follow-ups, unclear roles, inconsistent service, or untrained staff. But when left unchecked, these seemingly minor errors snowball into lost customers, wasted time, employee turnover, and stalled growth. These aren’t one-time blunders. They’re recurring patterns caused by a lack of structure.',
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Data%20analytics%20and%20business%20intelligence%20dashboard%20with%20charts%20and%20graphs%2C%20big%20data%20visualization%2C%20business%20intelligence%20tools%20and%20analytics%20platform&width=400&height=250&seq=news-005&orientation=landscape',
      title: 'Stop Being the System: Build One Instead',
      excerpt: 'Most founders don’t realize this early on — They didn’t just start a business. They became it. Every client call, every approval, every fix, every fire — all routes lead back to you. You are the memory, the manual, and the method. And here’s the catch: if your business depends on you to function, it’s not really a business — it’s a bottleneck.',
    }
  ];

  return (
    <section id="news" className="py-20 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-freight font-medium text-gray-900 mb-6">
            Latest News & Blog
          </h2>
          <p className="text-xl font-avenir font-book text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest technology trends, industry insights, and expert opinions from our team of professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                
                <h3 className="text-xl font-freight font-medium text-gray-900 mb-3 group-hover:text-[#202b5e] transition-colors">
                  {article.title}
                </h3>
                
                <p className="font-avenir font-book text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <Link href={`/blogscontent/${index}`} className="flex items-center text-[#202b5e] font-avenir font-heavy hover:text-[#3a4587] transition-colors">
                  <span>Read More</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/blogs">
            <button className="bg-[#202b5e] text-white px-8 py-4 rounded-lg text-lg font-avenir font-heavy hover:bg-[#3a4587] transition-colors whitespace-nowrap cursor-pointer" suppressHydrationWarning={true}>
              View All Articles
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
