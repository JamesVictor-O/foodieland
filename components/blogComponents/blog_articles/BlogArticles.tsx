import Image from "next/image";

interface postProps{
  post: {
    post_header: string;
    post_body: string;
    post_date: string;
    post_author: string;
    post_image: string;
    post_ID: number;
  }
}

const BlogArticles = ({ post }: postProps) => {
  return (
    <div className="w-full h-40 md:h-52 flex flex-row p-2  border border-gray-300 rounded-3xl mb-4">
      <div className="overflow-hidden rounded-xl w-[70%]  md:w-72 h-32 md:h-48 ">
        <Image src="/recipes/image5.png" width={100} height={50} alt="image of food" className="w-full h-full object-fill md:object-cover"/>
       
      </div>
      <div className="ml-4 md:py-3">
        <h2 className="font-semibold text-sm md:text-xl md:mb-2">
          {post.post_header}
        </h2>
        <p className="font-normal text-xs md:text-sm md:w-[80%]">
         {post.post_header}
        </p>
        <div className="mt-2  md:mt-7 flex flex-row items-center">
          <div className="w-36 h-8 md:h-10 flex flex-row items-center">
            <div className="w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full">
              <img
                src="homepage/Untitled design.jpg"
                alt=""
                className="w-full h-full object-center md:object-cover"
              />
            </div>
            <h3 className="text-xs md:text-sm font-bold ml-2">{post.post_author }</h3>
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-medium md:ml-4">
            {post.post_date}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticles;
