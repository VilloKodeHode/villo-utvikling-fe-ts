import { HeroSection } from "@components/sections/IndexPage/HeroSection";
import { PageProps } from "./interfaces/PageProps";
// import { getDictionary } from "get-dictionary";

export default async function  Home({params}: PageProps) {
// const dictionary = await getDictionary(params.lang);
  return (
    <>
<HeroSection params={params}  />
      {/* <div className="w-full h-[calc(100vh-112px)] flex justify-center items-center">
      <p className="text-black dark:text-white">Some text</p>
      </div> */}
    </>
  );
}
