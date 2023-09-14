import { Wrap } from "@/components/atoms/Wrap/Wrap";
import { ProjectSectionTag } from "./ProjectsSection.styled";
import { Title } from "@/components/atoms/Title/Title";
import { ContainerCards } from "@/components/molecules/ContainerCards/ContainerCards";

interface ProjectsI {
  id?: string;
}

export const ProjectsSection = ({ id }: ProjectsI) => {
  return (
    <ProjectSectionTag id={id}>
      <Wrap width="fit-content" borderBottom="1px solid #000">
        <Title text="Projects" color="#007ACC" />
      </Wrap>
      <ContainerCards />
    </ProjectSectionTag>
  );
};
