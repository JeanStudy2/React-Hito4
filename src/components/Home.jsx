import CardPizza from "./CardPizza"
import Header from "./Header"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import { useEffect } from "react";


let Home = () =>{

    let [pizzas, setPizzas] = useState([])

    useEffect(() =>{

        	const getproduct = async() =>{
          const res = await fetch('http://localhost:5000/api/pizzas')     
          const data = await res.json()
          setPizzas(data)                   
	        }
          console.log(pizzas)
	
  	      getproduct()

    },[])

    return (
        <>
          <Header/>
          <main className="my-4">
            <Container>
              <Row className="gy-3">
                {pizzas.map((pizza) => (
                  <Col md={6} lg={4} >
                  <CardPizza
                    key={pizza.id}
                    img={pizza.img}
                    name={pizza.name}
                    price={pizza.price.toLocaleString()}
                    ingredients={pizza.ingredients}
                    />
                </Col>
                  ))}
              </Row>
            </Container>
          </main>
        </>
    )
}

export default Home