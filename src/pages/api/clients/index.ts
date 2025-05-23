<<<<<<< HEAD
import type { APIRoute } from 'astro';
=======

import type {APIRoute}  from 'astro';
>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61
import { Clients, db } from 'astro:db';

export const prerender = false;

<<<<<<< HEAD
export const GET: APIRoute = async ({ params, request }) => {
  // Select * from clients
  const users = await db.select().from(Clients);

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const { id, ...body } = await request.json();

    const { lastInsertRowid } = await db.insert(Clients).values(body);

    return new Response(
      JSON.stringify({
        id: +lastInsertRowid!.toString(),
        ...body,
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.log(error);

    return new Response(JSON.stringify({ msg: 'No body found' }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
=======
export const GET: APIRoute = async ({ params, request})=>{
   
// const body ={
//     method: 'GET',
//     msg: 'Hola Abel'
// }

const users = await db.select().from(Clients);
 
     return new Response(JSON.stringify({users}),{
        status: 200,
         headers:{
        'Content-Type': 'application/json'}
     } )
       
   
 }

 export const POST: APIRoute = async ({ params, request})=>{

    try {
        const {id, ...body} = await request.json();

    const {lastInsertRowid} =  await db.insert(Clients).values({
            ...body
        })
        console.log(lastInsertRowid);
        
        return new Response(JSON.stringify({
            id: +lastInsertRowid!.toString(),
            ...body
        }), {
        status: 201,
    headers:{
        'Content-Type': 'application/json',
    }
    });
    } catch (error) {
         return new Response(JSON.stringify({msg: 'No body found'}), {
        status: 400,
    headers:{
        'Content-Type': 'application/json',
    }
    });
    }
//  const body = await request.json();

//     const body ={
//     method: 'POST',
//     msg: 'Hola Abel'
// }

    
} 
>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61
