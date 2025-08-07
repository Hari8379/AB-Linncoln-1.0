import BlogsContentSection from '../../NewPages/BlogsContentSection';

export default function Page({ params }: { params: { blogId: string } }) {
  return <BlogsContentSection blogId={params.blogId} />;
}

// Required for static export with dynamic routes
export function generateStaticParams() {
  return [
    { blogId: "0" },
    { blogId: "1" },
    { blogId: "2" },
    { blogId: "3" },
    { blogId: "4" },
  ];
}
