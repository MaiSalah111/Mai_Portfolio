import React from "react";
import styled from "styled-components";
import { certifications } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 50px;
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

const CertificationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;

const Accomplishment = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const AccomplishmentTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const AccomplishmentDesc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  margin-bottom: 20px;
  text-align: center;
`;

const AccomplishmentDate = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const AccomplishmentDoc = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  display: block;
  margin-top: 10px;
  text-decoration: underline;
`;

const Certifications = () => {
  return (
    <Container id="Certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>Here are some of my Certifications.</Desc>
        <CertificationsContainer>
          {certifications.map((accomplishment, index) => (
            <Accomplishment key={`accomplishment-${index}`}>
              <AccomplishmentTitle>{accomplishment.title}</AccomplishmentTitle>
              <AccomplishmentDate>{accomplishment.date}</AccomplishmentDate>
              <AccomplishmentDesc>{accomplishment.desc}</AccomplishmentDesc>
              <AccomplishmentDoc href={accomplishment.doc} target="_blank">
                View Certificate
              </AccomplishmentDoc>
            </Accomplishment>
          ))}
        </CertificationsContainer>
      </Wrapper>
    </Container>
  );
};

export default Certifications;