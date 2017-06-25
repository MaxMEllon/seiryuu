import * as React from 'react'
import CommentList from './CommentList'
import DebugUI from './DebugUI'

export default function App() {
  return (
    <div>
      <CommentList />
      {
        (() => {
          if (process.env.NODE_ENV !== 'production') return <DebugUI />
        })()
      }
    </div>
  )
}
