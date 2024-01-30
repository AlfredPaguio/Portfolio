import { fetchContent } from "@/lib/fetchContent";

export default async function Page({ params }: { params: { id: string } }) {
  const { content }: any = await fetchContent(params.id);

  return (
    <div className="wrapper">
      {content}
    </div>
  );
}
