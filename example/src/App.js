import React from 'react'

import { useMyHook } from 'xave-ui-kit'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
