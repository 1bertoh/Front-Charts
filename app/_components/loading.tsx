import { CircularProgress } from '@nextui-org/progress'
import React from 'react'

const Loading = () => {
  return (
    <CircularProgress label="Loading..." color='success' size='lg' />
  )
}

export default Loading