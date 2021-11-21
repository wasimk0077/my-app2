import React from 'react'
import Schedule from './component/schedule';
import Timer from './component/timer';
const App = () => {
  return (
    <>
    <Timer 
    timeTillDate="05 26 2019, 6:00 am" 
		timeFormat="MM DD YYYY, h:mm a"
    />
    <Schedule/>
    </>

  )
}

export default App

