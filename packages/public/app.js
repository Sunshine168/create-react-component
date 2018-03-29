import React, { Component } from 'react'
import { render } from 'react-dom'

import DownloadWrapper from '../src'

class App extends Component {
  render() {
    return (
      <div>
        <DownloadWrapper>
          <button>download</button>
        </DownloadWrapper>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
