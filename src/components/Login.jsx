import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

let Login = () =>{

    let [correo, setCorreo] = useState('')
    let [contraseña, setContraseña] = useState('')

    let pageDefault = (e) =>{
      e.preventDefault()

      if (contraseña.length >= 6){
        alert('Inicio de sesion exitoso')
        setCorreo('')
        setContraseña('')
      }else{
        alert('La contraseña debe tener minimo 6 caracteres')
      }
    }

    return(
        <>
          <div className='bg-dark'>
            <Form className='w-50 mx-auto py-4' onSubmit={pageDefault}>
            <h2 className='text-center text-light'>Inicio de Sesion</h2>
                <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control type="email" placeholder="correo@dominio.com" value={correo} onChange={(e)=> setCorreo(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="********" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required/>
                </Form.Group>
                <div className='text-center'>
                  <Button variant="success" type="submit" >Iniciar Sesion</Button>
                </div>
            </Form>
          </div>
        </>
    )
}

export default Login