import styled from "styled-components";

export const CustomButton = styled.button`
  border: none;
  padding: 4px;
  background-color: ${props => props.bgColor ?? '#fff'};
  border-radius: 50%;
  display: flex;
  align-items:center;
  justify-content: center;
  font-size: 1.4em;
`
