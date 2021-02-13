import styled from "styled-components";

export const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 1rem;
  padding: 2px;

  &::-webkit-scrollbar {
    width: 0;
  } 
`;

export const SliderItem = styled.img`
  min-width: 140px;
  height: 140px;
  border-radius: 15px;
  line-height:110px;
  margin-right: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .7);
`;
