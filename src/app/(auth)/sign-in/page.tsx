export const runtime = 'edge';

type PageProps = {
  params: { [key: string]: string | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({}: Readonly<PageProps>) {
  return <section></section>;
}
