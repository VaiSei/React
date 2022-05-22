/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Card from "./PostCard";

function PostList({posts}) {
    return (
        <div css={css`
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        @media(max-width:990px){
            justify-content:center;
        }
        
      `}
        >
        {posts.map((item)=> 
            (<Card key={item.id} data={item}/> 
        )) }
        </div>
    );
}
export default PostList;