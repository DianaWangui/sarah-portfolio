import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Link from 'next/link';

const Blog = () => {

  const blogs = [
    {
      title: 'How to build a blog using Next.js',
      link: '/blogs/nextjs-blog',
      date: '2022-01-01',
    },
    {
      title: 'How to build a blog using Next.js',
      link: '/blogs/nextjs-blog',
      date: '2022-01-01',
    },
    {
      title: 'How to build a blog using Next.js',
      link: '/blogs/nextjs-blog',
      date: '2022-01-01',
    },
    {
      title: 'How to build a blog using Next.js',
      link: '/blogs/nextjs-blog',
      date: '2022-01-01',
    },
    {
      title: 'How to build a blog using Next.js',
      link: '/blogs/nextjs-blog',
      date: '2022-01-01',
    },
    {
      title: 'How to build a blog using Next.js',
      link: '/blogs/nextjs-blog',
      date: '2022-01-01',
    },
    {
      title: 'How to build a blog using Next.js',
      link: '/blogs/nextjs-blog',
      date: '2022-01-01',
    },
    {
      title: 'How to build a blog using Next.js',
      link: '/blogs/nextjs-blog',
      date: '2022-01-01',
    },
  ];

  return (
    <div className="w-full bg-black px-[10%] py-[5%]">
      <div className="bg-transparent flex flex-col">
        <h4 className="text-sm font-light lg:border border-gray-[500]
                     text-[#dddddd] py-2 px-4 lg:mb-12 w-[120px] text-center
                     flex justify-center items-center gap-2 decoration-inherit
                    hover:border-gray-200 font-Poppins rounded-full">
          MY BLOGS
        </h4>

        <div className="flex border-b border-gray-500 pb-4">
          <Link
            href="/"
            className="text-gray-200 text-lg font-poppins flex items-center gap-2 underline decoration-inherit hover:text-green-500"
          >
            <span className="flex items-center gap-2 decoration-inherit text-xs">
              <KeyboardDoubleArrowLeftIcon className="decoration-inherit" />
              Back to Home
            </span>
          </Link>
        </div>
        <div className='blogs flex flex-col lg:flex-row flex-wrap gap-4 pt-8 overflow-auto'>
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card w-full lg:w-[48%] bg-transparent border border-gray-500 p-4 rounded-lg">
              <Link href={blog.link}>
                  <h1 className="text-xl font-bold text-gray-500">{blog.title}</h1>
              </Link>
              <p className="text-gray-500 mt-4 mb-4 text-lg leading-[12rem]">
                {blog.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog