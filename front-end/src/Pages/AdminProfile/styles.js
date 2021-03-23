import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ theme, stateSideBar }) => css`
    opacity: ${!stateSideBar && '0.2'};
    background: ${theme.colors.secondary};
  
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 830px) {
      background: ${theme.colors.primary};
    }
  `}
`;

const ContextProfile = styled.div`
  ${({ theme, stateSideBar }) => css`
    width: 450px;
    opacity: ${stateSideBar && '0.2'};
    background: ${theme.colors.primary};
    padding: 20px 30px 10px 30px;
    border-radius: 5px;
    box-shadow: 0 0 5px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h2 {
      color: ${theme.colors.text};
      margin-bottom: 20px;

      @media (max-width: 500px) {
      }
    }

    > p {
      color: ${theme.colors.text};
    }

    @media (max-width: 830px) {
      border: none;
      border-radius: 0;
      box-shadow: none;
      width: 100%;

      input {
        width: 100%;
      }
    }
  `}
`;

const Context = styled.div`
  ${() => css`
    display: flex;
  `}
`;

export default {
  Container,
  Context,
  ContextProfile,
};
