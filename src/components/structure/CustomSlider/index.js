import React from 'react'
import { Slider, SliderItem } from './CustomSlider.styles'

export default function CustomSlider({
  items
}) {
  return (
    <Slider>
      {
        items.map(item => (
          <SliderItem src={item.cover} key={item.id} />
        ))
      }
    </Slider>
  )
}
