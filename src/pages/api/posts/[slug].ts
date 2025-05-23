<<<<<<< HEAD
import type { APIRoute, GetStaticPaths } from 'astro';
=======

import type {APIRoute, GetStaticPaths}  from 'astro';
>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61
import { getEntry } from 'astro:content';

export const prerender = false;

<<<<<<< HEAD
export const GET: APIRoute = async ({ params, request }) => {
  const { slug } = params;

  const post = await getEntry('blog', slug as any);

  if (!post) {
    return new Response(JSON.stringify({ msg: `Post ${slug} not found` }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();

  return new Response(
    JSON.stringify({
      method: 'POST',
      ...body,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

export const PUT: APIRoute = async ({ params, request }) => {
  const body = await request.json();

  return new Response(
    JSON.stringify({
      method: 'PUT',
      ...body,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

export const PATCH: APIRoute = async ({ params, request }) => {
  const body = await request.json();

  return new Response(
    JSON.stringify({
      method: 'PATCH',
      ...body,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

export const DELETE: APIRoute = async ({ params, request }) => {
  const { slug } = params;

  return new Response(
    JSON.stringify({
      method: 'DELETE',
      slug: slug,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   return [
//     {
//       params: { slug: 'first-post' },
//     },
//   ];
// };
=======
export const GET: APIRoute = async ({ params, request})=>{

    const {slug} = params;
    const post = await getEntry('blog', slug as any);
  
    if(post){

        return new Response(JSON.stringify(post), {
            status: 200,
        headers:{
            'Content-Type': 'application/json',
        }
        });
    } 

        return new Response(JSON.stringify(`${slug} not found`), {status: 400});

};

export const POST: APIRoute = async ({ params, request})=>{

    const body = await request.json()

    return new Response(JSON.stringify(body), {
        status: 200,
    headers:{
        'Content-Type': 'application/json',
    }
    });
} 
export const PUT: APIRoute = async ({ params, request})=>{

    const body = await request.json()

    return new Response(JSON.stringify(
        {
            method: 'PUT',
            ...body
        }
    ), {
       
        status: 200,
    headers:{
        'Content-Type': 'application/json',
    }
    });
} 
export const DELETE: APIRoute = async ({ params, request})=>{

    const body = await request.json()
    const {slug} = params;

    return new Response(JSON.stringify({
        method: 'DELETE',
        slug:slug
    }), {
        status: 200,
    headers:{
        'Content-Type': 'application/json',
    }
    });
} 
// export const getStaticPaths:GetStaticPaths = async()=>{

//     return [{
//         params: {slug: 'first-post'}
//     }]
// }
>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61
