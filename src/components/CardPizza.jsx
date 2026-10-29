import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

let CardPizza = (props) =>{

    return (
        <>
           <Card className='card-content mx-auto h-100'>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <h2>{props.name}</h2>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <p className='text-center'>Ingredientes:</p>
                        <ul>{(props.ingredients).map(i =>(
                            <li key={i}>{i}</li>
                        ))
                        }</ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2 className='text-center'>Precio: ${props.price}</h2>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body className='d-flex justify-content-evenly'>
                    <Button variant="light">Ver Mas 👀</Button>
                    <Button variant="dark">Añadir 🛒</Button>
                </Card.Body>
            </Card> 
        </>
    )
}

export default CardPizza