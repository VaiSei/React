/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";


function CreateButton({children,buttonName}){
  const [isOpen, setIsOpen]=useState(false);
  const [isRender, setRender]=useState(false);

  const onOpenClick = () => {
    setIsOpen(true);

    setTimeout(()=>{
      setRender(true);
    })
    
  };
  const onCloseClick=()=>{
    setIsOpen(false);
    setTimeout(()=>{
      setRender(false);
    },1000)
    
  
  };
  const onPopapClick =(event) => {
    if(event.target.dataset.status === "closed"){
      onCloseClick()
    }
    
  }
    return (
      <div  onClick={onPopapClick}>
        <button
        onClick={onOpenClick}
        css={css`
        width: 200px;
        height: 40px;
        font-size: 18px;
        margin-left: 3%;
        margin-top: 40px;
        background: rgb(235, 221, 209);
        cursor: pointer;
          `}
        >{buttonName} </button>
        {isRender &&(
        <div   css={css`
            position: fixed;
            opacity:0;
            width:100%;
            height:100%;
            top:0;
            bottom:0;
            left:0;
            right:0;
            background:rgba(221, 221, 221, 0.8);
            transition: 1s;
            opacity: ${isOpen ? "1" : "0"}
            `}>
          <div css={css`
        
         align-items:center;
         justify-content:center;
            position: relative;
            width:30%;
            height: 380px;
            margin:auto;
            margin-top: 5%;
            padding: 40px;
            box-shadow: 12px 10px 15px -5px rgba(0, 0, 0, 0.41);
            border-radius: 20px;
            background: rgb(238, 229, 217);
            display: ${isOpen ? "flex" : "none"};
            `}>
              <button onClick={onCloseClick}
                  
                  css={css`
                  position:absolute;
                  top:10px;
                  right: 10px;
                  width: 40px;
                  height: 40px;
                  border-radius: 15px;
                  background: rgb(238, 229, 217);
                  font-size:30px;
                  margin-bottom: 20px;
                  margin-legt: -50%;
                  `} >&#10008;</button>
              {children}
          </div>
        </div>
        )
         }
      </div>
    );
}
export default CreateButton;