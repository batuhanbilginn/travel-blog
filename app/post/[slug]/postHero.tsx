import PostCardContent from "@/components/post/postCardContent";
import { Post } from "@/types/database";
import Image from "next/image";

interface PostHeroProps {
  post: Post;
}

const PostHero = ({ post }: PostHeroProps) => {
  console.log(post.image + "?key=blur-image");
  return (
    <div className="@container">
      <PostCardContent isPostHero post={post} />
      <Image
        className="w-full h-auto mt-10 max-h-[300px] bg-neutral-100 md:max-h-[500px] object-cover object-center rounded-md"
        width={1280}
        height={628}
        src={post.image}
        alt={post.title}
        placeholder="blur"
        blurDataURL={post.image + "?key=blur-image"}
      />
    </div>
  );
};

export default PostHero;
