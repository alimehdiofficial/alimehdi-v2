import { Slideshow } from "../components/Slideshow";
import styled from "styled-components";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import projects from "../projects.json";
import { useParams } from "react-router";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";

function ProjectScreen() {
  const [project, setProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const data = projects.filter((projectData) => projectData.id === id);

    setProject(data);
  }, [id]);

  return (
    <Container>
      <div className="slideshow-container">
        <Slideshow />
      </div>

      <ProjectInfo>
        <Heading>{project[0]?.title}</Heading>
        <Description>{project[0]?.description}</Description>
        <TechStack>
          <h2>Tech Stack</h2>
          {project[0]?.techStack.map((tech) => (
            <Tech>- {tech}</Tech>
          ))}
        </TechStack>

        <ProjectLinks>
          <a href={project[0]?.github} target="_">
            <Button text="View Source Code" Icon={GitHubIcon} />
          </a>
          <a href={project[0]?.live} target="_">
            <Button text="View Live" Icon={LanguageIcon} />
          </a>
        </ProjectLinks>
      </ProjectInfo>
    </Container>
  );
}

export default ProjectScreen;

const Container = styled.div``;

const ProjectInfo = styled.div`
  margin-top: 50px;
  padding-left: 80px;
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    margin-top: -10px;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    margin-top: -80px;
    max-width: 640px;
    padding-left: 60px;
  }

  @media (max-width: 425px) {
    margin-top: -180px;
    max-width: 350px;
    padding-left: 25px;
  }
`;

const Heading = styled.h1`
  color: #fffffe;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #94a1b2;
  line-height: 1.7;
  font-weight: 500;
  max-width: 900px;
  margin-bottom: 40px;
`;

const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 40px;

  > h2 {
    color: #fffffe;
    margin-bottom: 10px;
    max-width: 130px;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const Tech = styled.p`
  padding-left: 20px;
  color: #94a1b2;
  font-weight: 500;
  font-size: 18px;
`;

const ProjectLinks = styled.div`
  display: flex;

  > a {
    text-decoration: none;
  }
  > a > button {
    margin-right: 10px;

    @media (max-width: 425px) {
      padding: 10px;
      font-size: 13px;
      white-space: nowrap;
    }

    @media (max-width: 375px) {
      max-width: none;
      padding-left: 10px;
    }
  }
`;
