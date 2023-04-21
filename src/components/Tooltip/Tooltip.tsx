import React from 'react'

interface TooltipProps {
  text: React.ReactNode,
  x: number,
  y: number
}

const Tooltip: React.FC<TooltipProps> = ({text, x, y}) => {
  return (
    <div className='tooltip' style={{top: y, left: x}}>
      {text}
    </div>
  )
}

export default Tooltip