import BlogsContentSection from '../../NewPages/BlogsContentSection';

interface PageProps {
  params: {
    blogId: string;
  };
}

export default function Page({ params }: PageProps) {
  return <BlogsContentSection blogId={params.blogId} />;
}

export function generateStaticParams() {
  return [
    { blogId: "0" },
    { blogId: "1" },
    { blogId: "2" },
    { blogId: "3" },
    { blogId: "4" }
  ];
}
