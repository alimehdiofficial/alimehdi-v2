import { Link } from "react-router-dom";
import styled from "styled-components";
import RecentVideo from "../components/RecentVideo";
import Project from "../components/Project";
import TimelineInfo from "../components/TimelineInfo";
import projects from "../projects.json";

function HomeScreen() {
  return (
    <Container>
      <HeadingPrimary>Hey, I’m Ali Mehdi</HeadingPrimary>
      <Description>
        I'm a self taught, design-minded full stack developer focused on
        building beautiful interfaces & experiences –{" "}
        <Link to="/guestbook">sign my guestbook</Link> 🙌 🚀 while you're here.
      </Description>

      <VideosContainer>
        <HeadingSecondary>Recent Videos</HeadingSecondary>
        <RecentVideo
          title="Let's build StarWars API Build with NEXT.JS! (SSG, Dynamic Routes, Styled-Components, React.JS) 🔥🚀
"
          description="In today’s video, I will be creating a StarWars API Build!!!"
          views="383"
          link="https://youtu.be/ZIMo8JYXzMQ"
        />
        <RecentVideo
          title="Let's build STARBUCKS with REACT.JS! (with Framer-Motion, REDUX & Firebase) 🔥🚀
"
          description="In today’s video, I will be redesigning the Starbucks Web app!!!"
          views="1,879"
          link="https://youtu.be/OXkqfbmePDA"
        />
        <RecentVideo
          title="Let's build TESLA with REACT.JS! (with React-Router, REDUX & Firebase) 🔥🚀
"
          description="In today’s video, I will be building a Tesla Clone inspired by Sonny Sangha!!!"
          views="5,363"
          link="https://youtu.be/JnaTQudNDqg"
        />
      </VideosContainer>

      <ProjectsContainer>
        <HeadingSecondary>Projects</HeadingSecondary>
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            id={project.id}
          />
        ))}
      </ProjectsContainer>

      <TimelinesContainer>
        <HeadingSecondary>Timeline</HeadingSecondary>
        <Timeline>
          <Year>2021</Year>
          <TimelineInfo
            accomplishment="Multiple Opportunites 😁"
            description="My Tesla Clone became really popular and over the first 2 days, I got more > 2K views. People liked my explanation and I received multiple job offers. I understood one thing after this, that not everyone gets this opportunity like I did so why not continue the youtube journey and try to change lives."
          />
          <TimelineInfo
            accomplishment="My first video on YT 📸"
            description="Uploaded my first ever video on YouTube, the Tesla ⚡️ Clone."
          />
        </Timeline>

        <Timeline>
          <Year>2020</Year>
          <TimelineInfo
            accomplishment="Started learning React 👩‍💻"
            description="So after I dropped out, I decided to dive into React (and thats when things started to change). It was a bit difficult at first but fortunately I was lucky enough to have some of the world's best tutors teaching me for free (Traversy Media, Sonny Sangha, Clever Programmer)"
          />
          <TimelineInfo
            accomplishment="Decided to dropout (even with a CGPA of 3.91)"
            description="I Got to a conclusion that, even though my fundamentals improved immensely in University but I was really not learning anything practical instead the only projects I built were with my own self-learning."
          />
          <TimelineInfo
            accomplishment="Got stuck into tutorial hell"
            description="Although I was enjoying coding but was not building any projects on my own even if I tried to. I felt overwhelmed between the lecture classes & exploring the industry on my own."
          />
          <TimelineInfo
            accomplishment="Got fascinated 🤯 by programming"
            description="It was my first time diving into code. I felt in love with it and was amazed by how you can turn an idea into reality just by learning a programming language."
          />
        </Timeline>

        <Timeline>
          <Year>2019</Year>
          <TimelineInfo
            accomplishment="Joined Emirates ✈️"
            description="I took admission into EAU to complete my bachelors in Software Engineering."
          />
          <TimelineInfo
            accomplishment="Graduated from College 🎓"
            description="Successfully completed my graduation... Some of the best & unforgettable days of my life"
          />
        </Timeline>
      </TimelinesContainer>
    </Container>
  );
}

export default HomeScreen;

const Container = styled.div`
  padding-left: 300px;

  @media (max-width: 1024px) {
    padding-left: 200px;
  }

  @media (max-width: 786px) {
    padding-left: 40px;
  }

  @media (max-width: 425px) {
    padding-left: 30px;
  }
`;

const HeadingPrimary = styled.h1`
  font-size: 48px;
  color: #fffffe;
  margin-bottom: 16px;

  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  color: #94a1b2;
  line-height: 1.75;
  max-width: 650px;
  font-weight: 500;
  margin-bottom: 50px;

  > a {
    color: #7f5af0;
  }

  @media (max-width: 425px) {
    max-width: 350px;
  }

  @media (max-width: 375px) {
    max-width: 305px;
  }
`;

const VideosContainer = styled.div`
  margin-bottom: 32px;
`;

const HeadingSecondary = styled.h1`
  color: #fffffe;
  font-size: 36px;
  margin-bottom: 16px;

  @media (max-width: 425px) {
    font-size: 24px;
  }
`;

const ProjectsContainer = styled.div``;

const TimelinesContainer = styled.div``;

const Timeline = styled.div`
  max-width: 670px;
  padding-bottom: 40px;
  margin-bottom: 32px;

  :not(:last-child) {
    border-bottom: 2px solid rgba(148, 161, 178, 0.5);
  }

  @media (max-width: 425px) {
    max-width: 365px;
  }

  @media (max-width: 375px) {
    max-width: 310px;
  }
`;

const Year = styled.h3`
  color: #fffffe;
  font-size: 20px;

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;
