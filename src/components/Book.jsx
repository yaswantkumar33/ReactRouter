// import React from 'react'
// import { useOutletContext, useParams } from 'react-router-dom'

// export default function Book() {
//     const allparams = useParams();
//     console.log(allparams)
//     const { id } = useParams();
//     const obj = useOutletContext();
//     return (
//         <div><h3>Book{id}</h3><p>{obj.hello}</p></div>
//     )
// }

import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

export default function Book() {
    const { id } = useParams();
    const obj = useOutletContext();
    return (
        <div>
            <h3>Book {id}/{obj.hello}</h3>
        </div>
    );
}
