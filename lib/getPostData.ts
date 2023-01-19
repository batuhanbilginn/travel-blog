import { Post } from "@/types/database";
import directus from "./directus/directusInstance";

const getPostData = async (slug: string) => {
  // Get Post Data From Server
  try {
    const response = await directus.items("posts").readByQuery({
      filter: {
        slug: {
          _eq: slug,
        },
      },
      fields: [
        "*",
        "category.title",
        "category.id",
        "author.first_name",
        "author.last_name",
      ],
    });

    const responsePost = response?.data?.[0] as Post;

    if (!responsePost) return null;

    const post: Post = {
      ...responsePost,
      image: process.env.NEXT_PUBLIC_ASSSETS_URL + responsePost?.image,
    };

    return post;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getPostData;
