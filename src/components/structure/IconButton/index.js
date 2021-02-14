import React from 'react'
import { CustomButton} from './IconButton.style';

export default function IconButton({
  color,
  icon,
  ...props
}) {
  return (
    <CustomButton color={color}  {...props}>
      {icon}
    </CustomButton>
  )
}
