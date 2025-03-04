import { getDictionary } from "get-dictionary";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  return <></>;
}
