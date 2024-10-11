import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  z-index: 1500;
  top: 0;
  left: 0;
  height: 100vh;
  width: 92px;
  transition: width .5s ease-in-out;
  overflow: hidden;
  background-color: black;
  color: white;
  padding: 0 20px;
  &:hover {
    background-color: initial;
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.92),
      rgba(0, 0, 0, 1)
    );
    width: 400px;
    .navigation {
      li {
        cursor: pointer;
        &.active {
          background-color: #3b486d;
          border-radius: 10px;
        }
      }
    }
    > div .account {
      opacity: 1;
    }
    .actions {
      opacity: 1;
    }
  }
  > div {
    width: 300px;
    .account {
      display: flex;
      align-items: center;
      opacity: 0;
      transition: opacity .3s ease-in-out;
      margin: 40px 0;
      gap: 10px;
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: white;
      }
    }
    .navigation {
      display: flex;
      flex-direction: column;
      gap: 15px;
      li {
        display: flex;
        align-items: center;
        gap: 20px;
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
          &.active {
            background-color: #3b486d;
            border-radius: 50%;
          }
        }
        p {
          font-size: 30px;
        }
        .icon {
          img {
            width: 23px;
            height: 23px;
          }
        }
      }
    }
  }
  .actions {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 20px;
    margin-left: 15px;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    > li {
      white-space: nowrap;
    }
  }
`;
