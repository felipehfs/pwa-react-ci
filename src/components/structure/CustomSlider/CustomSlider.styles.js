import styled from "styled-components";

export const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 1rem;

  &::-webkit-scrollbar {
    width: 0;
  } 
`;

export const SliderItem = styled.img`
  min-width: 110px;
  height: 100px;
  border-radius: 15px;
  line-height:110px;
  margin-right: 10px;
`;
