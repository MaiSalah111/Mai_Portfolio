import React from "react";
import styled from "styled-components";
import ReflectionCard from "../cards/ReflectionCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const reflections = [
  {
    title: "Strategic Leadership: Building Success Through Collaboration",
    // date: "2023-02-01",
    description: "As a Technical Project Manager, overseeing large-scale telecom projects required not only technical expertise but also strong leadership. Leading a dynamic team of engineers and technicians to deliver complex systems, I realized the importance of clear communication and strategic resource management. Each successful project was a reminder of how collaborative effort, paired with sharp project management skills, can turn ambitious goals into reality, all while staying on budget and on time.",
  },
  {
    title: "Embracing Change: A Journey of Growth",
    // date: "2023-01-01",
    description: "As I reflect on my career journey, I recognize how embracing change has shaped my path and opened doors to new opportunities. This transition has allowed me to align my work with my evolving interests and values, highlighting the transferable skills I've gained along the way. Each step has fueled my passion for continuous learning and personal growth, inviting me to discover new strengths and challenge myself in different areas. I believe a fulfilling career is one that grows with me, and I’m excited to see where this journey will take me next.",
  },
  {
    title: "Turning Ideas Into Impact",
    // date: "2023-02-01",
    description: "One of the most rewarding realizations I’ve had in development is the power of transforming an idea into something tangible and valuable. It takes creativity, persistence, and a lot of problem-solving, but seeing my code come to life—solving real-world challenges or improving processes—brings a deep sense of fulfillment. Each hurdle overcome sparks innovation, and knowing that what I’ve built will have a meaningful, lasting impact has made this journey incredibly rewarding. It’s moments like these that remind me why I love building and creating.",
  },

];

const Reflections = () => {
  return (
    <Container id="Reflections">
      <Wrapper>
        <Title>Reflections</Title>
        <Desc>
          Here are some reflections on my journey, experiences, and lessons learned.
        </Desc>
        <CardsContainer>
          {reflections.map((reflection, index) => (
            <ReflectionCard key={index} reflection={reflection} />
          ))}
        </CardsContainer>
      </Wrapper>
    </Container>
  );
};

export default Reflections;