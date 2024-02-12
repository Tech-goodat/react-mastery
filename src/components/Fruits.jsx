import Fruit from './Fruit.jsx'

function Fruits() {
    // const fruits=["Apple", "Kiwi", "Avocado", "Apple"]
    const fruits=[
      {name:"Apple",
      price:10,
      description:"Green apple"
      },

      {name:"banana",
      price:20,
      description:"yellow banana"
      },

      {name:"kiwi",
      price:50,
      description:"yummy fruit"
      }
      
    ]
    console.log (fruits)
  return (
    <div>
        <ul>
          {fruits.map(fruit=>
            <Fruit 
            key={fruit.name}
            name={fruit.name} price={fruit.price} description={fruit.description}/>)}
        </ul>
    </div>
  )
}

export default Fruits