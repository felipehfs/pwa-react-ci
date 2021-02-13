import React from 'react'
import {CustomTabHeader, CustomTabWrapper} from './CustomTab.styles';

export default function CustomTab({
  tabNames=[],
  activeIndex=0,
  children,
  onChange
}) {

  return (
    <CustomTabWrapper>
      <CustomTabHeader>
        {
          tabNames.map((title, index) => (
            <CustomTabHeader.TabItem 
              active={index === activeIndex} 
              onClick={() => onChange(index)}
              key={title}>
                <p>{title}</p>
            </CustomTabHeader.TabItem>
          ))
        }
      </CustomTabHeader>
      {React.Children.toArray(children)[activeIndex]}
    </CustomTabWrapper>
  )
}
