import React, { useContext,memo } from 'react';
import {GlobalContext} from '../Home/global-context';

const List = ()=>{
    const {count,setCount} = useContext(GlobalContext);
    console.log(count)
    return (
        <div>
            <p>list页面</p>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>add</button>
        </div>
    )
}
export default memo(List);