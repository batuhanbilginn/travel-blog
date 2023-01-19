import directusServer from "./directus/directusInstance";

const getAllPosts = async () => {
  try {
    const response = await directusServer.items("posts").readByQuery({
      fields: [
        "*",
        "category.title",
        "category.id",
        "author.first_name",
        "author.last_name",
      ],
    });
    return response?.data?.map((post) => {
      return {
        ...post,
        image: process.env.NEXT_PUBLIC_ASSSETS_URL + post?.image,
      };
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getAllPosts;
