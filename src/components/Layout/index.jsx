import React from 'react';

import Header from '../Header';
import Pagamento from '../Pagamento'

import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Header />
      <Pagamento />
    </Container>
  )
}
