import React, { useState } from 'react'
// import BaseHoc from '../hoc/BaseHoc';

function FunCom(props) {
    const [count,setCount]=useState(0);
    // const [name,setName]=useState("DevTown");
    // desturaecting of objects 
    const {name,setName} = props;
    const [changeName,setChangeName]=useState();
  return (
    <>
    <div>FunCom</div>
    <br />
    <button onClick={()=>setCount(count+1)}>click on this  for increase</button>
    <button onClick={()=>setCount(count-1)}>click on this  for reduce </button>
    {/* <button onClick={()=>setName("Rahul")}>click on this </button> */}
    
    <p>{count}</p>
    {/* <p>{name} </p> */}
    {/* <p>MY NAME IS {name}</p> */}
    <h2>my name is {name}</h2>
    <button onClick = {()=> setName(changeName)}>click for dynamic change name </button>
    <input onChange={(e)=>setChangeName(e.target.value)} /> 
    {/* it is used for dynamic change */}

     </>
  )
};

export default FunCom;