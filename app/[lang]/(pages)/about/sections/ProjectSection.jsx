import { ResponsiveThemedH1 } from "@components/atoms/ResponsiveText";
import ProjectCards from "./ProjectCard";

export const ProjectSection = () => {
  return (
    <div className="py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <ResponsiveThemedH1>
            {language === "Norwegian" ? "Hobby prosjekter" : "Hobby projects"}
          </ResponsiveThemedH1>
        </div>
        <div className="mt-10 animate-PageAppearRight">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
};
