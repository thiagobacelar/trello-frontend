import React from 'react';
import {ItemCard, ItemBox, ItemAvatar, ItemTag, ItemTexto, ItemBoxTag} from '../../assets/style/style';

import marcos from '../../assets/imagens/avatar-marcos.svg';

function Card(props){
    return(
          <ItemCard href="#">
              <ItemTexto>{props.texto}</ItemTexto>
              <ItemBox>
                  <ItemBoxTag>
                     <ItemTag>Desenvolvimento</ItemTag>
                  </ItemBoxTag>
                <ItemAvatar>
                    <img src={marcos} />
                </ItemAvatar>
              </ItemBox>
          </ItemCard>
    )
}


export default Card;