import { ThemedH1 } from "@components/atoms/ThemedText";
import ProjectCards from "./ProjectCard";
import { ComponentProps } from "@interfaces/PageProps";

export const ProjectSection = ({content}: ComponentProps) => {
  return (
    <div className="py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <ThemedH1>
            {content?.title}
          </ThemedH1>
        </div>
        <div className="mt-10 animate-PageAppearRight">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCards content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};
