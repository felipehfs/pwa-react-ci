import React from "react";
import { CustomImage } from '../../../components/structure/CustomImage';
import { Catalog, Content, Details, Rating } from './PreviewCard.styles';
import {RiStarFill} from 'react-icons/ri';
import { useHistory } from "react-router-dom";

export default function PreviewCard({
  stars,
  projects,
  author,
  cover,
}) {
  const history = useHistory();

  return (
      <Catalog>
          <figure>
            <CustomImage 
              onClick={() => history.push('/artists')}
              src={cover} alt="Pop art" />
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
