/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Card=({data:{note_name, date, discription}})=> (
    <div css={css`
    width: 25%;
    margin: 20px;
    padding: 20px;
    font-size: 20px;
    border: 1px solid black;
    background-color:rgb(204, 204, 179);
    @media(max-width:990px){
        width: 35%;
    }
    
  `}> 
      <div css={css`
       
        margin-bottom:10px;s
        height: 40px;
        padding-top:10px;
        padding-left:10px;
        border: 1px solid black;
        @media(max-width:990px){
            font-size:18px;
        }
        `}>{note_name}</div>
      <div css={css`
        padding-top:10px;
        margin-bottom:10px;
        height: 40px;
        padding-left:10px;
        border: 1px solid black;
        @media(max-width:990px){
            font-size:18px;
        }
        `}>{date}</div>
      <div css={css`
        padding-top:10px;
        height: 60px;
        padding-left:10px;
        border: 1px solid black;
        @media(max-width:990px){
            height: 100px;
            font-size:18px;
        }
        `}>{discription}</div>
    </div>
);
export default Card;