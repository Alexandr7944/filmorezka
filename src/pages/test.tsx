import MyContainer from '@/components/MyContainer/MyContainer';
import { Button } from '@/components/UI/Button';
import React from 'react'

const test = () => {
  return (
    <MyContainer>
      test
      <Button title='Hello' />
    </MyContainer>
  )
}

export default test