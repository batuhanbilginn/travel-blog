import getCategoryData from "@/lib/getCategoryData";

export default async function Head({
  params: { categories },
}: {
  params: {
    categories: string;
  };
}) {
  const category = await getCategoryData(categories);

  if (!category) return null;

  return (
    <>
      <title>{category.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={category.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
