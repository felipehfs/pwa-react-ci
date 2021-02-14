import React from 'react'
import { Wrapper, Header, Content, Article} from './projects.styles';
import { Subtitle } from '../../../components/structure/Subtitle'
import { Title } from '../../../components/structure/Title'
import CustomSlider from '../../structure/CustomSlider';

const newArtists = [
  { id: 1, cover: "https://randomuser.me/api/portraits/women/73.jpg" },
  { id: 2, cover: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 3, cover: "https://randomuser.me/api/portraits/men/39.jpg" },
  { id: 4, cover: "https://randomuser.me/api/portraits/women/66.jpg" },
  { id: 5, cover: "https://randomuser.me/api/portraits/women/55.jpg" },
];

export default function Projects() {
  return (
    <Wrapper>
      <Header>
        <Header.Details>
            <Title>Projects</Title>
            <Subtitle>48 Projects</Subtitle>
        </Header.Details>
      </Header>
      <Content>
          <CustomSlider items={newArtists}/>
          <Article>
              <Title>About</Title>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, rem tempore blanditiis debitis ipsa doloremque iure provident laboriosam possimus ad. Excepturi incidunt explicabo temporibus, a nobis impedit commodi omnis iste!
              </p>
          </Article>
      </Content>
    </Wrapper>
  )
}
