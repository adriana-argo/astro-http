<<<<<<< HEAD
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
  const person = {
    name: 'Abel Gonzalez',
    age: 58,
  };

  return new Response(JSON.stringify(person), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
=======


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

>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61
