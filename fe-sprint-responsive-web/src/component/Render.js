import styled from "styled-components";
import "../App.css";

const MainContainer = styled.div`
  display: flex;

  img {
    width: 70vw;
    height: 100vh;
  }

  .side {
    font-size: 30px;
    width: 30vw;
    height: 100vh;
  }

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;

    img {
      width: 100vw;
      height: 60vh;
    }

    .side {
      font-size: 20px;
      width: 100vw;
      height: 40vh;
    }
  }
`;

const Render = () => {
  return (
    <MainContainer>
      <img src="https://i.pinimg.com/736x/2e/7a/eb/2e7aeba6b32c5e32369f798facc926ec.jpg" />
      <div className="side">
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
    </MainContainer>
  );
};

export default Render;
