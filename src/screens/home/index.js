import React, { useState } from 'react'
import CustomTab from '../../components/structure/CustomTab';
import PreviewCard from '../../components/structure/PreviewCard';
import { Wrapper, Header, Gallery} from './home.styles';
import PopArt from '../../assets/images/abstract-1264071_640.png'
import { useTabs } from '../../hooks/useTabs'
import NewArtist from '../../containers/NewArtist';

const tabNames = [
  "Pop arts",
  "Geometric",
  "Nature"
]

const newArtists = [
  { id: 1, cover: 'https://randomuser.me/api/portraits/women/73.jpg' },
  { id: 2, cover: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { id: 3, cover: 'https://randomuser.me/api/portraits/men/39.jpg' },
  { id: 4, cover: 'https://randomuser.me/api/portraits/women/66.jpg' },
  { id: 5, cover: 'https://randomuser.me/api/portraits/women/55.jpg' },
]


export default function Home() {
  const categoriesTab = useTabs()

  return (
    <Wrapper>
        <Header>
          <Header.Title>Inspire</Header.Title>
        </Header>
        <CustomTab
          activeIndex={categoriesTab.index}
          onChange={categoriesTab.onChange}
          tabNames={tabNames}
          >
            <Gallery>
                <PreviewCard 
                  cover={PopArt}
                  projects="45"
                  author="Jeremy Booth" 
                  stars="4.95"/>
                <NewArtist 
                  items={newArtists}
                />
            </Gallery>
            <div>
              sssf
            </div>
            <div>
              Gugis
            </div>
        </CustomTab>
    </Wrapper>
  )
}