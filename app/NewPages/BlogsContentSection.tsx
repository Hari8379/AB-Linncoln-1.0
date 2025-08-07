
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogsContentSectionProps {
  blogId?: string | number;
}

const blogArticles = [
  {
    image: 'https://readdy.ai/api/search-image?query=Artificial%20intelligence%20and%20machine%20learning%20technology%20concept%20with%20digital%20brain%20and%20neural%20networks%2C%20futuristic%20AI%20technology%20illustration%2C%20modern%20tech%20innovation%2C%20navy%20blue%20and%20white%20color%20scheme&width=400&height=250&seq=news-001&orientation=landscape',
    title: 'Why Most Businesses Struggle to Grow — And How Management Systems Quietly Fix That',
    content: 'business consultant in India, management consulting company, SOP consultant, KPI consultant, SME business growth, business systems, employee management, organizational process, startup scalability',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Cloud%20computing%20infrastructure%20with%20servers%20and%20data%20centers%2C%20modern%20cloud%20technology%20concept%2C%20digital%20transformation%20and%20scalability%2C%20professional%20tech%20illustration&width=400&height=250&seq=news-002&orientation=landscape',
    title: 'The Hidden Reason Most MSMEs Don’t Grow — No Management Systems',
    content: 'In the vibrant ecosystem of Indian business, MSMEs and SMEs form the backbone of economic activity. They innovate, create jobs, and contribute significantly to GDP. But while thousands of these businesses are launched every year, only a small fraction ever scale beyond a certain size.',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Cybersecurity%20protection%20concept%20with%20shield%20and%20lock%20icons%2C%20digital%20security%20and%20data%20protection%20illustration%2C%20network%20security%20technology%2C%20professional%20security%20design&width=400&height=250&seq=news-003&orientation=landscape',
    title: 'Everyday Business Errors That Cost You Growth (And How to Stop Them)',
    content: 'In the fast-paced world of MSMEs and startups, growth is often hindered not by external threats — but by everyday internal errors. These recurring issues may seem small, but they silently erode your profits, delay your scaling, and frustrate your team. So, what’s holding you back?',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20development%20and%20user%20experience%20design%2C%20smartphone%20interface%20mockups%20and%20UX%20design%20process%2C%20mobile%20technology%20and%20app%20development%20concept&width=400&height=250&seq=news-004&orientation=landscape',
    title: 'Everyday Business Errors That Cost You Growth (And How to Stop Them)',
    content: 'Small business mistakes don’t always come with alarms. They often feel like “part of the process” — missed follow-ups, unclear roles, inconsistent service, or untrained staff. But when left unchecked, these seemingly minor errors snowball into lost customers, wasted time, employee turnover, and stalled growth. These aren’t one-time blunders. They’re recurring patterns caused by a lack of structure.',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Data%20analytics%20and%20business%20intelligence%20dashboard%20with%20charts%20and%20graphs%2C%20big%20data%20visualization%2C%20business%20intelligence%20tools%20and%20analytics%20platform&width=400&height=250&seq=news-005&orientation=landscape',
    title: 'Stop Being the System: Build One Instead',
    content: 'Most founders don’t realize this early on — They didn’t just start a business. They became it. Every client call, every approval, every fix, every fire — all routes lead back to you. You are the memory, the manual, and the method. And here’s the catch: if your business depends on you to function, it’s not really a business — it’s a bottleneck.',
  },
];

const BlogsContentSection = ({ blogId }: BlogsContentSectionProps) => {
  let blogIndex = 0;
  if (typeof blogId === 'string') blogIndex = parseInt(blogId, 10);
  else if (typeof blogId === 'number') blogIndex = blogId;
  const blog = blogArticles[blogIndex];

  if (!blog) {
    return (
      <>
        <Header />
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Blog Not Found</h2>
          <p className="text-lg text-gray-600">The blog you are looking for does not exist.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src={blog.image} alt={blog.title} className="mx-auto rounded-lg w-full max-w-md h-64 object-cover shadow-lg mb-8" />
          <h2 className="text-4xl lg:text-5xl font-freight font-medium text-gray-900 mb-6">{blog.title}</h2>
          <p className="text-xl font-avenir font-book text-gray-600 mb-8">{blog.content}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogsContentSection;
