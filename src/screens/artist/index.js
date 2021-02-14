import React from 'react'
import IconButton from '../../components/structure/IconButton';
import {
  Wrapper, 
  Header, 
  BackWrapper, 
  Thumbnail, 
  RatingWrapper,
  Footer
} from './artist.styles';
import {RiStarFill} from 'react-icons/ri';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useHistory } from 'react-router-dom';
import { Sticky } from '../../components/structure/Sticky';
import Projects from '../../components/context/Projects';
import {BiPlus, BiEnvelope} from 'react-icons/bi';
import { RiUser3Line } from "react-icons/ri";


export default function Artist() {
  const history = useHistory()

  return (
    <Wrapper>
      <Header>
        <BackWrapper>
          <span onClick={history.goBack}>
            <AiOutlineArrowLeft />
          </span> Back
        </BackWrapper>
        <RatingWrapper>
          <span>4.5</span>
          <IconButton
            onClick={() => console.log('Stars')} 
            color="#fff" 
            icon={<RiStarFill color="var(--red)"/>}/>
        </RatingWrapper>
      </Header>
      <Thumbnail>
        <figure>
          <Thumbnail.Image src="https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="" />
        </figure>
        <Thumbnail.Content>
          <Sticky>Popular</Sticky>
          <h3>Jeremy Booth</h3>
          <span># Pop art  #OpArt</span>
        </Thumbnail.Content>
      </Thumbnail>
      <Projects />
      <Footer>
        <Footer.Button>
          <span><RiUser3Line /> 235k</span> 
          <span>+ Follow</span>
        </Footer.Button>
        <Footer.Actions>
          <span>
            <BiPlus />
          </span>
          <span>
            <BiEnvelope />
          </span>
        </Footer.Actions>
      </Footer>
    </Wrapper>
  )
}
