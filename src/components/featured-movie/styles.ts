import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 645px;
  background-size: cover;
  padding-top: 120px;
  .video-info {
    position: absolute;
    z-index: 1000;
    .category {
      font-size: 38px;
      color: #808183;
    }
    .info {
      display: flex;
      font-size: 38px;
      gap: 20px;
      align-items: center;
      margin-top: 20px;
    }
    .description {
      margin-top: 10px;
      margin-bottom: 30px;
      font-size: 38px;
      color: white;
      max-width: 685px;
    }

    .actions {
      display: flex;
      gap: 20px;
      button {
        width: 150px;
        height: 50px;
        border-radius: 30px;
        outline: 0;
        border: none;
        font-size: 20px;
        font-family: "Roboto";
        font-weight: bold;
        cursor: pointer;
      }
      .more-info {
        background-color: #2024e0;
        color: white;
      }
    }
  }

  .video {
    video {
      opacity: 0;
      transition: opacity .3s ease-in-out;
      position: absolute;
      top: 0;
      left: 0;
      min-width: 100%;
      background-color: black;
      min-height: 645px;
    }
  }
`;
