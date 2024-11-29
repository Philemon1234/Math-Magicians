import React from 'react'
import calculate from '../logic/calculate'
import operate from '../logic/operate'

function Calculator() {
  

  return (
    <div className='container'>
      <div className="calculator">
        <div className="display">0</div>
        <div className="buttons">
          <button className="button">AC</button>
          <button className="button">+/-</button>
          <button className="button">%</button>
          <button className="button operator">&divide;</button>
   
          <button className="button">7</button>
          <button className="button">8</button>
          <button className="button">9</button>
          <button className="button operator">&times;</button>

          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>
          <button className="button operator">&minus;</button>

          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button operator">+</button>

          <button className="button zero">0</button>
          <button className="button">.</button>
          <button className="button operator">=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator