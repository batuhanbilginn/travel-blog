import getPostData from "@/lib/getPostData";

export default async function Head({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPostData(slug);

  if (!post) return null;

  return (
    <>
      <title>{post?.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={post?.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
