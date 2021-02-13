import React from 'react'
import CustomSlider from '../../components/structure/CustomSlider';
import { Header, Wrapper} from './NewArtist.styles';

export default function NewArtist({
  items
}) {
  return (
    <Wrapper>
      <Header>
        <h3>New Artists</h3>
        <p>View all</p>
      </Header>
      <CustomSlider items={items}/>
    </Wrapper>
  )
}
