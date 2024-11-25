import { CircularProgress } from '@nextui-org/progress'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <CircularProgress label="Loading..." color='success' size='lg' />
  )
}

export default Loading