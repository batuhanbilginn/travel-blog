import PostCardContent from "@/components/post/postCardContent";
import { Post } from "@/types/database";
import Image from "next/image";

interface PostHeroProps {
  post: Post;
}
const PostHero = ({ post }: PostHeroProps) => {
  return (
    <div className="@container">
      <PostCardContent post={post} />
      <Image
        className="w-full h-auto mt-10 max-h-[300px] md:max-h-[500px] object-cover object-center rounded-md"
        width={1280}
        height={628}
        src={post.image}
        alt={post.title}
      />
    </div>
  );
};

export default PostHero;
