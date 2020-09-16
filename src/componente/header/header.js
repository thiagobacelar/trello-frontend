import React from 'react';
import {Titulo, InputHeader, SelectHeader} from '../../assets/style/style';

import dados from '../../api/api.json';

let pessoas =  "";

pessoas = dados.people.map(item => {
    let nomes = "<li>" + item.name + "</li>";
    return nomes;
});

console.log(pessoas);

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