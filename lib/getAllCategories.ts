import directusServer from "./directus/directusInstance";

const getAllCategories = async () => {
  try {
    const response = await directusServer.items("categories").readByQuery({
      fields: ["*"],
    });
    return response?.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getAllCategories;
