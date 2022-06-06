/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CreateForm=({onSubmit})=>(
 <form 
    onSubmit={onSubmit} 
    css={css`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;  
      `}>
    
    
    <input name="notename" type="text" placeholder="name of the note"  css={css`
  
    height: 40px;
    font-size: 18px;
    border-radius: 10px;
    padding-left: 10px;
    margin-bottom: 20px;
    
      `}/>
    <input name="discription" type="text" placeholder="note's discription" css={css`
  
  height: 200px;
  font-size: 18px;
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 20px;

    `} />
    <button data-status="closed" css={css`
    width: 120px;
    height: 40px;
    border-radius: 15px;
    background: rgb(238, 229, 217);
  
    `} >Add</button>
</form>
)
export default CreateForm;