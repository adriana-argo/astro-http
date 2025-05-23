<<<<<<< HEAD
import type { APIRoute } from 'astro';
import { db, Clients, eq } from 'astro:db';

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const clientId = params.clientId ?? '';

  const clients = await db
    .select()
    .from(Clients)
    .where(eq(Clients.id, +clientId));

  if (clients.length === 0) {
    return new Response(
      JSON.stringify({ msg: `Client with id ${clientId} not found` }),
      {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  return new Response(JSON.stringify(clients.at(0)), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const PATCH: APIRoute = async ({ params, request }) => {
  const clientId = params.clientId ?? '';

  try {
    const { id, ...body } = await request.json();

    const results = await db
      .update(Clients)
      .set(body)
      .where(eq(Clients.id, +clientId));

    const updatedClient = await db
      .select()
      .from(Clients)
      .where(eq(Clients.id, +clientId));

    return new Response(JSON.stringify(updatedClient.at(0)), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
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

export const DELETE: APIRoute = async ({ params, request }) => {
  const clientId = params.clientId ?? '';

  const { rowsAffected } = await db
    .delete(Clients)
    .where(eq(Clients.id, +clientId));

  if (rowsAffected > 0) {
    return new Response(JSON.stringify({ msg: 'Deleted' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(
    JSON.stringify({ msg: `Client with id ${clientId} not found` }),
    {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
=======

import type {APIRoute, GetStaticPaths}  from 'astro';
import { db, Clients, eq } from 'astro:db';


export const prerender = false;

// export const GET: APIRoute = async ({ params, request})=>{
//     const clientId = params.clientID;

   
//     const body ={
//     method: 'GET',
//     msg: 'Hola Abel',
//     clientId
// }   
//         return new Response(JSON.stringify(body), {
//             status: 200,
//         headers:{
//             'Content-Type': 'application/json',
//         }
//         });
//     } 


export const POST: APIRoute = async ({ params, request})=>{

        const clientId = params.clientId ?? '';

    const selectUsers = await db.select().from(Clients).where(eq(Clients.id, +clientId));
// console.log(selectUser); //Como devuelve un arreglo[] validamos

if(selectUsers.length === 0){
     return new Response(JSON.stringify({msg: `No user found with id ${clientId}`}), {
           status: 400,
       headers:{
           'Content-Type': 'application/json',
       }
       });
       
}

    return new Response(JSON.stringify(selectUsers.at(0)), {
        status: 200,
    headers:{
        'Content-Type': 'application/json',
    }
    });
} 

export const PATCH: APIRoute = async ({ params, request})=>{
    const clientId = params.clientId ?? '';


   try {
          const {id, ...body} = await request.json();
   
           //update xxx.xxx from Tabla
    const results =  await db.update(Clients).set(body)
        .where(eq(Clients.id, +clientId));
    
    const updateUsers = await db.select().from(Clients).where(eq(Clients.id, +clientId));

        //    console.log(updateUsers);
           
           return new Response(
            JSON.stringify(updateUsers.at(0)),
            {
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

}

export const DELETE: APIRoute = async ({ params, request})=>{

    const clientId = params.clientId ?? '';
// const results = await db.delete(Clients).where(eq(Clients.id, +clientId))
// console.log(results);
const {rowsAffected} = await db.delete(Clients).where(eq(Clients.id, +clientId))
   
if(rowsAffected > 0 ){

    return new Response(JSON.stringify({msg: `Item Deleted, ${clientId}`}), {
        status: 200,
    headers:{
        'Content-Type': 'application/json',
    }
    });
}
return new Response(JSON.stringify({msg: `Client with id ${clientId} not found` }), {
        status: 404,
    headers:{
        'Content-Type': 'application/json',
    }
    });
    } 
>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61
