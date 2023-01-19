import { Post } from "@/types/database";
import PostCard from "./postCard";

interface PostCardListProps {
  posts: Post[];
}

const PostCardList = ({ posts }: PostCardListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-flow-col lg:auto-cols-fr ">
      {posts.map((post: Post) => {
        return <PostCard direction="vertical" key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostCardList;
