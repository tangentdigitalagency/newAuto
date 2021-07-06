import React from 'react'
import { Switch , Route } from 'react-router-dom'

import StepPage from './Components/StepPage'

const App = () => {
  return (
    <>
      <div className="app">
        <switch>
          <Route path="/" component={StepPage} />
        </switch>

      </div>
    </>
  )
}