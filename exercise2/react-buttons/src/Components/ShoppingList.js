import React from 'react';

export default function Shoppinglist(props) {

  return (

    <div className="Lista">
        <ul className="sislista">

            { props.listItems.map((item, index) => {
                return <li className="linesep"key={index} > {item.qty} {item.name}</li>
            })
            }

        </ul>

    </div>)
}
// return li: palauttaa tiedot listana joka kerta kun ajetaan. Eli listana tuote qty ja tuotenimi
//key= tunniste voi olla item, mutta index olisi turvallisempi
// linesep- luokka on CSS tyylittelyä varten