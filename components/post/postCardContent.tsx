import getReadingTime from "@/lib/getReadingTime";
import getRelativeDate from "@/lib/getRelativeDate";
import { Post } from "@/types/database";

interface PostCardContentProps {
  post: Post;
}
const PostCardContent = ({ post }: PostCardContentProps) => {
  return (
    <div className="space-y-2">
      {/* Tags */}
      <div className="flex items-center gap-1 @md:gap-2  text-xs @md:text-sm text-neutral-500">
        <div
          className={`font-medium ${
            post.category.title === "Cities"
              ? "text-emerald-600"
              : "text-indigo-600"
          }`}
        >
          {post.category.title}
        </div>
        <div className="w-1 h-1 rounded-full bg-neutral-300 " />
        <div>{post.author.first_name + " " + post.author.last_name}</div>
        <div className="w-1 h-1 rounded-full bg-neutral-300" />
        <div>{getReadingTime(post.body)}</div>
        <div className="w-1 h-1 rounded-full bg-neutral-300" />
        <div>{getRelativeDate(post.date_created)}</div>
      </div>
      {/* Title */}
      <h1 className="font-semibold text-xl @md:text-2xl @lg:text-3xl ">
        {post.title}
      </h1>
      {/* Description */}
      <p className="text-neutral-500 leading-normal">{post.description}</p>
    </div>
  );
};

export default PostCardContent;
