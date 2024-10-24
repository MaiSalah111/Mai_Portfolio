import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: auto;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
`;

const Tags = styled.div`
  /* Add your styles here */
`;

const Details = styled.div`
  /* Add your styles here */
`;

const Title = styled.div`
  /* Add your styles here */
`;

const Date = styled.div`
  /* Add your styles here */
`;

const Description = styled.div`
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: ${({ expanded }) => (expanded ? 'none' : 3)};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-weight: 600;
  margin-top: 8px;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`;

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <Image src={project.image} />
      <Tags>{/* Add tag elements here */}</Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description expanded={expanded}>{project.description}</Description>
        <ToggleButton onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Read More"}
        </ToggleButton>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar key={member.id} src={member.img} />
        ))}
      </Members>
      <Button href={project.github} target="_blank">
        View Code
      </Button>
      <div>
        <strong>Category:</strong> {project.category}
      </div>
    </Card>
  );
};

export default ProjectCard;

// import React, { useState } from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   width: 330px;
//   height: auto;
//   background-color: ${({ theme }) => theme.card};
//   cursor: pointer;
//   border-radius: 10px;
//   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
//   overflow: hidden;
//   padding: 26px 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   transition: all 0.5s ease-in-out;
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
//     filter: brightness(1.1);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 180px;
//   background-color: ${({ theme }) => theme.white};
//   border-radius: 10px;
//   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// `;

// const Tags = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 4px;
// `;

// const Details = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0px;
//   padding: 0px 2px;
//   flex-grow: 1;
// `;

// const Title = styled.h3`
//   font-size: 18px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
// `;

// const Date = styled.div`
//   font-size: 14px;
//   color: ${({ theme }) => theme.text_secondary};
// `;

// const Description = styled.div`
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   overflow: hidden;
//   margin-top: 8px;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: ${({ expanded }) => (expanded ? 'none' : 3)};
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

// const ToggleButton = styled.button`
//   background: none;
//   border: none;
//   color: ${({ theme }) => theme.primary};
//   cursor: pointer;
//   font-weight: 600;
//   margin-top: 8px;
// `;

// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;

// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;

// const Button = styled.a`
//   color: ${({ theme }) => theme.primary};
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
// `;

// const ProjectCard = ({ project }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <Card>
//       <Image src={project.image} />
//       <Tags>{/* Add tag elements here */}</Tags>
//       <Details>
//         <Title>{project.title}</Title>
//         <Date>{project.date}</Date>
//         <Description expanded={expanded}>{project.description}</Description>
//         <ToggleButton onClick={() => setExpanded(!expanded)}>
//           {expanded ? "Show Less" : "Read More"}
//         </ToggleButton>
//       </Details>
//       <Members>
//         {project.member?.map((member) => (
//           <Avatar key={member.id} src={member.img} />
//         ))}
//       </Members>
//       <Button href={project.github} target="_blank">
//         View Code
//       </Button>
//     </Card>
//   );
// };

// export default ProjectCard;

// import styled from "styled-components";

// const Card = styled.div`
//   width: 300px; /* Set a fixed width */
//   height: 400px; /* Set a fixed height */
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   padding: 16px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   border-radius: 8px;
//   background-color: ${({ theme }) => theme.card};
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 150px; /* Set a fixed height */
//   object-fit: cover;
//   border-radius: 8px;
// `;

// const Tags = styled.div`
//   margin-top: 8px;
// `;

// const Details = styled.div`
//   flex-grow: 1;
//   width: 100%;
//   padding: 0px 2px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// const Title = styled.div`
//   font-size: 20px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   overflow: hidden;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 80};
//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;

// const Description = styled.div`
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   overflow: hidden;
//   margin-top: 8px;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;

// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;

// const Button = styled.a`
//   color: ${({ theme }) => theme.primary};
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
// `;

// const ProjectCard = ({ project }) => {
//   return (
//     <Card>
//       <Image src={project.image} />
//       <Tags></Tags>
//       <Details>
//         <Title>{project.title}</Title>
//         <Date>{project.date}</Date>
//         <Description>{project.description}</Description>
//       </Details>
//       <Members>
//         {project.member?.map((member) => (
//           <Avatar key={member.img} src={member.img} />
//         ))}
//       </Members>
//       <Button href={project.github} target="_blank">
//         View Code
//       </Button>
//     </Card>
//   );
// };

// export default ProjectCard;

// import React from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   width: 330px;
//   height: auto;
//   background-color: ${({ theme }) => theme.card};
//   cursor: pointer;
//   border-radius: 10px;
//   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
//   overflow: hidden;
//   padding: 26px 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   transition: all 0.5s ease-in-out;
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
//     filter: brightness(1.1);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 180px;
//   background-color: ${({ theme }) => theme.white};
//   border-radius: 10px;
//   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// `;

// const Tags = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 4px;
// `;

// const Details = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0px;
//   padding: 0px 2px;
//   flex-grow: 1; /* Ensure Details take up remaining space */
// `;

// const Title = styled.div`
//   font-size: 20px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   overflow: hidden;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 80};
//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;

// const Description = styled.div`
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   overflow: hidden;
//   margin-top: 8px;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;

// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;

// const Button = styled.a`
//   color: ${({ theme }) => theme.primary};
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
// `;

// const ProjectCard = ({ project }) => {
//   return (
//     <Card>
//       <Image src={project.image} />
//       <Tags></Tags>
//       <Details>
//         <Title>{project.title}</Title>
//         <Date>{project.date}</Date>
//         <Description>{project.description}</Description>
//       </Details>
//       <Members>
//         {project.member?.map((member) => (
//           <Avatar src={member.img} />
//         ))}
//       </Members>
//       <Button href={project.github} target="_blank">
//         View Code
//       </Button>
//     </Card>
//   );
// };

// export default ProjectCard;

// import React, { useState } from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   width: 330px;
//   height: auto;
// `;

// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 80};
//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;

// const Description = styled.div`
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   overflow: hidden;
//   margin-top: 8px;
//   display: block;
//   max-width: 100%;
//   flex-grow: 1;
//   max-height: ${({ expanded }) => (expanded ? "none" : "3.6em")}; /* Show 3 lines by default */
//   display: -webkit-box;
//   -webkit-line-clamp: ${({ expanded }) => (expanded ? "none" : "3")};
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;

// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;

// const Button = styled.a`
//   color: ${({ theme }) => theme.primary};
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
// `;

// const ToggleButton = styled.button`
//   background: none;
//   border: none;
//   color: ${({ theme }) => theme.primary};
//   cursor: pointer;
//   font-weight: 600;
//   margin-top: 8px;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 10px;
//   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// `;

// const Tags = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 4px;
// `;

// const Details = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0px;
// `;

// const Title = styled.h3`
//   font-size: 18px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
// `;

// const ProjectCard = ({ project }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <Card>
//       <Image src={project.image} />
//       <Tags>{/* Add tag elements here */}</Tags>
//       <Details>
//         <Title>{project.title}</Title>
//         <Date>{project.date}</Date>
//         <Description expanded={expanded}>{project.description}</Description>
//         <ToggleButton onClick={() => setExpanded(!expanded)}>
//           {expanded ? "Show Less" : "Show More"}
//         </ToggleButton>
//       </Details>
//       <Members>
//         {project.member?.map((member) => (
//           <Avatar key={member.id} src={member.img} />
//         ))}
//       </Members>
//       <Button href={project.github} target="_blank">
//         View Code
//       </Button>
//     </Card>
//   );
// };

// export default ProjectCard;

// import React from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   width: 330px;
//   height: 450px; /* Set a fixed height */
//   background-color: ${({ theme }) => theme.card};
//   cursor: pointer;
//   border-radius: 10px;
//   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
//   overflow: hidden;
//   padding: 26px 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   transition: all 0.5s ease-in-out;
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
//     filter: brightness(1.1);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 180px;
//   background-color: ${({ theme }) => theme.white};
//   border-radius: 10px;
//   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// `;

// const Tags = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 4px;
// `;

// const Details = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0px;
//   padding: 0px 2px;
//   flex-grow: 1; /* Ensure Details take up remaining space */
// `;

// const Title = styled.div`
//   font-size: 20px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   overflow: hidden;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 80};
//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;

// const Description = styled.div`
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   overflow: hidden; /* Ensure overflow is hidden */
//   margin-top: 8px;
//   display: block;
//   max-width: 100%;
//   flex-grow: 1; /* Ensure Description takes up remaining space */
// `;

// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;

// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;

// const Button = styled.a`
//   color: ${({ theme }) => theme.primary};
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
// `;

// const ProjectCard = ({ project }) => {
//   return (
//     <Card>
//       <Image src={project.image} />
//       <Tags></Tags>
//       <Details>
//         <Title>{project.title}</Title>
//         <Date>{project.date}</Date>
//         <Description>{project.description}</Description>
//       </Details>
//       <Members>
//         {project.member?.map((member) => (
//           <Avatar src={member.img} />
//         ))}
//       </Members>
//       <Button href={project.github} target="_blank">
//         View Code
//       </Button>
//     </Card>
//   );
// };

// export default ProjectCard;

// import React from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   width: 330px;
//   height: 450px; /* Set a fixed height */
//   background-color: ${({ theme }) => theme.card};
//   cursor: pointer;
//   border-radius: 10px;
//   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
//   overflow: hidden;
//   padding: 26px 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   transition: all 0.5s ease-in-out;
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
//     filter: brightness(1.1);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 180px;
//   background-color: ${({ theme }) => theme.white};
//   border-radius: 10px;
//   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// `;

// const Tags = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 4px;
// `;

// const Details = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0px;
//   padding: 0px 2px;
//   flex-grow: 1; /* Ensure Details take up remaining space */
// `;

// const Title = styled.div`
//   font-size: 20px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   overflow: hidden;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 80};
//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;

// const Description = styled.div`
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   overflow: hidden; /* Ensure overflow is hidden */
//   margin-top: 8px;
//   display: block;
//   max-width: 100%;
//   flex-grow: 1; /* Ensure Description takes up remaining space */
// `;

// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;

// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;

// const Button = styled.a`
//   color: ${({ theme }) => theme.primary};
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
// `;

// const ProjectCard = ({ project }) => {
//   return (
//     <Card>
//       <Image src={project.image} />
//       <Tags></Tags>
//       <Details>
//         <Title>{project.title}</Title>
//         <Date>{project.date}</Date>
//         <Description>{project.description}</Description>
//       </Details>
//       <Members>
//         {project.member?.map((member) => (
//           <Avatar src={member.img} />
//         ))}
//       </Members>
//       <Button href={project.github} target="_blank">
//         View Code
//       </Button>
//     </Card>
//   );
// };

// export default ProjectCard;

// import React from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   width: 330px;
//   height: auto;
//   background-color: ${({ theme }) => theme.card};
//   cursor: pointer;
//   border-radius: 10px;
//   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
//   overflow: hidden;
//   padding: 26px 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   transition: all 0.5s ease-in-out;
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
//     filter: brightness(1.1);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 180px;
//   background-color: ${({ theme }) => theme.white};
//   border-radius: 10px;
//   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// `;

// const Tags = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 4px;
// `;

// const Details = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0px;
//   padding: 0px 2px;
//   flex-grow: 1; /* Ensure Details take up remaining space */
// `;

// const Title = styled.div`
//   font-size: 20px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   overflow: hidden;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
//   text-align: justify; /* Justify text */
// `;

// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 80};
//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
//   text-align: justify; /* Justify text */
// `;

// const Description = styled.div`
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   overflow: visible;
//   margin-top: 8px;
//   display: block;
//   max-width: 100%;
//   flex-grow: 1; /* Ensure Description takes up remaining space */
//   text-align: justify; /* Justify text */
// `;

// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;

// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;

// const Button = styled.a`
//   color: ${({ theme }) => theme.primary};
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
// `;

// const ProjectCard = ({ project }) => {
//   return (
//     <Card>
//       <Image src={project.image} />
//       <Tags></Tags>
//       <Details>
//         <Title>{project.title}</Title>
//         <Date>{project.date}</Date>
//         <Description>{project.description}</Description>
//       </Details>
//       <Members>
//         {project.member?.map((member) => (
//           <Avatar src={member.img} />
//         ))}
//       </Members>
//       <Button href={project.github} target="_blank">
//         View Code
//       </Button>
//     </Card>
//   );
// };

// export default ProjectCard;

// import React from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   width: 330px;
//   height: auto;
//   background-color: ${({ theme }) => theme.card};
//   cursor: pointer;
//   border-radius: 10px;
//   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
//   overflow: hidden;
//   padding: 26px 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   transition: all 0.5s ease-in-out;
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
//     filter: brightness(1.1);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 180px;
//   background-color: ${({ theme }) => theme.white};
//   border-radius: 10px;
//   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// `;

// const Tags = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 4px;
// `;

// const Details = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0px;
//   padding: 0px 2px;
//   flex-grow: 1; /* Ensure Details take up remaining space */
// `;

// const Title = styled.div`
//   font-size: 20px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   overflow: hidden;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 80};
//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;

// const Description = styled.div`
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   overflow: visible;
//   margin-top: 8px;
//   display: block;
//   max-width: 100%;
//   flex-grow: 1; /* Ensure Description takes up remaining space */
// `;

// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;

// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;

// const Button = styled.a`
//   color: ${({ theme }) => theme.primary};
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
// `;

// const ProjectCard = ({ project }) => {
//   return (
//     <Card>
//       <Image src={project.image} />
//       <Tags></Tags>
//       <Details>
//         <Title>{project.title}</Title>
//         <Date>{project.date}</Date>
//         <Description>{project.description}</Description>
//       </Details>
//       <Members>
//         {project.member?.map((member) => (
//           <Avatar src={member.img} />
//         ))}
//       </Members>
//       <Button href={project.github} target="_blank">
//         View Code
//       </Button>
//     </Card>
//   );
// };

// export default ProjectCard;

// import React from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   width: 330px;
//   height: auto; /* Adjust height to auto */
//   background-color: ${({ theme }) => theme.card};
//   cursor: pointer;
//   border-radius: 10px;
//   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
//   overflow: hidden;
//   padding: 26px 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   transition: all 0.5s ease-in-out;
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
//     filter: brightness(1.1);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 180px;
//   background-color: ${({ theme }) => theme.white};
//   border-radius: 10px;
//   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// `;

// const Tags = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 4px;
// `;

// const Details = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0px;
//   padding: 0px 2px;
// `;

// const Title = styled.div`
//   font-size: 20px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   overflow: hidden;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 80};
//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;

// const Description = styled.div`
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   overflow: visible; /* Ensure overflow is visible */
//   margin-top: 8px;
//   display: block; /* Change display to block */
//   max-width: 100%;
// `;

// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;

// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;

// const Button = styled.a`
//   color: ${({ theme }) => theme.primary};
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
// `;

// const ProjectCard = ({ project }) => {
//   return (
//     <Card>
//       <Image src={project.image} />
//       <Tags></Tags>
//       <Details>
//         <Title>{project.title}</Title>
//         <Date>{project.date}</Date>
//         <Description>{project.description}</Description>
//       </Details>
//       <Members>
//         {project.member?.map((member) => (
//           <Avatar src={member.img} />
//         ))}
//       </Members>
//       <Button href={project.github} target="_blank">
//         View Code
//       </Button>
//     </Card>
//   );
// };

// export default ProjectCard;

// import React from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   width: 330px;
//   height: 490px;
//   background-color: ${({ theme }) => theme.card};
//   cursor: pointer;
//   border-radius: 10px;
//   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
//   overflow: hidden;
//   padding: 26px 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   transition: all 0.5s ease-in-out;
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
//     filter: brightness(1.1);
//   }
// `;
// const Image = styled.img`
//   width: 100%;
//   height: 180px;
//   background-color: ${({ theme }) => theme.white};
//   border-radius: 10px;
//   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// `;
// const Tags = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 4px;
// `;
// const Details = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0px;
//   padding: 0px 2px;
// `;
// const Title = styled.div`
//   font-size: 20px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   overflow: hidden;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;
// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 80};
//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;
// const Description = styled.div`
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   overflow: hidden;
//   margin-top: 8px;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;
// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;
// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;
// const Button = styled.a`
//   color: ${({ theme }) => theme.primary};
//   text-decoration: none;
//   font-weight: 600;
//   text-align: center;
// `;

// const ProjectCard = ({ project }) => {
//   return (
//     <Card>
//       <Image src={project.image} />
//       <Tags></Tags>
//       <Details>
//         <Title>{project.title}</Title>
//         <Date>{project.date}</Date>
//         <Description>{project.description}</Description>
//       </Details>
//       <Members>
//         {project.member?.map((member) => (
//           <Avatar src={member.img} />
//         ))}
//       </Members>
//       <Button href={project.github} target="_blank">
//         View Code
//       </Button>
//     </Card>
//   );
// };

// export default ProjectCard;
