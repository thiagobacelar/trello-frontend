import React from 'react';
//mport logo from './logo.svg';
//importar os componentes aqui !
import {Header} from './componente/header/header';
import ListaWrap from './componente/lista-wrap/ListaWrap';


function Main() {
  return (
    <React.Fragment>
      <Header />
      <ListaWrap />
    </React.Fragment>
  )
}

export default Main;
