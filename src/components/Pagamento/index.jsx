import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { Container } from './styles'
import { Button, Row, Col } from "react-bootstrap";

export default function Pagamento() {
    const [number, setNumber] = useState(" ")
    const [name, setName] = useState(" ")
    const [expiry, setExpiry] = useState(" ")
    const [cvc, setCvc] = useState(" ")
    const [focus, setFocus] = useState(" ")

  return (
    <Container>
        <Cards className='cartao'
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus} />
     
        <form className='formulario'>
          <Col>
            <input type='number' name='number' placeholder='Número do cartão' value={number} onChange={e => setNumber(e.target.value)} onFocus={e => setFocus(e.target.name)} />
          </Col>
          <Col>
            <input type='text' name='name' placeholder='Nome do titular' value={name} onChange={e => setName(e.target.value)} onFocus={e => setFocus(e.target.name)} />
          </Col>
          <Row className='lado'>
              <input type='text' name='expiry' placeholder='MM/AAAA' value={expiry} onChange={e => setExpiry(e.target.value)} onFocus={e => setFocus(e.target.name)} />            
          </Row>
          <Row className='outrolado'>
              <input type='number' name='cvc' placeholder='CVC' value={cvc} onChange={e => setCvc(e.target.value)} onFocus={e => setFocus(e.target.name)} />          
          </Row>
          <Button type='submit'>
            Avançar
          </Button>
        </form>
    </Container>
  )
}
