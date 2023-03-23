//Counter with functional component

import React, { useEffect, useState } from 'react';

export function Counter() {

    const [count, setCount] = useState(0); //Phase-1(a): Mounting - Initalization

    //useLayoutEffect is the strictly replacement of componentDidUpdate, but in most cases useEffect

    useEffect(() => {

        let counter = setInterval(() => {
            setCount(prevCounter => prevCounter + 1);
        }, 1000);

        return () => clearInterval(counter); // phase: 3 - unmounting - - It's done only once which is the last phase - It means death of the component. The component is being removed from the dom. 

    }, [count]) // phase: 2 - updating - It's done many more times starting after the mounting phase and before going to the unmounting phase. It's a growing phase

    return (
        //Phase-1(b): Mounting - Render - It's rendering which is used to display the actual output to the dom
        <h2>
            {
                "Functional Component - " + count
            }
        </h2>
    )
}