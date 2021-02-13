import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;


  a {
     color: var(--gray);
     text-decoration: none;
     cursor: pointer;
   }

  a:active {
    opacity: .7;
  }
`;
