import { use, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { pizzaCart } from '../../public/pizzas.js'

let Cart = () => {

  let [pizzas, setPizzas] = useState(pizzaCart)

  let modificarCantidad = (operacion, id) =>{

    let pizzaModificar = pizzas.find(p => p.id === id)
      
    if (operacion === 'sumar'){
      pizzaModificar.count = pizzaModificar.count + 1
    }
    if (operacion === 'restar'){
      pizzaModificar.count = pizzaModificar.count - 1
    }

    let pizzasActualizadas = pizzas.map(p => p.id === id ? pizzaModificar : p) 

    setPizzas(pizzasActualizadas)

    }
  
    return(
        <>
          <form className='w-50 mx-auto my-4'>
            <h2 className='text-center my-4'>Detalles del pedido:</h2>
            <div className=''>
              {pizzas.map((pizza) =>{
                return <>
                  <div key={pizza.id} className='d-flex justify-content-between'>
                    <div className='d-flex '>
                      <img src={pizza.img} alt="" />
                      <p className='text-capitalize fw-semibold'>{pizza.name}</p>
                    </div>
                    <div className='d-flex align-items-center'>
                      <p className='m-0 mx-3 fw-bold'>{(pizza.price*pizza.count).toLocaleString()}</p>
                      <Button variant="outline-danger" onClick={()=>{modificarCantidad('restar', pizza.id)}}>-</Button>
                      <p className='m-0 mx-2 fw-bold'>{pizza.count}</p>
                      <Button variant="outline-success" onClick={()=>{modificarCantidad('sumar', pizza.id)}}>+</Button>
                    </div>
                  </div>
                </>
              })}
            </div>
            <p className='fs-3 fw-semibold'>Total:{pizzas.reduce((total, pizza) => total + (pizza.price * pizza.count), 0).toLocaleString()}</p>
            <Button variant="dark">Pagar</Button>
          </form>
        </>
    )
}

export default Cart