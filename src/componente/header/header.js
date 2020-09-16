import React from 'react';
import {Titulo, InputHeader, SelectHeader} from '../../assets/style/style';

import dados from '../../api/api.json';


function Header(){
    return(
        <form>
            <Titulo>Título do Quadro</Titulo>
            <InputHeader type="text" placeholder='Pesquisar'/>
            <SelectHeader>
               <option value="filtroAvancado">Filtro Avançado</option>
            </SelectHeader>
            <div>
                <ul id="teste">
                </ul>
            </div>
        </form>
    )
}

export default Header;