import styled from "@emotion/styled";

const Book = styled.div`
  background-image: linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      transparent 50.1%
    ),
    url(${(props) => (props.bgImg ? props.bgImg : "")});
  background-size: cover;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
`;

export default Book;
