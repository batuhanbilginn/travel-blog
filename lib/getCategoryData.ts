import { CategoryWithPosts } from "@/types/database";
import directusServer from "./directus/directusInstance";

const getCategoryData = async (slug: string) => {
  try {
    // Get Data From API
    const response = await directusServer.items("categories").readByQuery({
      filter: {
        slug: {
          _eq: slug,
        },
      },
      fields: [
        "*",
        "posts.*",
        "posts.author.first_name",
        "posts.author.last_name",
      ],
    });

    if (!response?.data?.[0]) return null;

    const responseCategory = response?.data?.[0];

    const category = {
      ...responseCategory,
      posts: responseCategory?.posts.map((post: any) => ({
        ...post,
        image: process.env.NEXT_PUBLIC_ASSSETS_URL + post?.image,
        category: {
          id: responseCategory?.id,
          title: responseCategory?.title,
        },
      })),
    } as CategoryWithPosts;

    return category;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getCategoryData;
