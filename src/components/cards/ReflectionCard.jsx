import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: auto; /* Adjust height to auto */
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

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: visible; /* Remove text overflow */
  display: block; /* Remove -webkit-box */
  max-width: 100%;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: visible; /* Remove text overflow */
  display: block; /* Remove -webkit-box */
  max-width: 100%;
`;

const ReflectionCard = ({ reflection }) => {
  return (
    <Card>
      <Title>{reflection.title}</Title>
      <Date>{reflection.date}</Date>
      <Description>{reflection.description}</Description>
    </Card>
  );
};

export default ReflectionCard;

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

// const Title = styled.div`
//   font-size: 20px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   overflow: visible; /* Remove text overflow */
//   display: block; /* Remove -webkit-box */
//   max-width: 100%;
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
//   overflow: visible; /* Remove text overflow */
//   display: block; /* Remove -webkit-box */
//   max-width: 100%;
// `;

// const ReflectionCard = ({ reflection }) => {
//   return (
//     <Card>
//       <Title>{reflection.title}</Title>
//       <Date>{reflection.date}</Date>
//       <Description>{reflection.description}</Description>
//     </Card>
//   );
// };

// export default ReflectionCard;
// // import React from "react";
// // import styled from "styled-components";

// // const Card = styled.div`
// //   width: 330px;
// //   height: 200px;
// //   background-color: ${({ theme }) => theme.card};
// //   cursor: pointer;
// //   border-radius: 10px;
// //   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
// //   overflow: hidden;
// //   padding: 26px 20px;
// //   display: flex;
// //   flex-direction: column;
// //   gap: 14px;
// //   transition: all 0.5s ease-in-out;
// //   &:hover {
// //     transform: translateY(-10px);
// //     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
// //     filter: brightness(1.1);
// //   }
// // `;

// // const Title = styled.div`
// //   font-size: 20px;
// //   font-weight: 600;
// //   color: ${({ theme }) => theme.text_secondary};
// //   overflow: hidden;
// //   display: -webkit-box;
// //   max-width: 100%;
// //   -webkit-line-clamp: 2;
// //   -webkit-box-orient: vertical;
// //   text-overflow: ellipsis;
// // `;

// // const Date = styled.div`
// //   font-size: 12px;
// //   margin-left: 2px;
// //   font-weight: 400;
// //   color: ${({ theme }) => theme.text_secondary + 80};
// //   @media only screen and (max-width: 768px) {
// //     font-size: 10px;
// //   }
// // `;

// // const Description = styled.div`
// //   font-weight: 400;
// //   color: ${({ theme }) => theme.text_secondary + 99};
// //   overflow: hidden;
// //   display: -webkit-box;
// //   max-width: 100%;
// //   -webkit-line-clamp: 3;
// //   -webkit-box-orient: vertical;
// //   text-overflow: ellipsis;
// // `;

// // const ReflectionCard = ({ reflection }) => {
// //   return (
// //     <Card>
// //       <Title>{reflection.title}</Title>
// //       <Date>{reflection.date}</Date>
// //       <Description>{reflection.description}</Description>
// //     </Card>
// //   );
// // };

// // export default ReflectionCard;
