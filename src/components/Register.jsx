import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

let Register = () =>{

  let [correo, setCorreo] = useState('')
  let [contraseña1, setContraseña1] = useState('')
  let [constraseña2, setContraseña2] = useState('')

  let pageDefault = (e) =>{
    e.preventDefault()

    if (contraseña1.length >= 6 && constraseña2.length >= 6){
      if (contraseña1 === constraseña2){
        setCorreo('')
        setContraseña1('')
        setContraseña2('')
        alert('Inicio de sesion exitoso')
        
      }else{
        alert('Las contraseñas no coinciden')
      }
      
    }else{
      alert('La contraseña debe tener minimo 6 caracteres')
    }
  }

    return(
        <>
        <div className='bg-dark'>
          <Form className='w-50 mx-auto py-4' onSubmit={pageDefault}>
          <h2 className='text-center text-light'>Registro</h2>
            <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" placeholder="correo@dominio.com" value={correo} onChange={(e)=> setCorreo(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="********" value={contraseña1} onChange={(e) => setContraseña1(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control type="password" placeholder="********" value={constraseña2} onChange={(e) => setContraseña2(e.target.value)} required/>
            </Form.Group>
            <div className='text-center'>
              <Button variant="success" type="submit" >Registrarse</Button>
            </div>
          </Form>
        </div>
        </>
    )
}

export default Register