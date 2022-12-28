import React from 'react'
import FunCom from '../pages/FunCom';
// import ClassCom from '../pages/ClassCom';

const BaseHoc= ()=>  

    (ClassCom) =>
    ({ ...props})=>
    {
        return (
            <>
                <h1>this is navbar</h1>
                <ClassCom { ...props} />
                <h2>this is footer</h2>
                <FunCom />
            </>
        )
    };

    export default BaseHoc;
