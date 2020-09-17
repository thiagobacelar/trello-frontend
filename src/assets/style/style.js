import React from 'react';
import styled from 'styled-components';


const Titulo = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size:30px;
  color: #707070;
  font-weight: 400;
`;

const InputHeader = styled.input`
  width:587px;
  height:26px;
  border-radius:4px;
  padding-left:10px;
  border: 1px solid #767676;
`;

const SelectHeader = styled.select`
  width:177px;
  height:32px;
  background-color:#F4F5F7;
  color:#566780;
  border-radius:4px;
  margin-left:10px;
  text-transform:uppercase;
`;

/* Lista */

const ListaBoxWrap = styled.div`
  width:1280px;
  max-width:1280px;
  display:flex;
  flex-direction: row;
  justify-content:space-around;
  align-items:center;
  margin-top:20px;
`;

const Lista = styled.div`
 width:25%;
 height:75vh;
 background-color:${props => props.bg};
 margin-right:10px;
 padding-bottom:20px;
 overflow:hidden;
 position:relative;
`;

/* Lista Header */

const ListaHeaderSubTitulo = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size:20px;
  color:#707070;
  text-transform:uppercase;
  font-weight:300;
  padding-left:5px;
`;

const ListaHeaderBox = styled.div`
  width:100%;
  height:66px;
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
  background-color:#E4E6EB;
`;

const ListaHeaderImg = styled.a`
  width:10%;
  text-align:center;
  display:flex;
  justify-content:center;
`;

const BoxButton = styled.div`
  width:40%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#ffffff;
  border-radius:3px;
  position:absolute;
  right:10px;
  top:50px;
  display:none;
`;


const ItemButton = styled.a`
   width:90%;
   border-bottom:1px solid #E4E6EB;
   text-decoration:none;
   display:block;
   color:black;
   height:25px;
   text-align:center;
   display:flex;
   justify-content:center;
   align-items:center;

   ::last-child {
       border:none;
   } 
   
`;



/* card */

const ItemCard = styled.div`
  width:92%;
  margin: 0 auto;
  margin-bottom:10px;
  background-color:#ffffff;
  color:#232323;
  border-radius:3px;
  box-shadow:0px 0px 5px #c5c5c5;
`;


const ItemBox = styled.div`
   width:100%;
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   align-items:center;
`;

const ItemBoxTag = styled.div`
  width:80%;
`;


const ItemTag = styled.div`
   width:85px;
   background-color:#f4f5f7;
   border-radius:3px;
   text-align:center;
   color:#818181;
   font-size:10px;
   padding:4px 2px;
   margin-left:4px;
   font-family: 'Roboto', sans-serif;
   font-weight:300;
`;


const ItemAvatar = styled.div`
   width:20%;
`;

const ItemTexto = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size:14px;
  padding:10px;
  color:#232323;
`;

/* criar card */

const LinkCard = styled.a`
 width:100%;
 font-family: 'Roboto', sans-serif;
 font-size:14px;
 font-weight:500;
 color:#707070;
 display:flex;
 text-decoration:none;
 text-transform:uppercase;
 padding-left:10px;
`;

const CriarCard = styled.div`
 width:92%;
 height:30px;
 margin:0 auto;
 border:1px dashed #c5c5c5;
 display: flex;
 justify-content: end;
 align-items: center;
`;

const LinkColuna = styled.a`
 width:100%;
 font-family: 'Roboto', sans-serif;
 font-size:14px;
 font-weight:500;
 color:#707070;
 display:flex;
 text-decoration:none;
 text-transform:uppercase;
 padding-left:10px;
`;

const CriarColuna = styled.div`
 height:66px;
 margin:0 auto;
 border:1px dashed #c5c5c5;
 background-color: #F4F5F7;
 display: flex;
 justify-content: end;
 align-items: center;
`;



export {Titulo, InputHeader, SelectHeader, ListaBoxWrap, Lista,
        ListaHeaderBox,ListaHeaderImg, ListaHeaderSubTitulo, 
        ItemCard, ItemBox, ItemTag, ItemAvatar, ItemTexto, ItemBoxTag,
        ItemButton, BoxButton, CriarCard, LinkCard, CriarColuna, LinkColuna};