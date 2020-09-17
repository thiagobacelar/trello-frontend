import React from 'react';
import {ListaBoxWrap, Lista} from '../../assets/style/style';
import {ListaHeader , ListaButton} from '../lista-header/ListaHeader';
import Card from '../card/card';
import Criarcard from '../card/criarcard';


function ListaWrap(props){
    return(
        <ListaBoxWrap>
            <Lista>
               <ListaHeader>A iniciar</ListaHeader>
               <React.Fragment>
                  <ListaButton />
                  <Card texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quos nostrum adipisci" />
                    <Criarcard  texto="+ task" /> 
                  </React.Fragment>
            </Lista>
            <Lista>
               <ListaButton />
               <ListaHeader>Andamento</ListaHeader> 
            </Lista>
            <Lista>
               <ListaButton />
              <ListaHeader>Atrasado</ListaHeader> 
            </Lista>
            <Lista>
              <ListaButton />
              <ListaHeader>Concluido</ListaHeader> 
            </Lista>
        </ListaBoxWrap>
    )
}


export default ListaWrap;