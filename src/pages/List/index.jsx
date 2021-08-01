import React,{useContext} from 'react';
import {HomeContext} from '../Home/homeContext';

function List(){
    const {testNum,setNum} = useContext(HomeContext);
    return(
        <>
            <h1>List</h1>
            <p>{testNum}</p>
            <button onClick={()=>setNum(testNum+1)}>add</button>
        </>
    )
}
export default List