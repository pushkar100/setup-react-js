import React from 'react'
import { render } from 'react-dom'

import Simple from './example'

/**
 * The main react app
 *
 * @returns {object} The app data
 */
function App() {
  return (
    <div>
      <Simple />
    </div>
  )
}

render(<App />, document.getElementById('root'))
