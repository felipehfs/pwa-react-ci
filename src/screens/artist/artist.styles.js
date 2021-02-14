import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--blue);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

`;

export const BackWrapper = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin-right: 10px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin-right: 10px;
  }
`;

export const Header = styled.header`
  display: flex;
  padding: 2rem 1rem;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

export const Thumbnail = styled.section`
  display: flex;
  width: 100%;
  max-height: 180px;
  padding: 1rem 1rem;
  & > figure {
    flex: 1;
  }

  @media (min-width: 1024px) {
    & > figure {
      flex: 1;
    }
  }
`;

Thumbnail.Content = styled.main`
  padding: 0 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  & > h3 {
    color: #fff;
    font-size: 24px;
  }


  & > span {
    color: var(--gray);
    font-weight: 200;
  }

  @media(min-width: 1024px) {
    flex: 3;
  }
`;

Thumbnail.Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: .5rem 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, .5);

  /* @media(min-width: 1024px) {
    justify-content: space-around;
  }
 */
`
Footer.Actions = styled.div`
  font-size: 1.3rem;

  & > span {
    margin-right: 20px;
    cursor: pointer;
  }

  & > span:active {
    opacity: .7;
  }

  & > span:last-child { 
    margin-right: 0;
  }
`;

Footer.Button = styled.button`
  border: none;
  padding: 10px 17px;
  background-color: var(--red);
  color: #fff;
  border-radius: 20px;
  font-weight: 200;
  outline: none;

  & span:first-child {
    margin-right: 15px; 
  }

  &:active {
    opacity: .6;
  }
`
