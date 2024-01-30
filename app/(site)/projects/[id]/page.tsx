import { fetchAllContents, fetchContent } from "@/lib/fetchContent";
import { removeFileExtension } from "@/lib/utils";
// import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function Page({ params }: { params: { id: string } }) {
  const postData = await fetchContent(params.id);
  const allContent = await fetchAllContents();

  return (
    <div className="wrapper">
      <h1>{postData?.metadata.title}</h1>
      {/* <MDXRemote {...postData} /> */}
    </div>
  );
  // return <MDXRemote source={postData.props.source} />;
}
