import React from 'react'
import Card from './Cards.js'
import './secondbx.css'
import medal from './medal.png'
import select from './select.png'
import bar from './bar.png'


function Secondbx() {
  return (
  <>
  <div className='second_part'>
    <h3 style={{fontWeight:'bold'}}>Why Drive X?</h3>
    <p className="para_text"> A data-oriented learn to drive experience from download Drive X Apps. 
      Smart theory app, find instructors, book different type lessions by
      your convenience, track your learning , all in one account
    </p>
  </div>
  <div className="myCards">
<Card
imgsrc={medal}
tittle='Top Instructors' 
para='Only verified approved insturctors make it onto Drive X - no trainees'/>
<Card
imgsrc={select}
tittle='Take Control' 
para='Choose an instructor that suits your needs based on ratings,gender,availability'/>
<Card
imgsrc={bar}
tittle='Increase pass rate' 
para='Helps you get more clear information from instructors and learners befor test'/>
</div>
  </>
  )
}

export default Secondbx