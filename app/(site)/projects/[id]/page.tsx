import { projects } from '@/.velite'
export default async function Page({ params: id }: { params: { id: string } }) {
  return <div className="wrapper">
    {JSON.stringify(projects)}
  </div>;
}
