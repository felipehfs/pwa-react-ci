import React from "react";
import { CustomImage } from '../../../components/structure/CustomImage';
import { Catalog, Content, Details, Rating } from './PreviewCard.styles';
import {RiStarFill} from 'react-icons/ri';

export default function PreviewCard({
  stars,
  projects,
  author,
  cover,
  onClickCover
}) {

  return (
      <Catalog>
          <figure>
            <CustomImage 
              data-testid="previewCard.customImage"
              onClick={onClickCover}
              src={cover} alt={`${author} cover`} />
          </figure>
          <Content>
            <Details>
              <h3>{author}</h3> 
              <h4>{projects} projects</h4>
            </Details>
            <Rating>
              <span><RiStarFill /> </span>
              {stars}
            </Rating>
          </Content>
      </Catalog>
  );
}
