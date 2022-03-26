import React from 'react'

import './card.css';



function Card(props) {
  return (
    <>
 
<div className="card">
  <div className="card_body">
    <div>{props.icon}</div>
  <img src={props.imgsrc}/>
    <h4 className="card_tittle">{props.tittle}</h4>
    <p className="card_description">{props.para}</p>
  </div>
</div>
    </>
  )
}

export default Card