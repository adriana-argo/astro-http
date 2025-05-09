

import type {APIRoute}  from 'astro';
// interface  Person {
//     name: string;

// }
export const GET: APIRoute = async ({ params, request})=>{

    const person  ={
        name: 'Abel Gonzalez',
        age: 38,
    }


    return new Response( JSON.stringify(person),{
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    } );
}

