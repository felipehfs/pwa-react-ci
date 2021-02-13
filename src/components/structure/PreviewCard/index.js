import React from "react";
import { CustomImage } from '../../../components/structure/CustomImage';
import { Catalog, Content, Details, Rating } from './PreviewCard.styles';

export default function PreviewCard({
  stars,
  projects,
  author,
  cover,
}) {
  return (
      <Catalog>
          <figure>
            <CustomImage src={cover} alt="Pop art" />
          </figure>
          <Content>
            <Details>
              <h3>{author}</h3> 
              <h4>{projects} projects</h4>
            </Details>
            <Rating>
              {stars}
            </Rating>
          </Content>
      </Catalog>
  );
}
