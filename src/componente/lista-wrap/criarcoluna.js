import React from 'react';
import {LinkColuna, CriarColuna} from '../../assets/style/style';

function Criarcoluna(props){
    return(
        <CriarColuna>
            <LinkColuna href="#" onClick="teste">{props.nomeColuna}</LinkColuna>
        </CriarColuna>
    )
}


export default Criarcoluna;