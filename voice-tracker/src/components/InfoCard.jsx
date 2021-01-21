import React from 'react'

const Infocard = () => {
  const isIncome = Math.round(Math.random());
  return (
    <div style={{textAlign: 'center', padding:'0 10%'}}>
      Try saying:<br></br>
      Add {isIncome? 'Income ': 'Expance ' }
      for {isIncome? '$100 ': '$50 '}
      in Category {isIncome? 'Buisiness ':'House '}
      for {isIncome? 'Monday ':'Tueseday '}
    </div>
  )
}

export default Infocard
 