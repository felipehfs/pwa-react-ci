import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1.3rem .4rem 0 1.3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
`;
Header.Title = styled.h1``

export const Gallery = styled.div``;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: .5rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, .5);
`
Footer.Button = styled.button`
  border: none;
  padding: 10px 17px;
  background-color: var(--red);
  color: #fff;
  border-radius: 20px;
  font-weight: 200;
  outline: none;

  &:active {
    opacity: .6;
  }
`

Footer.Actions = styled.div`
  font-size: 1.3rem;

  & > span {
    margin-right: 10px;
  }
`;
