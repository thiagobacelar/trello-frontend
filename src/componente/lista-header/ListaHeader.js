import React from 'react';
import {ListaHeaderBox, ListaHeaderImg, ListaHeaderSubTitulo, ItemButton, BoxButton} from '../../assets/style/style';

import Point from  '../../assets/imagens/point.svg';


function modal(e){
    e.preventDefault();
    let box = document.getElementById('Boxbutton');
    box.style.display = "block";
}

function renomear(e){
    e.preventDefault();
    
}

function excluir(e){
    e.preventDefault();
    
}

export class ListaButton extends React.Component{
    render(){
        return(
            <BoxButton id="Boxbutton">
                <ItemButton href={""} onClick={renomear}>Renomear</ItemButton>
                <ItemButton href={""} onClick={excluir}>Excluir</ItemButton>
            </BoxButton>
        )
    }
}

export class ListaHeader extends React.Component {
    render() {
      return (
        <ListaHeaderBox>
        <ListaHeaderSubTitulo>{this.props.children}</ListaHeaderSubTitulo>
            <ListaHeaderImg href={""} onClick={modal}>
                <img src={Point} />
            </ListaHeaderImg>
       </ListaHeaderBox>
      );
    }
  }

