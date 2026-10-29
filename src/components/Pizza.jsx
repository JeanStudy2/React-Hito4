import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

let Pizza = () =>{

        let [pizzas, setPizzas] = useState([])

    useEffect(() =>{

        	const getproduct = async() =>{
          const res = await fetch('http://localhost:5000/api/pizzas/p001')     
          const data = await res.json()
          setPizzas(data)                   
	        }
          console.log(pizzas)
	
  	      getproduct()

    },[])

    return(
        <>
          <Card className='w-50 mx-auto my-4'>
            <Card.Img variant="top" src='https://images.pexels.com/photos/35759992/pexels-photo-35759992.jpeg' />
            <Card.Body>
              <Card.Title className='fs-3 text text-capitalize'>{pizzas.name}</Card.Title>
              <Card.Text>{pizzas.desc}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className='text-capitalize'>Ingredientes: {pizzas.ingredients}</ListGroup.Item>
            </ListGroup>
            <Card.Body className='d-flex justify-content-evenly'>
              <Card.Text className='fs-3 text fw-semibold m-0'>Precio: {pizzas.price}</Card.Text>
              <Button  variant="primary">Añadir al Carrito</Button>
            </Card.Body>
          </Card>

        </>
    )


}

export default Pizza