import React from 'react';
import {ListaBoxWrap, Lista} from '../../assets/style/style';
import {ListaHeader , ListaButton} from '../lista-header/ListaHeader';
import Card from '../card/card';
import Criarcard from '../card/criarcard';
import CriarColuna from './criarcoluna';

const corcoluna = "#F4F5F7";

function ListaWrap(props){
    return(
        <ListaBoxWrap>
            <Lista bg={corcoluna}>
               <ListaHeader>A iniciar</ListaHeader>
               <React.Fragment>
                  <ListaButton />
                  <Card texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quos nostrum adipisci" />
                    <Criarcard  texto="+ task" /> 
                  </React.Fragment>
            </Lista>
            <Lista bg={corcoluna}>
               <ListaButton />
               <ListaHeader>Andamento</ListaHeader> 
            </Lista>
            <Lista bg={corcoluna}>
               <ListaButton />
              <ListaHeader>Atrasado</ListaHeader> 
            </Lista>
            <Lista bg={corcoluna}>
              <ListaButton />
              <ListaHeader>Concluido</ListaHeader> 
            </Lista>
            <Lista bg="#ffffff">
              <CriarColuna nomeColuna="+ coluna"/>
            </Lista>
        </ListaBoxWrap>
    )
}


export default ListaWrap;