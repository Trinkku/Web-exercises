import React from 'react';

export default function Buttons(props) {

  return <div>

     <button onClick={ () => props.clicked(1)}>Add laptop</button>
     <button onClick={ () => props.clicked(2)}>Add Headphones</button>
     <button onClick={ () => props.clicked(3)}>Add keyboard</button>
     <button onClick={ () => props.clicked(4)}>Add mouse</button>

  </div>;
}
//=> props.nimettypropsi(id)}>napin nimi</button>