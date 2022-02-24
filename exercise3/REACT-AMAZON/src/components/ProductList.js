import React from 'react'

export default function ProductList(props) {
  return (
    <div className="products">
        <div> {props.nimi} </div>
        <div> {props.kuva} </div>
        <div><b> {props.hinta} € </b></div>




    </div>
  )
} 
