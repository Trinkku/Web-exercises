
import './App.css';
import Title from './Components/Title'
import Shoppinglist from './Components/ShoppingList'
import {useState } from 'react';
import Buttons from './Components/Buttons';


function App() {

 
  const [ shoppingListItems, setShoppingListItems  ] = useState([
  {
    id: 1,
    name: "Laptop",
    qty: 0, //index
  },
  {
    id: 2,
    name: "Headphones",
    qty: 0,
  },
  {
    id: 3,
    name: "Keyboard",
    qty: 0,
  },
  {
    id: 4,
    name: "Mouse",
    qty: 0,
  }
]);

//Täällä tehdään toiminto, jossa tehdään JOKIN muuttamaan arvoja shoppingListItems- listan qty:tä

const toiminnanMuuttuja = (idCheck) =>{ 
var randomNumber = Math.floor(Math.random() *1) +1 ;

let newshoppingListItems = [...shoppingListItems]; //uusi lista pitää sisällään vanhan listan sisällön. Uus lista tehtiin, koska se ei pysty lukee suoraan vanhasta

let itemClicked = newshoppingListItems.findIndex(i => idCheck === i.id);

if(itemClicked != -1) {

  let newElement = {...newshoppingListItems[itemClicked]}
  newElement.qty = newElement.qty + randomNumber;
  newshoppingListItems[itemClicked] = newElement;

  setShoppingListItems(newshoppingListItems); //muutettu listan arvon parametrina uusilista=vanhan listan sisältö
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              


}



  return (
    <div className="App">
    <Title />
    <Shoppinglist listItems = { shoppingListItems }
    />
  <Buttons clicked= { toiminnanMuuttuja }
    />  
    
  

    </div>
  );

}
export default App;
