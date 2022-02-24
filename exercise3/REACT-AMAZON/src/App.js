import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Search from './components/Search';

function App() {

  const products =  [ //product.name, image,price
    {
        name:'Lotus- vessapaperi',
        image: <img src="vessapaperi.jpg"/>,
        price: 5.99
    },
    {
        name:'Macbook Air',
        image:<img src="macbookair.jpg"/>,
        price: 1300
    },
    {
        name:'Magic Mouse',
        image:<img src="magicmouse.jpg"/>,
        price: 80
    },
    {
        name:'Fairy- konetiskitabletit',
        image:<img src="konetiskitabu.jpg"/>,
        price: 9
    },
    {
        name:'Airpods 2',
        image: <img src="airpods.jpg"/>,
        price: 180
    },
    {
        name:'Apple TV',
        image:<img src="appletv.jpg"/>,
        price: 120
    },
    {
        name:'Omo- superjauhe',
        image:<img src="pesujauhe.jpg"/>,
        price: 5
  },
  {
        name:'Sähköhammasharja',
        image:<img src="sähköhammas.jpeg"/>,
        price: 21
}

];


  
//search bar will navigate us to a new URL when we perform a search. grab this value from the URL:
const { search } = window.location;
const query = new URLSearchParams(search).get('s');


//function that filters out posts depending on the search query/kysely
const filterProducts = (products, query) => {
  if (!query) {
      return products;
  }

  return products.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.includes(query);

  });
};
const filteredProducts = filterProducts(products, query); 
//search query and filter function, you can render the posts that match your search

  return (
    <div className="App">
 <Header />
 <Search />
 <div className="ProductContainer">
  
 {filteredProducts.map(product => (
 <ProductList key={product.key} nimi={product.name} kuva={product.image} hinta={product.price} 
 //tässä luodaa propsit: nimi, kuva,hinta. Otetaan ne käyttöön productList.js:ssä
 /> ))} 

 </div>


 
  
    </div>
  );
}

export default App;
