import { fetchContent } from "@/lib/fetchContent";
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function Page({ params }: { params: { id: string } }) {
  
  const postData = await fetchContent(params.id);
  
  // console.log("at page, post data",postData)

  return (
    <div className="wrapper">
      <h1>{postData.props.frontMatter.title}</h1>
      <MDXRemote {...postData.props} />
    </div>
  )
  return <MDXRemote source={postData.props.source} />;
};
