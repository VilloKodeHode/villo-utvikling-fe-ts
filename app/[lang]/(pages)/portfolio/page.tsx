import { getDictionary } from "get-dictionary";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  console.log(dictionary)
  return (
    <>
<h1>Coming soon</h1>
    </>
  );
}