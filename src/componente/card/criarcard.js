import React from 'react';
import {LinkCard, CriarCard} from '../../assets/style/style';

function Criarcard(props){
    return(
        <CriarCard>
            <LinkCard href="#" onClick="teste">{props.texto}</LinkCard>
        </CriarCard>
    )
}


export default Criarcard;
