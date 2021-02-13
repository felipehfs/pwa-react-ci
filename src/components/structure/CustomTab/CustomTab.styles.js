import styled from 'styled-components';

export const CustomTabHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  width: 100%;
`;

CustomTabHeader.TabItem = styled.div`
  & > p {
    color: ${props => props.active ? '#000': '#CCD0D7'};
    font-weight: 200;
    padding: 4px 0;
    cursor: pointer;
    border-bottom: ${({ active }) => active? '3px solid var(--red)': 'none'};
  }
`;

export const CustomTabWrapper = styled.div`
  margin-top: 24px;
`;
