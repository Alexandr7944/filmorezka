import { Navbar } from '@/components'
import React from 'react'

const Test = () => {
  return (
    <div>
      <Navbar link={[{title: 'Главная', href: '/'}, {title: 'TEST'}]}/>
      Test
    </div>
  )
}

export default Test